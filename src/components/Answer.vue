// Results.vue
<template>
  <div>
    <h2>Résultats</h2>
    <p>Nombre de réponses correctes: {{ correctAnswers }}</p>
    <ul>
      <li v-for="(question, index) in questions" :key="index">
        Question: {{ question.title }}
        <br>
        Réponse utilisateur: {{ userAnswers[index] }}
        <br>
        Réponse correcte: {{ getCorrectAnswer(question) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['correctAnswers', 'userAnswers'],
  computed: {
    questions() {
      return this.$root.questions;
    }
  },
  methods: {
    getCorrectAnswer(question) {
      return question.answers.find(answer => answer.correct).title;
    }
  }
};
</script>
