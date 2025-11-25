import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

const FormRow2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const queryClient = useQueryClient();
  const { errors } = formState;

  const { isPending: isCreating, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("کابین جدید با موفقیت اضافه شد");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="شماره اتاق" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", { required: "این فیلد الزامی است" })}
        />
      </FormRow>

      <FormRow label="نهایت ظرفیت" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            valueAsNumber: true,
            required: "این فیلد الزامی است",
            min: { value: 1, message: "مقدار ظرفیت حداقل باید 1 باشد" },
          })}
        />
      </FormRow>

      <FormRow label="قیمت پایه" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "این فیلد الزامی است",
            min: {
              value: 1,
              message: "حداقل قیمت باید 1 باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label="تخفیف" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating}
          {...register("discount", {
            valueAsNumber: true,
            required: "این فیلد الزامی است",
            validate: (value) =>
              value <= getValues("regularPrice") ||
              "نخفیف بیش از قیمت اصلی مجاز نیست",
          })}
        />
      </FormRow>

      <FormRow label="توضیحات" error={errors?.description?.message}>
        <Textarea
          type="text"
          id="description"
          disabled={isCreating}
          defaultValue=""
          {...register("description", { required: "این فیلد الزامی است" })}
        />
      </FormRow>

      <FormRow label="اضافه کردن عکس اتاق">
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button $variation="secondary" type="reset">
          لغو
        </Button>
        <Button onClick={() => onSubmit} disabled={isCreating}>
          اضافه کردن کابین
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
