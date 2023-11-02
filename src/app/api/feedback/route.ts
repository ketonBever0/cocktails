import { NextRequest } from "next/server";
import { z } from "zod";

z.object({
    
})


export async function POST(req: NextRequest) {
    const body = await req.json();
}