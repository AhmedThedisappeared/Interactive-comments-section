<template>
    <div class="modal-wrapper">
        <div class="modal">
            <h2>Delete Comment</h2>
            <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone </p>
            <div class="btns">
                <button class="btn btn-secondary" @click="cancelDelete">no,cancel</button>
                <button class="btn btn-danger" @click="configDelete">yes,delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {

        }
    },
    methods: {
        ...mapMutations(['TOGGLE_DELETE']),
        cancelDelete() {
            this.TOGGLE_DELETE()
        },
        configDelete() {
            this.$emit('config-delete')
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal-wrapper {
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: fixed;
        display: grid;
        place-content: center;
        background-color: rgba(0, 0 , 0 , 0.2);
        .modal {
            background-color: var(--White);
            padding: 1.5rem;
            max-width: 350px;
            border-radius: 6px;
            h2 {
                color: var(--Dark-blue);
                font-weight: 500;
                line-height: 1;
            }
            p {
                line-height: 1.5;
                margin: 1rem 0;
                color: var( --Grayish-Blue);
            }
            div {
                display: flex;
                gap: 0.5rem;
            }
        }
    }

</style>