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
                <small>Forgot your password ? </small>
              </div>
              <form @submit.prevent="handleSubmit">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                  v-model="email"
                    type="email"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>



                <div class="text-center mt-6">
                  <button
                  @click="sendMail"
                    class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                  >
                    reset password
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
    name:"forgot",
    data() {
    return {
  data:{ 
      email:""
 
    }}
  },
    methods:{
        sendMail(){
            Axios.post("http://localhost:5000/auth/forgotpassword",{email:this.email})
      .then(()=>{console.log("email",this.email);})
        },
        confirmEmail(){
            
    },  
        backToLogin(){
        this.$router.push('/login')
        }
    }
}
</script>

<style>
 .forgot {
     margin-top:200px;
 }
</style>