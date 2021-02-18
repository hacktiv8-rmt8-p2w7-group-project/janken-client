import Vue from "vue"
import Vuex from "vuex"
import axios from "../config/axios.js"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        rooms: [],
        select: ''
    },
    mutations: {
        setRooms(state, payload) {
            state.rooms = payload
        },
        setSelect(state, payload) {
            state.select = payload
        }
    },
    actions: {
        login(context, username) {
            return axios({
                url: "/login",
                method: "POST",
                data: {
                    username,
                },
            })
                .then(({ data }) => (localStorage.access_token = data.access_token))
                .catch((err) => console.log(err.response.data.error))
        },
        fetchRooms(context) {
            axios({
                url: "/rooms",
                method: "GET",
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => context.commit("setRoom", data.rooms))
                .catch((err) => console.log(err.response.data.error))
        },
        createRoom(context) {
            axios({
                url: "/rooms",
                method: "POST",
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(() => context.dispatch("fetchRooms"))
                .catch((err) => console.log(err.response.data.error))
        },
        deleteRoom(context, id) {
            axios({
                url: `/rooms/${id}`,
                method: "DELETE",
                header: {
                    access_token: localStorage.access_token,
                },
            })
                .then(() => context.dispatch("fetchRooms"))
                .catch((err) => console.log(err.response.data.error))
        },
    },
    modules: {},
})
