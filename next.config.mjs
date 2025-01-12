/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'views.medibuddy.in',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  