import jwt from 'jsonwebtoken';
import User from '../models/UserModel';

export function withAuth({ requiredRole = 'user', redirectTo = '/login' }) {
  return async (context) => {
    const { req } = context;
    const token = req.cookies.token;

    console.log('withAuth: Start');
    
    if (!token) {
      console.log('withAuth: No token found');
      return {
        redirect: {
          destination: redirectTo,
          permanent: false,
        },
      };
    }

    try {
      console.log('withAuth: Verifying token');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      console.log('withAuth: Finding user in database');
      const user = await User.findOne({ email: decoded.email }).lean();

      if (!user) {
        console.log('withAuth: User not found');
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
        console.log('withAuth: Insufficient role');
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

      console.log('withAuth: Success');
      return {
        props: { user: userData },
      };
    } catch (error) {
      console.log('withAuth: Error', error);
      return {
        redirect: {
          destination: redirectTo,
          permanent: false,
        },
      };
    }
  };
}