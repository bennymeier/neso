import Local from 'passport-local';
import { getUser } from '../api/userAPI';
import { validatePassword } from './user';

export const localStrategy = new Local.Strategy(async function (
  email,
  password,
  done
) {
  try {
    console.log("EMAIL ", email);
    const { data } = await getUser(email);
    console.log("DATA!!! ", data);
    if (data && validatePassword(data, password)) {
      done(null, data);
    } else {
      done(new Error('Invalid username and password combination'));
    }
  } catch (err) {
    done(err);
  }
});
