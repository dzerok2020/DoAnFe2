import {defineStore} from "pinia";

export const useRolesStore = defineStore({
    id: "roles",
    state: () => ({
        data: [
            {
                name: "Villager",
                imgUrl: "https://www.wolvesville.com/static/media/icon_villager_filled.bf9f7a2c.svg",
            },
            {
                name: "Doctor",
                imgUrl: "https://www.wolvesville.com/static/media/icon_doctor_filled.20fa62bd.svg",
            },
            {
                name: "Alpha werewolf",
                imgUrl: "https://www.wolvesville.com/static/media/icon_alpha_werewolf_filled.74166752.svg",
            },
            {
                name: "Corrupter",
                imgUrl: "https://www.wolvesville.com/static/media/icon_corruptor_filled.aeab23f4.svg",
            },
        ],
    }),
    getters: {
        getRoles: (state) => state,
    },
    actions: {
        addRole(role: object) {
            // @ts-ignore
            this.data.push(role);
        }
    },
});