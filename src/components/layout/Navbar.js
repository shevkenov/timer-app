import Link from "next/link";
import { useUserContext } from "../../context/userContext";

const Navbar = () => {
  const { user, setUser } = useUserContext();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser("");
  };
  return (
    <header className="flex justify-between items-center bg-green-600 text-white py-4 px-4">
      <h2 className="text-xl">
        <Link href="/">
          <a>Super Simple Task Timer</a>
        </Link>
      </h2>
      <nav className="flex items-center">
        {!user ? (
          <>
            <Link href="/login">
              <a className="ml-8 text-lg">Login</a>
            </Link>
            <Link href="/signup" className="ml-8">
              <a className="ml-8 text-lg">Signup</a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/">
                <a className="ml-8 text-lg">Timer</a>
            </Link>
            <Link href="/stats">
            <a className="ml-8 text-lg">Status</a>
            </Link>
            <button className="ml-8 text-lg border rounded py-1 px-3 hover:bg-green-700" onClick={handleLogout}>Log out</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
