import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClien = useQueryClient();
  const { mutate: checkout, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "خارج-شده",
      }),
    onSuccess: (data) => {
      toast.success(`ثبت خروج رزرو  #${data.id} با موفقیت انجام شد `);
      queryClien.invalidateQueries();
    },

    onError: () => {
      toast.error(`خطا هنگام ثبت خروج لطفا دوباره تلاش کنید`);
    },
  });

  return { checkout, isCheckingOut };
}
