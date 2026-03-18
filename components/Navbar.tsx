import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-green-700 flex items-center gap-2">
          🌿 PlantLn
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-green-700 transition-colors">Identify</Link>
          <Link href="/plants" className="hover:text-green-700 transition-colors">Plant Care</Link>
          <Link href="/about" className="hover:text-green-700 transition-colors">About</Link>
        </div>
      </div>
    </nav>
  )
}
