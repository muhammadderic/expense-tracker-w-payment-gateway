"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ExpenseProps } from "@/types/types";
import { editExpense } from "@/actions/actions";

const ExpenseEditForm = ({ expense }: { expense: ExpenseProps }) => {
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    formData.append("amount", amount.toString());

    await editExpense(formData, expense.id);
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-8 rounded overflow-hidden">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-3 py-2 outline-none"
      />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full px-3 py-2 outline-none"
      />

      <button type="submit" className="w-full bg-secondary hover:bg-secondary-dark text-white px-2 py-2 font-bold">
        Update Expense
      </button>
    </form>
  );
};

export default ExpenseEditForm;
