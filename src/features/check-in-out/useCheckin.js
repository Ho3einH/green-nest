import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClien = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "وارد-شده",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`ثبت ورود رزرو  #${data.id} با موفقیت انجام شد `);
      queryClien.invalidateQueries();
      navigate("/");
    },

    onError: () => {
      toast.error(`خطا هنگام ثبت ورود لطفا دوباره تلاش کنید`);
    },
  });

  return { checkin, isCheckingIn };
}
