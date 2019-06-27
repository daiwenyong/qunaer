<template>
    <div>
      <transition>
        <slot></slot>
      </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }

</script>

<style scoped lang="stylus">

  /*vue 全局组件 transition router-view keep-alive*/
  .v-enter,.v-leave-to
    opacity 0
  .v-enter-active,.v-leave-active
    transition:opacity .5s
</style>
