import { Container, Box, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FlashcardPack, Pagination } from "../components";
import { flashcards } from "../data";
import { useFlashcardStore } from "../stores";

const FlashcardList = () => {
  const { flashcard_id } = useParams();
  const {
    flashcards: { flashcard_pack, flashcard_pack_name },
    page,
    setPage,
    setFlashcards,
  } = useFlashcardStore();

  useEffect(() => {
    const flashcard = flashcards.find(
      (flashcard) => flashcard.flashcard_pack_id === Number(flashcard_id)
    );
    if (flashcard) {
      setFlashcards(flashcard);
    }
  }, [flashcard_id, setFlashcards]);

  return (
    <Container centerContent={true} maxW="100%">
      <Box w="100%" as="section" bg="bg.surface" pt={{ base: "4", md: "8" }}>
        <Box
          bg="bg.surface"
          px={{ base: "4", md: "6" }}
          boxShadow="sm"
          borderRadius="lg"
          alignContent="center"
        >
          <Stack spacing={6} align="center" p={6}>
            <Text textStyle="lg" fontWeight="medium">
              {flashcard_pack_name}
            </Text>
            <FlashcardPack flashcardPack={flashcard_pack} page={page} />
            <Pagination
              count={flashcard_pack.length}
              pageSize={1}
              siblingCount={1}
              page={page}
              onPageChange={(e) => setPage(e.page)}
            />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default FlashcardList;
