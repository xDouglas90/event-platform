import { DefaultUi, Player, Youtube } from '@vime/react';
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from 'phosphor-react';

import '@vime/core/themes/default.css';

export const Video = () => {
  return (
    <section className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId='SO4-izct7Mc' />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <article className="p-8 max-w-[1100px] mx-auto">
        <header className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Abertura Ignite Lab - ReactJS
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Participe da abertura do Ignite Lab e descubra na prática a
              biblioteca JavaScript utilizada por grandes empresas na construção
              de interfaces web. E vamos juntos, nessa semana, acelerar sua
              evolução na programação 🚀
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/diego3g.png"
                alt="Avatar do professor"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Diego Fernandes
                </strong>
                <span className="text-gray-200 text-sm block">
                  CTO at @Rocketseat. Passionate about education and changing
                  people's lives through programming.
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </header>

        <footer className="gap-8 mt-20 grid grid-cols-2">
          <a
            href="http://"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="http://"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize sua máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </footer>
      </article>
    </section>
  );
};
