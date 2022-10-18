<template>
  <div class='layout-container'>
    <header class='layout-header'>
      <Logo />
      <Menu @modalShow='modalToogle'/>
    </header>
    <nuxt />
    <Modal 
      v-show="isShowModal"
      :show="isShowModal"
      @close="modalToogle"
    />
  </div>
</template>

<script>
import { ref } from 'vue';

import Logo from '../components/common/Logo.vue';
import Menu from '../components/common/Menu.vue';
import Modal from '../components/common/Modal.vue';

export default {
  components: {
    Logo,
    Menu,
    Modal
  },
  setup() {
    let isShowModal = ref(false);
    const modalToogle = () => isShowModal.value = !isShowModal.value;

    return {
      isShowModal,
      modalToogle,
    }
  }
}
</script>

<style lang='scss' scoped>
.layout {
  &-container {
    background-color: rgba($color: black, $alpha: 0.4);
  }
  &-header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
  }
}
</style>