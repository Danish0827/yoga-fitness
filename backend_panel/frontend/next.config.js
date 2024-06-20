/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        typedRoutes: true,
    },
    env: {
        WEBSITE_NAME: process.env.WEBSITE_NAME,
        ADMINURL: process.env.ADMINURL,
    },
};

module.exports = nextConfig;
