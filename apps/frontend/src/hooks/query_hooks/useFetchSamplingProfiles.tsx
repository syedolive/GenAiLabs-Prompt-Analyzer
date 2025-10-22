import { getSamplingProfiles } from "@/lib/network";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { SAMPLING_PROFILES_KEY } from "./query_keys";

export function useFetchSamplingProfiles() {
  const { data, isLoading, error } = useQuery({
    queryKey: [SAMPLING_PROFILES_KEY],
    queryFn: getSamplingProfiles,
  });
  const samplingProfiles = useMemo(() => data?.data || [], [data]);
  return { samplingProfiles, isLoading, error };
}
