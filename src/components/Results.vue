<!-- Results.vue -->

<template>
  <div class="results">
    <h1>Results</h1>
    <h3 class="mb-4">💯 {{ correctCount }}/3 correct answers</h3>

    <h2 class="mb-4">👀 Your answers</h2>

    <div v-for="(answer, index) in userAnswers" :key="index">
      <h4>{{ answer.question.title }}</h4>
      <div>
        Your answer:
        <span class="">{{ answer.userAnswer.title }}</span>
      </div>
      <div class="text-success" v-if="answer.userAnswer.correct">
        <strong>✅ &nbsp; Correct answer: {{ answer.correctAnswer.title }}</strong>
      </div>
      <div class="text-danger" v-else>
        <strong>❌ &nbsp; Correct answer: {{ answer.correctAnswer.title }}</strong>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userAnswers: {
      type: Array,
      required: true
    }
  },
  computed: {
    correctCount() {
      return this.userAnswers.reduce((count, answer) => {
        return answer.userAnswer.correct ? count + 1 : count;
      }, 0);
    }
  }
};
</script>

<style scoped>

</style>