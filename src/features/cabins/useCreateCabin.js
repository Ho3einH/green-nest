import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin as createCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: (newCabinData) => createCabinApi(newCabinData),
    onSuccess: () => {
      toast.success("کابین جدید با موفقیت اضافه شد");
      queryClient.invalidateQueries(["cabins"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { createCabin, isCreating };
}
