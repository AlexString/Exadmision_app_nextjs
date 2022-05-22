// Components
import Button from "components/block/Button";
import Link from 'next/link';

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
          <span></span>
        </div>
        <div className="app-buttons">

          <Link href="/practice">
            <a>
              <Button onClick={() => {}}>Practicar</Button>
            </a>
          </Link>

          <Link href="/simulacrum">
            <a>
              <Button onClick={() => {}}>Simulacro</Button>
            </a>
          </Link>

          <Link href="/stadistics">
            <a>
              <Button onClick={() => {}}>Estadísticas</Button>
            </a>
          </Link>

        </div>
      </AppMenu>

    </Container>
  )
}

export default Home;
