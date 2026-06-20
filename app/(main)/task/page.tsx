"use client";
import { useEffect, useState } from "react";
import { Trash, SquarePen } from "lucide-react";
import { Checklogin } from "@/lib/Checklogin";

export default function Home() {
  const [task, setTask] = useState({ title: "", start: "", days: "" });
  const [getTask, setGetTask] = useState<any[]>([]);
  const [newestTaskId, setNewestTaskId] = useState<any>(null);

  useEffect(() => {
    getData();
  }, []);

  function getLocal() {
    const localValue = localStorage.getItem("token");
    return localValue;
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function getData() {
    let token = getLocal();
    if (token) {
      const GetApi = await fetch("api/task/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const GetResponseApi = await GetApi.json();
      console.log(GetResponseApi);
      if (
        (!GetResponseApi.status &&
          GetResponseApi.message === "Token Expired") ||
        GetResponseApi.message === "Token Missing"
      ) {
        Checklogin(GetResponseApi.message);
      } else {
        console.log(GetResponseApi.message);

        setGetTask(GetResponseApi.message);
      }
    } else {
      console.log("Login first");
      setGetTask([]);
    }
  }

  async function sendData(e: any) {
    e.preventDefault();
    let token = getLocal();

    if (token) {
      const PostApi = await fetch("api/task/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: task.title,
          start: task.start,
          days: task.days,
        }),
      });

      const responseApi = await PostApi.json();
      // console.log(responseApi);

      if (responseApi && responseApi.id) {
        setNewestTaskId(responseApi.id);
      } else {
        setNewestTaskId("latest");
      }

      await getData();
    } else {
      alert("loggin 1st");
    }
  }

  function deletebtn(id: any) {
    alert(id);
  }

  return (
    <div>
      {}
      <style jsx global>{`
        @keyframes fadeInRow {
          0% {
            opacity: 0;
            transform: translateY(-8px);
            background-color: rgba(79, 70, 229, 0.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            background-color: transparent;
          }
        }
        .animate-row-fade {
          animation: fadeInRow 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="bg-slate-800/30 border rounded-xl p-5 space-y-4 focus-within:border-indigo-500/50 focus-within:bg-slate-800/40 transition-all duration-200">
        <div>
          <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
            Create New Task
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Assign timeline and tracking metrics
          </p>
        </div>

        <form className="space-y-4" onSubmit={sendData}>
          <div>
            <label
              htmlFor="taskName"
              className="block text-xs font-medium text-white mb-1 uppercase tracking-wider"
            >
              Task Name
            </label>
            <input
              id="taskName"
              type="text"
              name="title"
              placeholder="e.g., Update Landing Page UI"
              className="w-full bg-indigo-600/50 border border-white rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-400 focus:outline-none transition-colors"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startDate"
                className="block text-xs font-medium text-white mb-1 uppercase tracking-wider"
              >
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                name="start"
                className="w-full bg-indigo-600/50 border border-white rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none transition-colors"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="numDays"
                className="block text-xs font-medium text-white mb-1 uppercase tracking-wider"
              >
                No. of Days
              </label>
              <input
                id="numDays"
                type="number"
                min="1"
                name="days"
                placeholder="e.g., 5"
                className="w-full bg-indigo-600/50 border border-white rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-400 focus:outline-none transition-colors"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-transparent hover:bg-indigo-600 text-indigo-600 hover:text-white border-2 border-indigo-600 font-semibold text-sm py-2.5 px-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>

      <div className="py-6 border-b border-slate-100 dark:border-slate-900 flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            <h2 className="text-xl font-semibold tracking-tight text-indigo-600 ">
              Task Workspace
            </h2>
          </div>
          <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Review and prioritize your active agenda
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 w-full shadow-sm mt-5">
        <table className="w-full min-w-full border-collapse bg-white text-left text-sm text-gray-500 table-fixed">
          <thead className="bg-gray-50 text-center text-xs font-semibold uppercase tracking-wider text-gray-700 border-b border-gray-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900 w-24"
              >
                S.no
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900 w-auto"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900 text-right pr-10 w-32"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-center capitalize">
            {getTask &&
              getTask.map((item, index) => {
                const isNew =
                  item.id === newestTaskId ||
                  (index === getTask.length - 1 && newestTaskId === "latest");
                return (
                  <tr
                    key={item.id || index}
                    className={`hover:bg-gray-50/70 transition-colors duration-150 ${
                      isNew ? "animate-row-fade" : ""
                    }`}
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-gray-700 font-medium  max-w-0">
                      {item.task_title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right pr-10">
                      <button
                        onClick={() => {
                          deletebtn(item.id);
                        }}
                        className="inline-flex items-center justify-center p-2 rounded-lg text-red-500/50 hover:text-red-600 hover:bg-red-50 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      >
                        <Trash className="w-5 h-5" />
                      </button>
                      <button className="inline-flex items-center justify-center p-2 rounded-lg text-green-500/50 hover:text-green-600 hover:bg-green-50 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500/20">
                        <SquarePen className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* herre toekn send to backend file from there go to authencation.ts file in that verify the token by secreat key if invalid return falsue sttaus with message as invalid or token expired that comes go to the Checklogin() to remove the vaue from localStorage and in Header chnage the logout to login using useContect in AuthContext.tsx file  */}
    </div>
  );
}
