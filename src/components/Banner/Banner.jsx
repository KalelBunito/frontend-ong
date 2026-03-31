import Carousel from 'react-bootstrap/Carousel';


export default function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src='aumigos.png' alt='ong-aumigos' style={{ height: '700px', width: '100%', objectFit: 'cover' }}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='parceiros.png' alt='parceiros' style={{ height: '700px', width: '100%', objectFit: 'cover' }}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='apadrinhamento.png' alt='apadrinhamento' style={{ height: '700px', width: '100%', objectFit: 'cover' }}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
