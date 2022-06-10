
export default function AboutCard(props){
    const bgzinc = "bg-zing-600"
    const oldStyle = `p-2 rounded-md shadow-2xl flex flex-wrap flex-row my-2 bg-gradient-to-r
        bg-zinc-600 from-zinc-500 to-zinc-400`  
    const newStyle = `p-2 rounded-md shadow-2xl flex flex-wrap flex-row my-2 bg-gradient-to-r
        border-white border-2
        `  
    return ( 
        <div className={newStyle}>
           {props.children} 
        </div>
    )
}
