<template>
  <transition name="modal">
    <div 
      class="modal" 
      @click="modalClose(modalOption)"
    >
      <div  class="modal__backdrop">
        <div class="modal__container">
          <div 
            class="modal__content"
            @click.stop
          >
            <button
              class="modal__close"
              type="button"
              @click="modalClose(modalOption)"
            >
             <span class="visually-hidden">Закрыть</span>
             <span class="modal__close_element"></span>
            </button>
            <section class="modal__body">
              <EnterForms />
              <Message v-if="modalOption === 'message'"/>
            </section>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated} from 'vue';

import Message from './modal-forms/Message.vue';
import EnterForms from './EnterForms.vue'

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

// const modalUpdate = (option) => { 
//   props.modalUpdate(option) 
// }

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
.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  /* modal-animation */

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s ease;
  }

  // modal-containet

  &__backdrop {
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

  &__container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: auto;
    margin: 16px;
  }

  &__content {
    display: flex;
    height: 40vh;
    width: 100%;
    max-width: 500px;
    margin: 10rem auto;
    padding: 20px 30px;
    border-radius: 5px;
    color: #000;
    background-color: $accent-pink;
    transform: translate(0, 0);
    transition: all 0.3s ease;
  }

  &__body {
    margin: auto;
    width: 100%;
  }
  
  // close-button

  &__close {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 10px;
    right: 10px;
    padding: 0;
    background: transparent;
    border: 0;
    transition: 0.3s;
    &:hover {
      transform: rotate(90deg)
    }
    &_element:before,
    &_element:after {
      content: "";
      position: absolute;
      top: 5px;
      left: 0;
      display: flex;
      width: 15px;
      height: 4px;
      background-color: $contur-dark-purple;
      border-radius: 2px;
    }
    &_element:before {
      transform: rotate(45deg);
    }
    &_element:after {
      transform: rotate(-45deg);
    }
  }
}
</style>