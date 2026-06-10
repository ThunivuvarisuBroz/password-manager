"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface NoticeFormData {
  title: string;
  color: string;
  shortDescription: string;
  priority: number;
}

export default function NoticePage() {
  const [formData, setFormData] = useState<NoticeFormData>({
    title: "",
    color: "#f1671a",
    shortDescription: "",
    priority: 1,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "priority" ? parseInt(value) || 1 : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Notice Data Submitted:", formData);
  };

  return (
    <div className="mx-auto my-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Create New Notice</h1>
        <p className="text-sm text-slate-500 mt-1">
          Fill out the fields below to publish a dynamic board notice.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Notice Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Scheduled Core Upgrades"
              className="w-full px-3.5 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="color"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Notice Tint Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-11 h-11 p-0   cursor-pointer bg-transparent overflow-hidden"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-mono font-medium text-slate-700 uppercase">
                    {formData.color}
                  </span>
                  <span className="text-xs text-slate-400">
                    Used for card accent lines
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="priority"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Priority Number
              </label>
              <input
                type="number"
                id="priority"
                name="priority"
                min="1"
                max="10"
                required
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-3.5 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
              />
              <p className="text-xs text-slate-400 mt-1">
                Scale: 1 (Lowest) to 10 (Highest)
              </p>
            </div>
          </div>

          <div>
            <label
              htmlFor="shortDescription"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Short Description
            </label>
            <textarea
              id="shortDescription"
              name="shortDescription"
              rows={4}
              maxLength={200}
              required
              value={formData.shortDescription}
              onChange={handleChange}
              placeholder="Provide a concise description summarizing the notification parameters..."
              className="w-full px-3.5 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none transition-colors"
            />
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-slate-400">
                Keep it clear and actionable.
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {formData.shortDescription.length} / 200 characters
              </span>
            </div>
          </div>

          <hr className="border-slate-100" />

          <div className="flex items-center justify-end gap-3 pt-2">
            {/* <button
              type="button"
              onClick={() =>
                setFormData({
                  title: "",
                  color: "#3b82f6",
                  shortDescription: "",
                  priority: 1,
                })
              }
              className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              Reset Form
            </button> */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition-colors duration-200 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Notice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
