import { AuthHeader,JwtUser  } from "@/lib/authencation";
import { NextResponse } from "next/server";
import { db } from "@/lib/config";

export async function POST(req: any) {
  const jwt_token = AuthHeader(req);
  console.log('tioken::');
  
  console.log(jwt_token);

  if (!jwt_token || !jwt_token.status) {
    return NextResponse.json({
      status: false,
      message: "Invalid token",
    });
  } else {
    const token_id = (jwt_token.token_msg as JwtUser).id;
    // let token_role = jwt_token.role

    const body = await req.json();
    const title = body.task;
    const s_Date = body.start;
    const task_days = body.days;

    let [insert_task]: any = await db.query(
      `insert into task_details(task_title,task_start_date,task_day,user_id)values(?,?,?,?)`,
      [title, s_Date, task_days, token_id],
    );

    if (insert_task) {
      return NextResponse.json({
        status: "success",
        message: insert_task,
      });
    } else {
      return NextResponse.json({
        status: "error",
        message: insert_task,
      });
    }
  }
}

export async function GET(req: any) {
  const verify = AuthHeader(req);
  if (!verify || !verify.status) {
    return NextResponse.json({
      status: false,
      message: "Token Expired",
    });
  } else {
    const token_id = (verify.token_msg as JwtUser).id;
    const [getSql]: any = await db.query(
      "select * from task_details where user_id=?",
      [token_id],
    );

    // console.log(getSql);
    if (getSql) {
      return NextResponse.json({
        status: true,
        message: getSql,
      });
    } else {
      return NextResponse.json({
        status: false,
        message: "something went wrong from my side",
      });
    }
  }
}
