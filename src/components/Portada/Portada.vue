<template>
  <main>
    <!-- Seccion portada -->
    <section class="container seccion-portada">
      <div class="contenido-portada">
            <div class="titulo-grande">
              <h1>UNIVERSIDAD GERARDO BARRIOS</h1>
              <h3>Ingenieria en Sistemas y Redes Informaticas</h3>
            </div>
            <div class="titulo-pequeño">
              <h3>Asignatura:</h3>
              <h4>Programacion Computacional IV</h4>
              <h3>Presentado por:</h3>
              <h4>Luna Acosta, Kevin Alexander</h4>
              <h3>Docente:</h3>
              <h4>Gisela Espinoza</h4>
            </div>
            <div class="btn">
              <a href="#" class="button">Ciclo 01 , 2023</a>
            </div>
      </div>
    </section>
  </main>
  
</template>


<style scoped>
  main{
  background-image: url('../../assets/img/portadaimg.jpg');
  background-size: cover;
  background-position: center;
  color: black;
}
.seccion-portada {
  height: 100vh;
  width: 100%;
  padding: 90px 10% 120px;
}
.contenido-portada {
  text-align: center;
  justify-content: center;
}
.contenido-portada .titulo-grande h1 {
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.1em;
  color: #FFA0A6;
  text-shadow: 1px 7px 15px rgba(255, 208, 208, 0.72);
  animation: animacion-h1 2s  ease-in-out ;
}

@keyframes animacion-h1 {
  0% {
    color: transparent;
    text-shadow: 1px 7px 15px rgba(0, 0, 0, 0);

  }
  100% {
    color: #FFA0A6;
  }
}
.contenido-portada .titulo-grande h3 {
  font-size: 35px;
  font-weight: 500;
  color: #FFFFFF;
  text-shadow: 1px 7px 15px rgba(255, 208, 208, 0.72);
  animation: animacion-h3 2s step-end ;
}

@keyframes animacion-h3 {
  0% {
    color: transparent;
    text-shadow: 1px 7px 15px rgba(0, 0, 0, 0);
  }
  100% {
   color: #FFFFFF;
   text-shadow: 1px 7px 15px rgba(255, 208, 208, 0.72); 
  }
}

.contenido-portada .titulo-pequeño {
  padding-top: 1em;
}
.contenido-portada .titulo-pequeño h3 {
  font-size: 25px;
  font-weight: 500;
  color: #FFA0A6;
  animation: animacion-h3-tp 3s step-end ;
}

@keyframes animacion-h3-tp {
  0% {
    color: transparent;
  }
  100% {
    color: #FFA0A6;
  }
}
.contenido-portada .titulo-pequeño h4 {
  font-size: 20px;
  font-weight: 500;
  color: #FFFFFF;
  text-shadow: 1px 7px 15px rgba(255, 208, 208, 0.72);
  animation: animacion-h4-tp 3s step-end ;
}

@keyframes animacion-h4-tp {
  0% {
    color: transparent;
    text-shadow: 1px 7px 15px rgba(0, 0, 0, 0);
  }
  100% {
   color: #FFFFFF;
   text-shadow: 1px 7px 15px rgba(255, 208, 208, 0.72); 
  }
}
.btn{
  background-color: #CF1CFE;
  margin-top: 30px;
  border-radius: 20px;
  width: 150px;
  height: 40px;
  text-align: center;
  transition: 0.5s ease;
  animation: animacion-boton 4s step-end ;
}
@keyframes animacion-boton {
  0% {
    background-color: transparent;
  }
  100% {
    background-color: #CF1CFE;
  }
}
.btn:hover {
  background: #FFA0A6;
  box-shadow: 1px 7px 15px rgba(255, 208, 208, 0.72);
  color: #CF1CFE;
}
.btn .button {
  text-decoration: none;
  color: #FFFFFF;
  animation: animacion-boton-tx 4s step-end ;
}
@keyframes animacion-boton-tx {
  0% {
    color: transparent;
  }
  100% {
    color: #FFFFFF;
  }
}

/* Responsive  */
@media screen and (max-width: 1075px) { 
  .contenido-portada .titulo-grande h1 {
  font-size: 40px;
  font-weight: 700;
}
  .contenido-portada .titulo-grande h3 {
  font-size: 25px;
  font-weight: 500;
}
 .contenido-portada .titulo-pequeño h3 {
  font-size: 20px;
  font-weight: 500;
}
.contenido-portada .titulo-pequeño h4 {
  font-size: 15px;
  font-weight: 500;
}

}
@media screen and (max-width: 473px) { 
  .contenido-portada .titulo-grande h1 {
  font-size: 30px;
  font-weight: 700;
}
  .contenido-portada .titulo-grande h3 {
  font-size: 15px;
  font-weight: 500;
}
 .contenido-portada .titulo-pequeño h3 {
  font-size: 16px;
  font-weight: 500;
}
.contenido-portada .titulo-pequeño h4 {
  font-size: 11px;
  font-weight: 500;
}

}
</style>
