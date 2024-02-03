import { createStore } from 'vuex'

export default createStore({
  state: {
    deleteModal: null,
    commentList: [
      {
        id: 1,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: "1 month ago",
        score: 12,
        user: {
          image: {
            png: "amyrobson.png",
            webp: "@/assets/images/avatars/image-amyrobson.webp",
          },
          username: "amyrobson",
        },
        replies: [],
      },
      {
        id: 2,
        content:
          "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: "2 weeks ago",
        score: 5,
        user: {
          image: {
            png: "maxblagun.png",
            webp: "@/assets/images/avatars/image-maxblagun.webp",
          },
          username: "maxblagun",
        },
        replies: [
          {
            id: 3,
            content:
              "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            createdAt: "1 week ago",
            score: 4,
            replyingTo: "@maxblagun",
            user: {
              image: {
                png: "ramsesmiron.png",
                webp: "@/assets/images/avatars/image-ramsesmiron.webp",
              },
              username: "ramsesmiron",
            },
          },
          {
            id: 4,
            content:
              "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            createdAt: "2 days ago",
            score: 2,
            replyingTo: "@ramsesmiron",
            user: {
              image: {
                png: "juliusomo.png",
                webp: "@/assets/images/avatars/image-juliusomo.webp",
              },
              username: "juliusomo",
            },
          },
        ],
      }
    ],
  },
  getters: {},
  mutations: {
    TOGGLE_DELETE(state) {
      state.deleteModal = !state.deleteModal;
    },
    ADD_COMMENT(state, payload) {
      state.commentList.push(payload);
      
    },
    ADD_REPLY(state, payload){
      state.commentList[payload.index].replies.push(payload.comment);
      
    },
    DELETE_COMMENT(state, payload) {
      state.commentList.splice(payload,1);
    },
    DELETE_REPLY(state,payload) {
      state.commentList[payload.commnetIndex].replies.splice(payload.replyIndex,1);
    },
  },
  actions: {},
  modules: {},
});
