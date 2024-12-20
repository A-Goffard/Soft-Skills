<template>
  <div class="general">
    <Header />

    <div class="hometext">
      <div class="text">
        <h1>Voltus V</h1>
        
        <div class="container1">
          <div class="">
            <p>Web developers</p>
            <p>Peñascal F5 2023-2024</p>
          </div>
          <img class="img" src="/public/bilbostack.jpg" alt="Skills" />
        </div>

        <div class="cards">
          <div class="card">
            <div class="cardText">
              <p><b>Aintzane Goffard Sevillano</b></p>
            </div>
            <div class="cardLinks">
              <a href="https://www.linkedin.com/in/aintzane-goffard-sevillano/" target="_blank">
                <img class="icon" src="/public/icons/linkedin.png" alt="LinkedIn">
              </a>
              <a href="https://github.com/A-Goffard" target="_blank">
              <img class="icon" src="/public/icons/git.png" alt="GitHub"></a>
            </div>
          </div>
        </div>

        <div class="cards">
          <div class="card">
            <div class="cardText">
              <p><b>Jonathan Domínguez Blanco</b></p>
            </div>
            <div class="cardLinks">
              <a href="https://www.linkedin.com/in/jonathan-programador-dominguez/" target="_blank">
                <img class="icon" src="/public/icons/linkedin.png" alt="LinkedIn">
              </a>
              <a href="https://github.com/JonathanADB" target="_blank">
              <img class="icon" src="/public/icons/git.png" alt="GitHub"></a>
            </div>
          </div>
        </div>

        <div class="cards">
          <div class="card">
            <div class="cardText">
              <p><b>Andres Echeverry Garcia</b></p>
            </div>
            <div class="cardLinks">
              <a href="https://www.linkedin.com/in/andres-echeverry-garcia/" target="_blank">
                <img class="icon" src="/public/icons/linkedin.png" alt="LinkedIn">
              </a>
              <a href="https://github.com/Andres-451" target="_blank">
              <img class="icon" src="/public/icons/git.png" alt="GitHub"></a>
            </div>
          </div>
        </div>

        <div class="cards">
          <div class="card">
            <div class="cardText">
              <p><b>Jhon Stiven Davila Bernal</b></p>
            </div>
            <div class="cardLinks">
              <a href="https://www.linkedin.com/in/jhon-davila-85241a2a9/" target="_blank">
                <img class="icon" src="/public/icons/linkedin.png" alt="LinkedIn">
              </a>
              <a href="https://github.com/jhonsdb" target="_blank">
              <img class="icon" src="/public/icons/git.png" alt="GitHub"></a>
            </div>
          </div>
        </div>

        <div class="cards">
          <div class="card">
            <div class="cardText">
              <p><b>Jesús David Romero</b></p>
            </div>
            <div class="cardLinks">
              <a href="https://www.linkedin.com/in/jesus-david-romero160/" target="_blank">
                <img class="icon" src="/public/icons/linkedin.png" alt="LinkedIn">
              </a>
              <a href="https://github.com/JesusDavid16" target="_blank">
              <img class="icon" src="/public/icons/git.png" alt="GitHub"></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
}
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: solid 1px var(--orange);
  border-radius: 0.7rem;
  max-width: 40rem;
  margin: 1rem;
}
.cardText {
  display: flex;
  flex-direction: column;
}
.cardLinks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
}
.icon:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 20px var(--orange);
}

.icon {
  width: 3rem;
  transition: transform 0.3s ease;
  border-radius: 10px;
  box-shadow: 0px 0px 10px var(--orange);
}

.hometext {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  background: linear-gradient(var(--ligthorange) 0%, var(--white) 100%);
}
.container1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}

.img {
  max-width: 45%;
  height: auto;
}

/* Media Query para versión móvil */ 
@media (max-width: 450px) { 
.container1 { 
  flex-direction: column; 
  align-items: center; } 
}
</style>

<script setup>
import Header from '../components/Header.vue';
import { useI18n } from 'vue-i18n';
</script>
