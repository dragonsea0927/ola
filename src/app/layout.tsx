import AuthProvider from '@/providers/AuthProvider'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './global.scss'
import AnimationProvider from '@/providers/AnimationProvider';
import AppThemeProvider from '@/providers/AppThemeProvider';
import App from '@/components/app/App'

const monserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developer Portfolio with Personal Blog',
  description: 'Developer Portfolio with Personal Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={monserrat.className}>
        <AuthProvider>
          <AnimationProvider>
            <AppThemeProvider>
              <main className='container'>
                <div className='wrapper'>
                  <App>
                    {children}
                  </App>
                </div>
              </main>
            </AppThemeProvider>
          </AnimationProvider>
        </AuthProvider>
      </body >
    </html >
  )
}