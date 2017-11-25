<template>
  <b-modal id="myModal" ref="modal">
    Hello From My Modal!
  </b-modal>
</template>

<script>
  export default {
    name: 'DaumPostCodeModal',
    methods: {
      show () {
        this.$refs.modal.show();
      }
    }
  }
</script>

<style>

</style>