import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from '@chakra-ui/react';

import React from 'react';
//Score needs to be auto updated with conditional features where if the score is higher than the current score then only will the score be changed other wise it remains the same as for the name we type them in as per meeting. --> PJ

const Stats = () => {
  const bar = new URL('../../images/bar.gif', import.meta.url);
  return (
    <div>
      <TableContainer>
        <div>
          <Image src={bar} alt='bar-image' />
        </div>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>Games</Th>
              <Th>Player High Score</Th>
              <Th isNumeric>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Guess Random Number</Td>
              {/* {player name  and to be called here function below here} */}
              <Td>Player name</Td>
              <Td isNumeric>20</Td>
            </Tr>
            <Tr>
              <Td>Flappy Bird</Td>
              {/* {player name  and to be called here function below here} */}
              <Td>Player name</Td>
              <Td isNumeric>10</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Stats;
