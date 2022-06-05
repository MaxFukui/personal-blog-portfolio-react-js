import { Fragment } from "react"
import Image from "next/image"
import {useRouter} from "next/router"

function Card(props){
  const router = useRouter()
  const backgroundStyle = {
    backgroundImage: "url(" + props.coverUrl + ")",
  };

  function handleClick(e) {
    e.preventDefault();
    const fullPath = "/blog/" + props.id;
    router.push(fullPath);
  }
  return (
    <div className="bg-white drop-shadow-xl m-2 p-2 grow-0 cursor-pointer
    transition duration-150 ease-in-out hover:ease-in 
    hover:scale-[1.02] bg-cover
    " onClick={handleClick}>
      <h2 className="text-xl font-bold w-full mb-2">{props.title}</h2>
      <div className="flex">
        <div className="flex-col w-3/5">
          <p className="text-justify mx-2">{props.headline}</p>
        </div>
        <div className="bg-cover bg-center h-48 w-2/5 mt-2 mb-2" style={backgroundStyle} />
      </div>
    </div>
  );
}

export default Card
