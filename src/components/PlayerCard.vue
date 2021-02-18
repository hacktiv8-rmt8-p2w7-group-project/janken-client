<template>
    <div>
        <div class="m-2">
            <b-card
                title="#PLAYER 1 NAME"
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
            >
                <b-card-text>
                    <p>Score : 0</p>
                </b-card-text>
                <template #footer>
                    <p>Score : 0</p>
                    <b-button variant="success"
                        ><i class="far fa-check-square"></i> Ready</b-button
                    >
                </template>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>