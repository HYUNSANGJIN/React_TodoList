import React from "react";
import "./TodoListTemplate.css";

// 함수형 컴포넌트
// 파라미터로 받게 되는것은 props임

// 비구조화 할당
// (props) => { ... }를 해야 하는것을
// ({form, children}) => { ... }로 작성함

/*
    이 컴포넌트는 두가지의 props를 받게됨. 
    children의 경우 나중에 이 컴포넌트를 사용하게 될때
    <TodoListTemplate> 여기에 있는 내용 </TodoListTemplate> 
    태그 사이에 들어가게 된다.

    여기서 form은 나중에 인풋과 버튼이 들어가있는 컴포넌트를 렌더링 할 때 사용 할거임
    이것도 마치 children 을 사용하듯이 JSX 형태로 전달을 해줄거임
    <TodoListTemplate form={<div>이렇게!!</div>}>
    <div>여기엔 children 자리</div>
    </TodoListTemplate>
*/

const TodoListTemplate = ({ form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">오늘 할 일</div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
