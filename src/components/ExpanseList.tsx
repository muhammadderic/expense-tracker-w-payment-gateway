const ExpensesList = () => {
  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md">
      <li className="flex items-center px-4 py-2 border-b">
        <p>Expense description</p>
        <p className="ml-auto font-bold mr-[15px]">$ 0</p>
        <button className="text-[10px] h-[20px] w-[20px] bg-red-400 text-white rounded hover:bg-red-500">
          X
        </button>
      </li>
    </ul>
  )
}

export default ExpensesList
