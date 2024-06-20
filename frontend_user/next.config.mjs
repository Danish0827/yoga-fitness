/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEBSITE_NAME: process.env.WEBSITE_NAME,
    ADMINURL: process.env.ADMINURL,
    PAYMENT_AMOUNT: process.env.PAYMENT_AMOUNT,
    RAZORPAY_KEY: process.env.RAZORPAY_KEY,
    RAZORPAY_SECRET: process.env.RAZORPAY_SECRET,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
