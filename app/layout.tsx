import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

// Configure fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'ZOSINT Command Deck',
  description: 'Advanced OSINT Analysis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto_mono.variable} font-sans bg-[#02000a] text-[#F0F0F0]`}>
        {/* We will add the GlobalParticleBackground component here later */}
        {children}
      </body>
    </html>
  )
}
