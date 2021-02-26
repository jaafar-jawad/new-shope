<template>
    <div class="Signup">
        <form
            class="container formstyle  animate__animated animate__zoomIn"
            action="Login.vue"
            method="post"
            @submit.prevent="handlesubmit"
        >
            <div class="FirstName">
                <label class="styleofnames">First Name </label>
                <input
                    type="text"
                    class="form-control"
                    v-model="firstname"
                    aria-describedby="emailHelp"
                    placeholder=" Please Enter your First Name "
                />
                <small id="emailHelp" class="form-text text-muted"
                    >We'll never share your email with anyone else.</small
                >
            </div>

            <div class="LastName">
                <label class="styleofnames">Last Name</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="lastnaem"
                    placeholder=" Please Enter your Last Name"
                />
            </div>

            <div class="password">
                <label class="styleofnames">Email</label>
                <input
                    type="password"
                    class="form-control"
                    v-model="pass"
                    placeholder=" Please Enter your Email"
                />
            </div>

            <div class="password">
                <label class="styleofnames">Password</label>
                <input
                    type="password"
                    class="form-control"
                    v-model="pass"
                    placeholder=" Please Enter your Password"
                />
            </div>

            <div>
                <button type="submit" class=" zer ">Signup</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "signup",

    data() {
        return {
            user: {
                firstname: null,
                lastnaem: null,
                emiladd: null,
                pass: null
            }
        };
    },

    methods: {
        handlesubmit() {
            const info = {
                firstname: this.firstname,
                lastnaem: this.lastnaem,
                emiladd: this.emiladd,
                pass: this.pass
            };

            this.$router.push("/login");
            console.log(info);
        }
    }
};
</script>

<style lang="scss" scoped>
.Signup {
    background-image: url("~@/assets/labtob.jpg");
    background-size: cover;
    height: 100%;
    position: fixed;
    width: 100%;
}
.formstyle {
    margin-top: 50px;
    height: 450px;
    width: 450px;
    background-color: #f9f7f7;
    opacity: 0.8;
    border-radius: 8%;
}

.styleofnames {
    font-family: monospace;
    color: #333;
    font-size: 20px;
    padding: 5px 5px;
    border-radius: 4%;
}

.zer {
    font-size: 20px;
    padding: 5px 5px;
    margin: 20px;
    border: solid 0.1px;
    border-radius: 10%;
    background-color: #ee8fae;
}
.zer:hover {
    background-color: #ec2165;
}
</style>
