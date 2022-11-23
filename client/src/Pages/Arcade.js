import { Button, Container } from '@chakra-ui/react';
import Flappybird from './Flappybird';
import Guessing from '../components/Games/Guessing';
import { useState } from 'react';

const Arcade = () => {
  const [currentGame, setCurrentGame] = useState('none');
  console.log(currentGame);
  switch (currentGame) {
    case 'guessing':
      return <Guessing />;
    case 'flappybird':
      return <Flappybird />;
    case 'none':
    default:
      return (
        <Container>
          <Button onClick={() => setCurrentGame('guessing')}>
            Play Guessing Game
          </Button>
          ;
          <Button onClick={() => setCurrentGame('flappybird')}>
            Play Game Flappybird
          </Button>
          ;
        </Container>
      );
  }
};

export default Arcade;
