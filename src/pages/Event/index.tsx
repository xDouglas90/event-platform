import { useParams } from 'react-router-dom';
import { Header, Sidebar, Video } from '../../components';

import styles from './Event.module.css';

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
};
