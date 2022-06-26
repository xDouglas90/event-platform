import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

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
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <section className="flex flex-col gap-8">
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
