<template>
  <section class='menu'>
    <nav>
      <ul class='menu__list'>
        <li v-for='item of MENU_LINKS' :key='item.id'>
          <a href='#' @click.prevent="goToGallery(item.pathName)">{{item.name}}</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  setup() {
    let id = 0;
    const MENU_LINKS = [
      {
        id: id++,
        name: 'illustration and design',
        pathName: 'illustration_and_design'
      },
      {
        id: id++,
        name: 'painting and graphics',
        pathName: 'painting_and_graphics'
      },
      {
        id: id++,
        name: 'tattoo sketch and letters',
        pathName: 'tattoo_sketch_and_letters'
      }
    ]

    function goToGallery(pathName) {
      this.$router.push(`/gallery/${pathName}`);
    }

    return {
      MENU_LINKS,
      goToGallery
    }
  }
}
</script>