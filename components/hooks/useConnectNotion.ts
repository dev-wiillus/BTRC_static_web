import { Client } from "@notionhq/client";

export default function useConnectNotion(){
    // Initializing a client
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    });
    
    return notion
}