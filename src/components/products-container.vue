<template>
<div class="flex-container">
  <div>1</div>  
</div>
</template>

<script>
export default{
   props: ['product', 'index', 'addToCart'],
   data(){
      return {
        quantity: 0
      }
    }
}
</script>