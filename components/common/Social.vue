<template>
  <div class="social">
    <ul class="social__list">
      <li class="social__item">
        <img src="@/assets/image/icons/tg-hide.svg">
        <span class="visually-hidden">telegram</span>
      </li>
      <li class="social__item">
        <img src="@/assets/image/icons/insta-hide.svg">
        <span class="visually-hidden">instagram</span>
      </li>
      <li class="social__item">
        <img src="@/assets/image/icons/tblr-hide.svg">
        <span class="visually-hidden">tumblr</span>
      </li>
      <li class="social__item">
        <img src="@/assets/image/icons/vk-hide.svg">
        <span class="visually-hidden">vk</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.social {
  margin: auto 0;

  &__list {
    margin: 0;
    display: flex;
  }

  &__item {
    display: flex;
    margin-right: 15px;

    :last-child {
      margin-right: 0;
    }
  }
}

</style>>
