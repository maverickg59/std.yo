import { object, string, array } from "superstruct";

export const FlashcardPackSchema = object({
  flashcard_pack_name: string(),
  flashcard_pack_category: string(),
  flashcard_pack_content: array(
    object({
      term: string(),
      definition: string(),
    })
  ),
});
