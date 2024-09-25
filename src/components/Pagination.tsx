import { Pagination as ArkPagination } from "@ark-ui/react";
import {
  Button,
  Center,
  IconButton,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export type PaginationProps = Omit<ArkPagination.RootProps, "children">;

export const Pagination = (props: PaginationProps) => {
  return (
    <ArkPagination.Root {...props}>
      <ArkPagination.Context>
        {({ pages, page }) => (
          <List display="flex" justifyContent="space-between">
            <ListItem>
              <ArkPagination.PrevTrigger asChild>
                <IconButton
                  variant="secondary"
                  isRound
                  icon={<FiArrowLeft />}
                  aria-label="Previous Page"
                />
              </ArkPagination.PrevTrigger>
            </ListItem>

            <List display={{ base: "none", md: "flex" }} gap="1">
              {pages.map((page, index) =>
                page.type === "page" ? (
                  <ListItem key={index}>
                    <ArkPagination.Item asChild {...page}>
                      <Button
                        variant="secondary"
                        borderRadius="full"
                        _selected={{ bg: "gray.50", _dark: { bg: "gray.800" } }}
                      >
                        {page.value}
                      </Button>
                    </ArkPagination.Item>
                  </ListItem>
                ) : (
                  <ListItem key={index} alignItems="center" display="flex">
                    <ArkPagination.Ellipsis index={index}>
                      <Button
                        variant="secondary"
                        borderRadius="full"
                        pointerEvents="none"
                        width="10"
                      >
                        &#8230;
                      </Button>
                    </ArkPagination.Ellipsis>
                  </ListItem>
                )
              )}
            </List>
            <ListItem as={Center} display={{ md: "none" }}>
              <Text fontWeight="medium" color="fg.emphasized">
                Page {page} of {pages.length + 1}
              </Text>
            </ListItem>

            <ListItem>
              <ArkPagination.NextTrigger asChild>
                <IconButton
                  variant="secondary"
                  isRound
                  icon={<FiArrowRight />}
                  aria-label="Next Page"
                />
              </ArkPagination.NextTrigger>
            </ListItem>
          </List>
        )}
      </ArkPagination.Context>
    </ArkPagination.Root>
  );
};
