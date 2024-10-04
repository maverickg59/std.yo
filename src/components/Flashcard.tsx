import { useState } from "react";
import { Box } from "@chakra-ui/react";

const Flashcard = ({ term, definition }: Flashcard) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      width="300px"
      height="200px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      bg={isFlipped ? "white" : "blue.800"}
      color={isFlipped ? "black" : "white"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      cursor="pointer"
      onClick={handleFlip}
    >
      {isFlipped ? definition : term}
    </Box>
  );
};
type FPProps = {
  flashcardPack: Flashcard[];
  page: number;
};
export const FlashcardPack = ({ flashcardPack, page }: FPProps) => {
  const flashcardsArr = flashcardPack.map(({ term, definition }) => (
    <Flashcard key={term} term={term} definition={definition} />
  ));
  return flashcardsArr[page - 1];
};
