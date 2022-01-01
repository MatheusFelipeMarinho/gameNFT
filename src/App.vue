<template>
  <div>
    <Dashboard/>
    <Game />
  </div>
</template>

<script>
  import Game from '@/components/Game'
  import Dashboard from '@/components/Dashboard'
  export default {
    components: { Game, Dashboard }
  }
</script>

<style lang="scss">
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
