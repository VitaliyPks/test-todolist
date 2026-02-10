export interface TTodo {
  id: number;
  text: string;
  completed: boolean;
}

export type TFilterType = "all" | "active" | "completed";

export interface TTodoState {
  todos: TTodo[];
  filter: TFilterType;
}
