import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useEditCabin } from "./useEditCabin";
import { useCreateCabin } from "./useCreateCabin";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const { errors } = formState;

  function onSubmit(data) {
    const image =
      typeof data?.image === "string" ? data?.image : data?.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image: image }, id: editId },
        // necessary
        { onSuccess: () => reset() }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          // necessary
          onSuccess: () => reset(),
        }
      );
    // reset in react query v5
    isEditSession && reset({ editValues });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="شماره اتاق" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          defaultValue={""}
          disabled={isWorking}
          {...register("name", { required: "این فیلد الزامی است" })}
        />
      </FormRow>

      <FormRow label="نهایت ظرفیت" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
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
          disabled={isWorking}
          defaultValue={""}
          {...register("regularPrice", {
            required: "این فیلد الزامی است",
            valueAsNumber: true,
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
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            valueAsNumber: true,
            required: "این فیلد الزامی است",
            min: {
              value: 0,
              message: "عدد منفی مجاز نیست",
            },
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
          defaultValue=""
          disabled={isWorking}
          {...register("description", { required: "این فیلد الزامی است" })}
        />
      </FormRow>

      <FormRow label="اضافه کردن عکس اتاق" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          disabled={isWorking}
          {...register("image", {
            required: isEditSession ? false : "این فیلد الزامی است",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button $variation="secondary" type="reset">
          لغو
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "ویرایش کردن کابین" : "اضافه کردن کابین"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
