import type { NextApiRequest, NextApiResponse } from 'next';
import { getUser } from '../../../../api/userAPI';
import { getLoginSession } from '../../../../lib/auth';

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getLoginSession(req);
    const user = (session && (await getUser(session))) ?? null;
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).end('Authentication token is invalid, please log in');
  }
}
