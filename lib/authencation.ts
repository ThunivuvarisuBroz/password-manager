import jwt from 'jsonwebtoken';

export function AuthHeader(req: any) {

    const token = req.headers.get('authorization');

    if (token) {
        const jwt_verify = token.split(' ')[1];


        const verify = jwt.verify(jwt_verify, process.env.SCEART_KEY as string);
        return verify;
    }
    else {
        return null;
    }

}