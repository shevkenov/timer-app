import Link from "next/link"

const Navbar = () => {
  return (
    <header className='flex justify-between items-center bg-green-600 text-white py-4 px-4'>
        <h2 className="text-xl">
            <Link href="/">
                <a>Super Simple Task Timer</a>
            </Link>
        </h2>
        <nav className="flex">
            <Link href="/login" >
                <a className="ml-8 text-lg">Login</a>
            </Link>
            <Link href="/signup" className="ml-8">
                <a className="ml-8 text-lg">Signup</a>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar