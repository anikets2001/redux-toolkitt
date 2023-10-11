import { useSelector, useDispatch } from "react-redux";
import { styled } from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { removeUser } from "../Store/Slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();  // use to call the micro-reducers from the slice

  const data = useSelector((state) => {
    // useSelector hook is used to access the data from central store
    return state.users; // state is central state and users is a slice of this state
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <div className="list-wrapper" key={id}>
            <p>{user}</p>
            <button onClick={() => deleteUser(id)}>
              <AiFillDelete />
            </button>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .list-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 8px;

    p {
      font-weight: 600;
      color: black;
    }

    &:hover {
      background-color: #f5f5f0;
      cursor: pointer;
    }

    button {
      border: none;
      background: none;
      color: red;
      font-size: 24px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
export default DisplayUsers;
