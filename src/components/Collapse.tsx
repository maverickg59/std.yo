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
  content: { id: number; name: string }[];
  icon: IconType;
  urlBasePath: string;
};

export const Collapse = ({ name, content, icon, urlBasePath }: Props) => {
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
        <Stack
          whiteSpace="nowrap"
          spacing="1"
          alignItems="flex-start"
          ps="8"
          py="1"
        >
          {content &&
            content.map(({ name, id }) => (
              <Link to={`${urlBasePath}/${id}`} key={name}>
                {name}
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
