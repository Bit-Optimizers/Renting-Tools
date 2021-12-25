<template>
<div class="comp">
<Navbar/>
 <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Tools</h1>    
<section class="text-gray-600 body-font container">
  <div class="container px-5 py-24 mx-auto max-w-7x1">

    
    <div class="container">
   
   
       <div class="item"    v-for="(tool,index) in tools" :key="tool._id" >
      <img class="picture" @mouseover="changeOwner(index)" @mouseleave="returnProduct(index)"  :src="tool.pictures[0]" alt="Mountain">
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
     var url = "http://localhost:5000/tools"
     var res = await Axios.get(url)
     this.tools = res.data
     console.log(this.tools)
  },
  components: {
      Navbar
  },
  data(){
    return {
        tools:[],
    
        owner:{FullName : "amine",
              PhoneNumber : "20 669 058",
              Email : "aminejelassi95@gmail.com",
              picture:"https://scontent.ftun4-1.fna.fbcdn.net/v/t39.30808-6/248023235_10215346462573249_509336240872393244_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JEUMXTQZdykAX-mAtPS&tn=KiWWX64isDGQiX8y&_nc_ht=scontent.ftun4-1.fna&oh=00_AT-qGy08ylDM8Ha_wjX5U6XBa3QYQ2ocDWXiRspFFHJgQg&oe=61CAD049"
             }
    }
  },
methods:{
     changeOwner(id){
        this.product= this.tools[id]
        this.tools[id].title = this.owner.FullName
        this.tools[id].price = this.owner.PhoneNumber
        this.tools[id].category = this.owner.Email
        this.tools[id].pictures[0] = this.owner.picture

    },
   async  returnProduct(){
             var url = "http://localhost:5000/tools"
     var res = await Axios.get(url)
     this.tools = res.data
     console.log(this.tools)
    }
},

}
</script>

<style scoped >

/* .comp {
     padding:20px;
 width: 20%;
 display: inline-block;
 text-align: center;
 flex-direction: column;
 justify-content:space-between;
 flex-wrap:wrap;

} */
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

</style>