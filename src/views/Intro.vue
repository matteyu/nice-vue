<template>
  <ion-page>
    <ion-content :fullscreen="true">    
      <div id="container">
          <ion-grid>
              <ion-row>
                  <ion-col id="login-graphic">
                      <ion-img src='/assets/splash.gif'></ion-img>
                  </ion-col>
              </ion-row>
              <ion-row>
                  <ion-col id="login-section">
                      <ion-input id="logininput" placeholder="Username"></ion-input>
                      <ion-input id="passwordinput" placeholder="Password" type="password"></ion-input>
                      <ion-button id="loginbtn">Login</ion-button>
                      <ion-button id="registerbtn">Register</ion-button>
                  </ion-col>
              </ion-row>
          </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonGrid, IonCol, IonRow, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Intro',
  components: {
    IonContent,
    IonPage,
    IonGrid,
    IonCol,
    IonRow,
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  overflow-y: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 20%;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

#logininput{
    margin-top: 10px;
    border-bottom: solid;
    border-width: 1px;
}

#passwordinput{
    margin-top: 10px;
    border-bottom: solid;
    border-width: 1px;
}

#loginbtn {
    margin-top: 10px;
    display: block;
}

#registerbtn{
    margin-top: 10px;
    display: block
}

</style>