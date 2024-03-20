// app.js
import { createApp } from 'vue'; // Importez createApp depuis Vue
import Quizz from './components/Quiz.vue';

// Créez une instance de l'application Vue
const app = createApp({
  template: '<Quizz/>'
});

// Enregistrez le composant Quizz comme composant global
app.component('Quizz', Quizz);

// Montez l'application Vue sur l'élément avec l'ID 'app'
app.mount('#app');
