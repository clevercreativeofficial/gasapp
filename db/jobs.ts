interface JobProps {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
  postedDate: string;
  isRemote: boolean;
  isFeatured: boolean;
  images: string[];
}

export const getJobs: JobProps[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechVision Inc.",
    location: "San Francisco, CA",
    salary: "$120,000 - $145,000",
    jobType: "Full-time",
    postedDate: "2 days ago",
    isRemote: true,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8HHRlY2glMjBjb21wYW55fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaCUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "CreativeLabs",
    location: "Austin, TX",
    salary: "$85,000 - $105,000",
    jobType: "Full-time",
    postedDate: "1 day ago",
    isRemote: false,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNyZWF0aXZlJTIwb2ZmaWNlfGVufDB8fDB8fHww"
    ]
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataCore Analytics",
    location: "Boston, MA",
    salary: "$130,000 - $155,000",
    jobType: "Full-time",
    postedDate: "3 days ago",
    isRemote: true,
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGRhdGElMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    id: 4,
    title: "Product Manager",
    company: "NexTech Solutions",
    location: "Seattle, WA",
    salary: "$135,000 - $160,000",
    jobType: "Full-time",
    postedDate: "5 days ago",
    isRemote: true,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2glMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudForge",
    location: "Remote",
    salary: "$125,000 - $150,000",
    jobType: "Full-time",
    postedDate: "1 week ago",
    isRemote: true,
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRldm9wc3xlbnwwfHwwfHx8MA%3D%3D"
    ]
  },
  {
    id: 6,
    title: "Marketing Specialist",
    company: "GrowthHackers",
    location: "Chicago, IL",
    salary: "$70,000 - $90,000",
    jobType: "Full-time",
    postedDate: "2 days ago",
    isRemote: false,
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hcmtldGluZyUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D"
    ]
  },
  {
    id: 7,
    title: "Backend Developer (Node.js)",
    company: "API Masters",
    location: "Denver, CO",
    salary: "$115,000 - $140,000",
    jobType: "Full-time",
    postedDate: "4 days ago",
    isRemote: true,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1550439062-609e1531270e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    id: 8,
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Washington, DC",
    salary: "$110,000 - $135,000",
    jobType: "Full-time",
    postedDate: "6 days ago",
    isRemote: false,
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
    ]
  },
  {
    id: 9,
    title: "Mobile App Developer",
    company: "AppCraft Studios",
    location: "Portland, OR",
    salary: "$100,000 - $130,000",
    jobType: "Contract",
    postedDate: "1 day ago",
    isRemote: true,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
    ]
  },
  {
    id: 10,
    title: "Technical Project Manager",
    company: "LaunchPad Technologies",
    location: "Miami, FL",
    salary: "$140,000 - $165,000",
    jobType: "Full-time",
    postedDate: "3 days ago",
    isRemote: false,
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2plY3QlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww"
    ]
  }
];