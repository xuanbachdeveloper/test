import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

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
    if (window.confirm('Are you sure delete this user?')) {
      let newUsersList = usersList.filter( user => user.id !== id)
    setUsersList(newUsersList);
    }else{
      return false;
    }
  }

  
  function sortByAge(usersList) {
    usersList.sort((a, b) => a.age - b.age);
  }
  sortByAge(usersList);

  // function deleteUsers(usersList) {
  //   usersList.
  // }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList deleteUser={deleteUser} users={usersList} />
    </div>
  );
}

export default App;
