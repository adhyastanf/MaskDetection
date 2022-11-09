import { useRef, useState } from "react";
import axios from "axios";
import moment from "moment";
export default function SignUp() {
  const [data, setData] = useState({
    Nama_Depan: "",
    Nama_Belakang: "",
    birthdate: "",
    gender: true,
    Foto: "foto.png",
    Nomor_Telepon: "",
    Email: "",
    Password: "",
    Username: "",
  });

  const [confirmPw, setConfirm] = useState("");
  const [match, setMatch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "birthdate") {
      
      setData((prevItem) => {
        return { ...prevItem, [name]: value };
        // console.log({...prevItem})
      });
    } else {
      setData((prevItem) => {
        return { ...prevItem, [name]: value };
        // console.log({...prevItem})
      });
    }
    console.log(data);
  };

  const url = "/api/users";
  const addItem = (e) => {
    e.preventDefault()
    if (confirmPw === data.Password) {
      setMatch(false);
      axios.post(url, data);
    } else {
      setMatch(true);
    }
  };

  return (
    <section className=" flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 ">
      <div className=" w-[300px]">
        <form id="form1">
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">First Name</p>
            <input required onChange={handleChange} value={data.Nama_Depan} name="Nama_Depan" placeholder="Password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Last Name</p>
            <input required onChange={handleChange} value={data.Nama_Belakang} name="Nama_Belakang" id="" placeholder="Password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Email</p>
            <input required onChange={handleChange} value={data.Email} name="Email" id="" placeholder="Password" className=" invalid:border-red-600 rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Birthdate</p>
            <input required type="date" onChange={handleChange} value={data.birthdate} name="birthdate" id="" placeholder="Password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Gender</p>
            <input required onChange={handleChange} id="" placeholder="Password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Phone Number</p>
            <input required onChange={handleChange} value={data.Nomor_Telepon} name="Nomor_Telepon" id="" placeholder="Password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Username</p>
            <input required onChange={handleChange} value={data.Username} name="Username" id="" placeholder="Password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Password</p>
            <input
              onChange={handleChange}
              value={data.Password}
              type="password"
              name="Password"
              id=""
              placeholder="Password"
              className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              minLength={"8"}
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Confirm Password</p>
            <input required onChange={(e) => setConfirm(e.target.value)} type="password" name="confirm" id="" placeholder="Password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] " minLength={"8"} />
            {match && <span className=" text-red-700 text-xs ml-[14px]">Not match</span>}
          </div>
        </form>
        <button onClick={addItem} form="form1" type="button" className=" rounded-[20px] border-solid w-full h-[40px] bg-[#2CD5D9] px-[34px] mb-[10px] text-white">
          Next
        </button>
      </div>
    </section>
  );
}
