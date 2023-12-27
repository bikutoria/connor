import axios from 'axios';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import AppCard from '../components/AppCard-old';

const HomePage = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios.get('/data/apps.csv').then(response => {
      Papa.parse(response.data, {
        header: true,
        complete: (result) => {
          setApps(result.data);
        }
      });
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {apps.map((app, index) => (
        <AppCard key={index} app={app} />
      ))}
    </div>
  );
};

export default HomePage;
