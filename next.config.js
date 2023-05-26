/** @type {import('next').NextConfig} */
const nextConfig = () => {
	return {
		reactStrictMode: true,
		swcMinify: true,
		env: {
			TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
			TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
			TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER,
			NOTION_TOKEN: process.env.NOTION_TOKEN,
			NOTION_DATABASE_ID_PARTNERSHIP:
				process.env.NOTION_DATABASE_ID_PARTNERSHIP,
			NOTION_DATABASE_ID_SERVICE: process.env.NOTION_DATABASE_ID_SERVICE,
			NOTION_DATABASE_ID_WAKECUP: process.env.NOTION_DATABASE_ID_WAKECUP,
			GA_TRACKING_ID: process.env.GA_TRACKING_ID,
		},
	};
};

module.exports = nextConfig;
