import { AuthHeader } from "@/lib/authencation";
import { NextResponse } from "next/server";
import { db } from "@/lib/config";

export async function POST(req: any) {
    const jwt_token = AuthHeader(req);
    // console.log(jwt_token);

    if (!jwt_token) {
        return NextResponse.json({
            status: false,
            message: 'Token Expired'
        })
    } else {
        let token_id = jwt_token.id;
        // let token_role = jwt_token.role

        const body = await req.json();
        const title = body.task;
        const s_Date = body.start;
        const task_days = body.days;

        let [insert_task]: any = await db.query(`insert into task_details values(task_titile,task_start_date,task_day) into(?,?,?)`, [title, s_Date, task_days]);

        if (insert_task) {
            return NextResponse.json({
                status: 'success',
                message: insert_task
            })
        }
        else {
            return NextResponse.json({
                status: 'error',
                message: insert_task
            })

        }




    }



}