import { useEffect, useState } from 'react';
import styled from 'styled-components';

const birdSize = 75;
const gameHeight = 1000;
const gameWidth = 1000;
const gravity = 10;
const jumpHeight = 150;
const pipeWidth = 100;
const pipeHole = birdSize * 3;

function App() {
  const [birdTop, setBirdTop] = useState(gameHeight / 2);
  const [gameStart, setGamestart] = useState(false);
  const [pipeHeight, setPipeheight] = useState(300);
  const [pipeLeft, setPipeleft] = useState(gameWidth - pipeWidth);

  const bottomPipe = gameHeight - pipeHeight - pipeHole;

  useEffect(() => {
    let timeID;
    if (gameStart && birdTop < gameHeight - birdSize) {
      timeID = setInterval(() => {
        setBirdTop((birdTop) => birdTop + gravity);
      }, 30);
    }
    return () => {
      clearInterval(timeID);
    };
  });

  useEffect(() => {
    let pipeID;
    if (gameStart && pipeLeft >= -pipeWidth) {
      pipeID = setInterval(() => {
        setPipeleft((pipeLeft) => pipeLeft - 5);
      }, 30);
      return () => {
        clearInterval(pipeID);
      };
    } else {
      setPipeleft(gameWidth - pipeWidth);
      setPipeheight(Math.floor(Math.random() * (gameHeight - pipeHole)));
    }
  });

  const jumpHandle = () => {
    let jump = birdTop - jumpHeight;
    if (!gameStart) {
      setGamestart(true);
    } else if (setBirdTop < 0) {
      setBirdTop(gameHeight / 2);
    } else {
      setBirdTop(jump);
    }
  };

  return (
    <Div onClick={jumpHandle}>
      <GameContainer className='gameBox' height={gameHeight} width={gameWidth}>
        <pipeContainer>
          <Pipe
            className='thePipes'
            top={0}
            width={pipeWidth}
            height={pipeHeight}
            left={pipeLeft}
          />
          <Pipe
            className='thePipes'
            top={pipeHole}
            width={pipeWidth}
            height={bottomPipe}
            left={pipeLeft}
          />
        </pipeContainer>
        <Bird className='theBird' size={birdSize} top={birdTop} />
      </GameContainer>
    </Div>
  );
}

const Bird = styled.image`
  position: relative;
  object-position: center;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  transition: 0.25s;
  left: 200px;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const GameContainer = styled.div`
  overflow: contain;
  display: flex;
  overflow: hidden;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

const Pipe = styled.div`
  position: relative;
  background-color: black;
  top: ${(props) => props.top}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
`;
const pipeContainer = styled.div`
  display: block;
`;

export default App;
