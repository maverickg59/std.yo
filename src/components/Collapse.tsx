import {
  Box,
  Button,
  Collapse as ChakraCollapse,
  HStack,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiChevronDown } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useStore } from "../stores";
import { usePathBase } from "../hooks";
import { useEffect } from "react";

type Props = {
  name: string;
  content: { quiz_id: number; quiz_name: string }[];
  icon: IconType;
  urlBasePath: string;
};

export const Collapse = ({ name, content, icon, urlBasePath }: Props) => {
  const { isOpen, onToggle, onOpen } = useDisclosure();
  const { setPage: setQuizPage, setPage: setFlashcardPage } = useStore();
  const pathBase = usePathBase();
  const { quiz_id: quiz_id_param } = useParams();

  const isRenderedQuiz = content.some(
    (item) => item.quiz_id === Number(quiz_id_param)
  );

  useEffect(() => {
    if (isRenderedQuiz) {
      onOpen();
    }
  }, [quiz_id_param, isRenderedQuiz, onOpen]);

  return (
    <Box>
      <Button
        variant="tertiary"
        onClick={onToggle}
        justifyContent="space-between"
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
          px="8"
          py="1"
        >
          {content
            ? content.map(({ quiz_name, quiz_id }) => (
                <Box
                  fontSize="sm"
                  boxShadow={isRenderedQuiz ? "inner" : undefined}
                  backgroundColor={isRenderedQuiz ? "gray.700" : undefined}
                  px={4}
                  py={1}
                  borderRadius={2}
                  listStyleType="none"
                  as="li"
                  key={quiz_name}
                >
                  <Link
                    onClick={() =>
                      pathBase === "quiz" ? setQuizPage(1) : setFlashcardPage(1)
                    }
                    to={`${urlBasePath}/${quiz_id}`}
                    key={quiz_name}
                  >
                    {quiz_name}
                  </Link>
                </Box>
              ))
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
