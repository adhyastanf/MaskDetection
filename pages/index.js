import Link from "next/link";

export default function Home() {
  return <></>
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
