import AboutCard from "@/components/about/about-card";
import Image from "node_modules/next/image";
import { useState } from "react";
import AcademicCard from "@/components/about/about-academic";
import SkillAbout from "@/components/about/about-skills";
import { FaUniversity } from "react-icons/fa";
import { GiAncientSword } from "react-icons/gi";
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
} from "react-icons/si";

function AboutPage() {
  const [mouseOverGraduation, setMouseOverGraduation] = useState(false);
  const [mouseOverPostGraduation, setMouseOverPostGraduation] = useState(false);

  return (
    <div
      className="container m-5 w-100 mx-auto p-5 
    bg-slate-400 rounded-xl"
    >
      <AboutCard className="CardCabecalho">
        <div className="grid">
          <img
            src="https://picsum.photos/300/300/"
            width={300}
            height={300}
            className="rounded-full px-4 py-4 place-self-center "
          />
        </div>
        <div className=" flex-1 pl-4 align-middle py-11 pr-8">
          <h1 className="text-white text-right  text-xl font-bold">
            Max Fukui Tieti
          </h1>
          <p className="text-white text-justify font-serif font-extralight">
            {" "}
            tristique erat elit, sed auctor massa porta vel. Nunc consequat elit
            eget sapien vestibulum pretium. Donec sed nisi non nibh porttitor
            vehicula nec sit amet lectus. Phasellus venenatis fringilla dictum.
            Donec volutpat sollicitudin dui, nec pharetra metus viverra
            dignissim. Nam porttitor condimentum tortor, in porttitor nibh
            vestibulum nec. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Vivamus placerat faucibus ante
            vitae fringilla. Etiam imperdiet sem ut mauris tincidunt congue id
            in leo. Duis tincidunt a ex sit amet cursus. Nullam sollicitudin dui
            vitae enim rhoncus, eu facilisis nulla feugiat. Maecenas dapibus,
            neque ultricies aliquet fermentum, elit mauris tempus dolor, eget
            ultrices purus sapien sit amet lectus. Nulla facilisi.{" "}
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
              faculdade="UCDB Univerdade Católica Dom Bosco"
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
            className="PosGraduacao"
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

      </AboutCard>

      <AboutCard>
        <div className="flex flex-col pl-2">
          <div className="flex flex-row">
            <GiAncientSword className="text-xl text-white" />
            <h2 className="font-bold text-left text-white pb-2">
              Tecnlogias que gosto de trabalhar
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
              <SkillAbout porcentagem={80} skill="Rust"
                forWhat={"Linaguagem de programação com alta otmização de recursos"}
              >
                <DiRust className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout porcentagem={80} skill="JavaScript"
                forWhat={"Desenvolvimento Web"}
              >
                <DiJavascript className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout porcentagem={80} skill="React"
                forWhat={"Ótimo para otimização e reutilização de componentes"}
              >
                <DiReact className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout porcentagem={80} skill="Python"
                forWhat={"Linguagem de Programação Geral"}
              >
                <DiPython className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout porcentagem={80} skill="TailwindCss"
                forWhat={"Uma nova forma de usar usar styles"}
              >
                <SiTailwindcss className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout porcentagem={80} skill="Django"
                forWhat={"Framework para desenvolimento de BackEnd"}
              >
                <SiDjango className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout porcentagem={80} skill="MySql"
                forWhat={"Banco de dados relacional"}
              >
                <GrMysql className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout porcentagem={80} skill="MongoDB"
                forWhat={"Banco de dados não relacional Web"}
              >
                <DiMongodb className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout porcentagem={80} skill="NextJs"
                forWhat={"Desenvolvimento web com renderização server-side"}
              >
                <SiNextdotjs className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout porcentagem={70} skill="GatsbyJs"
                forWhat={"Desenvolviemtno web com renderização estática client-side"}
              >
                <SiGatsby className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
              <SkillAbout porcentagem={70} skill="Keras"
                forWhat={"Machine learning com alto poder de abstração"}
              >
                <SiKeras className="text-6xl text-white drop-shadow-xl" />
              </SkillAbout>
            </div>
          </div>
        </div>
      </AboutCard>

      <AboutCard>
        <div className="Projetos">
          <div>
            <h2>Habilidade 1</h2>
            <img src="" alt="habilidade1" />
            <p>lorem ipsum</p>
          </div>
        </div>
      </AboutCard>

      <AboutCard>
        <div className="Contato">
          <div>
            <h2>GitHub</h2>
            <p>
              <a href="mailto:max.fukui.dev@gmail.com">
                max.fukui.dev@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h2>Email</h2>
            <p>
              <a href="mailto:max.fukui.dev@gmail.com">
                max.fukui.dev@gmail.com
              </a>
            </p>
          </div>
        </div>
      </AboutCard>
    </div>
  );
}

export default AboutPage;
