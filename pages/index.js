import { getSession, useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home({ session }) {
  return (
    <>
      <p className=" inline mr-5">{"tes"}</p>
      <img src={"tes"} alt="" width={50} className=" rounded-full inline" draggable={false} />
      <p>HELLO HOME</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   // console.log(session);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//       },
//     };
//   }
//   return {
//     props: { session },
//   };
// }
