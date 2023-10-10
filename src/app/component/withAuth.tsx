"use client";

import { redirect, usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { auth } from "../../../firebase";
import { useAuthContext } from "../layout";

export default function withAuth(Component: any) {
  return function Auth(props: any) {
    const router = useRouter();
    const pathname: any = usePathname();
    console.log("current pathname", pathname);
    console.log("🚀 ~ router:", router);
    const redirections = {
      user: ["/Serverside", "/user1", "/user2"],
      Ambassador: ["/clientside", "/ambassador1", "/ambassador2"],
    };

    useEffect(() => {
      if (auth.currentUser?.emailVerified === false) {
        router.push("/sign-in");
      } else if (auth.currentUser?.emailVerified === true) {
        router.push("/dashboard");
      } else {
        router.push("/sign-in");
      }
    }, [auth.currentUser]);

    return <Component {...props} />;
  };
}
