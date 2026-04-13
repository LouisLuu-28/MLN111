import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nhà Nước và Cách Mạng Xã Hội',
  description: 'Trang web thuyết trình về Nhà Nước và Cách Mạng Xã Hội - Nhóm 4',
  generator: 'Nhóm 4.app',
  icons: {
    icon: [
      {
        url: '/icons8-lenin-50.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icons8-lenin-50-2.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icons8-lenin-50.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
