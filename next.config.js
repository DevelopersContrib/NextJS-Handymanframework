/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.vnoc.com",
      "vnoclogos.s3-us-west-1.amazonaws.com",
      "tools.contrib.com",
      "projectcafe.com",
      "contrib.com",
      "vnoclogos.s3-us-west-1.amazonaws.com",
      "vbot-images.s3.us-east-1.amazonaws.com",
      "vnocimages.s3.amazonaws.com",
      "randomuser.me",
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
