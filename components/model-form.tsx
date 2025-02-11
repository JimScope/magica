"use client"

import { Button } from "@heroui/button"
import { Textarea } from "@heroui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useRouter } from "next/navigation"

import { IProduct } from "@/types"
import FormProvider from "@/components/form-hooks/form-provider"
import RHFInput from "@/components/form-hooks/rhf-input"

const modelSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  categories: z.string(), // Simplified for now, will be array later
  price: z.coerce.number().min(0, {
    message: "Price must be a positive number.",
  }),
  img: z.string().url({ message: "Invalid image URL." }),
  vox: z.string().optional(),
  details: z.string().min(10, {
    message: "Details must be at least 10 characters.",
  }),
})

type ModelFormProps = {
  model: IProduct | null
}

const ModelForm = ({ model }: ModelFormProps) => {
  const router = useRouter()

  const form = useForm<z.infer<typeof modelSchema>>({
    resolver: zodResolver(modelSchema),
    defaultValues: model ?? {
      name: "",
      categories: "",
      price: 0,
      img: "",
      vox: "",
      details: "",
    },
  })

  const onSubmit = (data: z.infer<typeof modelSchema>) => {
    // Replace with actual create/update logic (server actions)
    console.log(data)
    if (model) {
      // Simulate update
      alert(`Model ${model.uuid} updated!`)
    } else {
      // Simulate create
      alert("New model created!")
    }
    router.push("/") // Redirect to home after submit
  }

  return (
    <FormProvider methods={form} onSubmit={form.handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <RHFInput label="Name" name="name" placeholder="Model Name" />
        <RHFInput
          label="Categories"
          name="categories"
          placeholder="Comma-separated categories"
        />
        <RHFInput label="Price" name="price" type="number" />
        <RHFInput label="Image URL" name="img" placeholder="Image URL" />
        <RHFInput label="VOX URL" name="vox" placeholder="VOX URL (optional)" />
        <Textarea
          {...form.register("details")}
          className="w-full"
          placeholder="Model Details"
        />

        <div className="flex gap-2">
          <Button type="submit">{model ? "Update" : "Create"}</Button>
          <Button variant="outline" onClick={() => router.push("/")}>
            Cancel
          </Button>
        </div>
      </div>
    </FormProvider>
  )
}

export default ModelForm
