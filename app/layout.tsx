import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iservice - Sua expertise merece clientes de qualidade',
  description: 'O Iservice cuida da burocracia, você foca no serviço. Plataforma que conecta prestadores de serviço a clientes qualificados.',
  keywords: 'prestador de serviço, plataforma de serviços, profissionais, clientes qualificados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
