import { Fragment, useState } from "react";

export default function AcademicCard(props) {
  const [mouseOver, setMouseOver] = useState(false);
  const { faculdade, dataTermino } = props;

  const mouseVariable = (
    <div className="mt-3">
      <p className="text-left font-serif text-sm"> {faculdade}</p>
      <span className="flex flex-row font-serif text-sm">
        <p className="text-left">Data de Término :</p>
        <p className="pl-2"> {dataTermino}</p>
      </span>
    </div>
  );

  return (
    <Fragment>
      <li
        className="grow  p-3 bg-slate-900 m-2 rounded-xl text-center
        transition ease-in-out delay-150 drop-shadow-md hover:scale-105 
        hover:drop-shadow-2xl border-2 border-slate-900 hover:border-white" 
        onMouseOver={() => {
          setMouseOver(true);
        }}
        onMouseLeave={() => {
          setMouseOver(false);
        }}
      >
        <p className="font-bold"> {props.graduation} </p>
        {mouseVariable}
      </li>
    </Fragment>
  );
}
