import React from "react";
import styled from "styled-components";
import Button from "../Button";

export default function DeleteConfirmation({ selected, onDelete, onCancel }) {
  return (
    <Wrapper>
      <Button
        className="btn delete-btn"
        onClick={() => onDelete(selected.title)}
      >
        Delete
      </Button>
      <Button className="btn cancel-btn" onClick={onCancel}>
        Cancel
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50.25rem;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  padding: 3rem;
  gap: 3rem;
  border-radius: 3rem;
  box-shadow: 0px 4px 4px 1244px rgba(0, 0, 0, 0.25);

  .btn {
    background-color: #ffffff;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
    color: #4b4b4b;
    padding: 1.5rem 5rem;
  }

  .delete-btn {
    color: #ff0000;
  }

  .btn:hover {
    border-color: #4b4b4b;
  }

  .delete-btn:hover {
    border-color: #ff0000;
  }
`;
