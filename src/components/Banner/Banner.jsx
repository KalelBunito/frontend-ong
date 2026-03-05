import Carousel from 'react-bootstrap/Carousel';


export default function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src='cachorroamarelo.jpg' alt='cachorroamarelo' style={{ height: '400px', width: '100%', objectFit: 'cover' }}/>
        <Carousel.Caption>
          <h3>primeiro slide</h3>
          <p>gagaga</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='cachorrovermelho.jpg' alt='cachorrovermelho' style={{ height: '400px', width: '100%', objectFit: 'cover' }}/>
        <Carousel.Caption>
          <h3>segundo slide</h3>
          <p>fafafa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='cachorropastel.jpg' alt='cachorropastel' style={{ height: '400px', width: '100%', objectFit: 'cover' }}/>
        <Carousel.Caption>
          <h3>terceiro slide</h3>
          <p>ballba</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
