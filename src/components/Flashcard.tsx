import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const Flashcard = ({
  term,
  definition,
}: Omit<Flashcard, "flashcard_pack_id" | "flashcard_id">) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      width={{ base: "80vw", md: "40vw" }}
      height={{ base: "60vh", md: "35vh" }}
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
      <Text textStyle="lg" fontWeight="medium">
        {isFlipped ? definition : term}
      </Text>
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
