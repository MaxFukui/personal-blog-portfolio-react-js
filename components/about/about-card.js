
export default function AboutCard(props){
    const bgzinc = "bg-zing-600"
    return (
        <div className="p-2 bg-zinc-600 rounded-md 
        shadow-2xl flex flex-wrap flex-row my-2
        bg-gradient-to-r
        from-zinc-500
        to-zinc-400
        ">
           {props.children} 
        </div>
    )
}
