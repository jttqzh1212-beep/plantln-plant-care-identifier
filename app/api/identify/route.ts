import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

const PLANT_ID_API = 'https://api.plant.id/v2/identify'

export async function POST(req: NextRequest) {
  try {
    const { image } = await req.json()
    if (!image) return NextResponse.json({ error: 'No image provided' }, { status: 400 })

    const apiKey = process.env.PLANT_ID_API_KEY
    if (!apiKey) return NextResponse.json({ error: 'API key not configured' }, { status: 500 })

    // Strip data URL prefix if present
    const base64 = image.replace(/^data:image\/\w+;base64,/, '')

    const response = await fetch(PLANT_ID_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': apiKey,
      },
      body: JSON.stringify({
        images: [base64],
        plant_details: ['common_names', 'taxonomy', 'wiki_description', 'watering', 'propagation_methods'],
      }),
    })

    if (!response.ok) throw new Error('Plant.id API error')

    const data = await response.json()
    const best = data.suggestions?.[0]

    if (!best) {
      return NextResponse.json({ error: 'Could not identify plant' }, { status: 422 })
    }

    return NextResponse.json({
      name: best.plant_name,
      commonName: best.plant_details?.common_names?.[0] ?? best.plant_name,
      confidence: best.probability,
      care: {
        watering: best.plant_details?.watering?.max
          ? `Every ${best.plant_details.watering.min}–${best.plant_details.watering.max} days`
          : 'Water when topsoil is dry',
        light: 'Bright indirect light',
        temperature: '15–30°C (59–86°F)',
      },
      suggestions: [
        'Check soil moisture before watering',
        'Avoid direct harsh sunlight',
        'Ensure good drainage to prevent root rot',
      ],
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
