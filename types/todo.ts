export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface Totals {
  total: number;
  active: number;
  completed: number;
}
