import Menu from "./components/Menu/Menu.jsx"
import Banner from "./components/Banner/Banner.jsx"
import Carousel from "./components/Carousel/Carousel.jsx"
import Cadastro from "./components/ComoCadastrar/Cadastro.jsx"


export default function App() {
  return (
    <div>
      <Menu />
      <Banner />
      <Carousel />
      <Cadastro />
    </div>
  )
}

// import { useEffect, useState } from "react";

// estados do compojnente: pendente, carregando, sucesso e erro
// export default function App() {

// }