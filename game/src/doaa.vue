<template>
  <div id="app">

  <div id="head"> </div>

 <header class="masthead d-flex align-items-center">
            <div class="container px-4 px-lg-5 text-center">
                <h1 class="mb-1">22 New Nxecutives | Taxation</h1>
                <h3 class="mb-5"><em>ذكرياتنا الحلوة </em></h3>
              
            </div>
        </header>



 <div class="header">
  <h1>الزملاء الكرام</h1>
</div>

<div id="search">
 <input   id="input" type="text" v-model="search" placeholder="..ابحث هنا">
</div>


 <div class="row">

  <div class="column">
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="./assets/them (6).jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h2>ملاذ ميرغني</h2>
      <h5> الجامعة: النيلين</h5>
       <h5>سنة التخرج : oct 11, 2017</h5>
        <h5>التخصص: تقانة معلومات (IT)</h5>
         <h5>ابراج السوق العربي</h5>
          <h5>رقم الهاتف: 0991416435</h5>
          <h5>الايميل: nazar@gmail.com</h5>
    </div>
  </div>
</div>
  </div>

  <div class="column">
    
       <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="./assets/them (5).jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h2 v-model="name">فضل</h2>
      <h5> الجامعة: النيلين</h5>
       <h5>سنة التخرج : oct 11, 2018</h5>
        <h5>التخصص: محاسبة</h5>
         <h5>ابراج السوق العربي</h5>
          <h5>رقم الهاتف: 0991416435</h5>
          <h5>الايميل: nazar@gmail.com</h5>
    </div>
  </div>
</div> 
  </div>

  <div class="column">
    
       <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="./assets/them (6).jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h2>ملاذ ميرغني</h2>
      <h5> الجامعة: النيلين</h5>
       <h5>سنة التخرج : oct 11, 2017</h5>
        <h5>التخصص: تقانة معلومات (IT)</h5>
         <h5>ابراج السوق العربي</h5>
          <h5>رقم الهاتف: 0991416435</h5>
          <h5>الايميل: nazar@gmail.com</h5>
    </div>
  </div>
</div> 

  </div>

    <div class="column">
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="./assets/them (5).jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h2 v-model="name">فضل</h2>
      <h5> الجامعة: النيلين</h5>
       <h5>سنة التخرج : oct 11, 2018</h5>
        <h5>التخصص: محاسبة</h5>
         <h5>ابراج السوق العربي</h5>
          <h5>رقم الهاتف: 0991416435</h5>
          <h5>الايميل: nazar@gmail.com</h5>
    </div>
  </div>
</div>
  </div>

</div> 

<div style="margin-top: 50px;"></div>


 <div class="row">

  <div class="column">
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="./assets/them (6).jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h2>ملاذ ميرغني</h2>
      <h5> الجامعة: النيلين</h5>
       <h5>سنة التخرج : oct 11, 2017</h5>
        <h5>التخصص: تقانة معلومات (IT)</h5>
         <h5>ابراج السوق العربي</h5>
          <h5>رقم الهاتف: 0991416435</h5>
          <h5>الايميل: nazar@gmail.com</h5>
    </div>
  </div>
</div>
  </div>

  <div class="column">
    
       <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="./assets/them (5).jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h2 v-model="name">فضل</h2>
      <h5> الجامعة: النيلين</h5>
       <h5>سنة التخرج : oct 11, 2018</h5>
        <h5>التخصص: محاسبة</h5>
         <h5>ابراج السوق العربي</h5>
          <h5>رقم الهاتف: 0991416435</h5>
          <h5>الايميل: nazar@gmail.com</h5>
    </div>
  </div>
</div> 
  </div>

  <div class="column">
    
       <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="./assets/them (6).jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h2>ملاذ ميرغني</h2>
      <h5> الجامعة: النيلين</h5>
       <h5>سنة التخرج : oct 11, 2017</h5>
        <h5>التخصص: تقانة معلومات (IT)</h5>
         <h5>ابراج السوق العربي</h5>
          <h5>رقم الهاتف: 0991416435</h5>
          <h5>الايميل: nazar@gmail.com</h5>
    </div>
  </div>
</div> 

  </div>

    <div class="column">
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="./assets/them (5).jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h2 v-model="name">فضل</h2>
      <h5> الجامعة: النيلين</h5>
       <h5>سنة التخرج : oct 11, 2018</h5>
        <h5>التخصص: محاسبة</h5>
         <h5>ابراج السوق العربي</h5>
          <h5>رقم الهاتف: 0991416435</h5>
          <h5>الايميل: nazar@gmail.com</h5>
    </div>
  </div>
</div>
  </div>

</div> 


  </div>
</template>

<script>


export default {
 
  data() {
     return{


}

      }
}

</script>

<style type="text/css">
  
  .header{

text-align: center;

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
  display: table;
  clear: both;
}



#search{
text-align: center;
margin-top: 40px;
margin-bottom: 20px;
 

}

#search input{
width: 1000px;
text-align: right;
}

.masthead {
  text-align: center;
  min-height: 30rem;
  position: relative;
  display: table;
  width: 100%;
  height: auto;
  padding-top: 8rem;
  padding-bottom: 8rem;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url("./assets/them.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.masthead h1, .masthead .h1 {
  font-size: 4rem;
  margin: 0;
  padding: 0;
  color: black;
   background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4);

}
@media (min-width: 992px) {
  .masthead {
    height: 100vh;
  }
  .masthead h1, .masthead .h1 {
    font-size: 5.5rem;
  }
}



.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
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
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}

</style>