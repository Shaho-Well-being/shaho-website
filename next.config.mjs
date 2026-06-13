/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/health-management-support",
        destination: "/solutions/health-management",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
