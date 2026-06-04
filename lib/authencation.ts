import jwt from "jsonwebtoken";

export function AuthHeader(req: any) {
  const token = req.headers.get("authorization");

  try {
    if (token) {
      const jwt_verify = token.split(" ")[1];

      const verify = jwt.verify(jwt_verify, process.env.SCEART_KEY as string);
      return { status: true, token_msg: verify };
    } else {
      return { status: false, token_msg: "Token Missing" };
    }
  } catch (error: any) {
    if (error.name === "TokenExpiredError") {
      return { status: false, token_msg: "Token Expired" };
    }
  }
}
