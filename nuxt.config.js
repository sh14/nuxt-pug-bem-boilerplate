module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/main.styl',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push(
        {
          test: /\.pug$/,
          oneOf: [
            // это применяется к `<template lang="pug">` в компонентах Vue
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader']
            },
            // это применяется к импортам pug внутри JavaScript
            {
              use: ['raw-loader', 'pug-plain-loader']
            }
          ]
        },
        // {
        //   test: /\.styl(us)?$/,
        //   use: [
        //     // 'vue-style-loader',
        //     // 'css-loader',
        //     'stylus-loader'
        //   ]
        // },
      )
    }
  }
}
