import './globals.css'
import Providers from '@/store/provider'
import Navbar from "@/components/Navbar/page";

export const metadata = {
  title: 'P!C-Splash',
  description: '✍ Created By Deepak Patankar ^_~',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
