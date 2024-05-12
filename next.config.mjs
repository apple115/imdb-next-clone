/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/imdb-next-clone",
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
