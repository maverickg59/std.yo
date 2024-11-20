import {
  Box,
  Button,
  Collapse as ChakraCollapse,
  HStack,
  Icon,
  Stack,
  Text,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiChevronDown } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useStore } from "../stores";
import { usePathBase } from "../hooks";
import { useEffect } from "react";

type Props = {
  name: string;
  content: { content_id: number; content_name: string }[];
  icon: IconType;
  urlBasePath: string;
};

export const Collapse = ({ name, content, icon, urlBasePath }: Props) => {
  const bgColor = useColorModeValue(undefined, "gray.700");
  const boxShadow = useColorModeValue("lg", "inner");
  const { isOpen, onToggle, onOpen } = useDisclosure();
  const { setPage: setQuizPage, setPage: setFlashcardPage } = useStore();
  const pathBase = usePathBase();
  const { quiz_id: quiz_id_param, flashcard_id: flashcard_id_param } =
    useParams();

  useEffect(() => {
    const isRendered = content.some(
      (item) => item.content_id === Number(quiz_id_param ?? flashcard_id_param)
    );
    if (isRendered) {
      onOpen();
    }
  }, [content, quiz_id_param, flashcard_id_param, onOpen]);

  return (
    <Box>
      <Button
        variant="tertiary"
        onClick={onToggle}
        justifyContent="space-between"
        alignContent="flex-start"
        width="full"
      >
        <HStack spacing="3">
          <Icon as={icon} />
          <Text fontSize="md" as="span">
            {name}
          </Text>
        </HStack>
        <PopoverIcon isOpen={isOpen} />
      </Button>
      <ChakraCollapse in={isOpen} animateOpacity>
        <Stack
          as="ul"
          whiteSpace="nowrap"
          spacing="1"
          alignItems="flex-start"
          px="4"
          py="1"
        >
          {content
            ? content.map(({ content_name, content_id }) => {
                const isRendered =
                  content_id === Number(quiz_id_param ?? flashcard_id_param);
                return (
                  <Box
                    fontSize="sm"
                    boxShadow={isRendered ? boxShadow : undefined}
                    backgroundColor={isRendered ? bgColor : undefined}
                    px={4}
                    py={1}
                    borderRadius={2}
                    listStyleType="none"
                    as="li"
                    key={content_name}
                  >
                    <Link
                      onClick={() =>
                        pathBase === "quiz"
                          ? setQuizPage(1)
                          : setFlashcardPage(1)
                      }
                      to={`${urlBasePath}/${content_id}`}
                      key={content_name}
                    >
                      {content_name}
                    </Link>
                  </Box>
                );
              })
            : null}
        </Stack>
      </ChakraCollapse>
    </Box>
  );
};

export const PopoverIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
  };
  return <Icon aria-hidden as={FiChevronDown} __css={iconStyles} />;
};
