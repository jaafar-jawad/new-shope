<template>
  <div class="home animate__animated animate__zoomIn">
    
    <div class="head ">
           <p class="para col-lg-6 co-md-6 col-12 ">Here you will find 
           <br> 
            the most delicious and varied recipes </p>
              
        
            

    </div>

    <div class="recinhome ">
      <RecInHome />
    </div>

    <div class="info">
      <div class="row">
        <ul class="end col-lg-6 col-md-6 col-12">
          <li class="item">Email:jaafarit96@gmil.com</li>
          <li class="item">websit:www.vue-cli.com</li>
          <li class="item">tel:0994761728</li>
        </ul>

        <ul class="end col-lg-6 col-md-6 col-12">
          <li class="item">more recipes :wwww.recipes.com</li>
          <li class="item">Book of cooking: www.cook.com</li>
          <li class="item">master chif :www.chif.com</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RecInHome from "@/components/global/RecInHome.vue";
export default {
  name: "Home",

  components: {
    RecInHome,
  },
};
</script>

<style>
.home {
  animation: fadeInTopRight;
  animation-duration: 5s;
}

.head {
  background-image: url("~@/assets/eg.jpg");
  background-attachment:fixed;
  background-size: 100%;
  height: 500px;
  background-repeat: no-repeat;
clip-path: polygon(50% 0%, 100% 0, 100% 35%, 100% 76%, 71% 79%, 51% 99%, 28% 79%, 0 75%, 0% 35%, 0 0);

}

.para{

    font-size: 25px;
    font-family: monospace;
    color: black;
    padding-top: 150px;
 
}



.recinhome {
  background-color: white;
  padding: 50px;
  
}


.info {
  background-color: #333;
  height: 350px;
}
.end {
  color: white;
}
ul {
  list-style-type: none;
}
.item {
  margin-top: 50px;
}

.item:hover {
  background-color: greenyellow;
  color: black;
}
</style>
