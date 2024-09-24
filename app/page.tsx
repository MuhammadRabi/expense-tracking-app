import Expenses from "@/components/Expenses"
import ExpensesForm from "@/components/ExpensesForm"
export default async function Home() {
  return (
    <>
      <section className="pt-24 pb-12">
        <div className="container">
          <main className="flex-1 max-w-3xl mx-auto flex flex-col gap-6 p-4 bg-slate-200 rounded-md">
            <h1 className="text-2xl md:text-6xl text-center mb-8 text-red-500 capitalize font-bold">
              expenses tracking app
            </h1>
            <section className="flex-col gap-8 items-center md:flex-row flex justify-around bg-slate-50 p-8 rounded-md">
              <ExpensesForm />
              <Expenses />
            </section>
          </main>
        </div>
      </section>
    </>
  )
}
