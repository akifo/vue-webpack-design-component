<template>
  <div>
    <h2>this is price view.</h2>
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
        page: 'price'
      },
    }
  }
}
</script>

<style lang="stylus">

</style>