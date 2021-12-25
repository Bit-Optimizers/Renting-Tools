<template>
   <div>

    <div class="container mx-auto px-4 h-full forgot ">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-4/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
          >

            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div class="text-blueGray-400 text-center mb-3 font-bold">
                <small>reset password </small>
              </div>
              <form @submit.prevent="handleSubmit">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    password
                  </label>
                  <input
                  v-model="password"
                    type="password"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                </div>
                                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    confirm password
                  </label>
                  <input
                  v-model="confirm_password"
                    type="password"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="confirm Password"
                  />
                </div>



                <div class="text-center mt-6">
                  <button
                  @click="reset"
                    class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                  >
                    confirm change
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios"
export default {
 mounted:function(){
   this.hash = this.$route.params.id
   console.log(this.hash)
 },
    data(){

        return{
            confirm_password :"",
            password:"",
            hash:""
        }
    },
    methods:{
     async reset(){
        var url = `http://localhost:5000/auth/resetpassword`
        var data = {
           hash_link : this.hash,
           password : this.password
        }

        var res = await Axios.post(url, data)
        console.log(res);
        alert("your password has been changed successfully !!!")
        this.$router.push("/auth/login")
      }
    }

}
</script>

<style>

</style>