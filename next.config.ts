/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- C'est la ligne magique qui crée des fichiers HTML
  images: {
    unoptimized: true, // Indispensable pour que les images marchent sur LWS sans serveur Node
  },
};

export default nextConfig;