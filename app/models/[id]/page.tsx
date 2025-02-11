import { redirect } from "next/navigation"
import { notFound } from "next/navigation"

import { IProduct } from "@/types"
import { _models } from "@/_mock/models"
import ModelForm from "@/components/model-form"

type Props = {
  params: {
    id: string
  }
}

const getModel = (id: string): IProduct | undefined => {
  return _models.find((model) => model.uuid === id)
}

const Page = ({ params }: Props) => {
  const { id } = params

  if (id !== "new" && !getModel(id)) {
    notFound()
  }

  const model = id === "new" ? null : getModel(id)

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        {id === "new" ? "Create Model" : "Edit Model"}
      </h1>
      <ModelForm model={model} />
    </>
  )
}

export default Page
