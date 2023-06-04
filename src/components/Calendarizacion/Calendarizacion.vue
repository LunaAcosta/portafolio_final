<script setup>
import Footer from '../Footer/FooterComponent.vue'
</script>

<template>
  <main>
    
    <!-- Seccion Sumario -->
    <section class="container">
      <div class="titulo-sumario">
        <h1>Calendarizacion</h1>
      </div>
      <div class="contenedor-sumario">
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/calen.jpg" alt="Imagen Sumario"></a>
        </div>
      </div>
    </section>
   
  </main>
  <Footer />
</template> 
<style scoped>
main {
  background: #F2F2F2;
}

/* Clases seccion sumario */
.contenedor-sumario {
  align-items: center;
  justify-content: center;
  text-align: justify;
  padding-top: 5%;
  padding-bottom: 5%;
}


.titulo-sumario h1 {
  font-size: 70px;
  font-weight: 900;
  color: #222222;
  text-align: center;
}
.img-sumario a img {
  width: 75%;
  align-items: center;
  margin-left: 150px;

}



@media screen and (max-width: 1075px) {

  /* Responsivo para la seccion sumario */
  .contenedor-sumario {
    padding-top: 2%;
  }

  .titulo-sumario h1 {
    font-size: 40px;
    font-weight: 700;
  }
}

@media screen and (max-width: 992px) {
  .img-sumario a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-sumario a img {
    width: 100%;
    height: 100%;
    margin-left: 0px;
    margin-bottom: 2px;
  }
}



@media screen and (max-width: 467px) {
  /* Responsivo sumario */
  .contenedor-sumario {
    padding-top: 1%;
  }
  .titulo-sumario h1 {
    font-size: 30px;
    font-weight: 700;
  }
}
</style>

