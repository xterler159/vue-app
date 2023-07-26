import { get } from "@/services/api/axios";
import { useQuery } from "@tanstack/vue-query";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => await get("/users"),
  });
};
