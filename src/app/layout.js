// app/layout.js
import './globals.css'
import Header from './components/Header'
import ScrollToTopButton from './components/ScrollToTopButton'


export const metadata = {
  title: 'Adnane Chaikhi Portfolio',
  description: 'Fullstack Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ScrollToTopButton/>
        {children}
      </body>
    </html>
  )
}
