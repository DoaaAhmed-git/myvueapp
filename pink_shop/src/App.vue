<template>
  <div id="app">

<!-- Header-->
       <a class="menu-toggle rounded"  @click="show"  style="color: pink;" ><i class="fas fa-bars">BASKET</i></a>
        <nav id="sidebar-wrapper"  v-if="appear"  >
            <ul class="sidebar-nav"  >
               
                <div class="row" v-for="(item , index) in cart"  > 
<ul class="ull" >
  <li class="lii">{{item.name}}</li>
<li class="lii">Total: {{item.qyt * item.price}}</li>
<li class="lii">Qyt:{{item.qyt}} </li>
<button  @click="del(index)" >delete</button>
</ul>
            </div>
           <p> Total: {{totall()}} </p>
            </ul>
        </nav>

 <!-- ======= Header/Navbar ======= -->
  <nav  class="nav2">
    <div class="row">
    
      <a style="color: pink;">PINK SHOPE</a>

      <div >
        <ul class="navbar-nav">
          
          
        </ul>
      </div>

    </div>
  </nav><!-- End Header/Navbar -->

        <header class="masthead d-flex align-items-center">
        </header>
<div class="row"  v-for="product in anas" :key="product.id">

  <div class="column">
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="./assets/make (7).jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back" >
    <h1> {{product.name}}</h1>
       <h4>Price: {{product.price}}</h4>
       <h4>Qty: {{product.qyt}} </h4>
       <h4>color: {{product.color}}</h4>
       <h4>type: {{product.type}}</h4>
       <br>
        <input type="number" v-model.number="product.qyt">
      <button v-on:click='add(product, product.qyt)'>Basket</button>
      <button v-on:click='addfav(product)' >luv</button>
      
    </div>
  </div>
</div>
  </div>
</div>
<br>
             <div class="row" v-for="item in cart2"  > 
<ul class="ull" >
  <li class="lii">name:{{item.name}}</li>
<li class="lii">color: {{item.color}}</li>
<li class="lii">type:{{item.type}} </li>
<li class="lii">price:{{item.price}} </li>

</ul>
            </div>

<last></last>

       </div>
</template>

<script src="https://cdn.userfront.com/core.js">

</script>

<script>

Userfront.init("demo1234");

import Sidebar from './component/sidebar.vue'
import Basket from './component/basket.vue'
import Eye from './component/eye.vue'
import Face from './component/face.vue'
import Lips from './component/lips.vue'
import Last from './component/last.vue'
import json from './doaa.json' 
import axios from 'axios'
import Userfront from "@userfront/core";

export default {
  components:{
    'sidebar': Sidebar,
    'basket' : Basket,
    'eye' : Eye,
    'lips' : Lips,
    'face' : Face,
    'last': Last
  },

  name: 'app',
  data () {
    
    return {

anas: [
{"name":"fawndation", "price":4 , "qyt":0 , "id":1, "color":"dark" , "type":"Fcae" , "fav":false}, 
{"name":"bawder",     "price":2 , "qyt":0 , "id":2 , "color":"light" , "type":"Fcae" , "fav":false},
{"name":"konselar",   "price":5 , "qyt":0 , "id":3 , "color":"middel" , "type":"Fcae" , "fav":false},
{"name":"konselar",   "price":5 , "qyt":0 , "id":4 , "color":"dark" , "type":"Fcae" , "fav":false}

 ],
cart:[],
cart2:[],
total: 0,
total2:0,

appear: false,
      
    }
  },



 methods:{
 
  

////////////////////////////////////////////////////////
add(product , qyt){

  var prodQyt = 0;
var foundprouct = false;s

for(var [idx, p] of this.cart.entries())
{
if (p.id == product.id) {
  this.cart[idx].qyt+= qyt
  foundprouct = true;
}
}
if (!foundprouct) {
  this.cart.push({ 
    id:product.id , name:product.name , color:product.color , type:product.type , qyt:product.qyt , price: product.price
  })
}

// var total = item.qyt * item.price;
// var total2 = total++; 

},
////////////////////////////////////////////////////////

addfav(product){
var foundprouct = false;
for(var [idx, p] of this.cart2.entries())
{
if (p.id == product.id) {
  this.cart2[idx].fav= true; 
  var foundprouct = true; 
}
}
if (!foundprouct) {
  this.cart2.push({ 
    id:product.id , name:product.name , color:product.color , type:product.type , qyt:product.qyt , price: product.price
  })}
},

////////////////////////////////////////////////////////

totall(product , qyt){
  var total = 0;
for(var [idx, p] of this.cart.entries())
{
total+=p.qyt * p.price;  
}
return total;
},
////////////////////////////////////////////////////

del(index){
// for( var item of this.cart){
this.cart.splice(index , 1);
//}

},

// /////////////////////////////////////////////////////////





  show:function(){
this.appear = !this.appear
  }


}
 

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
  box-sizing: border-box;
}

body {
  background-color: #28223F;
  font-family: Montserrat, sans-serif;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: 100vh;
  margin: 0;
}

h3 {
  margin: 10px 0;
}

h6 {
  margin: 5px 0;
  text-transform: uppercase;
}

p {
  font-size: 14px;
  line-height: 21px;
}

.card-container {
  background-color: #231E39;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
  color: #B3B8CD;
  padding-top: 30px;
  position: relative;
  width: 350px;
  max-width: 100%;
  text-align: center;
}

.card-container .pro {
  color: #231E39;
  background-color: #FEBB0B;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  padding: 3px 7px;
  position: absolute;
  top: 30px;
  left: 30px;
}

.card-container .round {
  border: 1px solid #03BFCB;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  padding: 7px;
}

button.primary {
  background-color: #03BFCB;
  border: 1px solid #03BFCB;
  border-radius: 3px;
  color: #231E39;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  padding: 10px 25px;
}

button.primary.ghost {
  background-color: transparent;
  color: #02899C;
}

.skills {
  background-color: #1F1A36;
  text-align: left;
  padding: 15px;
  margin-top: 30px;
}

.skills ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.skills ul li {
  border: 1px solid #2D2747;
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  margin: 0 7px 7px 0;
  padding: 7px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}


.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}

del {
  color: rgba(0, 0, 0, 0.3);
}

li {
  margin: 8px 0;
}

form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
a{

  margin: 0 10px;
  text-align: center;
}

.row{
padding: 14px 0;
margin-bottom: 0;
}

.ull{

  list-style: none;
text-align: right;
padding-right: 40px;
margin: 10px;
}


.lii{

display: inline-block;
margin: 0  10px;
margin-right: 50px;

}

.navbar-nav{
list-style: none;
text-align: center;
margin: 0;

}

.nav-item{
display: inline-block;
margin: 0 10px;
margin-right: 50px;
color: pink;


}

.nav-item:hover{
text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}

.nav2{
background: #444;
padding: 14px 0;
margin-bottom: 0;

}


 #sidebar-wrapper {
  padding-top: 10px;
  position: fixed;
  z-index: 2;
  right: 0;
  width: 500px;
  height: 100%;
  transition: all 0.8s ease 8s;
  transform: translateX(10px);
  background: pink;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  border-radius: 20px;
}

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 80px;
}

.sidebar-nav li.sidebar-nav-item a {
  display: block;
  text-decoration: none;
  color: black;
  padding: 15px;
  margin-top: 30px;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);

}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {

  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  font-size: 1.2rem;
  background: rgba(52, 58, 64, 0.1);
  height: 80px;
  line-height: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
}

.sidebar-nav > .sidebar-brand a {
  color: #fff;
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}

#sidebar-wrapper.active {
  right: 250px;
  width: 250px;
  transition: all 0.4s ease 0s;
  padding-top: 10px;
}

.menu-toggle {
  position: fixed;
  right: 15px;
  top: 30px;
  width: 70px;
  height: 50px;
  text-align: center;
  color: #fff;
  background: rgba(52, 58, 64, 0.5);
  line-height: 50px;
  z-index: 999;
  border-radius: 10px;
  text-decoration: none;
}
.menu-toggle:focus, .menu-toggle:hover {
  color: #fff;
}
.menu-toggle:hover {
  background: #343a40;
}




.masthead {
  min-height: 30rem;
  position: relative;
  display: table;
  width: 100%;
  height: 700px;
  padding-top: 8rem;
  padding-bottom: 8rem;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url("./assets/new (3).jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.d-flex {
  display: flex !important;
}


.align-items-center {
  align-items: center !important;
}


.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
 

  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 150%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 30px;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: pink;
}

/* Style the back side */
.flip-card-back {
  background-color: pink;
  color: black;
  transform: rotateY(180deg);
}
.column {
  float: left;
  width: 33.33%;
padding-right: 10px;
padding-left: 20px;
margin-bottom: 100px;
margin-top: 50px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
 
  clear: both;
}



</style>
