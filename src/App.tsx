import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import TextCard from "./components/Textcard";
import CardSell from "./components/CardSell";

function App() {
  const [hasMenuOpen, setHasMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      if (hasMenuOpen) {
        setHasMenuOpen(false);
      }
    }
  };

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
                <a
                  href="#sobre"
                  className="hover:text-greenlanding-400"
                  onClick={() => handleScrollTo("sobre")}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-greenlanding-400"
                  onClick={() => handleScrollTo("servicos")}
                >
                  E-book
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-greenlanding-400"
                  onClick={() => handleScrollTo("contato")}
                >
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
                  onClick={() => handleScrollTo("sobre")}
                >
                  Sobre
                </a>
                <a
                  href="#servicos"
                  className="hover:text-greenlanding-400"
                  onClick={() => handleScrollTo("servicos")}
                >
                  E-book
                </a>
                <a
                  href="#contato"
                  className="hover:text-greenlanding-400"
                  onClick={() => handleScrollTo("contato")}
                >
                  Contato
                </a>
              </div>
            )}
          </div>
        </nav>
      </header>

      <section className="bg-gradient-to-r from-greenlanding-300 via-greenlanding-500 to-greenlanding-400 h-full w-full relative">
        <section className="py-10 sm:py-16 lg:py-24" id="sobre">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
              className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 xs:mt-12
            
            "
            >
              <div>
                <div className="flex items-center justify-center w-full h-14 rounded-full bg-greenlanding-400 uppercase text-white font-semibold text-lg sm:text-xl lg:text-2xl tracking-widest my-4 sm:my-10">
                  NUTRICIONISTA INFANTIL
                </div>

                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-greenlanding-900 xs:text-center md:text-left sm:text-left xs:text-2xl 
                
                "
                >
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

                <div
                  className="mt-10 flex flex-col md:items-start md:justify-start"
                  id="contato"
                >
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
              className="absolute bottom-[-20vh] left-[10%] right-0 w-[50vw] h-auto max-w-[270px] max-h-[144px] melancia"
            />
          </div>

          <div className="flex items-center justify-center flex-col px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h5 className="text-base  font-semibold text-greenlanding-900 xs:text-center md:text-center sm:text-center">
              Compreendendo e Lidando com a Recusa de Alimentos
            </h5>
            <h2
              className="text-6xl font-bold text-white xs:text-center md:text-center sm:text-center xs:text-5xl
            
            "
            >
              Seletividade Alimentar
            </h2>

            <p
              className="mt-8 text-lg text-white text-wrap text-center max-w-3xl xs:text-justify sm:text-justify md:text-justify lg:text-center
            
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
              alt="banana nutricionista"
              className="absolute bottom-[-50px] right-[15%] w-[240.6px] h-[283.9px] max-w-[240.6px] max-h-[283.9px] 
             xs:bottom-[-30px] xs:right-[10%] 
             sm:bottom-[-40px] sm:right-[12%] 
             md:bottom-[-50px] md:right-[15%] banana"
            />
          </div>

          <div className="flex items-start justify-center flex-col px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h5 className="text-3xl  font-semibold text-greenlanding-900  xs:text-center">
              Descubra se seu filho está passando por isso.
            </h5>
          </div>

          {/* create grid 3 cols */}

          <div
            className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:grip-cols-1 lg:grid-cols-3
          "
          >
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
        </section>
      </section>

      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24" id="servicos">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className=" mx-auto text-center">
            <div className="flex items-start justify-center flex-col ">
              <h5
                className="text-2xl  font-semibold text-greenlanding-800 text-center
             "
              >
                A seletividade alimentar pode ser um desafio, mas é possível
                superá-la. Com nossos E-books, você terá acesso a informações
                valiosas e dicas práticas para lidar com a recusa de alimentos e
                promover uma alimentação saudável e equilibrada para seu filho.
              </h5>
            </div>
          </div>

          <div className="grid  grid-cols-1 gap-6 mx-auto sm:grid-cols-3 mt-14 md:gap-9">
            <CardSell
              imageURL={{
                src: "/livro-seletividade.png",
                alt: "E-book Seletividade Alimentar",
              }}
              description={`Este e-book oferece uma abordagem prática e compreensiva para entender e manejar a seletividade alimentar, um desafio comum que afeta muitas famílias. É essencial para pais, cuidadores e profissionais da saúde que lidam com crianças seletivas.`}
              price={39.99}
              benefits={[
                { name: "Introdução à Seletividade Alimentar", included: true },
                { name: "Fatores Sensoriais", included: true },
                { name: "Estratégias Alimentares", included: true },
                { name: "Recursos Nutricionais", included: true },
                { name: "Receitas Inclusivas", included: true },
                { name: "Montagem de uma lancheira", included: true },
              ]}
              buttonText="Comprar"
            />

            <CardSell
              imageURL={{
                src: "/livro-introducao.png",
                alt: "E-book Introdução Alimentar",
              }}
              description={`Este e-book é essencial para pais e cuidadores que desejam garantir uma alimentação saudável e equilibrada desde os primeiros meses de vida. Com orientação claras e práticas, voce estará preparado para proporcionar uma experiencia alimentar positiva e nutritiva para seu bebê.`}
              price={39.99}
              benefits={[
                { name: "Introdução Alimentar", included: true },
                { name: "Evolução das Texturas", included: true },
                { name: "Frutas na Introdução Alimentar", included: true },

                { name: "Método BLW", included: true },
                { name: "Cortes Seguros", included: true },
                { name: "Receitas Nutricionais", included: true },
              ]}
              buttonText="Comprar"
              color="red"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
