/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.papareact.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
