import { defineStore } from "pinia";

type User = {
  id: string;
  name: string;
  email: string;
  token: string;
}

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    data: {} as User,
    token: sessionStorage.getItem("TOKEN"),
    room: -1,
  }),
  getters: {
    getUser: (state) => state,
    setTokens: (state) => (token: string) => {
      state.token = token;
      sessionStorage.setItem("TOKEN", token);
    },
    setRoom: (state) => (room: number) => {
        state.room = room;
    }
  },
  actions: {
    addUser(user: User) {
      this.data = user;
    },
    logout() {
      this.data = {} as User;
      this.token = "";
      sessionStorage.removeItem("TOKEN");
    },
  },
});
