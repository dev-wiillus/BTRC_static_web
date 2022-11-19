import { NextApiRequest, NextApiResponse } from "next";
import { AuthenticationType } from "../../components/ui/types";
import cache from "../../components/utils/cache";


export default function handler(
	req: NextApiRequest,
	res: NextApiResponse,){
    try{
        const data = req.query;

        const { phone, code } = data as unknown as AuthenticationType;

        const cachedCode = cache.get(phone)?.toString();

        console.log(cachedCode)
        if (cachedCode && cachedCode === code){
        res.status(200).json({ ok: true, message: "Success" });
		}
        else{
        res.status(400).json({ ok: false, message: "Fail" });
        }
	} catch (error) { 
		res.status(400).json({ ok: false, message: "Fail" });
	}
    
}