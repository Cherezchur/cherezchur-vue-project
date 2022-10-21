<template>
  <div class='layout_container'>
    <header class='layout_header'>
      <Logo />
      <Menu :modalShow='modalToogle'/>
    </header>
    <nuxt />
    <Modal 
      v-show="isShowModal"
      :show="isShowModal"
      :modalOption="linkId"
      :closeModal="modalToogle"
    >
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Logo from '../components/common/Logo.vue';
import Menu from '../components/common/Menu.vue';
import Modal from '../components/common/Modal.vue';

let isShowModal = ref(false);
let linkId = ref('');

const modalToogle = (linkName) => {
  linkId.value = linkName;
  isShowModal.value = !isShowModal.value;
}
</script>

<style lang='scss' scoped>
.layout {
  &_container {
    background-color: rgba($color: black, $alpha: 0.4);
  }

  &_header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
  }
}
</style>