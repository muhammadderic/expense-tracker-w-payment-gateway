import ExpensesList from "@/components/ExpanseList"
import ExpensesForm from "@/components/ExpenseForm"
import { prisma } from "@/lib/db"

const Page = async () => {
  const expenses = await prisma.expense.findMany();

  return (
    <div>
      <h1 className="text-3xl font-bold text-white text-center">Dashboard</h1>

      <div className="w-full max-w-[600px] mx-auto">
        <ExpensesList expenses={expenses} />

        <ExpensesForm />
      </div>
    </div>
  )
}

export default Page
