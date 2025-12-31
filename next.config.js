/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    typescript: {
        //  Also ignore TS errors to see if we can get *any* build artifact, 
        // though usually we want TS checks.
        // ignoreBuildErrors: true,
    }
};

module.exports = nextConfig;
