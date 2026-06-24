'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bell, Calendar, Clock, FileText, Plus, Check } from 'lucide-react';

export default function ReminderForm() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  
  // Time States
  const [selectedHour, setSelectedHour] = useState('12');
  const [selectedMinute, setSelectedMinute] = useState('00');
  const [isOpen, setIsOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCreateReminder = () => {
    console.log("--- Reminder Captured ---");
    console.log("Task:", task);
    console.log("Date:", date);
    console.log("Combined Time:", `${selectedHour}:${selectedMinute}`);
  };

  const hours = Array.from({ length: 12 }, (_, i) => String(i === 0 ? 12 : i).padStart(2, '0'));
  const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, '0'));

//   async function enableNotification() {
//     alert('ok')
//   const permission = await Notification.requestPermission();

//   if (permission === "granted") {
//     console.log("Permission granted");
//   }
// }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 selection:bg-indigo-500 selection:text-white">
      {/* Card Container with Light Glassmorphism */}
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 shadow-xl shadow-slate-200/50">
         {/* <button onClick={enableNotification}>
  Enable Notifications
</button> */}
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 border border-indigo-100">
            <Bell className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-800">Set a Reminder</h2>
            <p className="text-xs text-slate-500">Keep track of your tasks and deadlines</p>
          </div>
        </div>
       

        {/* Form Layout */}
        <div className="space-y-5">
          {/* Task Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-indigo-500" />
              Task Description
            </label>
            <input 
              type="text" 
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="e.g., Review the landing page design"
              className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
            />
          </div>

          {/* Date & Time Grid */}
          <div className="grid grid-cols-2 gap-4">
          
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                Date
              </label>
              <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm [color-scheme:light]"
              />
            </div>

            {/* Custom Clock Input */}
            <div className="space-y-1.5 relative" ref={dropdownRef}>
              <label className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                Time
              </label>
              
              {/* Fake Input display triggered on click */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-left focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm flex justify-between items-center"
              >
                <span className="font-medium text-slate-700">{selectedHour}:{selectedMinute}</span>
                <Clock className="w-4 h-4 text-slate-400" />
              </button>

             
              {isOpen && (
                <div className="absolute right-0 mt-2 p-4 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 w-64 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex flex-col items-center gap-4">
                    
                    {/* The Visual Clock Face layout */}
                    <div className="relative w-40 h-40 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50">
                      {/* Center Point */}
                      <div className="w-2 h-2 rounded-full bg-indigo-600 z-10" />

                      {/* Map Hour elements in a circle shape */}
                      {hours.map((hr, index) => {
                        const angle = (index * 30 * Math.PI) / 180 - Math.PI / 2;
                        const x = Math.cos(angle) * 56; 
                        const y = Math.sin(angle) * 56;

                        const isSelected = selectedHour === hr;

                        return (
                          <button
                            key={hr}
                            type="button"
                            onClick={() => setSelectedHour(hr)}
                            style={{ transform: `translate(${x}px, ${y}px)` }}
                            className={`absolute w-7 h-7 text-[11px] font-semibold rounded-full flex items-center justify-center transition-all ${
                              isSelected 
                                ? 'bg-indigo-600 text-white scale-110 shadow-md shadow-indigo-600/30' 
                                : 'text-slate-500 hover:bg-slate-200 hover:text-slate-800'
                            }`}
                          >
                            {parseInt(hr, 10)}
                          </button>
                        );
                      })}
                    </div>

                    {/* Minute Inline Selector bar */}
                    <div className="w-full space-y-1">
                      <span className="text-[10px] text-slate-400 font-semibold px-1 block uppercase tracking-wider">Minutes</span>
                      <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none snap-x">
                        {minutes.map((min) => (
                          <button
                            key={min}
                            type="button"
                            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all shrink-0 snap-center ${
                              selectedMinute === min
                                ? 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                                : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                            }`}
                            onClickCapture={() => setSelectedMinute(min)}
                          >
                            {min}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Confirmation Button */}
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-colors"
                    >
                      <Check className="w-3.5 h-3.5" /> Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Button */}
          <button 
            type="button"
            onClick={handleCreateReminder}
            className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-medium rounded-xl shadow-lg shadow-indigo-600/10 transition-all text-sm"
          >
            <Plus className="w-4 h-4" />
            Create Reminder
          </button>
        </div>

      </div>
    </div>
  );
}