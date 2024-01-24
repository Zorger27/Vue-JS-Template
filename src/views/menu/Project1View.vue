<script>
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

export default {
  name: 'Project1',
  mixins: [openGraphMixin],
  components: {},
  mounted() {
    const mainTitle = 'JS - Project № 1';
    const title = 'JS template - Project № 1';
    const metaDescription = 'Vue.js template with JavaScript';
    const description = 'Vue.js template with JavaScript - Project № 1';
    const imageUrl = 'https://vue-template-js.vercel.app/assets/ogimage/bmp/project1.jpg';
    const url = 'https://vue-template-js.vercel.app';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <h1>{{ $t('project1.name') }}</h1>
    <line></line>
  </div>
</template>

<style lang="scss" scoped>
.container {
  flex: 1 0 auto;
  background: linear-gradient(to bottom, rgb(255, 249, 229), rgb(255, 240, 244)) no-repeat center;

  //background-image: url("@/assets/background/background02.jpg");
  //background-position: center;
  //background-size: cover;
  //background-repeat: no-repeat;

  h1 {font-size: 2.5rem;margin: 0.7rem auto;color: black;}
}
@media(max-width: 1020px) {
  .container {
    h1 {font-size: 2.3rem;margin: 0.6rem auto;}
  }
}

@media (max-width: 768px) {
  .container {
    h1 {font-size: 2rem;margin: 0.5rem auto;}
  }
}
</style>
