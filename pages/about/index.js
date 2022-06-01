import AboutCard from "@/components/about/about-card";
import Image from "node_modules/next/image";
import { useState } from "react";
import AcademicCard from "@/components/about/about-academic";
import SkillAbout from "@/components/about/about-skills";
import AboutPortfolioCard from "@/components/about/about-portfolio";
import { FaUniversity } from "react-icons/fa";
import { GiAncientSword, GiBrazilFlag, GiUsaFlag } from "react-icons/gi";
import { IoLanguageSharp } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import {
  DiNodejsSmall,
  DiRust,
  DiJavascript,
  DiReact,
  DiPython,
  DiMongodb,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiDjango,
  SiNextdotjs,
  SiGatsby,
  SiKeras,
  SiGithub,
  SiGmail,
} from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";

function AboutPage() {
  const [mouseOverGraduation, setMouseOverGraduation] = useState(false);
  const [mouseOverPostGraduation, setMouseOverPostGraduation] = useState(false);

  return (
    <div
      className="container mx-auto p-5 w-full
    bg-gradient-to-r 
    from-cyan-200
    via-cyan-900
    to-indigo-500
    "
    >
      <AboutCard className="CardCabecalho">
        <div className="grid">
          <img
            src="/about/MyImage.jpg"
            width={300}
            height={300}
            className="rounded-full px-4 py-4
             place-self-center 
             drop-shadow-[0_35px_35px_rgba(0,0,0,0.50)]
             "
          />
        </div>
        <div className=" flex-1 pl-4 align-middle py-11 pr-8">
          <h1 className="text-white text-right  text-xl font-bold">
            Max Fukui Tieti
          </h1>
          <p className="text-white text-justify font-serif font-extralight
          bg-zinc-900 p-4 rounded-lg
          ">
            {" "}
            Olá! Me descreveria como um desenvolvedor assíduo e curioso. Comecei
            a programar em 2014 como um hobbie e, aos poucos, foi se tornando
            meu ofício. Foquei minhas pesquisas para o estado da arte na
            tecnologia, sempre tentando trazer o que há de mais interessante ao
            meu workflow. Nesse momento busco melhorar minhas habilidades em
            desenvolvimento web e em aplicações relacionadas a machine learning.{" "}
          </p>
        </div>
      </AboutCard>

      <AboutCard>
        <div className="flex flex-col px-2 items-stretch text-white w-full">
          <span className="flex flex-row p-2 text-lg font-extrabold">
            <FaUniversity className="mt-1" />
            <h2 className="pl-2">Acadêmico</h2>
          </span>
          <h2 className="p-2 text-lg font-bold">Graduação</h2>
          <ul
            className="Graduacao  w-full flex"
            onMouseOver={() => setMouseOverGraduation(true)}
            onMouseLeave={() => {
              setMouseOverGraduation(false);
            }}
          >
            <AcademicCard
              graduation={"Arquitetura e Urbanismo"}
              dataTermino="2021.2"
              stateMouse={mouseOverGraduation}
              faculdade="UCDB - Univerdade Católica Dom Bosco"
            />
            <AcademicCard
              graduation={"Análise e Desenvolvimento de Sistemas"}
              faculdade="Universidade Claretiano"
              dataTermino="2017.2"
              stateMouse={mouseOverGraduation}
            />
          </ul>
          <h2 className="p-2 text-lg font-bold">Pós-Graduação</h2>
          <ul
            className="PosGraduacao w-full flex flex-wrap"
            onMouseOver={() => setMouseOverPostGraduation(true)}
            onMouseLeave={() => {
              setMouseOverPostGraduation(false);
            }}
          >
            <AcademicCard
              graduation={"MBA em Matemática Aplicada"}
              faculdade="Universidade Unyleya"
              dataTermino="2020.2"
              stateMouse={mouseOverPostGraduation}
            />
            <AcademicCard
              graduation={"MBA em Engenheiro Machine Learning"}
              faculdade="Instituto de gestão e tecnologia da informação (IGTI)"
              dataTermino="2020.2"
              stateMouse={mouseOverPostGraduation}
            />
            <AcademicCard
              graduation={"MBA em Cientista de Dados"}
              faculdade="Instituto de gestão e tecnologia da informação (IGTI)"
              dataTermino="2022.1"
              stateMouse={mouseOverPostGraduation}
            />
            <AcademicCard
              graduation={"MBA em Desenvolvedor FullStack"}
              faculdade="Instituto de gestão e tecnologia da informação (IGTI)"
              dataTermino="Em andamento..."
              stateMouse={mouseOverPostGraduation}
            />
          </ul>
        </div>
      </AboutCard>

      <AboutCard>
        <div className="flex flex-row w-full flex-wrap">
          <div className="grow pr-3">
            <div className="flex flex-row pl-2 text-white">
              <IoLanguageSharp className="text-2xl font-bold mt-1" />
              <h2 className="ml-2 font-bold text-lg">Idiomas que falo</h2>
            </div>
            <div
              className="flex flex-col text-white m-2 rounded-lg 
            bg-zinc-900 w-full p-3"
            >
              <h2>
                Português: <strong>Nativo</strong>
              </h2>
              <h2>
                Inglês: <strong>Fluente</strong> (Fala bem; Escreve bem; Lê bem)
              </h2>
              <h2>Alemão: Básico</h2>
            </div>
          </div>
          <div className="grow pr-3">
            <div className="flex flex-row pl-2 text-white">
              <AiOutlineHeart className="text-2xl font-bold mt-1" />
              <h2 className="ml-2 font-bold text-lg">
                Áreas preferidas de atuação
              </h2>
            </div>
            <div className="flex flex-col text-white m-2 rounded-lg bg-zinc-900 w-full p-3">
              <h2>Desenvolvimento Web (Frontend/Backend)</h2>
              <h2>Desenvolvimento em Machine Learning</h2>
              <h2>Ciência de dados</h2>
            </div>
          </div>
        </div>
      </AboutCard>

      <AboutCard>
        <div className="flex flex-col pl-2">
          <div className="flex flex-row">
            <GiAncientSword className="text-xl text-white" />
            <h2 className="font-bold text-left text-white pb-2">
              Gosto de trabalhar com{" "}
            </h2>
          </div>
          <div className="Habilidades">
            <div className="flex flex-wrap content-center justify-center">
              <SkillAbout
                porcentagem={80}
                skill="NodeJs"
                forWhat={"Desenvolvimento Web"}
              >
                <DiNodejsSmall className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout
                porcentagem={80}
                skill="Rust"
                forWhat={
                  "Linguagem de programação com alta otimização de recursos"
                }
              >
                <DiRust className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout
                porcentagem={80}
                skill="JavaScript"
                forWhat={"Desenvolvimento Web"}
              >
                <DiJavascript className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout
                porcentagem={80}
                skill="React"
                forWhat={"Ótimo para otimização e reutilização de componentes"}
              >
                <DiReact className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout
                porcentagem={80}
                skill="Python"
                forWhat={"Linguagem de Programação Geral"}
              >
                <DiPython className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout
                porcentagem={80}
                skill="TailwindCss"
                forWhat={"Uma nova forma de usar styles"}
              >
                <SiTailwindcss className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout
                porcentagem={80}
                skill="Django"
                forWhat={"Framework para desenvolvimento de BackEnd"}
              >
                <SiDjango className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout
                porcentagem={80}
                skill="MySql"
                forWhat={"Banco de dados relacional"}
              >
                <GrMysql className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout
                porcentagem={80}
                skill="MongoDB"
                forWhat={"Banco de dados não relacional Web"}
              >
                <DiMongodb className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout
                porcentagem={80}
                skill="NextJs"
                forWhat={"Desenvolvimento web com renderização server-side"}
              >
                <SiNextdotjs className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout
                porcentagem={70}
                skill="GatsbyJs"
                forWhat={
                  "Desenvolvimento web com renderização estática client-side"
                }
              >
                <SiGatsby className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout
                porcentagem={70}
                skill="Keras"
                forWhat={"Machine learning com alto poder de abstração"}
              >
                <SiKeras className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
            </div>
          </div>
        </div>
      </AboutCard>

      <AboutCard>
        <div className="flex flex-col">
          <div className="ml-2 flex flex-row text-white">
            <SiGithub className="text-lg mt-1" />
            <h2 className="ml-2 font-bold text-lg pb-2">Meus projetos</h2>
          </div>
          <div className="flex flex-col items-stretch">
            <AboutPortfolioCard
              link="https://github.com/MaxFukui/personal-blog-portfolio-react-js"
              title="Blog Nextjs"
              content="Blog pessoal em desenvolvimento. Espaço para compartilhar projetos e trabalhos. Integração ao CSM Strapi"
              tecs="NodeJs, NextJs, ReactJs e Tailwindcss"
              theme="Web Development"
              github="sim"
            />
            <AboutPortfolioCard
              link="https://colab.research.google.com/drive/1v1KSeFTn6PLQUfWdbaE9TmSF7Q1VlZ2Y?usp=sharing"
              title="Criação de imagens com redes neurais artificiais	"
              content="Trabalho utilizado para pós-graduação em Engenheiro Machine Learning. Sendo o trabalho focado em criar uma rede neural capaz de criar imagens de fachadas arquitetônicas"
              tecs="Keras, Python e Pandas"
              theme="Inteligência Artificial"
            />
            <AboutPortfolioCard
              link="https://github.com/MaxFukui/calories_tracking_frontend"
              title="Interface para Food Tracking"
              content="(in development) Interface para o desenvolvimento de uma aplicação foodtracking"
              tecs="NodeJs, ReactJs e SaSS"
              theme="Web Development"
              github="sim"
            />
            <AboutPortfolioCard
              link="https://github.com/MaxFukui/backend-foodtracking-djanog/tree/main"
              title="Backend para Food Tracking"
              content="(in development) CRUD simples utilizado como microsserviço para o food tracking app em desenvolvimento"
              tecs="Python, Django"
              theme="Web Development"
              github="sim"
            />

            <AboutPortfolioCard
              link="https://github.com/maxcorbux/Cartografia"
              title="Backend para Plaforma cultural do MS"
              content="Desenvovlimento de um Backend para um trabalho voluntário envolvendo o mapeamento da cultural da cidade. Foi realizado um backend com autenticação, resolução de coordenadas geográficas; além disso, um sistema CRUD para armazenamento de dados e conexão com um bando relacional.
              saiba mais em: https://www.mapacultural.ms.gov.br
              "
              tecs="Express, Nodejs"
              theme="Web Development"
              github="sim"
            />
          </div>
        </div>
      </AboutCard>

      <AboutCard>
        <div className="flex flex-col text-white">
          <h2>Contato</h2>
          <div
            className="bg-zinc-800 rounded-lg flex flex-row p-2 m-1
          transition duration-150 ease-out
          hover:bg-cyan-500
          "
          >
            <a href="https://github.com/MaxFukui/" className="flex flex-row">
              <SiGithub className="text-lg mt-1 mr-2" />
              <h2>GitHub</h2>
            </a>
          </div>
          <a href="mailto:max.fukui.dev@gmail.com">
            <div
              className="bg-zinc-800 rounded-lg flex flex-row p-2 m-1
          transition duration-150 ease-out
          hover:bg-cyan-500
          "
            >
              <SiGmail className="text-lg mt-1 mr-2" />
              <p>max.fukui.dev@gmail.com</p>
            </div>
          </a>
        </div>
      </AboutCard>
    </div>
  );
}

export default AboutPage;
