import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Image from 'next/image';
import styles from './id.module.css'; // Import the CSS module

const AppPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [app, setApp] = useState(null);

  useEffect(() => {
    axios.get('/data/apps.csv').then(response => {
      Papa.parse(response.data, {
        header: true,
        complete: (result) => {
          const foundApp = result.data.find(a => a.ID.toString() === id);
          setApp(foundApp);
        }
      });
    });
  }, [id]);

  if (!app) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.overview}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Side */}
        <div>
          <h1>{app['App Name']}</h1>
          <p>{app['App Description']}</p>
          <p><strong>Industries:</strong> {app.Industries}</p>
          <Image src={app.Logo} alt={`${app['App Name']} Logo`} width={200} height={100} />
        </div>

        {/* Right Side */}
        <div>
          <p><strong>Rating:</strong> {app.Rating}</p>
          <p><strong>Reviews:</strong> {app.Reviews}</p>
          <p><strong>Created by:</strong> {app['Created by']}</p>
          <p><strong>Number of installations:</strong> {app['Number of installations']}</p>
          <p><strong>Date created:</strong> {app['Date created']}</p>
          <p><strong>Last edit date:</strong> {app['Last edit date']}</p>
        </div>
      </div>

      {/* Middle of the Page */}
      <div>
        <p><strong>Prerequisites:</strong> {app.Prerequisites}</p>
        <p><strong>Instructions:</strong> {app.Instructions}</p>
        <p><strong>Reference:</strong> {app.Reference}</p>
        <p><strong>Limitations:</strong> {app.Limitations}</p>
      </div>

      {/* Bottom of the Page */}
      <div>
        <h3>Source JSON Configuration:</h3>
        <pre>{app['Source JSON Configuration']}</pre>
        <h3>IPE:</h3>
        <pre>{app.IPE}</pre>
      </div>
    </div>
  );
};

export default AppPage;
