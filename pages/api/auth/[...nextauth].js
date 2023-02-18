import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const kullaniciadi = credentials.kullaniciadi;
        const password = credentials.password;
        console.log("username :" + kullaniciadi);
        console.log("password :" + password);
        // prisma ile veritabanından username ile eşleşen kullanıcıyı çekiyoruz
        const user = await prisma.User.findUnique({
          where: {
            pertcno: kullaniciadi,
          },
        });
        console.log(user);
        if (
          user == null ||
          user == "" ||
          user == [] ||
          user == {} ||
          user == undefined ||
          user == "undefined"
        ) {
          throw new Error("You haven't registered yet!");
        } else {
          return getUser({ user, password });
        }
      },
    }),

    // user çıkış şlemini gerçekleştiriyoruz
    // https://next-auth.js.org/configuration/providers#signout-callback
  ],
  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },
  secret: "secret",
  session: {
    jwt: true,
  },
 
};

const signInUser = async ({ user }) => {
  return user;
};

const getUser = async ({ user, password }) => {
  // user'in username'ini çekiyoruz
  if (password === user.password) {
    console.log("user: " + user);
    console.log("user: " + user.email);
    return user;
  } else {
    throw new Error("Wrong password!");
  }
};

export default NextAuth(authOptions);
