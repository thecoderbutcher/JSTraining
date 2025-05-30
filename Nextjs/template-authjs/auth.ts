import NextAuth from "next-auth";
import authConfig from "@/auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);

/* import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import { db } from '@/lib/db';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from '@prisma/client';
import { getUserById } from './app/auth/data/user';

declare module "@auth/core" {
  interface session {
    user: {
      role: string,
    }
  }
}

export const {
  handlers, 
  auth,
  signIn,
  signOut
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    async signIn({ user, account }) {
      //Allow OAuth without email verification
      if (account?.provider !== 'credentials') return true;

      const existingUser = user.id ? await getUserById(user.id) : false;

      //Prevent sign in without email verification
      if (!existingUser || !existingUser.emailVerified) {
        return false;
      }
      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token;

      token.role = existingUser.role;
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
}) */