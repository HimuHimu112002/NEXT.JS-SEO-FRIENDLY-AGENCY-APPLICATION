import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from '@/components/NavMenu';
import Toploader from '@/components/Toploader';
import Footer from '@/components/Footer';
// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toploader/>
        <NavMenu/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
