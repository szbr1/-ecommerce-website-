/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",                    
        hostname: "cdn-icons-png.flaticon.com", 
        pathname: "/**",                       
      }
    ],
  },
};

export default nextConfig;
