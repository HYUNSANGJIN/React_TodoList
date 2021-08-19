import React, { Component } from "react";
import TodoItem from "./TodoItem";

// TodoItemList에서 배열을 TodoItem 컴포넌트 배열로 변환하기
/*
    컴포넌트는 3가지의 props를 받는다
    - todos : todo객체들이 들어있는 배열
    - onToggle : 체크박스를 키고 끄는 함수
    - onRemove : 아이템을 삭제시키는 함수
*/
class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    // 배열을 렌더링 할땐 꼭 key값이 있어야함!!!!
    // ㄴ 컴포넌트가 리렌더링 될 때 더욱 효율적으로 작동 할 수 있음
    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));

    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
