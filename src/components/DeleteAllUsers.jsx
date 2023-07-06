import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { clearAllUsers } from "../store/actions";
// import { clearAllUsers } from "../store/slices/UserSlice";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(clearAllUsers());
  };

  return (
    <Wrapper>
      <div className="wrapper">
        <button
          className="btn clear-btn"
          onClick={() => {
            deleteUsers();
          }}
        >
          Clear All Users
        </button>
      </div>
    </Wrapper>
  );
};

export default DeleteAllUsers;

const Wrapper = styled.section`
  .wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .clear-btn {
    text-transform: capitilize;
    background-color: #db338a;
    margin-top: 10px;
  }
`;
