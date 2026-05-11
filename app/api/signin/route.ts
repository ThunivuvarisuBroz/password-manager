import { db } from "@/lib/config";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import fs from 'fs'
import path from 'path'
import { ResultSetHeader } from "mysql2";

export async function POST(req: any) {
    const body = await req.formData();
    const fname = body.get('fullname');
    const email = body.get('email');
    const phone = body.get('phone');
    const dob = body.get('dob');
    const password = body.get('password');
    const profile = body.get('profile');


    // console.log("from Backend" + fname + " " + email + " " + phone + " " + dob + " " + password + " " + profile);

    const [checkData]: any = await db.query('select email from login_details where email=?', [email]);

    if (checkData.length > 0) {
        console.log('present');
        return NextResponse.json({
            'status': 430,
            'message': 'Email is already Registred'
        })

    }
    else {
        const passWord = await bcrypt.hash(password, 10);
        console.log(passWord);


        if (profile && profile.size > 0) {
            const binaryDate = await profile.arrayBuffer();
            const bufferData = Buffer.from(binaryDate);
            const ImageName = Date.now() + profile.name;

            const saveImage = path.join(process.cwd(), 'public/assets/uploads', ImageName);
            fs.writeFileSync(saveImage, bufferData);

            const [signinData] = await db.query<ResultSetHeader>(`insert into register_details (fullname,email,phone,dob,profile) values(?,?,?,?,?)`, [fname, email, phone, dob, ImageName]);
            const signLastid = signinData.insertId;

            if (signinData) {
                const loginType = 'Register';
                const [loginData] = await db.query(`insert into login_details(email,password,user_id,login_type)
                    values(?,?,?,?)`, [
                    email, passWord, signLastid, loginType
                ]);

                if (loginData) {
                    return NextResponse.json({
                        'status': 200,
                        'message': 'User Registrtion completed'
                    })
                }

            }
            return NextResponse.json({
                'status': 420,
                'message': 'something went wrong'
            })
        }

    }

    // console.log(checkData);


    // return NextResponse.json({
    //     'status': 200,
    //     'message': 'success'
    // })


}