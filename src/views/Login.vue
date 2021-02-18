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
                        v-model="username"
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
            username: "",
        };
    },
    methods: {
        login() {
            this.$store.dispatch("login", this.username).then(() => {
                this.username = "";
                this.$router.push({ name: "Dashboard" });
            });
        },
    },
};
</script>

<style>
</style>