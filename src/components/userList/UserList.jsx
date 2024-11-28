import { useContext, useEffect, useState } from "react";
import UserListItem from "../userListItem/UserListItem";
import s from "./style.module.css";
import { UserAPI } from "../../api/user-api";
import { UserListContext } from "../../context/userListContext";
const UserList = () => {
  const { userList } = useContext(UserListContext);
  //   const [userList, setUserList] = useState([]);
  //   useEffect(() => {
  //     (async () => {
  //       const users = await UserAPI.fetchAllUsers();
  //       setUserList(users);
  //     })();
  //   }, []);

  return (
    <div className={s.container}>
      <h1>User List</h1>
      <div className={s.listContainer}>
        {userList.length > 0 ? (
          userList.map((user) => {
            return (
              <UserListItem
                key={user.id}
                id={user.id}
                name={user.name}
                age={user.age}
                email={user.email}
              />
            );
          })
        ) : (
          <h3>No User Added</h3>
        )}
      </div>
    </div>
  );
};

export default UserList;
