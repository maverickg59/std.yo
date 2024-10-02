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

type Props = {
  name: string;
  content: { quiz_id: number; quiz_name: string }[];
  icon: IconType;
};

export const Collapse = ({ name, content, icon }: Props) => {
  const { isOpen, onToggle } = useDisclosure();
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
        <Stack spacing="1" alignItems="stretch" ps="8" py="1">
          {content &&
            content.map(({ quiz_name, quiz_id }) => (
              <Link to={`quiz/${quiz_id}`} key={quiz_name}>
                {quiz_name}
              </Link>
            ))}
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
