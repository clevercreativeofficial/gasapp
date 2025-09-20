"use client";
import Job from "@/components/job";
import { getJobs } from "@/db/jobs"

const Jobs = () => {


  return (
    <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-5">
      {/* Jobs List */}
      {getJobs.map(job => (
        <Job
          key={job.id}
          jobImages={job.images}
          jobTitle={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary}
          jobType={job.jobType}
          postedDate={job.postedDate}
          isRemote={job.isRemote}
          isFeatured={job.isFeatured}
        />
      ))}
    </div>
  )
}

export default Jobs;