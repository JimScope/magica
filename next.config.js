/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly disable Turbopack if it's enabled.
  // Remove any experimental flags related to it.
  experimental: {
    // turbopack: false, // Ensure this is commented out or removed
  },
}

module.exports = nextConfig
