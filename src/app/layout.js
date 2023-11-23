import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from '@/components/NavMenu';
import Toploader from '@/components/Toploader';
import Footer from '@/components/Footer';

// SEO PART ============================
export async function generateMetadata(){
  const res=await fetch("https://agency.teamrabbil.com/api/SiteMeta/home");
  const JSON=await res.json();
  return{
      title:JSON[0]['title'],
      description:JSON[0]['description'],
      keywords:JSON[0]['keywords'],
      openGraph: {
          images: JSON[0]['image'],
      },
  }
}

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
