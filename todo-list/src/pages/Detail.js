import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadTodo, deleteTodo, createTodo, editTodo} from "../redux/modules/todolist";
import { useHistory } from "react-router";


const Detail = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const edit_todo = React.useRef()

    const todo_list = useSelector((state) => state.todolist.list);

    let todo_index = parseInt(props.match.params.index);

  return (
    <Wrap>
      <HeaderWrap>
        <h1>상세페이지</h1>
        <p>수정/삭제가 가능해요🌝</p>
      </HeaderWrap>
      <DetailWrap>
        <DetailBox>
          <h1>{todo_list[todo_index]}</h1>
          <button onClick={() =>{ history.goBack();}}>메인으로</button>
          <button onClick={() => {
              dispatch(deleteTodo(todo_index));
              props.history.goBack();
          }}>삭제하기</button>
        </DetailBox>
        <UpdateBox>
          <input placeholder="수정내용을 입력하세요!" ref={edit_todo}></input>
          <button onClick={() => {
              let edit_input = edit_todo.current.value
              dispatch(editTodo(todo_index, edit_input));
              console.log(editTodo(todo_index, edit_input));
              history.goBack();
          }}>수정하기</button>
        </UpdateBox>
      </DetailWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 500px;
  height: auto;
  margin: auto;
  border: 1px solid black;
`;

const HeaderWrap = styled.div`
  max-width: 500px;
  padding: 20px;
  height: 150px;
  background-color: #323334;
  color: white;
  text-align: center;
`;

const DetailWrap = styled.div`
  max-width: 500px;
  padding: 20px;
  background-color: #495057;
`;

const DetailBox = styled.div`
  max-width: 300px;
  background-color: #ced4da;
  margin: auto;
  text-align: center;
  color: black;
  & > button {
    padding: 4px;
    margin-right: 15px;
    margin-bottom: 10px;
    border-radius: 20px;
    background-color: #495057;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
`;
const UpdateBox = styled.div`
  max-width: 300px;
  margin: 20px 40px 30px auto;
  & > button {
    padding: 4px;
    margin-right: 15px;
    margin-bottom: 10px;
    border-radius: 20px;
    background-color: #ced4da;
    color: black;
    font-weight: 600;
    cursor: pointer;
    margin-left: 20px;
  }
  & > input {
    width: 180px;
    height: 30px;
    text-align: center;
  }
`;
export default Detail;
