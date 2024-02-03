<template>
    <div class="comments-wrapper">
        <Comment 
        :comment="comment" 
        :index="index" v-for="(comment , index) in listOfComment" 
        :key="index"
        @delete-reply="reciveReplyObj"
        @delete-comment="reciveComment"
        />
        <CommentModal />
        <DeleteModal v-if="deleteModal" @config-delete="configDelete(objToDelete)"/> 
    </div>

</template>

<script>
import Comment from './Comment.vue';
import CommentModal from './CommentModal.vue';
import { mapMutations ,mapState } from 'vuex';
import DeleteModal from './DeleteModal.vue';
import Reply from './Reply.vue';
export default {
    data() {
        return {
            listOfComment:[],
            objToDelete:null,
        }
    },
    created() {
        this.listOfComment= this.commentList
    },
    components: {
        Comment,
        CommentModal,
        DeleteModal,
        Reply
    },
    computed: {
        ...mapState(['deleteModal','commentList'])
    },
    methods: {
        ...mapMutations(['TOGGLE_DELETE','DELETE_REPLY','TOGGLE_DELETE','DELETE_COMMENT']),
        reciveReplyObj(obj) {
            this.objToDelete= obj;
        },
        configDelete(data) {
            if(typeof data ==='number') {
                this.DELETE_COMMENT(data)
            } else {
                this.DELETE_REPLY(data);
            }
            this.objToDelete= null;
            this.TOGGLE_DELETE()
        },
        reciveComment(index) {
            this.objToDelete= index;
        }
    }
}

</script>
<style lang="scss" scoped>
    .comments-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .replies {
        display: flex;
        margin-left: 2.5rem;
        padding-left: 2.4rem;
        border-left: 1px solid var(--Light-grayish-blue);
        margin-top: 1rem;
        @media (max-width:768px) {
            padding-left: 1rem;
            margin-left: .5rem;
        }
    }
</style>