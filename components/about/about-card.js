
export default function AboutCard(props){
    return (
        <div className="p-2 bg-zinc-600 rounded-md 
        shadow-2xl flex flex-wrap flex-row my-2">
           {props.children} 
        </div>
    )
}
