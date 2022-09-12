
import logo from '../public/img.jpg';
import SiteImage from '../components/SiteImage'
import Link from 'next/link';


export default function Home() {
  return (
    <div className="container">      
      <div className='container-flex'>
        <SiteImage logo={logo} type="home"/>  
        <div style={{padding:'1em'}}>
          <h1 style={{fontWeight:'bold', fontSize:'1.6em', color:'rgb(14 120 202)'}}>Selamat Datang di BRImo</h1>
          <h2 style={{fontWeight:'bold', fontSize:'1.2em', marginBottom:'2em', marginTop:'1em'}}>Apakah Anda memiliki akun Internet Banking Bank BRI?</h2>    
          <button className='btn'>
            <Link href="/login">
              <a>
                Punya Akun
              </a>
            </Link>
          </button>
          <p className='text text-biru' style={{marginTop:'1.2em'}}>
            Belum punya Akun
          </p>
        </div>
      </div>
    </div>
  )
}
