import classNames from "classnames";

import useAppSelector from "hooks/useAppSelector";
import useActions from "hooks/useActions";

import { TFilterType } from "types/todo";

import Button from "components/base/Button";

const filters: TFilterType[] = ["all", "active", "completed"];

export const TodoFilter = () => {
  const base = "todo-filter";
  const { setFilter } = useActions();
  const { filter: currentFilter } = useAppSelector((state) => state.todo);

  return (
    <div className={base}>
      {filters.map((filter) => (
        <Button
          key={filter}
          className={classNames(`${base}__btn`, {
            active: currentFilter === filter,
          })}
          onClick={() => setFilter(filter)}
          mode={currentFilter !== filter ? "green-transparent" : null}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </Button>
      ))}
    </div>
  );
};
