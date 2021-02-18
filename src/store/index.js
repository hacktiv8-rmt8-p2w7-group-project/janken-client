import Vue from "vue"
import Vuex from "vuex"
import axios from "../config/axios.js"
import io from "socket.io-client"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        socket: io.connect('http://localhost:3000'),
        rooms: [],
        select: "",
        gameRoom: {},
        user: {}
    },
    mutations: {
        setRoom(state, payload) {
            console.log({payload});
            state.rooms = payload
        },
        setSelect(state, payload) {
            state.select = payload
        },
        addRoom(state, room) {
            console.log({room});
            state.rooms.push(room)
        },
        setGameRoom(state, gameRoom) {
            state.gameRoom = gameRoom
        }
    },
    actions: {
        login(context, name) {
            return axios({
                url: "/",
                method: "POST",
                data: {
                    name,
                },
            })
                .then(({ data }) => {
                    localStorage.access_token = data.access_token
                })
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
                .then(({ data }) => context.commit("setRoom", data))
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
                .then(({data}) => context.commit("addRoom", data))
                .catch((err) => console.log(err))
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
        joinRoom(context, user, id) {
            axios({
                url: `/rooms/${id}`,
                method: 'POST',
                headers: {
                    access_token: localStorage.access_token,
                }
            })
                .then(({data}) => {
                    console.log({data});
                    context.state.socket.emit('joinRooms', id)
                })
                .catch(err => {
                    console.log({err});
                })
        },

        
    },
    modules: {},
})
