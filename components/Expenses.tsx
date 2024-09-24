import React from "react"
import ExpenseItem, { ItemProps } from "./ExpenseItem"
import { getExpenses } from "@/lib/expenses"

export default async function Expenses() {
  const expenses: ItemProps[] = await getExpenses()

  const getExpensesTotal = () => {
    return expenses.reduce((total, item) => total + item.amount, 0).toFixed(0)
  }

  return (
    <section className="flex-1 flex flex-col gap-4">
      {expenses.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}

      {/* total expenses */}
      <div className="text-center p-3 max-w-64 font-bold bg-[#776B5D] text-white rounded-md uppercase">
        total = ${getExpensesTotal()}
      </div>
    </section>
  )
}
