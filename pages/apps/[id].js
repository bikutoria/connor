import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const AppPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [app, setApp] = useState(null);

  useEffect(() => {
    axios.get('/data/apps.csv').then(response => {
      Papa.parse(response.data, {
        header: true,
        complete: (result) => {
          const foundApp = result.data.find(app => app.ID.toString() === id);
          setApp(foundApp);
        }
      });
    });
  }, [id]);

  if (!app) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{app['App Name']}</h1>
      {/* Display other app details here */}
    </div>
  );
};

export default AppPage;
