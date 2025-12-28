import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="اسم کامل" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "این فیلد الزامی است" })}
        />
      </FormRow>

      <FormRow label="آدرس ایمیل" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "این فیلد الزامی است",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "لطفا یک آدرس ایمیل معتبر ارائه دهید",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="رمز عبور (حداقل 9 کاراکتر)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "این فیلد الزامی است",
            minLength: {
              value: 8,
              message: "رمز عبور باید حداقل 8 کاراکتر داشته باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label="تکرار پسورد" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "این فیلد الزامی است",
            validate: {
              validate: (value) =>
                value === getValues().password ||
                "رمز عبور باید مطابقت داشته باشد",
            },
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button $variation="secondary" type="reset">
          لغو
        </Button>
        <Button>ایجاد یک کاربر جدید</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
