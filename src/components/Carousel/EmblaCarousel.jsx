import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useAutoScroll } from './EmblaCarouselAutoScroll'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoScroll()])

  const { autoScrollIsPlaying, toggleAutoScroll, onAutoScrollButtonClick } =
    useAutoScroll(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <h2>Nossas ongs</h2>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="embla__slide__content">
                <img src={slide.image} alt={slide.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <button
          className="embla__play"
          onClick={() => onAutoScrollButtonClick(toggleAutoScroll)}
        >
          {autoScrollIsPlaying ? 'Parar' : 'Reproduzir'}
        </button>
      </div>
    </div>
  )
}

export default EmblaCarousel