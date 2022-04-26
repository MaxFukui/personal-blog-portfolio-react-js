import Link from 'next/link';

function HomePage(){
  return (
    <div>
      <h1> Hello World </h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clientes</Link>
        </li>
      </ul> </div>) }

export default HomePage;
