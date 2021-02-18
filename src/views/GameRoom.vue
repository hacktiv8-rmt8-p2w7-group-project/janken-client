<template>
    <div>
        <div class="justify-content-center">
            <div>
                <b-button variant="info" class="m-2" @click="createRoom"
                    ><i class="fas fa-play-circle"></i> Play Game</b-button
                >
            </div>
            <div>
                <b-button variant="danger" class="m-2"
                    ><i class="fas fa-sign-out-alt"></i> Leave Room</b-button
                >
            </div>
            <div class="d-flex row justify-content-center">
                <PlayerCard> </PlayerCard>
                <PlayerCard> </PlayerCard>
            </div>
            <img
                @click="setSelect('batu')"
                class="janken"
                src="../assets/Batu.png"
            />
            <img
                @click="setSelect('gunting')"
                class="janken"
                src="../assets/Gunting.png"
            />
            <img
                @click="setSelect('kertas')"
                class="janken"
                src="../assets/Kertas.png"
            />
        </div>
    </div>
</template>

<script>
import PlayerCard from "../components/PlayerCard.vue";

export default {
    name: "GameRoom",
    props: {},
    components: {
        PlayerCard,
    },
    data() {
        return {
            select: "",
        };
    },
    methods: {
        setSelect(value) {
            this.select = value;
        },
    },
};
</script>

<style>
.janken:hover {
    cursor: pointer;
}
</style>