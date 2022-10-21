<template>
  <transition name="modal">
    <div 
      class="modal" 
      @click="modalClose(modalOption)"
    >
      <div  class="modal_backdrop">
        <div class="modal_container">
          <div 
            class="modal_content"
            @click.stop
          >
            <header class="modal_header">
              <button 
                type="button"
                @click="modalClose(modalOption)"
              >
                close
              </button>
              <h2 v-if="modalOption === 'login'">
                Please log in
              </h2>
              <h2 v-else-if="modalOption === 'message'">
                Please message write
              </h2>
            </header>
            <section class="modal_body">
              <form v-if="modalOption === 'login'">
                <input type="text" value="plese write login" />
              </form>
              <form v-else-if="modalOption === 'message'">
                <textarea type="text">plese write message</textarea>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>

import {onMounted, onUnmounted} from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  modalOption: {
    type: String,
    default: 'login'
  },
  closeModal: {
    type: Function,
    default: () => ''
  }
})

const modalClose = (modalOption) => props.closeModal(props.modalOption);

const escCloseModal = (e) => {
  if (props.show && e.key === 'Escape') {
    props.closeModal(props.modalOption);
  }
}

onMounted(() => {
  window.addEventListener('keydown', escCloseModal);
});

onUnmounted(() => {
    window.removeEventListener('keydown', escCloseModal);
});

</script>

<style lang="scss">
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  &_backdrop {
    position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      transition: opacity 0.3s ease;
      z-index: 5;
  }

  &_container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: auto;
    margin: 16px;
  }

  &_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    margin: 1.75rem auto;
    padding: 20px 30px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    transform: translate(0, 0);
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  &_header {
    padding-bottom: 16px;
    font-size: 25px;
    text-align: center;
  }

  &_footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    text-align: center;
  }
}
</style>