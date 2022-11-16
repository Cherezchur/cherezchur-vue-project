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
            close
            </button>
            <section class="modal__body">
              <Login
                v-if="modalOption === 'login'" 
                @modal-update="modalUpdate" 
              />
              <Registration 
                v-else-if="modalOption === 'registration'" 
              />
              <Message 
                v-if="modalOption === 'message'" 
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated} from 'vue';

import Login from './modal-forms/Login.vue';
import Message from './modal-forms/Message.vue';
import RegistrationVue from './modal-forms/Registration.vue';

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
  },
  modalUpdate: {
    type: Function,
    default: () => ''
  }
})

const modalClose = (modalOption) => props.closeModal(props.modalOption);

const modalUpdate = (option) => { 
  props.modalUpdate(option) 
}

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

  //animation
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s ease;
  }

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

  &__header {
    position: relative;
    margin-bottom: 25px;
    text-align: center;
  }

  &__title h2 {
    margin: 0;
    font-size: 25px;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    text-align: center;
  }
}


.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal {
  
}
</style>