import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getSession, useSession,signIn } from "next-auth/react";
// import * as ml5 from 'ml5'
// import P5Wrapper from "react-p5"

export default function Home({session}) {
  

  return (
    <div className=" flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 text-center">
      <div className=" w-[300px]">
        <div className=" w-[250px] h-[250px] bg-[#D9D9D9] m-auto mb-[70px]">{/* <img src="kontol.jpg" alt="" className=" w-full" draggable={false} /> */}</div>
        <section className="font-bold">
          <input type="text" name="" id="" placeholder="Username" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          <input type="password" name="" id="" placeholder="Password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          <button className=" rounded-[20px] border-solid w-full h-[40px] bg-[#2CD5D9] px-[34px] mb-[10px] text-white">Log in</button>
          <div className=" flex gap-[8px] mb-[42px]">
            <button onClick={() => signIn()} type="submit" className=" rounded-[20px] border border-solid w-full h-[40px] px-[34px] mb-[10px] border-black">
              <img src="google.svg" alt="" className=" m-auto" />
            </button>
            <Link href={"/signUp"}>
              <button className=" rounded-[20px] border-solid w-full h-[40px] bg-[#2CD5D9] px-[34px] mb-[10px] text-white">Sign Up</button>
            </Link>
          </div>
        </section>
        <figure className={styles.logoContact}></figure>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  console.log(session)

  if(session){
      return {
          redirect:{
              destination:"/"
          }
      }
  }
  return {
    props : {session}
  }
} 



