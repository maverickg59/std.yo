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
import { Link } from "react-router-dom";
import { useStore } from "../stores";
import { usePathBase } from "../hooks";

type Props = {
  name: string;
  content: { quiz_id: number; quiz_name: string }[];
  icon: IconType;
  urlBasePath: string;
};

export const Collapse = ({ name, content, icon, urlBasePath }: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  const { setPage: setQuizPage, setPage: setFlashcardPage } = useStore();
  const pathBase = usePathBase();
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
          <Text as="span">{name}</Text>
        </HStack>
        <PopoverIcon isOpen={isOpen} />
      </Button>
      <ChakraCollapse in={isOpen} animateOpacity>
        <Stack
          whiteSpace="nowrap"
          spacing="1"
          alignItems="flex-start"
          ps="8"
          py="1"
        >
          {content
            ? content.map(({ quiz_name, quiz_id }) => (
                <Link
                  onClick={() =>
                    pathBase === "quiz" ? setQuizPage(1) : setFlashcardPage(1)
                  }
                  to={`${urlBasePath}/${quiz_id}`}
                  key={quiz_name}
                >
                  {quiz_name}
                </Link>
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
