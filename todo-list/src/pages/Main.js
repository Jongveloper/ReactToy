import React from "react";
import styled from "styled-components";
import List from "../components/List";
const Header = ({history}) => {
  return (
    <React.Fragment>
      <Wrap>
        <HeaderWrap>
          <h1>ToDoList</h1>
          <p>오늘 해야할 일을 기록해요</p>
        </HeaderWrap>
        <List />
        <button onClick={() =>{
          history.push('/addlist')
        }}>+</button>
      </Wrap>
    </React.Fragment>
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

export default Header;
