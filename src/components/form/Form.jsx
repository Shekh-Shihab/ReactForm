import { useContext } from "react";
import { UserAPI } from "../../api/user-api";
import Toast from "../../utils/Toast";
import s from "./style.module.css";
import { UserListContext } from "../../context/userListContext";
const Form = () => {
  const { setUserList } = useContext(UserListContext);
  const addUser = async (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const age = e.target.elements[1].value;
    const email = e.target.elements[2].value;
    const user = { name, age, email };
    try {
      await UserAPI.addUser(user);
      setUserList((prevUserList) => [
        ...prevUserList,
        { id: Date.now(), name, age, email },
      ]);
      Toast("success", "User added successfully");
    } catch (e) {
      console.log(error);
      await Toast("error", "Failed to add user");
    }
    e.target.reset();
  };
  return (
    <div className={s.container}>
      <div className={s.box}>
        <h1>Add User</h1>
        <form onSubmit={addUser}>
          <div>
            <input type="text" placeholder="Type Your Name" required />
          </div>
          <div>
            <input type="number" placeholder="Your Age" required />
          </div>
          <div>
            <input type="text" placeholder="Type Your Email" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
