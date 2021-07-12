import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadTodo } from "../redux/modules/todolist";

const List = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const todo_list = useSelector((state) => state.todolist.list);

  useEffect(() => {
    dispatch(loadTodo());
  }, [dispatch]);

  return (
    <ListWrap>
      {todo_list.map((list, index) => {
        return (
          <ul
            key={index}>
            <li onClick={()=> {
              history.push("/detail/" + index)
            }}>{list}</li>
          </ul>
        );
      })}
    </ListWrap>
  );
};

const ListWrap = styled.div`
  max-width: 500px;
  padding: 20px;
  & > ul {
    font-size: 25px;
  }
`;
export default List;
