export const UserAPI = {
  async fetchAllUsers() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch("http://localhost:3001/users", options);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },

  async addUser(name, age, email) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email }),
    };
    try {
      const response = await fetch("http://localhost:3001/users", options);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },

  async deleteUser(id) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        `http://localhost:3001/users/${id}`,
        options
      );
    } catch (error) {
      throw error;
    }
  },
};
