import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  /*
    초기 state에는 input, todos배열의 기본 아이템 3개를 넣어줌
    todo객체들을 구분하기 위해 id값을 지정
    데이터가 추가 될때마다 this.idrkqtdl 1씩 올라가도록 설정했음
  */
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: "",
    todos: [
      { id: 0, text: "리액트 소개", checked: false },
      { id: 1, text: "리액트 소개", checked: true },
      { id: 2, text: "리액트 소개", checked: false },
    ],
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value, // input의 다음 바뀔 값
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "", // 인풋 비우고
      // concat을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
      }),
    });
  };

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter면 handleCreate 호출
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  // 체크하기/ 체크풀기
  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾기
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };

  // 아이템 지우기
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;

    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
