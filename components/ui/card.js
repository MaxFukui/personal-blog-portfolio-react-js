import { Fragment } from "react"
import Image from "next/image"
import {useRouter} from "next/router"

// const myLoader = ( { src, width }) =>{
//     let positionWidth = src.search("&w=") + 3
//     let positionLastWidth = src.search("&q=") 
//     let tirar = src.substring(positionWidth, positionLastWidth )
//     console.log(tirar)
//     const newUrl = src.replace(tirar, width)
//     return `http://192.168.100.183:1337${newUrl}`
// }

const myLoader = ( { src }) =>{
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${src}`
}

function Card(props){
    const {title, headline, imageUrl, id} = props
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        const fullPath = `/blog/${props.id}`
        router.push(fullPath)
    }

    return(
        <div onClick={handleClick}>
            <h2>{ title }</h2>
            <p>{headline}</p>
            <Image  loader={myLoader} src={imageUrl}  layout="fixed"  width={200} height={300}/>
        </div>
     )
}

export default Card
