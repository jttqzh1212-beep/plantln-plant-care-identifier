import Link from 'next/link'
import { plants } from '@/data/plants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plant Care Guides - PlantLn',
  description: 'Browse care guides for popular houseplants. Learn how to water, light, and care for your plants.',
}

export default function PlantsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Plant Care Guides</h1>
          <p className="text-gray-500">Detailed care instructions for popular houseplants</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plants.map((plant) => (
            <Link
              key={plant.slug}
              href={`/plants/${plant.slug}`}
              className="bg-white rounded-2xl border border-green-100 p-5 hover:shadow-md hover:border-green-300 transition-all group"
            >
              <div className="text-3xl mb-3">🌱</div>
              <h2 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                {plant.commonName}
              </h2>
              <p className="text-sm text-gray-400 italic mb-3">{plant.name}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">💧 {plant.care.watering.split(';')[0]}</span>
                <span className="text-xs bg-yellow-50 text-yellow-600 px-2 py-1 rounded-full">☀️ {plant.care.light.split(';')[0]}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
