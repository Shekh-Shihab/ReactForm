import React, { useContext } from "react";
import s from "./style.module.css";
import { UserAPI } from "../../api/user-api";
import Toast from "../../utils/Toast";
import { UserListContext } from "../../context/userListContext";

const UserListItem = ({ id, name, age, email }) => {
  const { setUserList } = useContext(UserListContext);
  const deleteUser = async () => {
    try {
      console.log(id);
      await UserAPI.deleteUser(id);
      Toast("success", "User deleted successfully");
      setUserList((prevUserList) =>
        prevUserList.filter((user) => user.id !== id)
      );
    } catch (error) {
      console.log(error);
      await Toast("error", "Failed to delete user");
    }
  };

  return (
    <div className={s.useListItem}>
      <div>
        <h2>{name}</h2>
        <div>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
        </div>
      </div>
      <button className={s.buttonContainer} onClick={deleteUser}>
        Delete
      </button>
    </div>
  );
};

export default UserListItem;
