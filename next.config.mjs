/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [
            "files.edgestore.dev"
        ]
    }
};

export default nextConfig;
