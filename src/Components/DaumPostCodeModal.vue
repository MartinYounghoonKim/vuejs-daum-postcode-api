<template>
  <b-modal id="myModal" title="Find your address!" ref="modal" hide-footer>
    <div class="modal-contents" id="contents">
    </div>
  </b-modal>
</template>

<script>
  import Daum from 'Daum';
  export default {
    name: 'DaumPostCodeModal',
    methods: {
      show () {
        this.setAPIContents();
        this.$refs.modal.show();
      },
      setAPIContents () {
        const targetElement = document.getElementById('contents');
        const vm = this;

        new Daum.Postcode({
          oncomplete: function(data) {
            let fullAddr = data.address;
            let extraAddr = '';

            if(data.addressType === 'R'){
                if(data.bname !== ''){
                    extraAddr += data.bname;
                }
                if(data.buildingName !== ''){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
            }

            vm.$emit('setUserData', { 
              postCode: data.zonecode,
              fullAddress: fullAddr,
              englishFullAddress: data.addressEnglish
            });
            vm.$refs.modal.hide();
          },
          width : '100%',
          height : '100%',
          maxSuggestItems : 5
        }).embed(targetElement);
      }
    }
  }
</script>

<style>
.modal-contents {
  width: 100%;
  height: 450px;
}
</style>