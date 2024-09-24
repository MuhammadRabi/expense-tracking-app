"use client"
import { deleteExpense } from "@/lib/actions"
import { Trash } from "lucide-react"
import React from "react"
import { toast } from "sonner"

export type ItemProps = { title: string; amount: number; id: number }

export default function ExpenseItem({ id, title, amount }: ItemProps) {
  const handleDelete = (id: number) => {
    deleteExpense(id)
    toast.warning(`${title} has been deleted!`)
  }

  return (
    <article className="bg-[#F3EEEA] text-amber-950 dark:bg-gray-800 max-w-64 shadow-md capitalize rounded-md px-6 py-2 relative">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm">${amount}</p>
      <Trash
        className="text-slate-800 duration-300 cursor-pointer hover:text-[#B0A695] absolute top-3 right-2"
        size={16}
        onClick={() => handleDelete(id)}
      />
    </article>
  )
}
