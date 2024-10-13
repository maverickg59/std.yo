import {
  Box,
  BoxProps,
  Circle,
  createIcon,
  Icon,
  Stack,
  StackProps,
  useId,
  useRadio,
  useRadioGroup,
  UseRadioProps,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useMemo,
} from "react";
import { RxCross2 } from "react-icons/rx";

interface RadioCardGroupProps<T> extends Omit<StackProps, "onChange"> {
  name?: string;
  value?: T;
  defaultValue?: string;
  onChange?: (value: T) => void;
}

export const RadioCardGroup = <T extends string>(
  props: RadioCardGroupProps<T>
) => {
  const { children, name, defaultValue, value, onChange, ...rest } = props;
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    value,
    onChange,
  });

  const cards = useMemo(
    () =>
      Children.toArray(children)
        .filter<ReactElement<RadioCardProps>>(isValidElement)
        .map((card) => {
          return cloneElement(card, {
            radioProps: getRadioProps({
              value: card.props.value,
            }),
          });
        }),
    [children, getRadioProps]
  );

  return <Stack {...getRootProps(rest)}>{cards}</Stack>;
};

interface RadioCardProps extends BoxProps {
  value: string;
  radioProps?: UseRadioProps;
  isCorrect?: boolean;
  colorMode?: string;
}

export const RadioCard = (props: RadioCardProps) => {
  const { radioProps, children, isCorrect, colorMode, ...rest } = props;
  const { getInputProps, getRadioProps, getLabelProps, state } =
    useRadio(radioProps);
  const id = useId(undefined, "radio-button");

  const inputProps = getInputProps();
  const checkboxProps = getRadioProps();
  const labelProps = getLabelProps();
  return (
    <Box
      as="label"
      cursor="pointer"
      {...labelProps}
      sx={{
        ".focus-visible + [data-focus]": {
          boxShadow: "outline",
          zIndex: 1,
        },
      }}
    >
      <input {...inputProps} aria-labelledby={id} />
      <Box
        {...checkboxProps}
        borderWidth="2px"
        _checked={
          isCorrect
            ? { borderColor: "accent" }
            : { borderColor: colorMode === "dark" ? "red.300" : "red.500" }
        }
        borderRadius={10}
        p={3}
        {...rest}
      >
        <Stack direction="row">
          <Box flex="1">{children}</Box>
          {state.isChecked ? (
            <Circle
              bg={
                isCorrect
                  ? "accent"
                  : colorMode === "dark"
                  ? "red.300"
                  : "red.500"
              }
              size="4"
            >
              <Icon
                as={isCorrect ? CheckIcon : RxCross2}
                boxSize={isCorrect ? "2.5" : "3.5"}
                color="fg.inverted"
              />
            </Circle>
          ) : (
            <Circle borderWidth="2px" size="4" />
          )}
        </Stack>
      </Box>
    </Box>
  );
};

const CheckIcon = createIcon({
  displayName: "CheckIcon",
  viewBox: "0 0 12 10",
  path: (
    <polyline
      fill="none"
      strokeWidth="2px"
      stroke="currentColor"
      strokeDasharray="16px"
      points="1.5 6 4.5 9 10.5 1"
    />
  ),
});

type RCGQProps = {
  page: number;
  questions: Question[];
  value: string | undefined;
  quiz_id: string | undefined;
  handleRadioSelection: (
    e: string,
    quiz_id: number,
    questionId: number,
    correctAnswer: string
  ) => void;
};

export const RadioCardGroupQuestion = ({
  page,
  questions,
  value,
  quiz_id = "10000",
  handleRadioSelection,
}: RCGQProps) => {
  const { colorMode } = useColorMode();
  const questionsArr = questions.map(
    ({ question, questionId, choices, correctAnswer }, i) => (
      <>
        <Stack>
          <Text textStyle="md" fontWeight="medium">
            Question {i + 1}:
          </Text>
          <Text textStyle="md" color="fg.muted">
            {question}
          </Text>
        </Stack>
        <RadioCardGroup
          key={question}
          value={value}
          name={question}
          spacing="8"
          onChange={(e) =>
            handleRadioSelection(e, Number(quiz_id), questionId, correctAnswer)
          }
        >
          {Object.entries(choices).map(([key, value]) => (
            <RadioCard
              colorMode={colorMode}
              key={value}
              value={key}
              isCorrect={key === correctAnswer}
            >
              <Text color="fg.emphasized" fontWeight="medium" fontSize="sm">
                Option {key}
              </Text>
              <Text color="fg.muted" textStyle="sm">
                {value}
              </Text>
            </RadioCard>
          ))}
        </RadioCardGroup>
      </>
    )
  );
  return questionsArr[page - 1];
};
