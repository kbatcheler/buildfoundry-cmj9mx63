import Link from "next/link";
export function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Chatbot E2E
        </Link>
        <nav className="flex space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}