import jwt from "jsonwebtoken";

export const createToken = (
  jwtPayload: { userEmail: string },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
