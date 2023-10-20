import AuthProvider from '@/providers/AuthProvider'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './global.scss'
import { Layout } from '@/components'
import AnimationProvider from '@/providers/AnimationProvider';
import AppThemeProvider from '@/providers/AppThemeProvider'

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
              <div className='wrapper'>
                <Layout>
                  {children}
                </Layout>
              </div>
            </AppThemeProvider>
          </AnimationProvider>
        </AuthProvider>
      </body >
    </html >
  )
}