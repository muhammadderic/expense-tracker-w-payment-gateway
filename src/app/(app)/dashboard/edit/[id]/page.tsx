import { getExpenseById } from "@/actions/actions";
import ExpenseEditForm from "@/components/ExpenseEditForm";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = (await params).id;
  const expense = await getExpenseById(Number(id));

  if (!expense) {
    return <p className="text-red-500">Expense not found</p>;
  }

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-white text-center">Edit Expense</h1>
      <ExpenseEditForm expense={expense} />
    </div>
  );
}

export default Page
