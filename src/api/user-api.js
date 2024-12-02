import {
  addDoc,
  collection,
  getDocs,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { FirebaseDb } from "../services/fbConfig";

export const UserAPI = {
  // async fetchAllUsers() {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const response = await fetch("http://localhost:3001/users", options);
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  async fetchAllUsers() {
    try {
      const q = query(collection(FirebaseDb, "users"));
      const response = await getDocs(q);
      return response.docs.map((doc) => {
        return {
          id: doc.id,
          name: doc.data().name,
          age: doc.data().age,
          email: doc.data().email,
        };
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
      throw new Error("Failed to fetch users");
    }
  },

  // async addUser(name, age, email) {
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, age, email }),
  //   };
  //   try {
  //     const response = await fetch("http://localhost:3001/users", options);
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  // async addUser(name, age, email) {
  //   await collection(FirebaseDb, "projects").add({ name, age, email });
  // },

  async addUser(user) {
    try {
      const response = await addDoc(collection(FirebaseDb, "users"), user);

      if (!response) {
        throw new Error(`Error creating note`);
      }
      return {
        id: response.id,
        ...user,
      };
    } catch (error) {
      console.error("Error creating note:", error);
      throw error;
    }
  },

  // async deleteUser(id) {
  //   const options = {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3001/users/${id}`,
  //       options
  //     );
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  async deleteUser(id) {
    await deleteDoc(doc(FirebaseDb, "users", id));
  },
};
