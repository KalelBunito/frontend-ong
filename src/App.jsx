import Menu from "./components/Menu/Menu.jsx"
import Banner from "./components/Banner/Banner.jsx"
import '../src/components/Carousel/css/base.css'
import '../src/components/Carousel/css/embla.css'
import EmblaCarousel from "./components/Carousel/EmblaCarousel.jsx"

const OPTIONS = { loop: true }
const SLIDES = [
  {id: 1, image: './acaochego.png', alt: 'ONG...'},
  {id: 2, image: './adotar.png', alt: 'ONG...'},
  {id: 3, image: './bilboanimais.jpg', alt: 'ONG...'},
  {id: 4, image: './cantodaterra.svg', alt: 'ONG...'},
  {id: 5, image: './paraisodosfocinhos.png', alt: 'ONG...'}
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