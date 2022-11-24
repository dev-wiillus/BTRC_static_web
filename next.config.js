const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
	const env_params =
		phase === PHASE_DEVELOPMENT_SERVER
			? {
					NOTION_DATABASE_ID_PARTNERSHIP: "512dc987d31b440490df04851b87918c",
					NOTION_DATABASE_ID_SERVICE: "28528f1b79a74b8680e1ba7579e16e79",
					NOTION_DATABASE_ID_WAKECUP: "6bf95f4ec77840f59dda3c16beb1e327",
			  }
			: {
					NOTION_DATABASE_ID_PARTNERSHIP: "8108766951d941a48561d2aae5a43354",
					NOTION_DATABASE_ID_SERVICE: "dd7d270bfaf24eb19be8163be99a0768",
					NOTION_DATABASE_ID_WAKECUP: "e064b145eb45403d93f7d637333b8b21",
			  };

	return {
		reactStrictMode: true,
		swcMinify: true,
		env: {
			TWILIO_ACCOUNT_SID: "AC3b6d6f424aad228f3ed62d6a1d83ba5e",
			TWILIO_AUTH_TOKEN: "f3f48da80bbbe2bc4c3be6604e9527d2",
			TWILIO_PHONE_NUMBER: "+16614664585",
			NOTION_TOKEN: "secret_tVsFf68phTkiIQuTqGDlrIapwrLjoYIaBvm2xF0kyaj",
			GA_TRACKING_ID: "G-MVGF2MCFGN",
			...env_params,
		},
	};
};

module.exports = nextConfig;
