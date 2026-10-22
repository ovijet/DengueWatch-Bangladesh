"use client";

import { useState } from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
}

const jobs: Job[] = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "Dhaka" },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "Remote",
  },
  { id: 3, title: "MERN Developer", company: "Meta", location: "Khulna" },
  { id: 4, title: "Web Designer", company: "Figma", location: "Chittagong" },
  { id: 5, title: "React Developer", company: "Amazon", location: "Remote" },
  { id: 6, title: "Next.js Developer", company: "Vercel", location: "Dhaka" },
];

export default function SearchPage() {
  const [search, setSearch] = useState<string>("");

  // const filteredJobs = jobs.filter((job) => {
  //   return (
  //     job.title.toLowerCase().includes(search.toLowerCase()) ||
  //     job.company.toLowerCase().includes(search.toLowerCase())
  //   );
  // });

  const filteredJobs = jobs.filter((job) => {
    return (
      job.location.toLowerCase().includes(search.toLowerCase()) ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Search Jobs</h1>

      <input
        type="text"
        placeholder="Search job or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg p-3 mb-5"
      />

      <div>
        {/* {filteredJobs.length > 0 ? (
          <ul>
            {filteredJobs.map((job) => (
              <li key={job.id} className="border-b py-2">
                <strong>{job.title}</strong> at {job.company}
              </li>
            ))}
          </ul>
        ) : (
          <p>No jobs found.</p>
        )} */}

        {filteredJobs.length > 0 ? (
          <div>
            {filteredJobs.map((job) => (
              <li key={job.id}>
                <b>{job.title}</b> at {job.company} at {job.location}
              </li>
            ))}
          </div>
        ) : (
          <p>not found </p>
        )}
      </div>
    </main>
  );
}
