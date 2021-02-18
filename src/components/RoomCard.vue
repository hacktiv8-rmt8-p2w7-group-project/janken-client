<template>
    <div>
        <div class="m-2">
            <b-card
                title="#ROOM NUMBER"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
            >
                <b-card-text>
                    <p>Players in the room : 2</p>
                </b-card-text>
                <template #footer>
                    <b-button variant="info" class="m-2" @click.prevent="joinRoom"
                        ><i class="fas fa-sign-in-alt"></i> Join Room</b-button
                    >
                    <b-button variant="danger" class="m-2" @click="deleteRoom"
                        ><i class="far fa-window-close"></i
                    ></b-button>
                </template>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "RoomCard",
    props: ['room'],
    components: {},
    methods: {
        joinRoom() {
            console.log({ room: this.room });
            this.$store.dispatch('joinRoom', this.room.id)
            this.$router.push(`/dashboard/${this.room.id}`); // randomize room? use room id
        },
        deleteRoom() {
            this.$store.dispatch("deleteRoom", this.game.id);
        },
    },
};
</script>

<style>
</style>