<template>
  <div id="app">
    <canvas id="my-canvas"></canvas>
    <div class="welcome">
      <h1>Welcome {{$auth.user.displayName}}</h1>
      <br />
      <span class="text">{{message}}</span>
      <br />
      <h1 class="red">Tony</h1>
    </div>
  </div>
</template>

<script>
import ConfettiGenerator from "confetti-js";

export default {
  mounted() {
    var confettiSettings = { target: "my-canvas" };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  },
  name: "App",
  data() {
    return {};
  },
  computed: {
    message() {
      var msg = "";
      switch (this.$auth.user.username) {
        case "papa Mardochée":
          msg =
            "Merci papa pour qui tu es. Merci encore. Voici une autre manière que j'ai trouvé pour te remercier de tout ce que tu es pour moi. Merci papa Mardochée. ";
          break;
        case "maman Rébecca":
          msg =
            "Merci maman Rébecca pour qui tu es. Pour ta vie merci Seigneur. Merci pour ton amour. Merci d'être là pour papa Mardochée, et aussi pour nous. Tu es une grande bénédiction pour chacun d'entre nous et le gloire revient à DIEU !!!";
          break;
        case "maman José":
          msg =
            "Merci maman José pour tes prières, ton soutien, ta présence, ta personne dans ma vie. Tu es une bénédiction pour moi et c'est une grâce que de t'avoir pour maman. MERCI SEIGNEUR POUR TA VIE !!! Que sa grâce soit sur toi, et que sa présence soit avec toi, que tu réussisses dans toutes tes entreprises  et que la clarté soit ton partage !!!";
          break;
        case "maman Éliane":
          msg =
            "Merci maman Éliane pour qui tu es. Le Seigneur nous a fait la grâce d'avoir une maman qui aime la cuisine, on a été bien nourris à chaque cellule !! Tu as cette affection pour les gens autour de toi, tu ressens les choses et tu restes connectée au Seigneur, merci maman ça me fait du bien. C'est une grâce que de t'avoir pour maman !! MERCI SEIGNEUR POUR TA VIE ! Tu es bénie toi et ta famille ! Que la grâce et la paix de DIEU soit avec toi !";
          break;
        case "Aurélie":
          msg =
            "You are one of the most beautiful women I know !!! Meci pour ta vie, tes exhortations, tes témoignages. Merci pour ton amour, pour ton soutien, merci Aurélie, sois bénie. MERCI SEIGNEUR POUR TA VIE !!! May his favor be upon you, may his presence be with you, be blessed in the city, be blessed in the field, be blessed in everything you do, let the LORD gives you the desires of your heart !";
          break;
        case "Jenny":
          msg =
            "Merci pour qui tu es. Merci pour ta vie, merci pour ton soutien. Que le Seigneur t'accorde de lui ressembler davantage ! Quil t'accorde de grandir RAPIDEMENT, et que tu sois très attachée à lui, inséparable. MERCI SEIGNEUR POUR TA VIE !!! Que DIEU te bénisse abondamment.";
          break;
        case "Lydie":
          msg =
            "Lydie, tu es une femme forte ! Merci pour qui tu es, encore pour ce que tu as fait, tu m'as coaché pour que je puisse avancer dans le monde professionnel, et tu continues, merci pour ta vie. C'est quelque chose dont je te suis reconnaissant et je ne sais pas tout ce que tu fais mais merci. Merci Seigneur pour ta douceur. Et merci parce que quand tu penses à moi c'est toujours pour me faire avancer, m'aider. MERCI SEIGNEUR POUR TA VIE !! Qu'il te bénisse abondamment, que tu ailles de progrès en progrès, de gloire en gloire, et que la promotion soit ton partage !";
          break;
        case "Chirst":
          msg =
            "Merci Christ pour qui tu es. Tu es mon mentor, et j'ai beaucoup appris avec toi, surtout dans le caractère de Christ. Christ, tu es plus qu'un ami et plus qu'un frère. J'ai un peu l'impression de vivre ce que Jonathan et David vivaient. J'ai fait un songe où j'étais sur un terrain de foot et on ressentait la compétitivité dans l'atmosphère, où chacun doit se battre pour gagner. Mais quand tu es arrivé su le terrain, on a à peine commencé à parler et j'ai ressenti cet amour si grand, juste le fait d'être avec toi c'est génial. C'est une manière pour moi de t'honorer, et te montrer de l'amour aussi haha. Merci Seigneur pour ta vie et pour tout ce que tu fais pour moi, pour tes conseils et tout... C'est une grande grâce que d'être près de toi !";
          break;
        case "Sarah":
          msg =
            "Sarah !!! Merci pour tes gâteaux !!! Merci pour tes conseils, tes paroles, ta franchise !!! Merci pour qui tu es, tu es arrivée et tu nous as rejoins, tu nous apportes de ta personne, de tes compétences en cuisine aussi, et je suis sûr que tu continueras à faire bien plus ! Merci pour toutes les fois où tu as mis du gasoil dans ma voiture !!! Merci Seigneur pour ta vie, que DIEU te bénisse abondamment. Que sa face luise sur toi. Juste un petit message pour te bénir et te dire merci. Tu es une grâce, une bénédiction pour ma vie.";
          break;
        case "Abi":
          msg =
            "Merci Abi d'être là ! Que le Seigneur te bénisse, qu'il te donne la sagesse, et que tu puisses grandir pleinement dans ses voies ! Le Seigneur t'aime, et moi aussi ! Sois bénie";
          break;
        case "grand maman":
          msg =
            "Merci grand-maman. Merci pour ce que vous faites pour maman José, tout ce temps à rester à la maison, à garder Éliora. Merci je vous respecte, et je vous honore. Merci Seigneur pour votre vie. Soyez bénie grand-maman.";
        default:
          break;
      }
      return msg;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");
h1 {
  color: gold;
}
#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 80vw;
  margin: auto;
}

.welcome {
  position: relative;
  z-index: 10;
}

.text {
  display: block;
  /* standard gradient background */
  background: linear-gradient(
    to right,
    rgb(0, 140, 255),
    rgb(38, 197, 245),
    rgb(250, 121, 0),
    rgb(129, 13, 33)
  );
  /* clip hackery */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  position: relative;
  /** */
  font-size: 30px;
  /** animation */
  animation: 1s ease-out infinite alternate bounce;
}

@keyframes bounce {
  from {
    top: 0;
  }
  to {
    top: -20px;
    transform: scale(1.1, 1.1);
  }
}

.red {
  color: red;
}

#my-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>