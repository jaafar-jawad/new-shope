<template>
<div class=" container-md recinhome ">
    <di >
        <h1 class="title"></h1>
    </di>

  

  <section class="row">
    <div class="recipeslist col-lg-4 col-md-6 col-12 ">
      <div class="card" style="width: 18rem;">
    <a class="imag" href="/MacandCheese"><img  src="@/assets/Mac and Cheese.jpg" width="285px" height="200px" alt=""></a> 
        <div class="card-body">
          <p class="card-text">Mac and Chees</p>
        </div>
      </div>
    </div>

    <div class="recipeslist col-lg-4 col-md-6 col-12">
      <div class="card" style="width: 18rem;">
    <a class="imag" href="/cauliflower"><img  src="@/assets/Cauliflower.jpg" width="285px" height="200px" alt=""></a> 
        <div class="card-body">
          <p class="card-text">Cauliflower and Bean Chili </p>
        </div>
      </div>
    </div>

    <div class="recipeslist col-lg-4 col-md-6 col-12">
      <div class="card" style="width: 18rem;">
    <a href="/hummus"><img src="@/assets/hoummus.jpeg" class="card-img-top" alt="..." /></a> 
        <div class="card-body">
          <p class="card-text">Classic Hummus</p>
        </div>
      </div>
    </div>


    
    <div class="recipeslist col-lg-4 col-md-6 col-12">
      <div class="card" style="width: 18rem;">
    <a href="/bean"><img src="@/assets/Three Bean Salad.jpg" class="card-img-top" width="250px" height="275px" alt="..." /></a> 
        <div class="card-body">
          <p class="card-text">Three Bean Salad</p>
        </div>
      </div>
    </div>

 
  <div class="recipeslist col-lg-4 col-md-6 col-12">
      <div class="card" style="width: 18rem;">
    <a href="/sweetpotato"><img src="@/assets/potato.png" class="card-img-top" width="250px" height="250px" alt="..." /></a> 
        <div class="card-body">
          <p class="card-text">Sweet Potato and Black Bean Burritos</p>
        </div>
      </div>
    </div>


    <div class="recipeslist col-lg-4 col-md-6 col-12">
      <div class="card" style="width: 18rem;">
    <a href="/pizza"><img src="@/assets/pizza.jpg" class="card-img-top" width="250px" height="250px" alt="..." /></a> 
        <div class="card-body">
          <p class="card-text">pizza</p>
        </div>
      </div>
    </div>


    





    
  </section>
  </div>
</template>

<script>
export default {
  name: "RecInHome",
};
</script>
<style lang="scss" scoped>




.recipeslist{
padding: 20px;

}

.imag:hover{

cursor: pointer;
}





</style>