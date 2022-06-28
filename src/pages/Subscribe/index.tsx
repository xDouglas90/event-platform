import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../components';
import { useCreateSubscriberMutation } from '../../graphql/generated';

import styles from './Subscribe.module.css';

export const Subscribe = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  };

  return (
    <section className={styles.container}>
      <article className={styles.content}>
        <div className={styles.welcome}>
          <Logo />

          <h1 className={styles.welcome_title}>
            Construa uma{' '}
            <strong className={styles.welcome_highlight}>aplicação completa</strong>, do
            zero, com <strong className={styles.welcome_highlight}>React</strong>
          </h1>

          <p className={styles.welcome_description}>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className={styles.subscribe}>
          <strong className={styles.subscribe_title}>
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className={styles.subscribe_form}
          >
            <input
              className={styles.subscribe_input}
              type="text"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
            />
            <input
              className={styles.subscribe_input}
              type="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
            />

            <button
              className={styles.subscribe_submit}
              type="submit"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </article>

      <img
        src="/src/assets/code-mockup.png"
        className={styles.image}
        alt="Imagem de uma tela do Visual Studio Code, contendo alguns códigos de programação e em realce, três caixas, sendo uma com ícones simulando uma aplicação de gravação de tela, uma com o logo do React e outra com figuras geométricas simulando um card de perfil de usuário"
      />
    </section>
  );
};
