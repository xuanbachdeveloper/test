import React, { useState } from "react";
import classNames from "classnames/bind";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Card from "./components/UI/Card";
import styles from "./components/Users/SearchBar.module.css";
const cx = classNames.bind(styles);
function App() {
  const [usersList, setUsersList] = useState([]);
  const [enteredSearch, setEnteredSearch] = useState("");
  const searchChangeHandler = (event) => {
    var lowerCase = event.target.value.toLowerCase();
    setEnteredSearch(lowerCase);
  };

  //TODO: Work on the sorting user algorithms here
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: usersList.length + 1 },
      ];
    });
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure delete this user?")) {
      let newUsersList = usersList.filter((user) => user.id !== id);
      setUsersList(newUsersList);
    } else {
      return false;
    }
  };

  function sortByAge(usersList) {
    usersList.sort((a, b) => a.age - b.age);
  }
  sortByAge(usersList);

  return (
    <div>
      <Card className={cx("wrapper")}>
        <label>Search</label>
        <input
          id="search"
          type="text"
          placeholder="De cho vui chu ko dung dc"
          value={enteredSearch}
          onChange={searchChangeHandler}
        />
      </Card>
      <AddUser onAddUser={addUserHandler} />
      <UsersList deleteUser={deleteUser} users={usersList} />
    </div>
  );
}

export default App;
