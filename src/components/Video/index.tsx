import { useGetLessonBySlugQuery } from '../../graphql/generated';
import { DefaultUi, Player, Youtube } from '@vime/react';
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from 'phosphor-react';

import styles from './Video.module.css';
import cx from 'classnames';
import '@vime/core/themes/default.css';


interface VideoProps {
  lessonSlug: string;
}

export const Video = ({ lessonSlug }: VideoProps) => {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className={styles.container}>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.video}>
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <article className={styles.info}>
        <header className={styles.info_header}>
          <div className={styles.info_container}>
            <h1 className={styles.video_title}>{data.lesson.title}</h1>
            <p className={styles.video_description}>
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className={styles.creator}>
                <img
                  className={styles.creator_avatar}
                  src={data.lesson.teacher.avatarURL}
                  alt={`Avatar do professor ${data.lesson.teacher.name}`}
                />

                <div className={styles.creator_content}>
                  <strong className={styles.creator_name}>
                    {data.lesson.teacher.name}
                  </strong>
                  <span className={styles.creator_bio}>
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className={styles.ctas_container}>
            <a
              className={cx(styles.cta, styles.community_cta)}
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              className={cx(styles.cta, styles.challenge_cta)}
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </header>

        <footer className={styles.complementary}>
          <a
            href="#"
            className={styles.complementary_item}
          >
            <div className={styles.complementary_icon}>
              <FileArrowDown size={40} />
            </div>
            <div className={styles.complementary_content}>
              <strong className={styles.complementary_title}>Material complementar</strong>
              <p className={styles.complementary_description}>
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className={styles.complementary_cta}>
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="#"
            className={styles.complementary_item}
          >
            <div className={styles.complementary_icon}>
              <FileArrowDown size={40} />
            </div>
            <div className={styles.complementary_content}>
              <strong className={styles.complementary_title}>Wallpapers exclusivos</strong>
              <p className={styles.complementary_description}>
                Baixe wallpapers exclusivos do Ignite Lab e personalize sua
                máquina
              </p>
            </div>
            <div className={styles.complementary_cta}>
              <CaretRight size={24} />
            </div>
          </a>
        </footer>
      </article>
    </section>
  );
};
