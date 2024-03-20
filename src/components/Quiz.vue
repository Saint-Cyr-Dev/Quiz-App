// Quizz.vue
<template>
  <div>
    <question v-for="question in questions" :key="question.id" :question="question"></question>
    <button v-if="!showResults" @click="nextQuestion">Suivant</button>
    <results v-if="showResults" :correctAnswers="correctAnswers" :userAnswers="userAnswers"></results>
  </div>
</template>

<script>
import questions from '../data/allowen.js';

export default {
  data() {
    return {
      questions: questionsData,
      currentQuestionIndex: 0,
      userAnswers: [],
      showResults: false
    };
  },
  computed: {
    correctAnswers() {
      return this.questions.filter(question => {
        return question.answers.some(answer => answer.correct);
      }).length;
    }
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.showResults = true;
      }
    }
  }
};
</script>
