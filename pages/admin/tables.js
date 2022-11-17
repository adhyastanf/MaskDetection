import Layout from "../../components/layout/layout";
import Tables from "../../components/tables";
import {BsPeopleFill} from 'react-icons/bs'

const TablesPages = () => {
  const view = [{ title: "Total clients", content: "6389" }];
  return (
    <>
      <Layout>
        {/* <div className="container px-6 mx-auto grid bg-slate-500"> */}
        <section className="mb-4 ">
          <h1 className="select-none my-6 font-medium text-xl">Dashboard</h1>
          {view.map((data, index) => {
            return (
              <div key={index} className=" flex gap-4 items-center px-4 py-2 my-2 bg-slate-100 rounded-md">
                <BsPeopleFill size={40}/>
                <div>
                  <p className=" text-md font-bold ">{data.title}</p>
                  <p >{data.content}</p>
                </div>
              </div>
            );
          })}
        </section>
        <section className="mb-4">
          <Tables />
        </section>
        {/* </div> */}
      </Layout>
    </>
  );
};

export default TablesPages;
