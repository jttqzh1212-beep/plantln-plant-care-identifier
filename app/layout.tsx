import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PlantLn - Free Plant Identifier & Care Guide',
  description: 'Identify any plant instantly with a photo and get personalized care tips. Free plant identifier powered by AI.',
  keywords: 'plant identifier, plant care, plantln, identify plants, plant care guide',
  openGraph: {
    title: 'PlantLn - Free Plant Identifier & Care Guide',
    description: 'Identify any plant instantly with a photo and get personalized care tips.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
