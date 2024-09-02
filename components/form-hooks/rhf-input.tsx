import { Controller, useFormContext } from "react-hook-form"
import { Input, InputProps } from "@nextui-org/react"

type RHFInputProps = Omit<InputProps, "name"> & {
  name: string
}

const RHFInput = ({ name, ...props }: RHFInputProps) => {
  const formContext = useFormContext()
  const { control } = formContext

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          {...field}
          isClearable={props.isClearable}
          label={props.label}
          placeholder={props.placeholder}
          type={props.type}
          variant={props.variant}
        />
      )}
    />
  )
}

export default RHFInput
