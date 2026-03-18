import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About PlantLn - Free Plant Identifier',
  description: 'PlantLn helps you identify plants instantly and get personalized care guides. Powered by Plant.id AI.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🌿</div>
          <h1 className="text-3xl font-bold text-green-800 mb-3">About PlantLn</h1>
          <p className="text-gray-500 text-lg">Your pocket plant expert</p>
        </div>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <div className="bg-white rounded-2xl border border-green-100 p-6">
            <h2 className="font-bold text-gray-800 text-lg mb-2">What is PlantLn?</h2>
            <p>PlantLn is a free plant identification tool that helps you identify any plant from a photo and get instant care advice. Whether you found an unknown plant on a hike or just bought a new houseplant, PlantLn has you covered.</p>
          </div>

          <div className="bg-white rounded-2xl border border-green-100 p-6">
            <h2 className="font-bold text-gray-800 text-lg mb-2">How it works</h2>
            <ol className="space-y-2 list-decimal list-inside text-sm">
              <li>Upload or take a photo of any plant</li>
              <li>Our AI analyzes the image using Plant.id technology</li>
              <li>Get the plant name, family, and confidence score</li>
              <li>Receive personalized watering, light, and care tips</li>
            </ol>
          </div>

          <div className="bg-white rounded-2xl border border-green-100 p-6">
            <h2 className="font-bold text-gray-800 text-lg mb-2">Privacy</h2>
            <p>Your photos are processed in memory and never stored on our servers. We take your privacy seriously.</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Try Plant Identifier
          </Link>
        </div>
      </div>
    </main>
  )
}
