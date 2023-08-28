import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Top from './components/Top'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salahudin Al Ayubi ・ UI and UX Designer ',
  description: 'Elevate your digital landscape with an accomplished design. With an unwavering passion for creating seamless and engaging user experiences, I will brings a unique blend of creativity, technical expertise, and strategic thinking to every project.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950">
        <Top />
        {children}
      </body>
    </html>
    // bg-[length:600px] bg-top bg-no-repeat bg-[url('/images/shiner.png') lg:bg-top lg:bg-no-repeat lg:bg-[url('/images/shiner.png')] lg:bg-[length:900px]
  )
}
