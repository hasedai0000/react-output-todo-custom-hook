/**
 * TodoTemplate
 *
 * @package components
 */
import styles from "./styles.module.css";
import { AddTodo } from "../../organisms/AddTodo/index.jsx";
import { TodoList } from "../../organisms/TodoList/index.jsx";
import { InputForm } from "../../atoms/index.jsx";
import { useTodo } from "../../../hooks/useTodo.js";

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoTemplate = () => {
  const [
    { originTodoList, addInputValue, searchInputValue },
    {
      onChangeAddInputValue,
      handleChangeSearchKeyword,
      handleAddTodo,
      handleDeleteTodo,
    },
  ] = useTodo();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* タスク入力画面 */}
      <section className={styles.common}>
        <AddTodo
          addInputValue={addInputValue}
          onChangeAddInputValue={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
        />
      </section>
      {/* タスク絞り込み画面 */}
      <section className={styles.common}>
        <InputForm
          placeholder={"Search Keyword"}
          inputValue={searchInputValue}
          handleChangeValue={handleChangeSearchKeyword}
        />
      </section>
      {/* タスク一覧表示画面 */}
      <section className={styles.common}>
        {originTodoList.length > 0 && (
          <TodoList
            originTodoList={originTodoList}
            searchInputValue={searchInputValue}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};
