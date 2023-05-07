import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kayo Oliveira - Web Developer',
  description:
    'The personal website of Kayo Oliveira, a full-stack web developer based in Brazil.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
