<template>
  <div class="container">
    <img class="image" :src="image" />
    <div class="text-overlay">
      <h4 class="title">{{ title }}</h4>
      <div>
        <ButtonComponent :button-color="buttonColor" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
export default {
  name: 'PromotionComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      required: true,
    },
    containerColor: {
      type: String,
      default: '#81b13d99',
    },
    buttonColor:{
      type: String,
      default: '#3BB77E',
    }
  },
  components: {
    ButtonComponent
  },
}
</script>

<style scoped>
.container {
  border-radius: 10px;
  padding-left: 45px;
  padding-top: 70px;
  background-color: v-bind('containerColor');
  min-width: 520px;
  min-height: 300px;
  position: relative; 
  overflow: hidden; 
}

.image{
  position: absolute; 
  bottom: 0;
  right: 0; 
  max-width: 100%;
}

.mini-container{
  display: flex;
  flex-direction: column;
}

.text-overlay{
  position: absolute; 
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 170px;
}

.title {
  font-size: 24px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  color: #253D4E;
}
</style>
