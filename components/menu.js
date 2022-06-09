import Link from 'next/link'
import { useAmp } from 'node_modules/next/amp'
import { useState } from 'react'

function Menu(props){
  const linkStyle = "mx-2 px-2 font-bold w-full hover:text-cyan-600 hover:font-2xl";
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div className='flex-row p-2 bg-white w-full
    shadow-xl
    justify-end
    '>
      <span className={linkStyle}
      onMouseOver={()=>{setMouseOver(true)}}
      onMouseLeave={()=>{setMouseOver(false)}}
      >
        <a href="/">Home</a>
      </span>
      <span className={linkStyle}>
        <a href="/blog/pagination/1" >Blog</a>
      </span>
      {/* <span className={linkStyle}>
        <Link href="/projects" >Projects</Link>
      </span> */}
      <span className={linkStyle} >
        <a href="/about">About</a>
      </span>
    </div>
  )
}

export default Menu
