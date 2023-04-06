<template>

  <div id="app" >
     
<div id="bag" v-bind:class="{brust: ended}"></div>
<div id="health">
  <div v-bind:style="{width: health + '%'}"></div>
</div>
<div id="control">
  <button @click="punch" v-show="!ended">PUNCH</button>
  <button @click="restart">RESTART</button>
</div>




  

  </div>

</template>

<script>


export default {

  name: 'app',
  data() {
     return{
   health: 100,
    ended: false,
}},
  
  methods:{
punch: function() {
 this.health -=10;
 if (this.health <= 0) {
  this.ended= true;

 }
},

restart:function(){

  this.health= 100;
  this.ended = false;

}

}
 }
</script>

<style>

.row{
display: flex;
max-width: 90vw;
flex-wrap: wrap;
justify-content: space-between;
}
.row img{
width: 100px;
}
.row .play-button{
  padding-top: 25px;
}

#app{

 /* background-image: url("./assets/back.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
 */
}

#bag{
width: 1000px;
height: 500px;
margin: 0 auto;
background: url(./assets/Capture.png) center no-repeat;
background-size: 80%;
}

#bag.brust{

background: url(./assets/Capture2.png) center no-repeat;
background-size: 80%;

}

#health{
width: 1000px;
margin: 0 auto 20px auto;
border: 2px solid #000;
}

#health div{

height: 20px;
background: crimson;

}

#control{
 

}

#canvas {
width: 600px;
padding: 200px 20px;
text-align: center;
border: 1px solid #333;
background-color: #42b983;


}

</style>
