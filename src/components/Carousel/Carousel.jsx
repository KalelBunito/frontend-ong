import { useEffect, useState } from "react"
import styles from "./Carousel.module.css"

const slides = [
  { id: 1, image: "sosunhas.jpg", name: "ONG 1" },
  { id: 2, image: "paraisodosfocinhos.png", name: "ONG 2" },
  { id: 3, image: "opaa.jpg", name: "ONG 3" },
  { id: 4, image: "acaoanimal.png", name: "ONG 4" }
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className={styles.container}>
      <h2>Nossas ONGS</h2>

      <div className={styles.carousel}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <img src={slide.image} alt={slide.name} className={styles.image} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.buttons}>
        <button onClick={prevSlide}>⬅</button>
        <button onClick={nextSlide}>➡</button>
      </div>
    </div>
  )
}