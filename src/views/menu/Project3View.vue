<script>
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

export default {
  name: 'Project3',
  mixins: [openGraphMixin],
  components: {},
  mounted() {
    const title = 'Template №2 - Project № 3';
    const metaDescription = 'Template №2';
    const description = 'Template №2 - Project № 3';
    const imageUrl = 'https://vue-template-js.vercel.app/assets/ogimage/bmp/project3.jpg';
    const url = 'https://vue-template-js.vercel.app/project3';

    // Dynamically set open graph tags
    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <h1>{{ $t('project3.name') }}</h1>
    <line></line>
  </div>
</template>

<style lang="scss" scoped>
.container {
  flex: 1 0 auto;
  background: linear-gradient(to bottom, rgb(229, 255, 229), rgb(250, 247, 234)) no-repeat center;

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
