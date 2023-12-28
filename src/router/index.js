// import {createRouter, createWebHistory, RouteRecordNormalized, RouteRecordRaw} from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router'
import Project1 from "@/views/menu/Project1View.vue";
import Project2 from "@/views/menu/Project2View.vue";
import Project3 from "@/views/menu/Project3View.vue";
import About from "@/views/menu/AboutView.vue";
import PageNotFound from "@/views/service/PageNotFound.vue";

const routes = [
  {
    path: '/',
    name: 'project1',
    component: Project1,
    meta: {
      title: 'Projects - Project № 1',
      metaTags: [
        {
          property: 'og:title',
          content: 'Project № 1'
        },
        {
          property: 'og:description',
          content: 'Project № 1'
        },
        // {
        //   property: 'og:image',
        //   content: 'https://vue-start-template.vercel.app/assets/ogimage/image_all.jpg'
        // },
        // {
        //   property: 'og:url',
        //   content: 'https://vue-start-template.vercel.app'
        // },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/project2',
    name: 'project2',
    component: Project2,
    meta: {
      title: 'Projects - Project № 2',
      metaTags: [
        {
          property: 'og:title',
          content: 'Project № 2'
        },
        {
          property: 'og:description',
          content: 'Project № 2'
        },
        // {
        //   property: 'og:image',
        //   content: 'https://vue-start-template.vercel.app/assets/ogimage/image_all.jpg'
        // },
        // {
        //   property: 'og:url',
        //   content: 'https://vue-start-template.vercel.app'
        // },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/project3',
    name: 'project3',
    component: Project3,
    meta: {
      title: 'Projects - Project № 3',
      metaTags: [
        {
          property: 'og:title',
          content: 'Project № 3'
        },
        {
          property: 'og:description',
          content: 'Project № 3'
        },
        // {
        //   property: 'og:image',
        //   content: 'https://vue-start-template.vercel.app/assets/ogimage/image_all.jpg'
        // },
        // {
        //   property: 'og:url',
        //   content: 'https://vue-start-template.vercel.app'
        // },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About this Project',
      metaTags: [
        {
          property: 'og:title',
          content: 'About this project'
        },
        {
          property: 'og:description',
          content: 'About this project'
        },
        // {
        //   property: 'og:image',
        //   content: 'https://vue-start-template.vercel.app/assets/ogimage/image_all.jpg'
        // },
        // {
        //   property: 'og:url',
        //   content: 'https://vue-start-template.vercel.app'
        // },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound,
    meta: {
      title: 'Page NOT Found',
      metaTags: [
        {
          property: 'og:title',
          content: 'Page NOT Found'
        },
        {
          property: 'og:description',
          content: 'Page NOT Found'
        },
        // {
        //   property: 'og:image',
        //   content: 'https://vue-start-template.vercel.app/assets/ogimage/image_all.jpg'
        // },
        // {
        //   property: 'og:url',
        //   content: 'https://vue-start-template.vercel.app'
        // },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
