import { useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

/**
 * useTodo
 */
export const useTodo = () => {
  /* todo list */
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  /* add input title */
  const [addInputValue, setAddInputValue] = useState("");
  /* todo 採番ID */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
  /* search input title */
  const [searchInputValue, setSearchInputValue] = useState("");

  /* actions */
  /**
   * addInputValueの変更処理
   * @param {*} e
   */
  const onChangeAddInputValue = (e) => {
    setAddInputValue(e.target.value);
  };

  /**
   * 検索キーワード更新処理
   * @param {*} e
   */
  const handleChangeSearchKeyword = (e) => {
    setSearchInputValue(e.target.value);
  };

  /**
   * Todo登録処理
   * @param { * } e
   */
  const handleAddTodo = (e) => {
    if (e.key === "Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId + 1;
      const newTodoList = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];
      setOriginTodoList(newTodoList);
      // 採番IDを更新
      setUniqueId(nextUniqueId);
      // todo追加後、入力値をリセット
      setAddInputValue("");
    }
  };

  /**
   * Todo削除処理
   * @param { number } targetId
   * @param { string } targetTitle
   */
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      const newTodoList = originTodoList.filter((todo) => todo.id !== targetId);
      setOriginTodoList(newTodoList);
    }
  };

  const states = {
    originTodoList,
    addInputValue,
    searchInputValue,
  };

  const actions = {
    onChangeAddInputValue,
    handleChangeSearchKeyword,
    handleAddTodo,
    handleDeleteTodo,
  };

  return [states, actions];
};
