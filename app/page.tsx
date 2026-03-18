'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

interface CareInfo {
  watering: string
  light: string
  temperature: string
}

interface IdentifyResult {
  name: string
  commonName: string
  confidence: number
  care: CareInfo
  suggestions: string[]
}

export default function Home() {
  const [image, setImage] = useState<string | null>(null)
  const [result, setResult] = useState<IdentifyResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
    if (!file.type.match(/image\/(jpeg|png|webp)/)) {
      setError('Please upload a JPG, PNG, or WebP image.')
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be under 5MB.')
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => setImage(e.target?.result as string)
    reader.readAsDataURL(file)
    setError(null)
    setResult(null)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  const identify = async () => {
    if (!image) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/identify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image }),
      })
      if (!res.ok) throw new Error('Identification failed')
      const data = await res.json()
      setResult(data)
    } catch {
      setError('Failed to identify plant. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800 mb-2">🌿 PlantLn</h1>
          <p className="text-gray-600 text-lg">Identify any plant instantly and get care tips</p>
        </div>

        {/* Upload Area */}
        <div
          className="border-2 border-dashed border-green-300 rounded-2xl p-8 text-center cursor-pointer hover:border-green-500 transition-colors bg-white"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileRef.current?.click()}
        >
          {image ? (
            <div className="relative w-full h-64">
              <Image src={image} alt="Plant to identify" fill className="object-contain rounded-xl" />
            </div>
          ) : (
            <div className="text-gray-400">
              <div className="text-5xl mb-3">📷</div>
              <p className="text-lg font-medium">Drop a photo here or click to upload</p>
              <p className="text-sm mt-1">JPG, PNG, WebP · max 5MB</p>
            </div>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}

        {image && (
          <button
            onClick={identify}
            disabled={loading}
            className="w-full mt-4 bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            {loading ? 'Identifying...' : 'Identify Plant'}
          </button>
        )}

        {/* Result */}
        {result && (
          <div className="mt-8 bg-white rounded-2xl shadow-md p-6 border border-green-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-green-800">{result.commonName}</h2>
                <p className="text-gray-500 italic">{result.name}</p>
              </div>
              <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                {Math.round(result.confidence * 100)}% match
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="bg-blue-50 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">💧</div>
                <p className="text-xs text-gray-500">Watering</p>
                <p className="text-sm font-medium text-gray-700">{result.care.watering}</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">☀️</div>
                <p className="text-xs text-gray-500">Light</p>
                <p className="text-sm font-medium text-gray-700">{result.care.light}</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">🌡️</div>
                <p className="text-xs text-gray-500">Temperature</p>
                <p className="text-sm font-medium text-gray-700">{result.care.temperature}</p>
              </div>
            </div>

            {result.suggestions.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Care Tips</h3>
                <ul className="space-y-1">
                  {result.suggestions.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
