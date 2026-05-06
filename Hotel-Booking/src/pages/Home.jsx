import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Newsletter from '../components/Newsletter'
import About from './About'
import Experience from './Experience'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Featured/>
      <About/>
      <Newsletter/>
      <Experience/>
    </div>
  )
}
