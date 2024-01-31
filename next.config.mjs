// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.js

// module.exports = {
//   images: {
//     domains: ["unsplash.com"],
//     path: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//   },
// };

// next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "images.unsplash.com",
        hostname: "**",
        // port: "",
        // path: "/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
    ],
  },
};

export default nextConfig;
