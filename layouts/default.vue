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
      @close="modalToogle"
    >
      <template v-if="linkId === 'login'" #header>
        Please log in
      </template>
      <template v-else-if="linkId === 'message'" #header>
        Please message write
      </template>
      <template v-if="linkId === 'login'" #body>
        <input type="email" value="Your email">
        <input type="password" value="Your password">
      </template>
      <template v-else-if="linkId === 'message'" #body>
        <!--auitorization-->
        <!-- <input type="name" value="Your name">
        <input type="email" value="Your email"> -->
        <input type="text" value="write message ...">
      </template>
    </Modal>
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
    let linkId = ref('');
    
    const modalToogle = (id) => {
      linkId.value = id;
      isShowModal.value = !isShowModal.value;
    }

    return {
      isShowModal,
      modalToogle,
      linkId
    }
  }
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