import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImCross } from "react-icons/im";
import moment from "moment/moment";

function App() {
  const [newProject, setNewProject] = useState("");
  const [oldProject, setOldProject] = useState("");
  const [javaVedio, setJavaVedio] = useState("");
  const [engSpoken, setEngSpoken] = useState("");
  const [info, setinfo] = useState([]);
  const [seeRecord, SetSeeRecord] = useState(false);

  let handleNewPro = (p) => {
    if (newProject == "") {
      setNewProject(p);
    }
  };
  let handleOldPro = (p) => {
    if (oldProject == "") {
      setOldProject(p);
    }
  };
  let handleJavaVedio = (p) => {
    if (javaVedio == "") {
      setJavaVedio(p);
    }
  };
  let handleEngSpoken = (p) => {
    if (engSpoken == "") {
      setEngSpoken(p);
    }
  };

  let handleSubmit = () => {
    const userObject = {
      newProject: newProject,
      oldProject: oldProject,
      javaVedio: javaVedio,
      engSpoken: engSpoken,
      date: `${new Date().getDate()}-${
        new Date().getMonth() + 1
      }-${new Date().getFullYear()}`,
    };

    axios.post("http://localhost:8000/api/todos", userObject);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/todos")
      .then((res) => {
        setinfo(res.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex m-auto text-sm font-bold mt-5 opacity-40">
        <h1 className="m-auto">Created by MERN Stack</h1>
      </div>

      <div className="flex mb-10 w-96 bg-white m-auto p-10 rounded-xl drop-shadow-md mt-24">
        <div className=" flex flex-col gap-7">
          <h1 className="text-4xl font-bold mb-10 opacity-90">
            Today work done
          </h1>
          <div className="flex">
            <input type="radio" onClick={() => handleNewPro("New Project")} />
            <h5 className="text-xl font-bold ml-5 opacity-80">New Project</h5>
          </div>
          <div className="flex">
            <input type="radio" onClick={() => handleOldPro("Old Project")} />
            <h5 className="text-xl font-bold ml-5 opacity-80">Old Project</h5>
          </div>
          <div className="flex">
            <input
              type="radio"
              onClick={() => handleJavaVedio("Javascript Vedio")}
            />
            <h5 className="text-xl font-bold ml-5 opacity-80">
              Javascript Vedio
            </h5>
          </div>
          <div className="flex">
            <input
              type="radio"
              onClick={() => handleEngSpoken("English Spoken")}
            />
            <h5 className="text-xl font-bold ml-5 opacity-80">
              English Spoken
            </h5>
          </div>
          <button
            className="w-auto h-auto bg-sky-500 p-3 rounded-xl text-white text-xl font-bold mt-5"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="rounded text-black text-md font-bold text-purple-500 opacity-70"
            onClick={() => SetSeeRecord(!seeRecord)}
          >
            See work record
          </button>
        </div>
      </div>

      {seeRecord && info.length !== 0 && (
        <div className="flex flex-wrap gap-12	bg-neutral-200 w-full p-10 mb-10">
          {info.map((item) => (
            <div className="ml-5 mt-5 w-72 h-76 bg-white  p-5 rounded-xl drop-shadow-md text-xl font-bold ">
              <span>{item.key}</span>
              <h6 className="text-sm text-black ml-5 mb-5 opacity-50">
                <span className="mr-2 ml-2">{moment().format("dddd")}</span>
                {moment().format(item.date, "L")}
              </h6>
              <h1 className="p-5 text-start text-green-600	">
                <span className="text-black mr-5 opacity-70">1</span>
                {item.newProject ? (
                  item.newProject
                ) : (
                  <span className="flex justify-center mt-[-22px]">
                    <ImCross />
                  </span>
                )}
              </h1>

              <h1 className="p-5 text-start text-indigo-400	">
                <span className="text-black mr-5 opacity-70">2</span>
                {item.oldProject ? (
                  item.oldProject
                ) : (
                  <span className="flex justify-center mt-[-22px]">
                    <ImCross />
                  </span>
                )}
              </h1>
              <h1 className="  p-5 text-start text-teal-600">
                <span className="text-black mr-5 opacity-70">3</span>
                {item.javaVedio ? (
                  item.javaVedio
                ) : (
                  <span className="flex justify-center mt-[-22px]">
                    <ImCross />
                  </span>
                )}
              </h1>
              <h1 className="p-5 text-start text-lime-600	">
                <span className="text-black mr-5 opacity-70">4</span>
                {item.engSpoken ? (
                  item.engSpoken
                ) : (
                  <span className="flex justify-center mt-[-22px]">
                    <ImCross />
                  </span>
                )}
              </h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
