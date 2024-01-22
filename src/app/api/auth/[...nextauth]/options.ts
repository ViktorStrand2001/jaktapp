import type { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"
import FacebookProvider from "next-auth/providers/facebook"

export const options: NextAuthOptions = {
  providers: [
        CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Enter Username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Enter Password",
        },
          },
      
      async authorize(credentials , req) {
        /*
        const res = await fetch("/your/endpoint", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        })
        const user = await res.json()
        */

        const user = { id: "1", name: "viktor",password: "123" ,email: "viktor@example.com" }

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user
        } else {
          return null
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ],

  /* 
    Om man vill skapa egen login sida.
    pages:{
    signIn: "/url-till-signinPage"
    }
    */
}