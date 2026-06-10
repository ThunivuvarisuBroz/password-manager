"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

// 1. Define TypeScript interface for the form state
interface NoticeFormData {
  title: string;
  color: string;
  shortDescription: string;
  priority: number;
}

export default function NoticeForm() {
  // 2. Initialize state with type safety
  const [formData, setFormData] = useState<NoticeFormData>({
    title: "",
    color: "#3b82f6", // Default Tailwind blue-500 hex
    shortDescription: "",
    priority: 1,
  });

  // 3. Handle input changes dynamically
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "priority" ? parseInt(value) || 1 : value,
    }));
  };

  // 4. Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Notice Data:", formData);
    // Add your API call or state dispatch logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Create New Notice
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Notice Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-slate-700 mb-1"
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
            placeholder="e.g., Scheduled Maintenance"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        {/* Notice Color & Priority Number (Side by Side) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Notice Color */}
          <div>
            <label
              htmlFor="color"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Notice Color
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-10 h-10 p-0 border border-slate-300 rounded-md cursor-pointer bg-transparent"
              />
              <span className="text-xs font-mono text-slate-500 uppercase">
                {formData.color}
              </span>
            </div>
          </div>

          {/* Priority Number */}
          <div>
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-slate-700 mb-1"
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
              className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Short Description */}
        <div>
          <label
            htmlFor="shortDescription"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Short Description
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            rows={3}
            maxLength={200}
            required
            value={formData.shortDescription}
            onChange={handleChange}
            placeholder="Briefly describe the notice details..."
            className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
          />
          <p className="text-xs text-slate-400 mt-1 text-right">
            {formData.shortDescription.length}/200 characters
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Publish Notice
        </button>
      </form>
    </div>
  );
}
