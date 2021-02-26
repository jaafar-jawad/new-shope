<template>
  <div class="bean container">
    <h1>Three Bean Salad</h1>
    <img src="@/assets/Three Bean Salad.jpg" width="500px" alt />

    <div class="row">
      <div class="Ingredients col-l-6 col-md-6 col-12">
        <ul>
          <h3>Ingredients</h3>
          <hr>
          <li>Ice</li>
        <hr>
          <li>8 ounces fresh green beans (about 2 cups), washed and cut in half</li>
        <hr>
          <li>1/4 cup sherry vinegar</li>
        <hr>
          <li>2 teaspoons Dijon mustard</li>
        <hr>
          <li>1 tablespoon honey</li>
        <hr>
          <li>1/2 cup extra-virgin olive oil</li>
        <hr>
          <li>One 15-ounce can cannellini beans, rinsed and drained</li>
        <hr>
          <li>One 15-ounce can red kidney beans, rinsed and drained</li>
        <hr>
          <li>1/4 cup fresh basil leaves, chopped</li>
          <hr>
          <li>1/4 cup fresh flat-leaf parsley leaves, chopped</li>
        <hr>
          <li>shallot, minced</li>
        <hr>
          <li>Freshly ground black pepper</li>
        </ul>
      </div>
      <div class="Directions col-l-6 col-md-6 col-12">
        <ul>
          <h3>Directions</h3>
          <li>Bring a pot of salted water to a boil. Set up a large bowl of ice water. Add the green beans to the pot and cook until crisp-tender, 2 to 3 minutes. Drain and plunge the green beans into the ice water to stop the cooking. Drain the green beans.</li>
          <hr />
          <li>Whisk the vinegar, mustard and honey in a large bowl. Whisk in the oil until emulsified. Add the green beans, cannellinis, kidneys, basil, parsley and shallots to the bowl and toss to coat. Sprinkle with salt and pepper and serve.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bean",
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  border: solid 1px;
  margin-top: 50px;
}

</style>