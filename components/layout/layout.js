import { useState,useEffect } from "react";
import Tables from "../tables";
import axios from "axios";


const Layout = ({ children }) => {
const [button, setButton] = useState(false);
const URL = "http://127.0.0.1:8000/users"

  // /users
  const [data,setData] = useState()

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(URL)
      const resData = res.data
      console.log(resData)
    }
    getData()
  },[])

  const view = [{ title: "Total clients", content: "6389" }];



  return (
    <div className="flex h-screen bg-gray-300">
      {button && (
        <aside className=" z-40 bg-white w-64 fixed mt-16 h-screen">
          <h1>MaskDetection</h1>
          <p>Dashboard</p>
          <p>Forms</p>
          <p>Cads</p>
          <p>Tables</p>
        </aside>
      )}
      <div className="flex flex-col flex-1">
        <header className=" h-[70px] bg-[#2CD5D9] py-4">
          <div className="container flex items-center justify-between h-full px-6 mx-auto bg-slate-500">
            <p onClick={() => setButton(!button)}>button</p>
          </div>
        </header>
        <main className="h-full pb-16 overflow-y-auto bg-slate-50">
          <div className="container px-6 mx-auto grid bg-slate-500">
            <section className="mb-4 ">
              <h1>Dashboard</h1>
              {view.map((data, index) => {
                return (
                  <div key={index} className="px-4 py-2 bg-slate-100 rounded-md">
                    <p className=" text-md font-bold">{data.title}</p>
                    <p>{data.content}</p>
                  </div>
                );
              })}
            </section>
            <section className="mb-4">
              <Tables />
            </section>
          </div>
          {/* {children} */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
