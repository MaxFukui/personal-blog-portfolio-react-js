export default function Hero(props) {
  const url = "https://picsum.photos/1080/1920";
  const reactDivStyle = {
    backgroundImage: "url(" + url + ")",
  };
  return (
    <div
      className="bg-cyan-800 h-72 bg-cover 
    max-w-screen-2xl self-center mx-auto py-auto
    relative flex items-center w-full justify-between
    transition ease-out hover:ease-in duration-150
    "
      style={reactDivStyle}
    >
      <div
        className="mx-auto flex-col justify-center grow my-auto 
      items-center w-full justify-between
      bg-black/25 h-full hover:bg-black/50
    transition ease-out hover:ease-in duration-150
      "
      >
        <div className="relative top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
          <div className="flex justify-center items-center h-full">
            <div>
              <h2 className="text-center font-bold text-3xl text-white uppercase ">
                Fusce et tellus vel risus
              </h2>
              <p className="italic text-center text-white">
                "Aliquam pretium finibus mi quis consequat. Pellentesque
                habitant"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
