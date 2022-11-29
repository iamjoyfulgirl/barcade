import { useEffect, useState } from 'react';
import { Text, Button } from '@chakra-ui/react';
import styled from 'styled-components';
import { ADD_SCORE } from '../../utils/mutation';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { QUERY_USER } from '../../utils/queries';

const birdSize = 100;
const gameHeight = 1000;
const gameWidth = 1000;
const gravity = 10;
const jumpHeight = 150;
const pipeWidth = 100;
const pipeHole = birdSize * 3;

function App() {
  const [birdTop, setBirdTop] = useState(gameHeight / 2);
  const [gameStart, setGamestart] = useState(false);
  const [pipeHeight, setPipeheight] = useState(0);
  const [pipeLeft, setPipeleft] = useState(gameWidth - pipeWidth);
  const [score, setScore] = useState(0);
  const [topScores, settopScores] = useState();

  const [addScore, { loading, error }] = useMutation(ADD_SCORE);

  const bottomPipe = gameHeight - pipeHeight - pipeHole;

  let userId;

  if (Auth.loggedIn()) {
    userId = Auth.getProfile().data._id;
  }

  const { data } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  const user = data?.user || {};
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

  const saveScore = async () => {
    try {
      await addScore({
        variables: {
          userId: user?._id,
          username: user?.username,
          gameName: 'Flappy Bird',
          score: topScores,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    let pipeID;
    if (gameStart && pipeLeft >= -pipeWidth) {
      pipeID = setInterval(() => {
        setPipeleft((pipeLeft) => pipeLeft - 20);
      }, 30);
      return () => {
        clearInterval(pipeID);
      };
    } else {
      setPipeleft(gameWidth - pipeWidth);
      setPipeheight(Math.floor(Math.random() * (gameHeight - pipeHole)));
      setScore((score) => score + 1);
    }
  }, [gameStart, pipeLeft]);

  useEffect(() => {
    const hitTop = birdTop >= 0 && birdTop < pipeHeight;
    const hitBottom = birdTop <= 1000 && birdTop >= 1000 - bottomPipe;
    if (pipeLeft >= 0 && pipeLeft <= pipeWidth && (hitTop || hitBottom)) {
      setGamestart(false);
      settopScores(score);
    }
  }, [birdTop, pipeHeight, bottomPipe, pipeLeft]);

  const jumpHandle = () => {
    let jump = birdTop - jumpHeight;
    if (!gameStart) {
      setGamestart(true);
      setScore(0);
    } else if (setBirdTop < 0) {
      setBirdTop(gameHeight / 2);
    } else {
      setBirdTop(jump);
    }
  };

  return (
    <Div>
      <Button onClick={saveScore} className='btn check'>
        Save score!
      </Button>
      <Div onClick={jumpHandle}>
        <Text fontSize='20px' position='relative' objectPosition='center'>
          {score}
        </Text>
        <BirdContainer
          className='gameBox'
          height={gameHeight}
          width={gameWidth}
        >
          <PipeContainer>
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
          </PipeContainer>
          <Bird className='theBird' size={birdSize} top={birdTop} />
        </BirdContainer>
      </Div>
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
  left: -100px;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const BirdContainer = styled.div`
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
const PipeContainer = styled.div`
  display: block;
`;

export default App;
