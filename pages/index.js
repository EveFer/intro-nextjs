import Head from 'next/head'
import Nav from '../components/Navbar'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <h1>Holis</h1>
            <img src='/assets/products/moto1.png' alt='' />
          </div>
          <div className='col-12 col-md-6'>
            <article className='card-product' />
          </div>
        </div>
      </div>

    </div>
  )
}
