import { useGetLessonsQuery } from '../../graphql/generated';
import { Lesson } from '../Lesson';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
  const { data } = useGetLessonsQuery();

  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <aside className={styles.container}>
      <span className={styles.title}>
        Cronograma de aulas
      </span>

      <section className={styles.content}>
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </section>
    </aside>
  );
};
