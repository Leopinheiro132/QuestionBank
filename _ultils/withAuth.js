import jwt from 'jsonwebtoken';
import User from '../models/UserModel';

export function withAuth({ requiredAdmin = false, redirectTo }) {
  return async (context) => {
    const { req } = context;
    const token = req.cookies.token;

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ email: decoded.email });

      if (!user) {
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        };
      }

      if (requiredAdmin && !user.isAdm) {
        return {
          redirect: {
            destination: '/home',
            permanent: false,
          },
        };
      }
      const userData = {
        email: user.email,
        isAdm: user.isAdm,
      };

      return {
        props: { user: userData },
      };
    } catch (error) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  };
}
