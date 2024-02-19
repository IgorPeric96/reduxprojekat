import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFormSelector } from "../store/users/selectors";
import { setFirstName, setLastName } from "../store/users/slice";

export default function UserForm() {
  const dispatch = useDispatch();

  const userFormValue = useSelector(userFormSelector);

  const [firstNameInput, setFirstNameInput] = useState();
  const [lastNameInput, setLastNameInput] = useState();

  const updateUser = () => {
    dispatch(setFirstName(firstNameInput));
    dispatch(setLastName(lastNameInput));
  };

  //   const [chosenFirstName, setChosenFirstName] = useState();
  //   const [chosenLastName, setChosenLastName] = useState();

  return (
    <>
      <div>
        <form>
          <p>
            <label>First Name</label>
            <input
              type="text"
              value={firstNameInput}
              onChange={(e) => setFirstNameInput(e.target.value)}
            />
          </p>
          <p>
            <label>Last Name</label>
            <input
              type="text"
              value={lastNameInput}
              onChange={(e) => setLastNameInput(e.target.value)}
            />
          </p>
          <button onClick={updateUser}>Submit User</button>
        </form>
      </div>
      <div>
        <p>Hi, {userFormValue}</p>
      </div>
    </>
  );
}
