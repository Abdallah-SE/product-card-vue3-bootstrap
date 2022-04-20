<template>
    <header id="header-fixed" style=" height: 6px;">
        <nav id="nav-fixed" class="navbar navbar-expand-lg navbar-light bg-light" style="border-bottom: 3px solid blue;">
            <ul class="navbar-nav">

      <router-link class="navbar-brand" to="/">
                <i class="bi bi-bullseye" style="color:blue;"></i>
                <span>Home</span>
                </router-link>
      <router-link class="navbar-brand" to="products">
                <span>Products</span>
                </router-link>
<router-link class="navbar-brand" to="past-orders">
                <span>Past Orders</span>
                </router-link>
    </ul>

<div class="form-inline my-2 my-lg-0" style="margin-left: 900px;">
      
      <button @click="toggleSidebar" class="btn btn-outline-success my-2 my-sm-0">
      
      <span style="color: black;" >Cart <i class="bi bi-cart2"></i> ({{ totalQuantity }})</span>
</button>
    </div>

        </nav>
    </header>
</template>
<script>
export default{
   props: ['product', 'index', 'addToCart', 'totalQuantity','toggleSidebar'],
   data(){
      return {
        quantity: 0
      }
    }
}
</script>
<style src="@/assets/styles/sidebar.scss" lang="scss">

}
</style>