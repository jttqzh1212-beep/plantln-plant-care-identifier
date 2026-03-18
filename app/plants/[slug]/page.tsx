import { plants, getPlantBySlug } from '@/data/plants'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return plants.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const plant = getPlantBySlug(slug)
  if (!plant) return {}
  return {
    title: `${plant.commonName} Care Guide - PlantLn`,
    description: `Learn how to care for ${plant.commonName} (${plant.name}). Watering, light, temperature, and expert tips.`,
  }
}

export default async function PlantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const plant = getPlantBySlug(slug)
  if (!plant) notFound()

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-green-600 font-medium mb-1">{plant.family}</p>
          <h1 className="text-3xl font-bold text-gray-800 mb-1">{plant.commonName}</h1>
          <p className="text-gray-400 italic mb-4">{plant.name}</p>
          <p className="text-gray-600 leading-relaxed">{plant.description}</p>
        </div>

        {/* Care Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: '💧', label: 'Watering', value: plant.care.watering },
            { icon: '☀️', label: 'Light', value: plant.care.light },
            { icon: '🌡️', label: 'Temperature', value: plant.care.temperature },
            { icon: '💦', label: 'Humidity', value: plant.care.humidity },
            { icon: '🪴', label: 'Soil', value: plant.care.soil },
          ].map(({ icon, label, value }) => (
            <div key={label} className="bg-white rounded-xl border border-green-100 p-4">
              <div className="text-2xl mb-1">{icon}</div>
              <p className="text-xs text-gray-400 mb-1">{label}</p>
              <p className="text-sm text-gray-700 font-medium">{value}</p>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="bg-white rounded-2xl border border-green-100 p-6 mb-6">
          <h2 className="font-bold text-gray-800 text-lg mb-4">Care Tips</h2>
          <ul className="space-y-2">
            {plant.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-green-500 mt-0.5 shrink-0">✓</span> {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-green-100 p-6">
          <h2 className="font-bold text-gray-800 text-lg mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {plant.faq.map((item, i) => (
              <div key={i}>
                <p className="font-medium text-gray-700 mb-1">Q: {item.q}</p>
                <p className="text-sm text-gray-500">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
