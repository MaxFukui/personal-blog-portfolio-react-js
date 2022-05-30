import { useState } from "react"

export default function SkillAbout(props){
    const {skill, forWhat } = props
    const [mouseOver, setMouseOver] = useState(false);
    let litteDescription = ""

    if(mouseOver){
        litteDescription = forWhat
    } else {
        litteDescription = ""
    }

    return(
        <div className="rounded-lg bg-zinc-900 p-3 m-1 w-40 flex flex-col  
        transition duration-150 ease-out
        hover:scale-125 hover:bg-cyan-500 hover:ease-in"
            onMouseOver={()=>{setMouseOver(true)}}
            onMouseLeave={()=>{setMouseOver(false)}}
        >
            <h2 className="text-white text-center  ">{skill}</h2>
            <div className="pb-2 text-center mx-auto ">
                {props.children}
            </div>
            {/* <div className="w-full bg-gray-200 h-1">
                <div className="bg-cyan-700 h-1" style={{ width: props.porcentagem + "%" }}></div>
            </div> */}
            <p className="text-white text-sm mx-auto text-center">{litteDescription}</p>
        </div>
    )    
}
