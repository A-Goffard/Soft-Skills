import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import PedagogyView from '../views/PedagogyView.vue';
import TrainingView from '../views/TrainingView.vue';
import AssessmentView from '../views/AssessmentView.vue';
import HumanResourcesView from '../views/HumanResourcesView.vue';
import ExtraView from '../views/ExtraView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/pedagogy', name: 'Pedagogy', component: PedagogyView },
  { path: '/training', name: 'Training materials', component: TrainingView },
  { path: '/assessment', name: 'Assessment', component: AssessmentView },
  { path: '/humanresources', name: 'Human resources', component: HumanResourcesView },
  { path: '/about', name: 'Partners', component: AboutView },
  { path: '/extra', name: 'Extra', component: ExtraView},
];

const router = createRouter({
  history: createWebHistory('/'),  // Cambia esta línea
  routes,
});

export default router;
