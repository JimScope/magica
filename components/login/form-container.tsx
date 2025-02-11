"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import FormProvider from "../form-hooks/form-provider"

import Login from "@/components/login/login"
import { login } from "@/app/login/actions"

export default function LoginForm() {
  const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  const methods = useForm({
    resolver: zodResolver(LoginSchema),
  })

  const { handleSubmit } = methods

  const onSubmit = handleSubmit(async (data) => {
    await login(data)
  })

  return (
    <FormProvider {...{ methods, onSubmit }}>
      <Login />
    </FormProvider>
  )
}
