import { Container, Box, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FlashcardPack, Pagination } from "../components";
import { useStore } from "../stores";

const FlashcardList = () => {
  const { flashcard_id: flashcard_id_param } = useParams();
  const {
    flashcard_pack: { flashcard_pack_name, flashcard_pack_content },
    flashcards,
    page,
    setPage,
    setFlashcardPack,
  } = useStore();

  useEffect(() => {
    const flashcard_pack = flashcards.find(
      (flashcard) => flashcard.flashcard_pack_id === Number(flashcard_id_param)
    );
    if (flashcard_pack) {
      setFlashcardPack(flashcard_pack);
    }
  }, [flashcards, flashcard_id_param, setFlashcardPack]);

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
            {flashcard_pack_content && (
              <FlashcardPack
                flashcardPack={flashcard_pack_content}
                page={page}
              />
            )}
            <Pagination
              count={flashcard_pack_content?.length || 0}
              pageSize={1}
              siblingCount={1}
              page={page}
              onPageChange={(e: { page: number }) => setPage(e.page)}
            />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default FlashcardList;
