'use client'
import Link from 'next/link';
import '@/styles/header.css';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import picture from '@/img/pic1.jpg'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Pick Parts. Build Your PC.<br/ >Compare and Share.</h1>
        <p>We provide part selection, pricing, and compatibility guidance for do-it-yourself computer builders.</p>
        <button className="btn-primary" onClick={() => router.push('/builder')}>Start your build</button>
      </section>
      <section className="complete-builds">
          <div className="builds-text">
              <h2>Complete builds</h2>
              <p>Browse thousands of PC builds generated by users showing their partlist, photos, and overall build experience.</p>
              <button className="btn-primary" ><Link href={"/complete-build"}>View Complete Builds</Link></button>
          </div>
          <div className="builds-gallery">
              <div className="build-item">
                  <Image src={picture} alt='PC build'></Image>
                  <div className="build-info">
                      <p className="user">User 1</p>
                      <p className="build-name">Example build</p>
                      <p className="build-specs">RTX 3070 Ti<br />16GB 3600 MHz</p>
                      <p className="price">$1234</p>
                  </div>
              </div>
              <div className="build-item">
                  <Image src={picture} alt='PC build'></Image>
                  <div className="build-info">
                      <p className="user">User 1</p>
                      <p className="build-name">Example build</p>
                      <p className="build-specs">RTX 3070 Ti<br />16GB 3600 MHz</p>
                      <p className="price">$1234</p>
                  </div>
              </div>
              <div className="build-item">
                  <Image src={picture} alt='PC build'></Image>
                  <div className="build-info">
                      <p className="user">User 1</p>
                      <p className="build-name">Example build</p>
                      <p className="build-specs">RTX 3070 Ti<br />16GB 3600 MHz</p>
                      <p className="price">$1234</p>
                  </div>
              </div>
              <div className="build-item">
                  <Image src={picture} alt='PC build'></Image>
                  <div className="build-info">
                      <p className="user">User 1</p>
                      <p className="build-name">Example build</p>
                      <p className="build-specs">RTX 3070 Ti<br />16GB 3600 MHz</p>
                      <p className="price">$1234</p>
                  </div>
              </div>
          </div>
      </section>
      <section className="complete-builds">
          <div className="builds-text">
              <h2>Components</h2>
              <p>Browse thousands of PC builds generated by users showing their partlist, photos, and overall build experience.</p>
              <Link href={'/products'}><button className="btn-primary">Choose components</button></Link>
          </div>
      </section>
    </>
  );
}
