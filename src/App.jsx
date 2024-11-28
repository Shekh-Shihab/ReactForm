import { useState, useEffect } from "react";
import Form from "./components/form/Form";
import UserList from "./components/userList/UserList";
import { UserListContext } from "./context/userListContext";
import { UserAPI } from "./api/user-api";

function App() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    (async () => {
      const users = await UserAPI.fetchAllUsers();
      setUserList(users);
    })();
  }, []);
  return (
    <>
      <UserListContext.Provider value={{ userList, setUserList }}>
        <Form />
        <UserList />
      </UserListContext.Provider>
    </>
  );
}

export default App;
