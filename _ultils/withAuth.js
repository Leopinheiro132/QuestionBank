import jwt from 'jsonwebtoken';
import User from '../models/UserModel';

export function withAuth({ requiredRole = 'user', redirectTo = '/login' }) {
  return async (context) => {
    const { req } = context;
    const token = req.cookies.token;

    if (!token) {
      return {
        redirect: {
          destination: redirectTo,
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
            destination: redirectTo,
            permanent: false,
          },
        };
      }

      const rolesHierarchy = {
        user: 1,
        admin: 2,
        moderator: 3,
      };

      if (rolesHierarchy[user.role] < rolesHierarchy[requiredRole]) {
        return {
          redirect: {
            destination: '/home',
            permanent: false,
          },
        };
      }

      const userData = {
        email: user.email,
        role: user.role,
      };

      return {
        props: { user: userData },
      };
    } catch (error) {
      return {
        redirect: {
          destination: redirectTo,
          permanent: false,
        },
      };
    }
  };
}