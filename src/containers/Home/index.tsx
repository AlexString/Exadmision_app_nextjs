import Button from "components/block/Button"

// import * as S from './style'
import {
  Container,
  ButtonContainer,
  AppMenu,
} from './style'

const Home = () => {
  return (
    <Container>
      <ButtonContainer position={'left'}>
        <Button
          onClick={() => {}}
          color='#00ff15'
          colorOnSelected='#00b30f'
        >
          App Tour
        </Button>
      </ButtonContainer>

      <ButtonContainer position={'right'}>
        <Button
          onClick={() => {}}
        >
          Opciones
        </Button>
      </ButtonContainer>

      <AppMenu>
        <div className="app-logo">
          <span>Logo</span>
        </div>
        <div className="app-buttons">
          <Button textColor="black">Practicar</Button>
          <Button>Simulacro</Button>
          <Button>Estadisticas</Button>
        </div>
      </AppMenu>

    </Container>
  )
}

export default Home;
