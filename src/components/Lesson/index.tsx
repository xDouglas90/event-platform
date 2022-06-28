import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, Lock } from 'phosphor-react';

import styles from './Lesson.module.css';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export const Lesson = (props: LessonProps) => {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const isActiveLesson = slug === props.slug;
  
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          `${styles.content}`,
          {
            'bg-green-500': isActiveLesson,
          }
        )}
      >
        <header className={styles.header}>
          {isLessonAvailable ? (
            <span
              className={classNames(
                `${styles.info}`,
                {
                  [`${styles.info_active}`]: isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className={styles.info_blocked}>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(`${styles.type}`,{
                [`${styles.type_active}`]: isActiveLesson
              }
            )}
          >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={classNames(`${styles.title}`, {
            [`${styles.title_active}`]: isActiveLesson
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
