<template>
 <div class="comp">
<Navbar/>
 <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Tools</h1>    
<section class="text-gray-600 body-font container">
  <div class="container px-5 py-24 mx-auto max-w-7x1">

    
    <div class="container">
   
   
       <div class="item" v-for="(tool) in tools" :key="tool._id"  >
      <img class="picture"  :src="tool.pictures[0]" alt="Mountain">
      <button @click="dell(tool)" class="delete">DELETE ITEM</button>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">  {{tool.title}}</div>
        <h2> {{tool.category}}</h2>
        <p class="text-gray-700 text-base">
          {{tool.price}} 
        </p>
      </div>
    
    </div>


    </div>
  </div>
</section>
 </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue'
import Axios from "axios";
export default {
    mounted : async function(){

        var url = `http://localhost:5000/tools`
        var res = await Axios.get(url)
        this.tools=res.data
    },
    components:{
        Navbar
    },
    data(){
        return {
              tools:[],
              id : ""
        }
    },
     methods:{
     async  dell(tool){
       var url= "http://localhost:5000/tools/"+tool._id
      var deleted= await Axios.delete(url)
      console.log(deleted)
      
      this.fetchData()

    },
  async  fetchData(){
          var url = `http://localhost:5000/tools`
        var res = await Axios.get(url)
        this.tools=res.data 
    }
     }
}
</script>

<style scoped >

h1 {
  justify-content:center;
  margin-top: 100px;
  display: flex;
}
.picture{
    width: 100%; 
    height:60%;
}
.item{
    width: 200px;
    height: 400px;
    background-color: rgba(233, 233, 233, 0.829);
}
.container {
 justify-content:center;
margin : 20px;
padding-left: 450px;
  display: grid; 
  grid-template-columns: 100fr 200fr 200fr; 
  grid-template-rows: 200fr 200fr 200fr; 
  gap: 5px 100px; 
  grid-template-areas: 
    ". . ."
    ". . ."
    ". . ."; 
}

.delete {
    background : red;
}

</style>