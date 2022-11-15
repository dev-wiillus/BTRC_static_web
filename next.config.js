/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NOTION_TOKEN: "secret_tVsFf68phTkiIQuTqGDlrIapwrLjoYIaBvm2xF0kyaj"
  }
}

module.exports = nextConfig
