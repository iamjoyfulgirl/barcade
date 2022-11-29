import React from "react";
import { Checkbox, Stack, Box, Heading, Image } from "@chakra-ui/react";

const BarDrinks = () => {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  // const allChecked = checkedItems.every(Boolean);
  // const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const bartender = new URL("../../images/bartender.png", import.meta.url);
  return (
    <>
      <Box className="quoutes">
        <Heading
          fontSize={{ base: "3xl", md: "4xl", lg: "2xl" }}
          textAlign={"center"}
          mt={4}
        >
          <Image src={bartender} alt="bar-image" />
        </Heading>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) =>
              setCheckedItems([e.target.checked, checkedItems[1]])
            }
          >
            Cocktail: Mai Tai
          </Checkbox>
          {/* <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            Beer: Blue Moon
          </Checkbox> */}
          <Checkbox
            isChecked={checkedItems[2]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            Cocktail: Extra Dirty Martini with Gin
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[3]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            Cocktail: Lime Margarita with Salt
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[4]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            Beer: Pilsner
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[5]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            Cocktail: Strawberry Daiquiri
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[6]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            Beer: Heineken
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[7]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            Beer: Oat Beer
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[8]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            Cocktail: Scotch on the Rocks
          </Checkbox>
        </Stack>
      </Box>
    </>
  );
};

export default BarDrinks;
