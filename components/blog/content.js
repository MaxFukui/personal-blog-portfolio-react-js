import { useEffect, useState } from "react"
import {remark} from "remark"
import html from "remark-html"

export async function markdownToHtml(markdown){
    const result = await remark().use(html).process(markdown)
    return result.toString()
}

function resolveImage(markdownPuro){
    let padrao = '<img src="'
    const preString = padrao+"http://192.168.100.183:1337"
    let fixedUrlString = markdownPuro.replace(padrao, preString)
    return fixedUrlString
}

export default function PostContent(props){
    const [content, setContent] = useState("Ainda não")

    useEffect(()=>{
        markdownToHtml(props.content)
        .then(res => {
            resolveImage(res)
            setContent(resolveImage(res))
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
