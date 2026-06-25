import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Calendario from './componentes/calendario/calendario'
import { ContainerGeral, SubContainerGeral } from './assets/estiloGeral'

function App() {
  

  return (
    <ContainerGeral>
      <SubContainerGeral>
        <Calendario />

      </SubContainerGeral>
    </ContainerGeral>
  )
}

export default App
