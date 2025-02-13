"use client"

import { ExpenseListProps } from "@/types/types"
import { useRouter } from "next/navigation"

const ExpensesList = ({ expenses }: ExpenseListProps) => {
  const router = useRouter();

  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md">
      {
        (expenses.length > 0) ? (
          expenses.map((expense) => (
            <li key={expense.id} className="flex items-center px-4 py-2 border-b">
              <p>{expense.description}</p>
              <p className="ml-auto font-bold mr-[15px]">$ {expense.amount}</p>

              {/* Edit Button (Using useRouter for Query Params) */}
              <button
                onClick={() => router.push(`/dashboard/edit/${expense.id}`)}
                className="text-[10px] h-[20px] w-[40px] bg-blue-500 text-white rounded flex items-center justify-center hover:bg-blue-600 mr-2"
              >
                Edit
              </button>

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
