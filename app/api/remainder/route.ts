import { AuthHeader, JwtUser } from "@/lib/authencation";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/config";

export  async function POST(req: NextRequest) {
  const jwt_verify = AuthHeader(req);
  if (!jwt_verify || !jwt_verify.status) {
    return NextResponse.json({
      status: false,
      message: "Invalid token",
    });
  } else {
    const body = await req.json();
    const rTile = body.Rtitle;
    const rDate = body.Rdate;
    const rhours = body.Rhour;
    const rMinutes = body.Rminute;
    const rPeriod = body.Rperiod;
    const user_id = (jwt_verify.token_msg as JwtUser).id;
    if (!rTile || !rDate || !rhours || !rMinutes || !rPeriod) {
      return NextResponse.json({
        status: false,
        message: "Missing required remainder fields",
      });
    }
    const [R_insert] = await db.query(
      "insert into remainder(r_title,r_date,r_hour,r_minutes,r_period,is_rang,user_id)values(?,?,?,?,?,?,?)",
      [rTile, rDate, rhours, rMinutes, rPeriod, 0, user_id],
    );

    if (R_insert) {
      return NextResponse.json({
        status: "success",
        message: R_insert,
      });
    } else {
      return NextResponse.json({
        status: "error",
        message: R_insert,
      });
    }
  }
}

// export async function POST(req: Request) {
//   return Response.json({ success: true });
// }
