<template>
<Headernav :totalQuantity="totalQuantity" :toggleSidebar="toggleSidebar"/>
 <br>
 <br>

 <br>

<router-view :inventory="inventory" :addToCart="addToCart" />

<Sidebar 
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
   />
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Headernav from '@/components/Headernav.vue'
import food from './food.json'
export default {
   components: {
      Sidebar,
      Headernav
    },
    data(){
       return {
          showSidebar: false,
          inventory: food,
          cart: {}
    }
    },
    computed: {
        totalQuantity(){
           return Object.values(this.cart).reduce((acc, curr)=>{
              return acc + curr
           }, 0)
        }
    },
    methods: {
        addToCart(name, quantity) {
            console.log(quantity);
            if(!this.cart[name]) this.cart[name] = 0
            this.cart[name] += quantity
          },
          toggleSidebar() {
              this.showSidebar = !this.showSidebar;
          },
          removeItem(name){
              delete this.cart[name]
          }
      }

}
</script>

