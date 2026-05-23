import { NextResponse } from "next/server";
import { db } from '@/lib/config'
import bcrypt from "bcrypt";



export async function POST(req: any) {
    try {
        const Data = await req.json();
        const loginEmail = Data.email;
        const loginPassword = Data.password;
        console.log('backend :' + loginEmail + " " + loginPassword);

        if (loginEmail && loginPassword) {
            const [row]: any = await db.query('select * from login_details where email=?', [loginEmail]);

            if (row || row.length === 0) {
                console.log('invalid email');

            }
            console.log(row[0].password);
            console.log('email');

            console.log(row[0].email);


            const com_password = await bcrypt.compare(loginPassword, row[0].password);

            if (com_password) {
                console.log('ture');
                return NextResponse.json({
                    status: 200,
                    message: 'login success'
                })

            }
            else {
                console.log('fasle');
                return NextResponse.json({
                    status: 420,
                    message: 'Invaild Password '
                })
            }

        }


    } catch (err) {
        console.log(err);
        return NextResponse.json({
            status: 500,
            message: 'something went wrong'
        })

    }

}