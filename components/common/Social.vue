<template>
  <div class='social'>
    <ul class='social__list'>
      <li class='social__item' v-for='social of SOCIALS' :key='social.id'>
        <img :src='(social.hideSvg)'>
        <span class='visually-hidden'>{{social.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    let id = 0;
    const SOCIALS = [
      {
        id: id++,
        name: 'telegram',
        hideSvg: require('@/assets/image/icons/tg-hide.svg') 
      },
      {
        id: id++,
        name: 'instagram',
        hideSvg: require('@/assets/image/icons/insta-hide.svg')
      },
      {
        id: id++,
        name: 'tumblr',
        hideSvg: require('@/assets/image/icons/tblr-hide.svg')
      },
      {
        id: id++,
        name: 'vk',
        hideSvg: require('@/assets/image/icons/vk-hide.svg')
      },
    ]
    return {
      SOCIALS
    }
  }
}
</script>>

<style lang='scss' scoped>
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
