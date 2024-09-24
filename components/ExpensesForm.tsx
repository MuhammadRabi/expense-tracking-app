"use client"

import { addExpense } from "@/lib/actions"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useRef } from "react"

function ExpensesForm() {
  const formRef = useRef<HTMLFormElement>(null)
  //const [state, formAction] = useFormState(addExpense, null)

  if (formRef.current) {
    formRef.current.reset()
  }

  return (
    <div className="flex-1">
      <form
        action={addExpense}
        ref={formRef}
        className="bg-[#EBE3D5] dark:bg-slate-600 rounded-md flex-col w-[225px] max-w-xs mx-auto flex gap-6 p-4"
      >
        <div className="flex items-center gap-4">
          <label htmlFor="title" className="text-center">
            title
          </label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="your item name"
            W-24
          />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="amount" className="text-center">
            amount
          </label>
          <Input type="number" name="amount" placeholder="the amount" />
        </div>
        <Button className="w-fit ml-auto capitalize bg-[#B0A695] dark:bg-slate-800 dark:text-white">
          add expense
        </Button>
      </form>
    </div>
  )
}

export default ExpensesForm
