import { handlers } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextAuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/libs/mongo";
import CredentialsProvider from "next-auth/providers/credentials";  

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;

        // Perform your authentication logic here
        if (username === "admin" && password === "password") {
          return { id: 1, name: "Admin User", email: "