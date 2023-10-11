import { styled } from "styled-components";
import { deleteUsers } from "../Store/Slices/UserSlice";
import { useDispatch } from "react-redux";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteAllUsers = ()=> {
    dispatch(deleteUsers());
  }

  return <Wrapper>
    <button onClick={deleteAllUsers}>Delete All Users</button>
  </Wrapper>;
};

const Wrapper = styled.div`
margin: 8px;
 button {
  background: linear-gradient(135deg, #7f6de3 0%, #11aaf1 100%);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
 }
`;
