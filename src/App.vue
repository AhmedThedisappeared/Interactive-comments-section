<template>
  <!-- <div> -->
    <div class="comments-container">
      <CommentWrapper />
    </div>
  <!-- </div> -->
</template>

<script>

import CommentWrapper from './components/CommentWrapper.vue';

export default {
  name: 'App',
  data() {
      return {
        
      }
  },
  components: {
    CommentWrapper,
    
  },
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
  }
  body {
    background-color: var(--Very-light-gray);
  }
  #app {
    width: 100%;
    min-height: 100vh;
    padding: 3rem 0;
    > div:first-of-type {
      max-width: 750px;
      margin: 0 auto;
      padding: 1rem;
    }
  }
  
  :root {
    // ### Primary
  --Moderate-blue: hsl(238, 40%, 52%);
  --Soft-Red: hsl(358, 79%, 66%);
  --Light-grayish-blue: hsl(239, 57%, 85%);
  --Pale-red: hsl(357, 100%, 86%);
  // ### Neutral
  --Dark-blue: hsl(212, 24%, 26%);
  --Grayish-Blue: hsl(211, 10%, 45%);
  --Light-gray: hsl(223, 19%, 93%);
  --Very-light-gray: hsl(228, 33%, 97%);
  --White: hsl(0, 0%, 100%);
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
  } 
  .flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }
  .gap-1rem {
    gap: 1rem;
  }
  .gap-10 {
    gap: 10px;
  }
  .btn{
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-transform: uppercase;
    color: var(--White);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 1px;
    transition: all 0.5s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
  .btn-primary {
    background-color: var(--Moderate-blue);
  }
  .btn-secondary {
    background-color: var(--Grayish-Blue);
  }
  .btn-danger {
    background-color: var(--Soft-Red);
  }
  .comment-card {
    padding: 1.5rem;
    border-radius: 8px;
    background-color: var(--White);
    @media (max-width:768px) {
      padding: .75rem;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
