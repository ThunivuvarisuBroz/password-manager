import { AuthHeader } from "@/lib/authencation";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    const jwt_token = AuthHeader(req);
    // console.log(jwt_token);

    if (!jwt_token) {
        return NextResponse.json({
            status: false,
            message: 'Token Expired'
        })
    }

    return NextResponse.json({
        message: jwt_token
    })

}