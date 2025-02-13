export type ExpenseListProps = {
  expenses: {
    id: number;
    description: string;
    amount: number;
    createdAt: Date;
  }[],
}

export type ExpenseProps = {
  id: number;
  description: string;
  amount: number;
  createdAt: Date;
}