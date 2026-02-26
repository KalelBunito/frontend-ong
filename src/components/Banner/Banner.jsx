import Carousel from 'react-bootstrap/Carousel';


export default function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src='cachorroamarelo.jpg' alt='cachorroamarelo' style={{ height: '400px', width: '100%', objectFit: 'cover' }}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='cachorrovermelho.jpg' alt='cachorrovermelho' style={{ height: '400px', width: '100%', objectFit: 'cover' }}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='cachorropastel.jpg' alt='cachorropastel' style={{ height: '400px', width: '100%', objectFit: 'cover' }}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
