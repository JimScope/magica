"use client"

import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { Button } from "@heroui/button"
import { Card, CardBody } from "@heroui/react"

import RHFInput from "../form-hooks/rhf-input"

import { EmailIcon, GithubIcon, GoogleIcon } from "@/components/icons"

export default function Login() {
  const [showInputs, setShowInputs] = useState(false)
  const { formState } = useFormContext()
  const isSubmitDisabled = !formState.isValid || formState.isSubmitting

  const handleContinueWithEmail = () => {
    setShowInputs(true)
  }

  return (
    <>
      <Card className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <CardBody
          style={{
            border: "0px solid rgb(229, 231, 235)",
          }}
        >
          <div
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
            }}
          >
            <h1 className="mb-4 text-xl font-medium">Log In</h1>
            <div className="flex flex-col gap-4">
              {showInputs ? (
                <>
                  <RHFInput
                    isClearable
                    label="Email"
                    name="email"
                    placeholder="dynamo@example.com"
                    type="email"
                    variant="bordered"
                  />
                  <RHFInput
                    isClearable
                    label="Password"
                    name="password"
                    placeholder="***********"
                    type="password"
                    variant="bordered"
                  />
                  <Button
                    color="primary"
                    disabled={isSubmitDisabled}
                    isLoading={formState.isSubmitting}
                    type="submit"
                  >
                    Login
                  </Button>
                </>
              ) : (
                <Button
                  color="primary"
                  startContent={<EmailIcon />}
                  onPress={handleContinueWithEmail}
                >
                  Continue with Email
                </Button>
              )}
            </div>
            <div
              className="flex items-center gap-4 py-2"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
              }}
            >
              <hr
                className="bg-divider border-none w-full h-divider flex-1"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "inherit",
                  borderTopWidth: "1px",
                  margin: "0px",
                  height: "1px",
                  width: "100%",
                  flex: "1 1 0%",
                  borderStyle: "none",
                  backgroundColor:
                    "hsl(0 0% 100%/var(--heroui-divider-opacity,1))",
                }}
              />
              <p
                className="shrink-0 text-tiny text-default-500"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  flexShrink: 0,
                  fontSize: "0.75rem",
                  lineHeight: "1rem",
                  color:
                    "hsl(240 5.03% 64.9%/var(--heroui-default-500-opacity,1))",
                }}
              >
                OR
              </p>
              <hr
                className="bg-divider border-none w-full h-divider flex-1"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "inherit",
                  borderTopWidth: "1px",
                  margin: "0px",
                  height: "1px",
                  width: "100%",
                  flex: "1 1 0%",
                  borderStyle: "none",
                  backgroundColor:
                    "hsl(0 0% 100%/var(--heroui-divider-opacity,1))",
                }}
              />
            </div>
            <div
              className="flex flex-col gap-y-2"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                rowGap: "0.5rem",
                opacity: 1,
                transform: "none",
              }}
            >
              {showInputs ? (
                <Button onPress={() => setShowInputs(false)}>
                  Other Login Options
                </Button>
              ) : (
                <div
                  className="flex flex-col gap-2"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <Button startContent={<GoogleIcon />}>
                    Continue with Google
                  </Button>
                  <Button startContent={<GithubIcon />}>
                    Continue with Github
                  </Button>
                </div>
              )}
              <p
                className="mt-3 text-center text-small"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  marginTop: "0.75rem",
                  textAlign: "center",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                }}
              >
                Need to create an account? 
                <a
                  className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
                  href="https://nextui.pro/component/application/centered-login-with-animated-form?theme=dark&preview=true#"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}
