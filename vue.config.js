const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
// const SitemapPlugin = require('sitemap-webpack-plugin').default

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Template №2',
    }
  },
  pwa: {
    // manifestPath: "https://vue-start-template.vercel.app/assets/favicon/manifest.webmanifest",
    iconPaths: {
      favicon32: null,
      favicon16: null,
      appleTouchIcon: null,
      maskIcon: null,
      msTileImage: null
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({ //СУПЕР-ВАЖНАЯ штука для ссылок на файлы (pdf или картинки), расположенные на самом сервере!!!
        patterns: [
          {
            from: "src/assets",
            to: "assets"
          },
          {
            from: "src/assets/analytics/robots.txt",
            to: "",
            toType: "dir",
            force: true
          }
        ]
      }),
      new HtmlWebpackTagsPlugin({
        // links: [
        //   {
            // path: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
            // attributes: {
            //   rel: 'stylesheet'
            // },
        //   },
        // ],
        // scripts: [
          // 'https://www.googletagmanager.com/gtag/js?id=G-RZHR947YVN',
          // '/assets/analytics/ganal.js'
        // ],
        append: true,
        publicPath: false,
        useHash: false,
        metas: [
          // {attributes: {name: 'google-site-verification', content: 'Gq9vrXtN91P1JteGFo-xrlLKT0PR8u-4P4xs21oUr8Y'}},
          {attributes: {name: 'description', content: 'Vue.js template with JavaScript'}},
          // {attributes: {property: 'og:title', content: 'Template №2'}},
          // {attributes: {property: 'twitter:title', content: 'Template №2'}},
          // {attributes: {property: 'og:description', content: 'Vue.js template with JavaScript'}},
          // {attributes: {property: 'twitter:description', content: 'Vue.js template with JavaScript'}},
          // // {attributes: {property: 'og:image', content: 'https://vue-start-template.vercel.app/assets/ogimage/image_all.jpg'}},
          // // {attributes: {property: 'twitter:image', content: 'https://vue-start-template.vercel.app/assets/ogimage/image_all.jpg'}},
          // // {attributes: {property: 'og:url', content: 'https://vue-start-template.vercel.app'}},
          // {attributes: {property: 'og:type', content: 'website'}},
          // {attributes: {property: 'twitter:card', content: 'summary_large_image'}}
        ]
      }),
      new FaviconsWebpackPlugin({
        logo: './src/assets/img/favbig.jpg',
        mode: 'webapp',
        devMode: 'webapp',
        outputPath: 'assets/favicon/', // Куда будут на сервере скидываться созданные favicon-ки
        prefix: 'assets/favicon/', // Этот префикс для файла index.html, чтобы правильно прописать пути иконок с сервера!
        manifest: './src/assets/manifest/manifest.webmanifest',
        favicons: {
          appName: 'Template №2',
          appDescription: 'Vue.js template with JavaScript',
          developerName: 'Zorger',
          developerURL: null
        }
      }),
      // new SitemapPlugin({
      //   base: 'https://vue-start-template.vercel.app', // Базовый URL моего сайта
      //   paths: [
      //     { path: '/', priority: 1, changefreq: 'always' },
      //     { path: '/project2', priority: 1, changefreq: 'daily' },
      //     { path: '/project3', priority: 1, changefreq: 'daily' },
      //     { path: '/about', priority: 1, changefreq: 'always' },
      //   ],
      //   options: {
      //     skipgzip: true
      //   },
      // }),
    ]
  }
}