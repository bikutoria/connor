import Link from 'next/link';
import Image from 'next/image';
import styles from './AppCard.module.css'; // Import the CSS module

const AppCard = ({ app }) => {
  return (
    <div className={styles.card}>
      <Link href={`/apps/${app.ID}`}>
          <Image src={app.Logo} alt={`${app['App Name']} Logo`} width={200} height={100} layout="responsive" />
          <h3>{app['App Name']}</h3>
          <p>{app['App Description']}</p>
      </Link>
    </div>
  );
};

export default AppCard;
