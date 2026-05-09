import { NextResponse } from "next/server";
import { db } from '@/lib/config'

export async function POST(req: any) {
    try {
        const Data = await req.json();
        const loginEmail = Data.email;
        const loginPassword = Data.password;
        console.log('backend :' + loginEmail + " " + loginPassword);

        return NextResponse.json({
            status:200,
            message:'login success'
        })
    } catch (err) {
        console.log(err);
         return NextResponse.json({
            status:500,
            message:'something went wrong'
        })

    }

}