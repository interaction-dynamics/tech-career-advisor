const libraries = {
  frameworks: {
    score: 2,
    list: [
      'react',
      'vue',
      'angularjs',
      'angular',
      'ember',
      'svelte',
      '@builder.io/qwik', // https://github.com/BuilderIO/qwik-tw-vercel-starter-kit
    ],
  },
  ssr: {
    score: 3,
    list: ['next', 'astro', 'nuxt', 'sapper', 'svelte-kit'],
  },
  bundlers: {
    score: 2,
    list: ['webpack', 'rollup', 'parcel', 'esbuild', 'vite'],
  },
  css: {
    score: 2,
    list: [
      'sass',
      'tailwindcss',
      'styled-components',
      '@emotion/react',
      '@emotion/css',
    ],
  },
  codeQuality: {
    score: 3,
    list: ['prettier', 'eslint'],
  },
  testing: {
    score: 3,
    list: [
      'jest',
      'mocha',
      'cypress',
      'chai',
      'puppeteer' /* https://pptr.dev/ */,
      'jasmine',
    ],
  },
}

const librariesList = Object.entries(libraries).flatMap(
  ([type, { score, list }]) =>
    list.map(name => ({
      name,
      score,
      type,
      version: '*',
    })),
)

export default librariesList
