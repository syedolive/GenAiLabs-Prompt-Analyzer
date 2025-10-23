import { useQuery } from "@tanstack/react-query";
import { exportPrompt } from "@/lib/network";

/**
 * Custom hook for fetching prompt export data
 * @param id The prompt ID to export
 * @param enabled Optional flag to control when the query runs
 */
export const useFetchExport = (id: string, enabled = true) => {
  return useQuery({
    queryKey: ["export-prompt", id],
    queryFn: async () => {
      const response = await exportPrompt(id);
      return response.data;
    },
    enabled,
  });
};

export default useFetchExport;