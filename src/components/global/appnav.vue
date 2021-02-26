<template>


    <div class="nav">
        <div class="logo"> <h5>Yummy!</h5> </div>
        <ul>
            <router-link to="/" tag="li" exact>
                <a>Home</a>
            </router-link>
            <router-link to="/recipes" tag="li" exact replace>
                <a>recipes</a>
            </router-link>

            <router-link to="/login" tag="li">
                <a>Login</a>
            </router-link>

            <router-link to="/signup" tag="li">
                <a>signup</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "appnav"
};

</script>

<style lang="scss" scoped>
.nav {
    background-color: #333;
    overflow: hidden;
    margin-bottom: 0;
    .logo {
        float: left;
        padding: 15px 30px;
        height: 30px;
        line-height: 30px;
        color: #ee8fae;
    }

    ul {
        float: right;
        margin: 0;
        padding: 0;
        li {
            display: inline-block;

            padding: 15px;
            a {
                padding: 15px 30px;
                height: 30px;
                line-height: 30px;
                text-decoration: none;
                color: yellowgreen;
            }
        }
    }
}
</style>
