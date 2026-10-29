/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    // Old WordPress (tyrawadehomes.com / rrealt.com) and notary-site URLs → new pages
    return [
      { source: '/advanced-search-form/:path*', destination: '/search/', permanent: true },
      { source: '/properties/:path*', destination: '/my-listings/', permanent: true },
      { source: '/property/:path*', destination: '/my-listings/', permanent: true },
      { source: '/contact-us/:path*', destination: '/contact/', permanent: true },
      { source: '/blog/:path*', destination: '/guides/', permanent: true },
      { source: '/about-us/:path*', destination: '/about/', permanent: true },
      { source: '/notary/:path*', destination: '/mobile-notary/', permanent: true },
      { source: '/mobile-notary-home/:path*', destination: '/mobile-notary/', permanent: true },
      { source: '/home-value/:path*', destination: '/whats-my-home-worth/', permanent: true },
    ];
  },
};

export default nextConfig;
