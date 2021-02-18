<template>
    <div>
        <div>
            <b-button variant="info" class="m-2" @click="createRoom"
                ><i class="fas fa-sign-in-alt"></i> Create Room</b-button
            >
        </div>
        <b-container>
            <div class="d-flex row justify-content-center">
                <RoomCard />
            </div>
        </b-container>
    </div>
</template>

<script>
import RoomCard from "../components/RoomCard.vue";
export default {
    name: "DashBoard",
    props: {},
    components: {
        RoomCard,
    },
    computed: {
        rooms() {
            return this.$store.state.rooms;
        },
    },
    methods: {
        createRoom() {
            this.$store.dispatch("createRoom");
        },
    },
    created() {
        this.$store.dispatch("fetchRooms");
    },
};
</script>

<style>
</style>