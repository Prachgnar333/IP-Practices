<script>
import CategoryComponent from './components/CategoryComponent.vue'
import PromotionComponent from './components/PromotionComponent.vue'
const burgerImage = new URL('@/assets/burger.png', import.meta.url).href
const peachImage = new URL('@/assets/peach.png', import.meta.url).href
const kiwiImage = new URL('@/assets/kiwi.png', import.meta.url).href
const appleImage = new URL('@/assets/apple.png', import.meta.url).href
const snackImage = new URL('@/assets/snack.png', import.meta.url).href
const blackplumImage = new URL('@/assets/blackplum.png', import.meta.url).href
const vegetablesImage = new URL('@/assets/vegetables.png', import.meta.url).href
const headphoneImage = new URL('@/assets/headphone.png', import.meta.url).href
const cakeandmilkImage = new URL('@/assets/cakeandmilk.png', import.meta.url).href
const orangeImage = new URL('@/assets/orange.png', import.meta.url).href
const onionImage = new URL('@/assets/onion.jpg', import.meta.url).href
const strawberryjuiceImage = new URL('@/assets/strawberryjuice.png', import.meta.url).href
const organicfoodImage = new URL('@/assets/organicfood.jpg', import.meta.url).href
export default {
  name: 'App',
  data() {
    return {
      burgerImage,
      peachImage,
      kiwiImage,
      appleImage,
      snackImage,
      blackplumImage,
      vegetablesImage,
      headphoneImage,
      cakeandmilkImage,
      orangeImage,
      onionImage,
      strawberryjuiceImage,
      organicfoodImage,
      
      
    }
  },
  components: {
    CategoryComponent,
    PromotionComponent,
  },
}
</script>

<template>
  <div class="category-wrapper">
    <CategoryComponent title="Burget & Cake" :product-count="14" :image="burgerImage" color = " #81b13d" />
    <CategoryComponent title="Peach" :product-count="13" :image="peachImage" color="#FFFCEB" />
    <CategoryComponent title="Organic Wiki" :product-count="15" :image="kiwiImage" color ="#ECFFEC"/>
    <CategoryComponent title="Apple" :product-count="20" :image="appleImage"  color ="#FEEFEA"/>
    <CategoryComponent title="Snack" :product-count="18" :image="snackImage" color ="#FFF3EB"/>
    <CategoryComponent title="Black Plum" :product-count="22" :image="blackplumImage" color ="#FFF3FF"/>
    <CategoryComponent title="Vegetables" :product-count="16" :image="vegetablesImage" color ="#F2FCE4"/>
    <CategoryComponent title="Headphone" :product-count="12" :image="headphoneImage" color ="#FFFCEB"/>
    <CategoryComponent title="Cake & Milk" :product-count="19" :image="cakeandmilkImage" color ="#F2FCE4"/>
    <CategoryComponent title="Orange" :product-count="17" :image="orangeImage" color ="#FFF3FF"/>
  </div>
  <div class="promotion-wrapper">
    <PromotionComponent title="Everyday Fresh & Clean with Our Products" :image="onionImage" container-color="#F0E8D5" />
    <PromotionComponent title="Make your Breakfast Healthy and Easy" :image="strawberryjuiceImage" container-color="#F3E8E8" />
    <PromotionComponent title="The best Organic Products Online" :image="organicfoodImage" container-color="#E7EAF3" button-color = "#FDC040" />
  </div>
</template>

<style scoped>
.category-wrapper {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.promotion-wrapper {
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  gap: 24px;
}

</style>