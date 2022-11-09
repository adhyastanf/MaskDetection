import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    // ...add more providers here
  ],
  secret:process.env.SECRET,
  callbacks: {
    async signIn(props){

      console.log("ini props",props)

      return props.profile
    }
    ,
    async jwt(props) {
      const {token,account} = props
      // Persist the OAuth access_token to the token right after signin
      // console.log(props)
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session(props) {
      const { session, token, user } = props
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages:{
    signOut:"/login",
    console:"/login",
  }
};

export default NextAuth(authOptions);
