/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.tgdd.vn", "danviet.mediacdn.vn", "image.plo.vn", "itss-hedsocial.s3.amazonaws.com"], 
  },
};

export default nextConfig;
