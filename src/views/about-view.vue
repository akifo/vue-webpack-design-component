<template>
  <div>
    <h2>this is about view.</h2>
    <p>{{params.msg}}</p>
    <p>{{params.page}}</p>
  </div>
</template>

<script>

module.exports = {
  replace: true,
  props: ['params'],
  data: function () {
    return {
      params: {
        page: 'about'
      },
    }
  }
}
</script>

<style lang="stylus">

</style>