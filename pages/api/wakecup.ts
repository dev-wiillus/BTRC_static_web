import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";
import { IForm } from "../../components/ui/modal/WakecupApplication";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try { 
		const database_id = process.env.NOTION_DATABASE_ID_WAKECUP
		if (req.method === "POST" && database_id) {
			const data = req.body;

			const { name, email, phone, gender, age, expectedCount } =
				data as unknown as IForm;

			const notion = new Client({
				auth: process.env.NOTION_TOKEN,
			});

			const result = await notion.pages.create({
				parent: {
					type: "database_id",
					database_id
				},
				properties: {
					name: {
						title: [
							{
								text: {
									content: name,
								},
							},
						],
					},
					email: {
						email,
					},
					phone: {
						rich_text: [
							{
								text: {
									content: phone,
								},
							},
						],
					},
					age: {
						select: { name: age },
					},
					gender: {
						select: { name: gender },
					},
					expectedCount: {
						number: Number(expectedCount),
					},
				},
			});

			res.status(201).json({ ok: true, message: "Success" });
		}
	} catch (error) {
		res.status(400).json({ ok: false, message: "Fail" });
	}
}
