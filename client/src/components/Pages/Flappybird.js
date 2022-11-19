import { useEffect, useState } from 'react';
import styled from 'styled-components';

const birdSize = 30;
const gameHeight = 1000;
const gameWidth = 1000;
const gravity = 2;
const jumpHeight = 100;

function App() {
  const [birdTop, setBirdTop] = useState(0);

  useEffect(() => {
    let timeID;
    if (birdTop < gameHeight - birdSize) {
      timeID = setInterval(() => {
        setBirdTop((birdTop) => birdTop + gravity);
      }, 30);
    }
    return () => {
      clearInterval(timeID);
    };
  });

  const jumpHandle = () => {
    let jump = birdTop - jumpHeight;
    setBirdTop(jump);
  };

  return (
    <Div onClick={jumpHandle}>
      <GameContainer height={gameHeight} width={gameWidth}>
        <Bird size={birdSize} top={birdTop} />
      </GameContainer>
    </Div>
  );
}

const Bird = styled.div`
  position: relative;
  object-position: center;
  background-color: black;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
  transition: 0.25s;
  left: 200px;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const GameContainer = styled.div`
  display: flex;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: green;
`;

export default App;
