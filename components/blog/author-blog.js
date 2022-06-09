import Image from "node_modules/next/image";

// const myLoader = ( { src }) =>{
//     return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${src}`
// }

export default function AuthorPost(props) {
  const { src, name, about } = props;
  const backgroundStyle = {
    backgroundImage: "url(" + src + ")",
  };
  return (
    <div className="flex flex-row flex-wrap my-4 p-2 border-solid border-2 border-black">
      <div
        className="bg-cover bg-center h-48 w-48 my-auto saturate-0 mr-4"
        style={backgroundStyle}
      />
      <div className="flex-col w-3/4">
        <h2 className="font-bold text-lg">{props.name}</h2>
        <p>{props.about}</p>
      </div>
    </div>
  );
}
