const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
	const env_params =
		phase === PHASE_DEVELOPMENT_SERVER
			? {
					NOTION_DATABASE_ID_PARTNERSHIP: "512dc987d31b440490df04851b87918c",
					NOTION_DATABASE_ID_SERVICE: "28528f1b79a74b8680e1ba7579e16e79",
					NOTION_DATABASE_ID_WAKECUP: "6bf95f4ec77840f59dda3c16beb1e327",
					TWILIO_ACCOUNT_SID: "AC5536c858d46a2dc7f73112d290755b29",
					TWILIO_AUTH_TOKEN: "de0855547b6b46fa7282149968d1fd89",
					TWILIO_PHONE_NUMBER: "+16614664585",
			  }
			: {
					NOTION_DATABASE_ID_PARTNERSHIP: "8108766951d941a48561d2aae5a43354",
					NOTION_DATABASE_ID_SERVICE: "dd7d270bfaf24eb19be8163be99a0768",
					NOTION_DATABASE_ID_WAKECUP: "e064b145eb45403d93f7d637333b8b21",
					TWILIO_ACCOUNT_SID: "AC5536c858d46a2dc7f73112d290755b29",
					TWILIO_AUTH_TOKEN: "de0855547b6b46fa7282149968d1fd89",
					TWILIO_PHONE_NUMBER: "+16614664585",
			  };

	return {
		reactStrictMode: true,
		swcMinify: true,
		env: {
			NOTION_TOKEN: "secret_tVsFf68phTkiIQuTqGDlrIapwrLjoYIaBvm2xF0kyaj",
			...env_params,
		},
	};
};

module.exports = nextConfig;
