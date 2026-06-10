import { NextResponse } from "next/server";
import { db } from "@/lib/config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: any) {
  try {
    const Data = await req.json();
    const loginEmail = Data.email;
    const loginPassword = Data.password;
    console.log("backend :" + loginEmail + " " + loginPassword);

    if (loginEmail && loginPassword) {
      const [row]: any = await db.query(
        "select * from login_details where email=?",
        [loginEmail],
      );

      if (row.length === 0) {
        return NextResponse.json({
          status: 420,
          message: "Invaild Email ",
        });
      }
      // console.log(row[0].password);
      // console.log('email');

      // console.log(row[0].email);

      const com_password = await bcrypt.compare(loginPassword, row[0].password);
      console.log(com_password);

      if (com_password) {
        // console.log('ture');

        const token: string = jwt.sign(
          {
            id: row[0].id,
            role: row[0].role_type,
          },
          process.env.SCEART_KEY as string,
          {
            expiresIn: "7d",
          },
        );

        return NextResponse.json({
          status: 200,
          message: "login success",
          token: token,
        });
      } else {
        // console.log('fasle');
        return NextResponse.json({
          status: 420,
          message: "Invaild Password ",
        });
      }
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      message: "something went wrong",
    });
  }
}
