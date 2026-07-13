'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import WhyChooseUs from '@/components/why-choose-us'
import Projects from '@/components/projects'
import Testimonials from '@/components/testimonials'
import Blog from '@/components/blog'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'

export default function Page() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
    
      <Footer />
      <ScrollToTop />
    </main>
  )
}
