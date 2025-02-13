type ExpenseListProps = {
  expenses: {
    id: number;
    description: string;
    amount: number;
    createdAt: Date;
  }[],
}

const ExpensesList = ({ expenses }: ExpenseListProps) => {
  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md">
      {
        (expenses.length > 0) ? (
          expenses.map((expense) => (
            <li key={expense.id} className="flex items-center px-4 py-2 border-b">
              <p>{expense.description}</p>
              <p className="ml-auto font-bold mr-[15px]">$ {expense.amount}</p>
              <button className="text-[10px] h-[20px] w-[20px] bg-red-400 text-white rounded hover:bg-red-500">
                X
              </button>
            </li>
          ))
        ) : (
          <li className="flex items-center px-4 py-2 justify-center text-gray-500">
            No expenses recorded yet.
          </li>
        )
      }
    </ul>
  )
}

export default ExpensesList
