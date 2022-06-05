import { useRouter } from "node_modules/next/router";

export default function IndexReadMore(props){
    const router =  useRouter()
    function handleClick(e) {
        e.preventDefault();
        const fullPath = "/blog/" + props.id;
        router.push(fullPath);
    }

    const reactDivStyle = {
      backgroundImage: "url(" + props.coverUrl + ")",
    };
    return(
        <div className="flex-auto m-1 w-64 block 
        bg-clip-padding max-w-72 
        transition duration-150 ease-in-out hover:ease-in 
        hover:scale-[1.2] bg-cover" style={reactDivStyle}
        onClick={handleClick}
        >
            <div className="flex-col text-white bg-black/60  w-full h-full flex-col p-4
            text-ellipsis overflow-hidden
            items-end
            ">
                
                <h2 className="font-bold text-lg">{props.title}</h2>
                <p className="text-justify">{props.headline}</p>
                <div className="relative w-full grow self-end">
                    <p className="text-right bottom-0 right-0 self-end">go to...</p>
                </div>
            </div>
            
        </div>
    )
}