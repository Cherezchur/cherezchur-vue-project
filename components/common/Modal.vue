<template>
  <div class="modal" @click="closeModal">
    <div 
      class="modal_backdrop"
    >
      <div class="modal_container">
        <div 
          class="modal_content"
          @click.stop
        >
          <header class="modal_header">
            Modal title
          </header>
          <section class="modal_body">
            Modal body
          </section>
          <footer class="modal_footer">
            <button 
              type="button"
              @click="closeModal"
            >
              close
            </button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss">
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