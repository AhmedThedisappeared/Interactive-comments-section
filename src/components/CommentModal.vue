<template>
    <div class="commet-modal comment-card">
        <img src="@/assets/images/avatars/juliusomo.png" alt="" class="usr-img">
        <textarea class="cmnt-input" placeholder="Add a comment..." v-model="commentInput" name="comment"></textarea>
        <button class="btn btn-primary" @click="submitComment">send</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            commentInput:'',
        }
    },
    methods: {
        ...mapMutations(['ADD_COMMENT']),
        submitComment() {
            const newComment = {
                id: Math.floor(Math.random()*10000),
                content: this.commentInput,
                createdAt: "now",
                score: 0,
                user: {
                    image: {
                        png: "juliusomo.png",
                        webp: "@/assets/images/avatars/image-juliusomo.webp",
                    },
                    username: "juliusomo",
                },
                replies: [],
            }
            this.ADD_COMMENT(newComment);
            this.commentInput= null;
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .commet-modal {
        display: grid;
        grid-template-areas: "avatar input button";
        grid-template-columns: min-content auto min-content;
        justify-items: center;
        gap: 1rem;
        min-height: 9rem;
        img {
            grid-area: avatar;
            height: 2.5rem;
            width: 2.5rem;
        }
        textarea {
            grid-area: input;
            padding: 1rem;
            width: 100%;
            border: 1px solid var(--Light-gray);
            border-radius: 4px;
            resize: none;
        }
        button {
            grid-area: button;
            align-self: flex-start;
        }
        @media (max-width:768px) {
            grid-template-areas: "input input input" "avatar ... button";
            grid-template-rows: auto min-content;
            align-items: center;
            gap: .5rem;
            img {
                height: 2rem;
                width: 2rem;
            }
            textarea {
                height: 6rem;
                padding: .5rem;
                align-self: stretch;
            }
        }
    }
</style>