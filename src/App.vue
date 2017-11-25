<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Daum Postcode API with Vuejs</h1>
    <div class="postcode-input-wrapper">
      <b-form-group id="fieldset1" description="Enter your Address" label="Address1">
        <b-form-input class="address1" id="input1"></b-form-input>
        <b-button @click="showModal" variant="success">Find Address</b-button>
      </b-form-group>
      <b-form-group id="fieldset2" description="Enter your detail Address" label="Address2">
        <b-form-input id="input2"></b-form-input>
      </b-form-group>
    </div>

    <!-- Daum API Modal -->
    <daum-post-code-modal ref="modal"></daum-post-code-modal>
    <!--// Daum API Modal -->
  </div>
</template>

<script>
import DaumPostCodeModal from './Components/DaumPostCodeModal';

export default {
  name: 'app',
  methods: {
    showModal () {
      this.$refs.modal.show();
    }
  },
  components: {
    DaumPostCodeModal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.postcode-input-wrapper{
  width: 600px;
  margin: 0 auto;
  text-align: left;
}
.form-control{
  display: inline-block;
  vertical-align: top;
}
.address1{
  width: 475px;
}

</style>
