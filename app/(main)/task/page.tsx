'use client'
import { ReactHTMLElement, useState } from "react";
import { log } from "util";

export default function Home() {

    const [task, setTask] = useState({ title: '', start: '', days: '' })


    function handleChange(e: any) {
        const { name, value } = e.target;

        setTask((prev) => ({
            ...prev, [name]: value
        }
        ))
    }



    async function sendData(e: any) {
        e.preventDefault();
        const token = localStorage.getItem('token');
        // console.log(task);
        // console.log(token);

        const PostApi = await fetch('api/task/',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ task: task.title, start: task.start, days: task.days })
            }
        )

        const responseApi: string = await PostApi.json();

        console.log(responseApi);


    }



    return (
        <div>


            <div className="bg-slate-800/30 border border-slate-800/60 rounded-xl p-5 space-y-4 focus-within:border-indigo-500/50 focus-within:bg-slate-800/40 transition-all duration-200">


                <div>
                    <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
                        Create New Task
                    </h3>
                    <p className="text-xs text-slate-800 mt-0.5">Assign timeline and tracking metrics</p>
                </div>

                <form className="space-y-4" onSubmit={sendData}>


                    <div>
                        <label htmlFor="taskName" className="block text-xs font-medium text-white mb-1 uppercase tracking-wider">
                            Task Name
                        </label>
                        <input
                            id="taskName"
                            type="text"
                            name="title"
                            placeholder="e.g., Update Landing Page UI"
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" onChange={handleChange}
                        />
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


                        <div>
                            <label htmlFor="startDate" className="block text-xs font-medium text-white mb-1 uppercase tracking-wider">
                                Start Date
                            </label>
                            <input
                                id="startDate"
                                type="date"
                                name="start"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors [color-scheme:dark]" onChange={handleChange}
                            />
                        </div>


                        <div>
                            <label htmlFor="numDays" className="block text-xs font-medium text-white mb-1 uppercase tracking-wider">
                                No. of Days
                            </label>
                            <input
                                id="numDays"
                                type="number"
                                min="1"
                                name="days"
                                placeholder="e.g., 5"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" onChange={handleChange}
                            />
                        </div>

                    </div>


                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition-colors shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20"
                        >
                            Create Task
                        </button>
                    </div>

                </form>
                <div>

                </div>
            </div>
            <div className="py-4">
                <h5 className="text-indigo-600 text-2xl font-semibold">List of Task</h5>
            </div>
        </div>
    );
}