import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { PROMPTS_KEY } from "./query_keys";
import { useMemo } from "react";
import { getPrompts } from "@/lib/network";

export function useFetchAllPrompts() {
  const { isFetchingNextPage, isLoading, hasNextPage, data } = useInfiniteQuery(
    {
      queryKey: [PROMPTS_KEY],
      initialPageParam: 1,
      queryFn: async ({ pageParam }) => await getPrompts(pageParam),
      getNextPageParam: (lastPage) =>
        lastPage.data.has_next_page ? lastPage.data.next_page : undefined,
    }
  );
  const prompts = useMemo(
    () => data?.pages.flatMap((page) => page.data.data) || [],
    [data]
  );

  return {
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    prompts,
  };
}
