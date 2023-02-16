import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          pertcno: { label: "Pertcno", type: "text", placeholder: "Pertcno" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          const username = credentials.pertcno;
          // prisma ile veritabanından username ile eşleşen kullanıcıyı çekiyoruz
          const user = await prisma.auth_user.findUnique({
            where: {
              // username i string olarak çevirip, credentials.pertcno ile karşılaştırıyoruz
              username: username,
            },
          })
          console.log("bak"+username);
          console.log(user);
          if (user == null || user == "" || user == [] || user == {} || user == undefined || user == "undefined") {
            throw new Error("You haven't registered yet!");
          }
          else {
            return getUser( {user} );
          }
        },
    }),
  ],
    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
    pages: {
        signIn: "/auth/login",
        signOut: "/auth/logout",
    },
    secret: "secret",    
}

const signInUser = async ({ user, pertcno }) => {    
    console.log(user.username)
    return user
};

const signOutUser = async ({ user }) => {
    return user
};

const getUser = async ({ user }) => {
    // user'in username'ini çekiyoruz
    const username = user.username;
    return user
};


export default NextAuth(authOptions)