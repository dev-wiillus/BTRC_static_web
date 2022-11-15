// /api/partnership

import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";
import { IForm } from "../../components/ui/modal/PartnershipApplication";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		if (req.method === "POST") {
			const data = req.body;

			const { company, name, email, phone, adType, description } =
				data as unknown as IForm;

			const notion = new Client({
				auth: process.env.NOTION_TOKEN,
			});

			const result = await notion.pages.create({
				parent: {
					type: "database_id",
					database_id: "8108766951d941a48561d2aae5a43354",
				},
				properties: {
					company: {
						rich_text: [
							{
								text: {
									content: company,
								},
							},
						],
					},
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
					adType: {
						select: { name: adType },
					},
					...(description && {
						description: {
							rich_text: [
								{
									text: {
										content: description,
									},
								},
							],
						},
					}),
				},
			});

			res.status(201).json({ ok: true, message: "Success" });
		}
	} catch (error) {
		res.status(400).json({ ok: false, message: "Fail" });
	}
}
