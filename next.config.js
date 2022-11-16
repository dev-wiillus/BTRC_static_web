/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NOTION_TOKEN: "secret_tVsFf68phTkiIQuTqGDlrIapwrLjoYIaBvm2xF0kyaj",
    NOTION_DATABASE_ID_PARTNERSHIP: "8108766951d941a48561d2aae5a43354",
    NOTION_DATABASE_ID_SERVICE: "dd7d270bfaf24eb19be8163be99a0768",
    NOTION_DATABASE_ID_WAKECUP: "e064b145eb45403d93f7d637333b8b21",
  }
}

module.exports = nextConfig
