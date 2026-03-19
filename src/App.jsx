import Menu from "./components/Menu/Menu.jsx"
import Banner from "./components/Banner/Banner.jsx"
import '../src/components/Carousel/css/base.css'
import '../src/components/Carousel/css/embla.css'
import EmblaCarousel from "./components/Carousel/EmblaCarousel.jsx"

const OPTIONS = { loop: true }
const SLIDES = [
  {id: 1, image: './', alt: 'ONG...', name: 'ONG...'},
  {id: 2, image: './', alt: 'ONG...', name: 'ONG...'},
  {id: 3, image: './', alt: 'ONG...', name: 'ONG...'},
  {id: 4, image: './', alt: 'ONG...', name: 'ONG...'},
  {id: 5, image: './', alt: 'ONG...', name: 'ONG...'}
]

export default function App() {
  return (
    <div>
      <Menu />
      <Banner />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}