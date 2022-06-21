import { defineStore } from "pinia";

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    data: {},
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
    },
  },
  actions: {
    addUser(user: object) {
      this.data = user;
    },
    logout() {
      this.data = {};
      this.token = "";
      sessionStorage.removeItem("TOKEN");
    },
  },
});
