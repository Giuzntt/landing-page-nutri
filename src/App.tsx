import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import TextCard from "./components/Textcard";

function App() {
  const [hasMenuOpen, setHasMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50  bg-greenlanding-600  shadow-md`}
      >
        <nav className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>
            <img
              className="w-48"
              src="/logo-nutricionista.png"
              alt="Logotipo Nutricionista Beatriz de Lima Siqueira"
            />
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center space-x-8 text-white">
              <li>
                <a href="#sobre" className="hover:text-greenlanding-400">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-greenlanding-400">
                  E-book
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-greenlanding-400">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setHasMenuOpen(!hasMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {hasMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>

            {hasMenuOpen && (
              <div className="fixed top-14 left-0 right-0 bg-greenlanding-700 flex flex-col items-center py-4 space-y-4 text-white">
                <a
                  href="#sobre"
                  className="hover:text-greenlanding-400"
                  onClick={() => setHasMenuOpen(false)}
                >
                  Sobre
                </a>
                <a
                  href="#servicos"
                  className="hover:text-greenlanding-400"
                  onClick={() => setHasMenuOpen(false)}
                >
                  E-book
                </a>
                <a
                  href="#contato"
                  className="hover:text-greenlanding-400"
                  onClick={() => setHasMenuOpen(false)}
                >
                  Contato
                </a>
              </div>
            )}
          </div>
        </nav>
      </header>

      <section className="bg-gradient-to-r from-greenlanding-300 via-greenlanding-500 to-greenlanding-400 h-full w-full relative">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <div className="flex items-center justify-center w-full h-14 rounded-full bg-greenlanding-400 uppercase text-white font-semibold text-lg sm:text-xl lg:text-2xl tracking-widest my-4 sm:my-10">
                  NUTRICIONISTA INFANTIL
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-greenlanding-900">
                  Beatriz de Lima Siqueira
                </h1>

                <p className="mt-8 text-base sm:text-lg lg:text-xl text-white text-justify">
                  Beatriz é nutricionista clínica e infantil com mais de 4 anos
                  de experiência. Especializada em Seletividade Alimentar, com
                  foco em crianças típicas e atípicas, utiliza ciência ABA
                  (Análise do Comportamento Aplicada) em suas terapias. Com
                  incentivo e exemplo de sua mãe, Andrea, fonoaudióloga, Beatriz
                  tem o objetivo de promover a alimentação saudável desde a
                  infância, contribuindo para a disseminação de conhecimento e
                  melhorando a saúde das crianças.
                </p>

                <div className="mt-10 flex flex-col md:items-start md:justify-start">
                  <a
                    href="https://www.instagram.com/nutri.biasl12"
                    className="flex items-center mb-4 sm:mb-0 sm:mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="mr-2 text-white text-2xl" />
                    <p className="text-greenlanding-900 text-lg sm:text-xl">
                      nutri.biasl12
                    </p>
                  </a>

                  <a
                    href="https://wa.me/5564981126558"
                    className="flex items-center"
                  >
                    <FaWhatsapp className="mr-2 text-white text-2xl" />
                    <p className="text-greenlanding-900 text-lg sm:text-xl">
                      (64) 98112-6558
                    </p>
                  </a>
                </div>
              </div>

              <div>
                <img
                  className="w-full rounded-lg shadow-lg"
                  src="/nutri_foto.png"
                  alt="Foto Nutricionista Clinica e Infantil Beatriz de Lima Siqueira"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-10 sm:py-16 lg:py-24 relative">
          <div className="relative">
            <img
              src="/melancia.webp"
              alt="melancia nutricionista"
              className="absolute bottom-[-50px] left-[15%] right-0  w-[270.1px] h-[144.1px]"
            />
          </div>

          <div className="flex items-center justify-center flex-col px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h5 className="text-base  font-semibold text-greenlanding-900">
              Compreendendo e Lidando com a Recusa de Alimentos
            </h5>
            <h2 className="text-6xl font-bold text-white">
              Seletividade Alimentar
            </h2>

            <p
              className="mt-8 text-lg text-white text-wrap text-center max-w-3xl
            
            "
            >
              É um comportamento onde crianças recusam certos alimentos ou
              grupos de alimentos, mesmo quando há opções variadas disponíveis.
              Essa recusa pode estar ligada a fatores sensoriais, como texturas
              e sabores, psicológicos, ou experiências passadas com alimentos.
              Crianças com seletividade alimentar frequentemente evitam
              alimentos novos ou desconhecidos.
            </p>

            <div className="flex items-center justify-center flex-col px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <img
                src="/seta.png"
                alt="seletividade alimentar"
                className="w-24 h-24 rotate-90 my-8"
              />
            </div>
          </div>

          <div className="relative">
            <img
              src="/banana.png"
              alt="melancia nutricionista"
              className="absolute bottom-[-50px] right-[15%]  w-[240.6px] h-[283.9px]"
            />
          </div>

          <div className="flex items-start justify-center flex-col px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h5 className="text-3xl  font-semibold text-greenlanding-900 ">
              Descubra se seu filho está passando por isso.
            </h5>
          </div>

          {/* create grid 3 cols */}

          <div className="grid grid-cols-3 gap-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-center flex-col gap-5 my-4">
              <TextCard
                subtitle="Criança que só come alimentos brancos"
                title="Alimentação Monocromática"
                text="Algumas crianças demonstram seletividade alimentar ao preferirem apenas alimentos de cor branca, como arroz, pão e macarrão sem molho. Essa preferência pode estar ligada à familiaridade e conforto com a aparência desses alimentos, tornando-os mais aceitáveis e menos ameaçadores."
              />

              <TextCard
                subtitle="Textura como Fator Decisivo"
                title="Preferência por texturas crocantes"
                text="Crianças com seletividade alimentar podem preferir alimentos com texturas crocantes, como batata frita, enquanto evitam opções mais macias, como purê de batata. A crocância pode proporcionar uma sensação de satisfação sensorial que texturas mais suaves não oferecem."
              />
            </div>

            <div className="flex items-center justify-center flex-col">
              <img
                src="/crianca-seletiva.webp"
                alt="criança comendo"
                className="w-full "
              />
            </div>

            <div className="flex items-center justify-center flex-col gap-5 my-4">
              <div className="flex items-center justify-center flex-col gap-5 my-4">
                <TextCard
                  subtitle="Rejeição de alimentos com cheiro forte"
                  title="Sensibilidade Olfativa"
                  text="Crianças seletivas frequentemente rejeitam alimentos com odores intensos, como peixes e queijos. A sensibilidade olfativa pode ser um fator crucial, fazendo com que alimentos com cheiros fortes sejam percebidos como repulsivos ou aversivos."
                />
                <TextCard
                  subtitle=" Separação de Sabores e Texturas"
                  title="Aversão a alimentos misturados"
                  text="A aversão a alimentos misturados é comum em crianças seletivas, que preferem que cada tipo de alimento esteja separado no prato. Essa necessidade de separação pode ser uma maneira de controlar a ingestão e evitar combinações de sabores e texturas que consideram desagradáveis."
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <img
              src="/seta.png"
              alt="seletividade alimentar"
              className="w-24 h-24 rotate-90 my-8"
            />
          </div>

          <div className="flex items-start justify-center flex-col px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h5 className="text-3xl  font-semibold text-white ">
              A seletividade alimentar pode ser um desafio, mas é possível
              superá-la. Com nossos E-books, você terá acesso a informações
              valiosas e dicas práticas para lidar com a recusa de alimentos e
              promover uma alimentação saudável e equilibrada para seu filho.
            </h5>
          </div>

          <div className="grid grid-cols-2 gap-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 my-14 place-items-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
              <img
                className="w-full"
                src="/livro-introducao.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-greenlanding-700">
                  Introdução Alimentar
                </div>
                <p className="text-gray-700 text-base text-justify">
                  Descubra como introduzir alimentos de forma segura e saudável
                  para seu bebê.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-end ">
                <span className="inline-block bg-greenlanding-500 rounded-lg px-3 py-4 text-sm font-semibold text-white mr-2 mb-2">
                  Quero saber mais
                </span>
              </div>
            </div>

            <div
              className="max-w-sm rounded overflow-hidden shadow-lg
              bg-white 
            "
            >
              <img
                className="w-full"
                src="/livro-seletividade.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-greenlanding-700">
                  Selevidade Alimentar
                </div>
                <p className="text-gray-700 text-base text-justify">
                  Aprenda a lidar com a recusa de alimentos e promova uma
                  alimentação saudável para seu filho.
                </p>
              </div>
              <div
                className="px-6 pt-4 pb-2
              
                flex justify-end "
              >
                <span className="inline-block bg-greenlanding-500 rounded-lg px-3 py-4 text-sm font-semibold text-white mr-2 mb-2">
                  Quero saber mais
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
