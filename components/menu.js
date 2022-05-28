import Link from 'next/link'
function Menu(props){
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
    </div>
  )
}

export default Menu
