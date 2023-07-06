import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "styled-components";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li
            key={id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "6px 0px",
              borderBottom: "1px solid #000000",
            }}
          >
            {user}
            <button
              className="btn btn-delete"
              onClick={() => {
                deleteUser(id);
              }}
            >
              <DeleteForeverIcon sx={{ fontSize: 30, padding: "0" }} />
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
};

export default DisplayUsers;

const Wrapper = styled.section``;
