import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../../Button/Button";
import Input from "../../Input/Input";

interface Tenant {
  firstname: string;
  lastname: string;
  email: string;
  document: number;
  phone: string;
  address: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Tenant>();

  const onSubmit: SubmitHandler<Tenant> = (data) => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="number"
        min="0"
        placeholder="Id Document"
        label="Document"
        {...register("document", {
          required: "Document is required.",
          valueAsNumber: true,
          min: { value: 0, message: "Min Value is 0" },
        })}
        error={errors.document?.message}
      />
      <Input
        type="text"
        placeholder="firstname"
        label="Name"
        {...register("firstname", { required: "Name is required." })}
        error={errors.firstname?.message}
      />
      <Input
        type="text"
        placeholder="lastname"
        label="LastName"
        {...register("lastname", { required: "LastName is required." })}
        error={errors.lastname?.message}
      />

      <Input
        type="email"
        placeholder="Email"
        label="Email"
        {...register("email", { required: "email is required." })}
        error={errors.email?.message}
      />

      <Input
        type="tel"
        placeholder="Phone"
        label="Phone"
        {...register("phone", {
          required: "Phone is required.",
          pattern: { value: /^[0-9]*$/, message: "Fill a valid number phone" },
        })}
        error={errors.phone?.message}
      />

      <Input
        type="text"
        placeholder="Address"
        label="Address"
        {...register("address", { required: "Address is required." })}
        error={errors.address?.message}
      />

      <Button type="submit" label="Submit" variant="secondary" />
    </form>
  );
};

export default Form;
