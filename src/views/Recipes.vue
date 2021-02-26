<template clas>
    <div class="myrecipes animate__animated animate__backInDown ">
        <div class="head"></div>

        <div class="add container-lg">
            <form action>
                <input
                    class="in"
                    type="text"
                    placeholder="add new recipes "
                    v-model="AddNewRecipes"
                />
                <button
                    class="zer"
                    @click.prevent="addrecipes"
                    :disabled="!AddNewRecipes"
                >
                    enter new recipes
                </button>
            </form>
            <div class="row">
                <div
                    class="recipeslist col-lg-4 col-md-6 col-12"
                    v-for="rec in recipes"
                    v-bind:key="rec"
                >
                    <div class="card" style="width: 18rem;">
                        <img
                            src="@/assets/roman.jpeg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">{{ rec.word }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <p class="paramid">
                        When you master the art of cooking .. you definitely
                        know how to prepare the table for your life and how to
                        cook your desires .. Your pleasure begins with preparing
                        for pleasure .. from bringing your dishes and extending
                        the table waiting for you.
                    </p>
                </div>
                <div class=" sora col-lg-6 col-md-6 col-12"></div>
            </div>
        </div>

        <div class="end"></div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            pagtitle: "welcom in recipes us",
            AddNewRecipes: "",
            recipes: []
        };
    },
    methods: {
        addrecipes() {
            this.recipes.push({ word: this.AddNewRecipes, done: false });
            this.AddNewRecipes = "";
        }
    }
};
</script>

<style lang="scss" scoped>
.head {
    background-image: url("~@/assets/recpies.jpg");
    background-attachment: fixed;
    height: 450px;
    background-size: cover;

    clip-path: polygon(
        50% 0%,
        100% 0,
        100% 35%,
        100% 87%,
        76% 77%,
        47% 87%,
        21% 76%,
        0 90%,
        0% 35%,
        0 0
    );
}

.add {
    margin: 0;
}
.zer {
    margin: 15px;
    font-size: 18px;
    color: #393e46;
    background-color: #f06868;
    width: 200px;
    border-radius: 10%;
    border: solid 0.5px;
}

.zer:hover {
    background-color: #f33535;
    color: black;
}

.in:focus {
    margin: 15px;
    padding-bottom: 300px;
    width: 350px;
    background-color: #f4eeff;
}

.recipeslist {
    padding-left: 150px;
}

.mid {
    height: 700px;
    padding-top: 100px;
}

.sora {
    height: 300px;
    widows: 300px;
    background-size: cover;
    background-image: url("~@/assets/tba.jpeg");
    clip-path: circle(50% at 84% 35%);
}
.paramid {
    color: #333;
    font-size: 25px;
    font-family: arial;
    padding-left: 30px;
}

.end {
    background-image: url("~@/assets/chif.jpg");
    background-attachment: fixed;
    height: 500px;
    background-size: cover;
    clip-path: polygon(
        50% 9%,
        81% 25%,
        100% 0,
        100% 70%,
        100% 100%,
        50% 100%,
        0 100%,
        0% 70%,
        0 0,
        20% 25%
    );
}
</style>
