import { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignUp() {
  const schema = yup
    .object()
    .shape({
      Nama_Depan: yup.string().required("ga boleh kosong goblok"),
      Nama_Belakang: yup.string().required(),
      Nomor_Telepon: yup.number().required(),
      Gender: yup.bool().required().oneOf([true,false]),
      Email: yup.string().email().required(),
      Password: yup.string().min(4).max(15).required(),
      confirmPassword: yup.string().oneOf([yup.ref("Password")],null),
      Username: yup.string().required(),
    })
    .required();

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <section className=" flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 ">
      <div className=" w-[300px]">
        <form
          id="form1"
          onSubmit={handleSubmit((d) => {
            console.log(d);
            console.log(errors)
          })}
        >
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">First Name</p>
            <input {...register("Nama_Depan")} className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
            <p>{errors.Nama_Depan?.message}</p>
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Last Name</p>
            <input {...register("Nama_Belakang")} className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Email</p>
            <input {...register("Email")} placeholder="Password" className=" invalid:border-red-600 rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" ">Gender</p>
            <input type={"radio"} {...register("Gender")} value={true} placeholder="Password" className=" inline-block w-[50px] h-[50px]" />
            <input type={"radio"} {...register("Gender")} value={false} placeholder="Password" className=" inline-block w-[50px] h-[50px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Phone Number</p>
            <input {...register("Nomor_Telepon")} name="Nomor_Telepon" placeholder="Password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Username</p>
            <input {...register("Username")} name="Username" placeholder="Password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Password</p>
            <input
              {...register("Password")}
              type="password"
              placeholder="Password"
              className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Password</p>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Password"
              className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
          </div>
          <input type="submit" className=" rounded-[20px] border-solid w-full h-[40px] bg-[#2CD5D9] px-[34px] mb-[10px] text-white" value={"next"} />
        </form>
      </div>
    </section>
  );
}
