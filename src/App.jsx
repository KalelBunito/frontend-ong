import Menu from "./components/Menu/Menu.jsx"
import Banner from "./components/Banner/Banner.jsx"
import EmblaCarousel from "./components/Carousel/EmblaCarousel.jsx"

const OPTIONS = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function App(){
  return(
    <div>
      <Menu />
      <Banner />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}