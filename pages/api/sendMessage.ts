import twilio from "twilio";
import { NextApiRequest, NextApiResponse } from "next";
import { IForm } from "../../components/ui/modal/ServiceApplication";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

function generateRandomNumber() {
	var minm = 100000;
	var maxm = 999999;
	return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		if (req.method === "POST") {
			const data = req.body;

			const { phone: userPhoneNumber } = data as unknown as IForm;

			const randomNumber = generateRandomNumber();

			const result = await client.messages.create({
				from: twilioPhoneNumber,
				to: userPhoneNumber,
				body: `[#BTRC] 인증번호 [${randomNumber}]를 입력해주세요.`,
			});

			res.status(200).json({ ok: true, message: "Success" });
		}
	} catch (error) {
		res.status(400).json({ ok: false, message: "Fail" });
	}
}
