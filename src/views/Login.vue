<template>
    <div>
        <b-container>
            <b-card
                title="Input your name"
                style="max-width: 20rem"
                class="mb-2 mx-auto"
            >
                <b-form @submit.prevent="login">
                    <b-form-input
                        class="mb-3"
                        v-model="name"
                        placeholder="Enter your name"
                    ></b-form-input>
                    <b-button type="submit" variant="primary">Play!</b-button>
                </b-form>
            </b-card>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
        };
    },
    methods: {
        login() {
            this.$store.dispatch("login", this.name).then(() => {
                this.name = "";
                this.$router.push({ name: "DashBoard" });
            });
        },
    },
};
</script>

<style>
</style>