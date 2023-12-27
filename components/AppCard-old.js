import Link from 'next/link';
import Image from 'next/image';
import styles from './AppCard.module.css'; // Import the CSS module
// For XP
import "xp.css/dist/XP.css";
// For 98
//import "xp.css/dist/98.css";

const AppCard = ({ app }) => {
  return (
    <div className={styles.card} class="window">
      <Link href={`/apps/${app.ID}`}>
        <div class="title-bar">
          <div class="title-bar-text">{app['App Name']}</div>
          <div class="title-bar-controls">
              <button aria-label="Help"></button>
              <button aria-label="Close"></button>
            </div>        
        </div>
        <div class="window-body">
          <Image src={app.Logo} alt={`${app['App Name']} Logo`} width={100} height={100} layout="responsive" />
          <p>{app['App Name']}</p>
          <p>{app['App Description']}</p>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;