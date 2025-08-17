import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E5D9F2] flex flex-col items-center justify-start py-10 px-4">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-[#A594F9] flex items-center justify-center gap-4 mb-10">
        Find Your Study Buddy <span className="text-5xl">👥</span>
      </h1>

      {/* Form Card */}
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl">
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="input" />
            <input type="number" placeholder="Age" className="input" />
            <select className="input">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input type="text" placeholder="Current Education (e.g., B.Tech CSE)" className="input" />
            <input type="text" placeholder="Class 10 Score" className="input" />
            <input type="text" placeholder="Class 12 Score" className="input" />
            <input type="text" placeholder="College Name" className="input" />
            <input type="text" placeholder="City/Place" className="input" />
          </div>

          <textarea
            rows="3"
            placeholder="Your Interests (e.g., Web Dev, AI, ML)"
            className="input w-full resize-none"
          ></textarea>

          <select className="input w-full">
            <option>Select What You're Looking For</option>
            <option>Hackathon Team</option>
            <option>Project Partner</option>
            <option>Coding Buddy</option>
            <option>Study Group</option>
          </select>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button type="submit" className="w-full sm:w-auto bg-[#A594F9] text-white px-6 py-2 rounded-lg hover:bg-[#8f78f8]">
              Sign Up
            </button>
            <button className="w-full sm:w-auto border border-[#A594F9] text-[#A594F9] px-6 py-2 rounded-lg hover:bg-[#f0eaff]">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
