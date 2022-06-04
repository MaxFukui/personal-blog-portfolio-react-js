export default function IndexPageCard(props){
    const innerShadow = {
        boxShadow: "inset 0 10px 10px 0 rgb(0 0 0 / 0.15)"
    }

    return (
        <div className="bg-white p-2 m-2 max-w-screen-lg mx-auto my-3"
        style={innerShadow}
        >
            {props.children}
        </div>
    )
}