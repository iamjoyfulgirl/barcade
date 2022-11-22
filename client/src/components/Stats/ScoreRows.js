import React from 'react';
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


const ScoreRow = (props) => {

    return (
        <>
            <Tr>
              <Td>Guess Random Number</Td>
              {/* {player name  and to be called here function below here} */}
              <Td>Player name</Td>
              <Td isNumeric>20</Td>
            </Tr>
        </>
    )

}