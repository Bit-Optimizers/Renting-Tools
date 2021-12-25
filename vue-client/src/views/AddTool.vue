<template> 
<div>
    <Navbar/>
<div class="toolcontainer">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <br/>
      <br/>
      <br/>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST" @submit.prevent="">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" v-model="tool.title" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">description</label>
                <input type="text" name="last-name" v-model="tool.description" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">price</label>
                <input type="text" name="email-address" v-model="tool.price" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">category</label>
                <select id="country" name="country" v-model="tool.category" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>gardening</option>
                  <option>building</option>
                  <option>plumbering</option>
                </select>
              </div>

              <div class="col-span-6">
                <label for="street-address"  class="block text-sm font-medium text-gray-700">pictures</label>
                <input type="file"  name="street-address" id="street-address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>


             

            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button @click="addTool" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Add Tool
           </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
</template>

<script>
  import Axios from "axios";
 import Navbar from "@/components/navbar/Navbar.vue";
export default {
 components : {
     Navbar
 },
 mounted:function() {
    var id = localStorage.getItem("session")  
    this.tool.userId=id
    console.log(this.tool);
 }
 ,
 data(){
      return {
tool:{
    pictures:"",
    userId:"",
    title:"",
    description:"", 
    price: "",
    category:""
    
    }
 }
 },

 methods : {
     async addTool(){
          var url = `http://localhost:5000/tools/`
          this.picture()
          console.log(this.tool)
          var newTool = await Axios.post(url,this.tool)
          console.log(newTool)
      },
     picture(){
         if(this.tool.title.includes("mala"))
         {
             this.tool.pictures = "https://www.fixiha.tn/wp-content/uploads/2018/10/Meule-%C3%A0-disque-2400-W-INGCO-230mm-%E2%80%93-AG24008.jpg"
         }
         else if(this.tool.title.includes("mower"))
         {
             this.tool.pictures="https://ae01.alicdn.com/kf/H129fd46ccfce4e6a85af8f8661227df43/1300W-Weeding-Shear-Household-Pruning-Mower-3300r-min-Lawn-Mower-Handheld-Hedge-Shrub-Trimmer-Electric-Multi.jpg"
         }
         else if ( this.tool.title.includes("scr"))
         {
             this.tool.pictures="https://ae01.alicdn.com/kf/UTB8WxFTh1vJXKJkSajhq6A7aFXaE/New-Electric-Screwdriver-220V-Electric-OS-600-801-Electric-Screwdriver-Head.jpg_Q90.jpg_.webp";
         }
     }
 }

 }

</script>
  



<style>
   .toolcontainer{
    
    
      display: flex;
       align-items: center;
       justify-content: center;
   }
</style>