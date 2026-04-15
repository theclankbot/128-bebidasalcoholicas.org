import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/alcohol/que-alcohol-es-mas-parecido-al-ron',
        destination: '/comparativas/que-alcohol-es-mas-parecido-al-ron',
        permanent: true,
      },
      {
        source: '/alcohol/cuantas-cervezas-es-un-whisky-de-un-trago',
        destination: '/consumo/cuantas-cervezas-equivalen-a-un-whisky',
        permanent: true,
      },
      {
        source: '/alcohol/cuantos-tragos-de-vodka-me-emborracharan',
        destination: '/vodka/cuantos-tragos-de-vodka-para-emborracharse',
        permanent: true,
      },
      {
        source: '/licoreria/:slug*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
