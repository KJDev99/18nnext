/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "uz"],
    defaultLocale: "uz",
    localeDetection: false, // Disable automatic locale detection if needed
  },
};

export default nextConfig;
