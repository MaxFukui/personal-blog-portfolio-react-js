import Image from "node_modules/next/image"

const myLoader = ( { src }) =>{
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${src}`
}

export default function AuthorPost(props){
    return(
        <div>
            <Image loader={myLoader}
            src={props.src} layout="fixed" 
            width={200} height={300} />
            <h2>{props.name}</h2>
            <p>{props.about}</p>
        </div>
    )
}