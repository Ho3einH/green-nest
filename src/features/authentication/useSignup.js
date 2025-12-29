import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success("حساب کاربری با موفقیت ساخته شد");
    },
    onError: (error) => {
      console.log(error);
      throw new Error("ثبت نام کاربری با خطا موجه شد");
    },
  });

  return { signup, isPending };
}
