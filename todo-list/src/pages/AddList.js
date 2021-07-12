import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/modules/todolist";
import { useHistory } from "react-router-dom";
const AddList = () => {
  const dispatch = useDispatch();
  const input_todo = React.useRef();
  const history = useHistory();
  return (
    <Wrap>
      <HeaderWrap>
        <h1>ToDoList를 추가해요!</h1>
        <p>입력하시고 +버튼을 누르세요!</p>
      </HeaderWrap>
      <InputWrap>
        <input placeholder="완료해야할 일을 입력하세요!" ref={input_todo}></input>
      </InputWrap>
      <button onClick={() => {
        dispatch(createTodo(input_todo.current.value));
        history.push("/");
        console.log(createTodo(input_todo.current.value));
      }}>+</button>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 500px;
  height: auto;
  margin: auto;
  border: 1px solid black;
  & > button {
    display: block;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: 60px;
    border: none;
    background-color: #323334;
    color: white;
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 10px;
  }
`;

const HeaderWrap = styled.div`
  max-width: 500px;
  padding: 20px;
  height: 150px;
  background-color: #323334;
  color: white;
  text-align: center;
`;

const InputWrap = styled.div`
  max-width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: row;

  & > input {
    width: 160px;
    height: 50px;
    border: none;
    border-bottom: 1px solid black;
    margin: auto;
    text-align: center;
  }
`;
export default AddList;
