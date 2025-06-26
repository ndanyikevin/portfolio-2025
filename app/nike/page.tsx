import React from 'react'
import Nav from "./components/Nav"
import { Services, SuperQuality, CustomerReviews, Footer, SpecialOffer, Hero, Subscribe, PopularProducts } from "./sections"


export default function NikeHomepage() {
  return (
    <main>
      <Nav />
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
       <SuperQuality />
      </section>
      <section className='padding'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews />
      </section>
      <section className='padding padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}
