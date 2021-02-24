import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';
import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto
          .pbkdf2Sync(req.body.password, salt, 1000, 64, 'sha512')
          .toString('hex');
        const userData = {
          ...req.body,
          salt,
          password: hash,
        };
        const user = await User.create(userData);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
