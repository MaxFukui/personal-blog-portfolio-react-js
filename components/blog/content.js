import { useEffect, useState } from "react"
import {remark} from "remark"
import html from "remark-html"

export async function markdownToHtml(markdown){
    const result = await remark().use(html).process(markdown)
    return result.toString()
}

// function resolveImage(markdownPuro){
//     const padrao = '<img src="'
//     const preString = padrao+process.env.NEXT_PUBLIC_STRAPI_API_URL
//     let fixedUrlString = markdownPuro.replace(padrao, preString)
//     return fixedUrlString
// }

export default function PostContent(props){
    const [content, setContent] = useState("Ainda não")

    useEffect(()=>{
        markdownToHtml(props.content)
        .then(res => {
            setContent(res)
        })
        .catch(err => {
            return err
        })
    },[content])

    if ( content ){
        return ( <div dangerouslySetInnerHTML={{ __html:content }} />)
    } else {
        <p>Carregando</p>
    }
}
