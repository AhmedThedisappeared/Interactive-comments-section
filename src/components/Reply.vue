<template>
    <div class="container">
        <div class="comment comment-card">
            <div class="comment-score">
                <div @click.stop="comment.score++"><svg  width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg></div>
                <p>{{ comment.score }}</p>
                <div @click.stop="comment.score--"><svg  width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg></div>
            </div>
            <div class="comment-controls">
                <a v-if="currentUser" class="delete" @click="deleteReply(this.commentPos)" ><img src="../assets/images/icon-delete.svg" alt="" class="control-icon">Delete</a>
                <a  v-if="currentUser" class="edit" @click="editComment"><img src="../assets/images/icon-edit.svg" alt="" class="control-icon">Edit</a>
                <a v-if="!currentUser" @click="this.reply = true" class="reply"><img src="../assets/images/icon-reply.svg" alt="" class="control-icon">Reply</a>
            </div>
            <div class="comment-user">
                <img :src="comment.user.image.png" alt="" class="usr-img">
                <p class="usr-name" :class="{current: currentUser}">{{ comment.user.username }}</p>
                <p class="cmnt-at">{{ comment.createdAt }}</p>    
            </div>
            <div class="comment-body">
                <p v-if="!edit">
                <span class="reply-to">{{ comment.replyingTo }}</span>
                {{ comment.content }}
                </p>
                <div class="update" v-if="edit">
                    <div><textarea class="cmnt-input"  v-model="comment.content" name="comment"></textarea></div>
                    <div><button class="btn btn-primary" @click="submitComment">update</button></div>
                </div>
            </div>
        </div>
        <div class="commet-modal comment-card" v-if="reply">
            <img src="@/assets/images/avatars/juliusomo.png" alt="" class="usr-img">
            <textarea class="cmnt-input" placeholder="Add a comment..." v-model="commentInput" name="comment"></textarea>
            <button class="btn btn-primary" @click="submitReply(comment)" >reply</button>
        </div>
    </div>
</template>

<script>
import CommentModal from './CommentModal.vue';
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            reply:null,
            edit:null,
            commentInput:''
        }
    },
    components: {
        CommentModal
    },
    props:['comment' ,'dataIndex','commentPos'],
    computed: {
        currentUser() {
            if(this.comment.user.username === "juliusomo") {
                return true
            }else {
                return false
            }
        },
    },
    methods: {
        ...mapMutations(['ADD_REPLY','DELETE_REPLY','TOGGLE_DELETE']),
        editComment() {
            this.edit =true;
        },
        submitComment() {
            this.edit =false;
        },
        deleteReply(index) {
            const replyObj = {
                commnetIndex:index,
                replyIndex:this.dataIndex,
            }
            this.TOGGLE_DELETE()
            this.$emit('delete-reply', replyObj)
        },
        submitReply(comment) {
            comment.replies= [];
            console.log(comment);
            const newReply = {
                id: Math.floor(Math.random()*1000),
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
            }
            // comment.replies.pash(newReply)
        }
    },
}

</script>
<style lang="scss" scoped>
    .comment {
        display: grid;
        grid-template-areas:
            "score user controls"
            "score comment comment"
            "score comment comment";
        grid-template-columns: auto 1fr auto;
        gap: 1.5rem;
        row-gap: 1rem;
        color: var(--Grayish-Blue);
        @media (max-width:768px) {
            grid-template-areas:
            "user user user"
            "comment comment comment"
            "score ... controls";
            gap: 0.5rem;
        }
        .comment-score {
            color: var(--Moderate-blue);
            font-weight: 500;
            grid-area: score;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
            padding: 0.75rem;
            padding-top: 0.5rem;
            width: 1rem;
            box-sizing: content-box;
            background-color: var(--Very-light-gray);
            border-radius: 8px;
            align-self: flex-start;
            p {
                user-select: none;
            }
            svg {
                cursor: pointer;
                path {
                    transition: all 0.5s ease-in-out;
                }
                &:hover path {
                    fill:var(--Moderate-blue);
                }
            }
            @media (max-width:768px) {
                flex-direction: row;
                width: auto;
            }
        }
        .comment-controls {
            display: flex;
            gap: 1rem;
            color: var(--Moderate-blue);
            grid-area: controls;
            align-self: center;
            justify-self: flex-end;
            a {
                display: flex;
                align-items: center;
                transition: all .5s ease-in-out;
                user-select: none;
                &:hover {
                    opacity: 0.5;
                }
            }
            .edit , .reply{
                color: var(--Moderate-blue);
            }
            .delete{
                color: var(--Soft-Red);
            }
            .control-icon{
                margin-right: .5rem;
            }
        }
        .comment-user {
            user-select: none;
            width: 100%;
            grid-area: user;
            display: flex;
            gap: 1rem;
            align-items: center;
            .usr-name {
                color: var(--Dark-blue);
                font-weight: 700;
                &.current::after {
                    font-weight: 400;
                    content: "you";
                    color: var(--White);
                    background-color: var(--Moderate-blue);
                    padding: 0 .4rem;
                    padding-bottom: .2rem;
                    font-size: .8rem;
                    margin-left: .5rem;
                    border-radius: 2px;
                }
            }
            .usr-img {
                height: 2rem;
                width: 2rem;
            }
        }
        .comment-body {
            user-select: none;
            grid-area: comment;
            width: 100%;
            .reply-to {
                color: var(--Moderate-blue);
                font-weight: 500;
            }
            .update {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                > div:first-of-type {
                    border: 2px solid var(--Light-gray);
                    border-radius: 4px;
                    min-height: 4rem;
                    padding: 1rem;
                    textarea {
                        border: none;
                        resize: none;
                        width: 100%;
                        overflow: visible;
                        font-size: 1rem;
                        color: var(--Grayish-Blue);
                        &:focus {
                            outline: none;
                        }
                    }
                }
                > div:last-of-type {
                    display: flex;
                    justify-content: flex-end;
                }
            }
        }
    }
    
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