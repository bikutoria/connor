import Link from 'next/link';
import Image from 'next/image';

const AppCard = ({ app }) => {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <Link href={`/apps/${app.ID}`}>
        <div style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
          <Image src={app.Logo} alt={`${app['App Name']} Logo`} width={200} height={100} layout="responsive" />
          <h3>{app['App Name']}</h3>
          <p>{app['App Description']}</p>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;