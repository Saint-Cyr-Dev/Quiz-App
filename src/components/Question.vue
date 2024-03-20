// Question.vue
<template>
  <div>
    <h3>{{ question.title }}</h3>
    <answers :question="question" v-model="userAnswer"></answers>
  </div>
</template>

<script>
export default {
  props: ['question'],
  data() {
    return {
      userAnswer: null
    };
  }
};
</script>
