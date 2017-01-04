<template>
  <div>
  <router-view class="view" keep-alive transition transition-mode="out-in">
    </router-view>
   <!-- <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <router-view></router-view>
    </transition> -->
  </div>
</template>

<script>
export default {
  components: {}
}
</script>