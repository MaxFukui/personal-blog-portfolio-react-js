export default function SkillAbout(props){
    const {skill, forWhat } = props
    return(
        <div className="rounded-lg bg-cyan-500 p-3">
            <h2 className="text-white text-center font-bold">{skill}</h2>
            <div>
                {props.children}
            </div>
            <p>{forWhat}</p>
            <div className="w-full bg-gray-200 h-1">
                <div className="bg-cyan-700 h-1" style={{ width: props.porcentagem + "%" }}></div>
            </div>
        </div>
    )    
}
