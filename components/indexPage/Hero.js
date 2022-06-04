export default function Hero(props) {
  const url = "https://picsum.photos/1080/1920";
  const reactDivStyle = {
    backgroundImage: "url(" + url + ")",
  };
  return (
    <div
      className="bg-cyan-800 h-72 bg-cover 
    max-w-screen-2xl self-center mx-auto"
      style={reactDivStyle}
    >
      <div className="mx-auto flex-col">
        <h2 className="text-center font-bold text-3xl 
       justify-self-auto my-auto">
            teste
        </h2>
      </div>
    </div>
  );
}
