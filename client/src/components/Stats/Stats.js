import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
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
import { QUERY_SCORES, QUERY_GAMES} from '../../utils/queries';
import { useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';

//Score needs to be auto updated with conditional features where if the score is higher than the current score then only will the score be changed other wise it remains the same as for the name we type them in as per meeting. --> PJ

const Stats = () => {
  const bar = new URL('../../images/bar.gif', import.meta.url);

  const { loading, data } = useQuery(QUERY_GAMES);

  console.log('data:', data?.games);

  return (
    <div>
      <Tabs size='lg' variant='enclosed'>
        <TabList>
          {data?.games.map((game, i) => { 
            return <Tab key={i}>{game.gameName}</Tab>
          })}
        </TabList>
      <TabPanels>

      {data?.games.map((game, i) => {
        return <TabPanel key={i}>
      <TableContainer>
        <div>
          <Image src={bar} alt='bar-image' />
        </div>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>Player High Score</Th>
              <Th isNumeric>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {game.topScores.map((topScore, i) => {
              console.log('topscore:', topScore)
              return <Tr key={i}>
                <Td>{topScore.username}</Td>
                <Td isNumeric>{topScore.score}</Td>
            </Tr>
              })}
          </Tbody>
        </Table>
      </TableContainer>
      </TabPanel>
      })}
      </TabPanels>
      </Tabs>
    </div>
  );
};

export default Stats;
