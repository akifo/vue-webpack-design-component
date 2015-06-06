<template>
  <div>
    <h2>this is top view.</h2>
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
        page: 'top'
      },
    }
  }
}
</script>

<style lang="stylus">
@import "src/shared.styl"

</style>