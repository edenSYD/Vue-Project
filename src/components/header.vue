<template>
  <header class="header">
    <div id="logo">{{logo}}</div>
    <ul class="nav">
     <li v-for="nav in navs" :key="nav">{{nav.li}}</li>
    </ul>
  </header>
</template>
<script>
export default {
  name: 'headerDiv',
  data (){
    return {
      navs: [
        {li:主页},
        {li:日志},
        {li:说说},
        {li:主页},
        {li:相册},
      ]
    }
  },
  props: ['logo']
}
</script>
<style>

</style>

