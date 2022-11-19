import styled from 'styled-components';

const BIRD_SIZE = 30;
const GAME_HEIGHT = 1000;
const GAME_WIDTH = 1000;

function App() {
  return (
    <Div>
      <GameContainer height={GAME_HEIGHT} width={GAME_WIDTH}>
        <Bird size={BIRD_SIZE} />
      </GameContainer>
    </Div>
  );
}

const Bird = styled.div`
  background-color: black;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: 50%;
  border-radius: 50%;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const GameContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: green;
`;

export default App;
