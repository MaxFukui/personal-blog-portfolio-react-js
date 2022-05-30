import { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { SiGithub } from "react-icons/si";
import { Fragment } from "react";

export default function AboutPortfolioCard(props) {
  const style = "text-white text-2xl self-center";
  const [mouseOver, setMouseOver] = useState(false);
  let icone = <CgWebsite className={style} />;
  if (props.github) {
    icone = <SiGithub className={style} />;
  }

  let hiddedInformation = <></>;
  if (mouseOver) {
    hiddedInformation = (
      <Fragment>
        <a href={props.link} className="self-center justify-center">
            <button
            className="bg-black mx-auto rounded-lg p-4 flex flex-row
            hover:bg-cyan-500
            "
            type="button"
            >
                {icone} <p className="pl-2">Acesse</p>
        </button>
        </a>
      </Fragment>
    );
  } else {
    hiddedInformation = <></>;
  }

  return (
    <div
      className="mt-2 text-white bg-zinc-800 rounded-lg p-4 flex flex-col grow
        transition duration-150 ease-out
        hover:bg-zinc-900
        "
      onMouseOver={() => {
        setMouseOver(true);
      }}
      onMouseLeave={() => {
        setMouseOver(false);
      }}
    >
      <h2 className="font-bold text-2lg mb-2">{props.title}</h2>
      <p>{props.content}</p>
      <span className="flex flex-row w-full">
        <p className="align-top text-sm"> Tecnologias utilizadas: </p>
        <p className="ml-2 text-sm italic align-baseline mb-2">{props.tecs}</p>
      </span>
      <span className="flex flex-row w-full">
        <p className="align-top text-sm">Tipo:</p>
        <p className="ml-2 text-sm italic align-baseline mb-2">{props.theme}</p>
      </span>
      {hiddedInformation}
    </div>
  );
}
