import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hari Krishnan DS - Full Stack Developer Portfolio',
    short_name: 'Hari DS Portfolio',
    description: 'Professional portfolio of Hari Krishnan DS, a Senior Technology Associate and Full Stack Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#420084',
    icons: [
      {
        src: '/h-logo.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/profile.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
