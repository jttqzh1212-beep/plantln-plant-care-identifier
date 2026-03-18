'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
  const [dragging, setDragging] = useState(false)
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
    setDragging(false)
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

  const reset = () => {
    setImage(null)
    setResult(null)
    setError(null)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <section className="max-w-2xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-800 mb-3">
          Identify Any Plant Instantly
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          Upload a photo and get the plant name, family, and personalized care tips in seconds.
        </p>

        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all bg-white ${
            dragging ? 'border-green-500 bg-green-50' : 'border-green-300 hover:border-green-500'
          }`}
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onClick={() => !image && fileRef.current?.click()}
        >
          {image ? (
            <div className="relative w-full h-64">
              <Image src={image} alt="Plant to identify" fill className="object-contain rounded-xl" />
            </div>
          ) : (
            <div className="text-gray-400 py-4">
              <div className="text-5xl mb-3">📷</div>
              <p className="text-lg font-medium text-gray-600">Drop a photo here or click to upload</p>
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

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        {image && (
          <div className="flex gap-3 mt-4">
            <button
              onClick={identify}
              disabled={loading}
              className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Identifying...
                </span>
              ) : 'Identify Plant'}
            </button>
            <button
              onClick={reset}
              className="px-4 py-3 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>
        )}
      </section>

      {/* Result */}
      {result && (
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-green-100">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-2xl font-bold text-green-800">{result.commonName}</h2>
                <p className="text-gray-400 italic text-sm">{result.name}</p>
              </div>
              <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full shrink-0">
                {Math.round(result.confidence * 100)}% match
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { icon: '💧', label: 'Watering', value: result.care.watering },
                { icon: '☀️', label: 'Light', value: result.care.light },
                { icon: '🌡️', label: 'Temperature', value: result.care.temperature },
              ].map(({ icon, label, value }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">{icon}</div>
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="text-xs font-medium text-gray-700 mt-0.5">{value}</p>
                </div>
              ))}
            </div>

            {result.suggestions.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-700 mb-2 text-sm">Care Tips</h3>
                <ul className="space-y-1">
                  {result.suggestions.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Features */}
      {!result && (
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: '🔍', title: 'Instant Identification', desc: 'AI-powered recognition with 90%+ accuracy across thousands of plant species' },
              { icon: '🌱', title: 'Care Guides', desc: 'Get watering schedules, light requirements, and expert tips for every plant' },
              { icon: '🔒', title: 'Privacy First', desc: 'Your photos are processed in memory and never stored on our servers' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-green-100 p-6">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 mb-3">Or browse our plant care library</p>
            <Link
              href="/plants"
              className="inline-block border border-green-600 text-green-700 hover:bg-green-50 font-semibold px-6 py-2.5 rounded-xl transition-colors"
            >
              View Plant Care Guides →
            </Link>
          </div>
        </section>
      )}
    </main>
  )
}
