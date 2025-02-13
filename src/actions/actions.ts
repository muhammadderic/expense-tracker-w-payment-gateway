"use server"

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const addExpense = async (formData: FormData) => {
  await prisma.expense.create({
    data: {
      description: formData.get("description") as string,
      amount: Number(formData.get("amount")),
    },
  });

  revalidatePath("/dashboard");
}