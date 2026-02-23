let jobs = [
  {
    id: 1,
    name: "Tech Solutions",
    role: "Frontend Developer",
    city: "Dhaka",
    type: "Full-Time",
    pay: "40k",
    info: "Work with React and Tailwind CSS.",
    status: "all",
  },
  {
    id: 2,
    name: "Creative Agency",
    role: "UI/UX Designer",
    city: "Remote",
    type: "Part-Time",
    pay: "35k",
    info: "Design interfaces using Figma.",
    status: "all",
  },
  {
    id: 3,
    name: "Soft Systems",
    role: "Backend Developer",
    city: "Sylhet",
    type: "Full-Time",
    pay: "50k",
    info: "Manage databases and APIs.",
    status: "all",
  },
  {
    id: 4,
    name: "Digital Hub",
    role: "Digital Marketer",
    city: "Dhaka",
    type: "Contract",
    pay: "30k",
    info: "Handle social media campaigns.",
    status: "all",
  },
  {
    id: 5,
    name: "InnoSoft",
    role: "Full Stack Developer",
    city: "Remote",
    pay: "65k",
    type: "Full-Time",
    info: "Build complete web applications.",
    status: "all",
  },
  {
    id: 6,
    name: "App Pro",
    role: "App Developer",
    city: "Dhaka",
    pay: "45k",
    type: "Full-Time",
    info: "Develop mobile apps using Flutter.",
    status: "all",
  },
  {
    id: 7,
    name: "Web Masters",
    role: "QA Engineer",
    city: "Rajshahi",
    pay: "38k",
    type: "On-Site",
    info: "Test web applications for bugs.",
    status: "all",
  },
  {
    id: 8,
    name: "Data Mine",
    role: "Data Analyst",
    city: "Dhaka",
    pay: "55k",
    type: "Remote",
    info: "Analyze data and create reports.",
    status: "all",
  },
];

function displayJobs() {
  const container = document.getElementById("job-container");
  container.innerHTML = "";

  jobs.forEach(function (job) {
    const div = document.createElement("div");
    div.className =
      "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-4 flex flex-col md:flex-row justify-between items-center";

    div.innerHTML = `
            <div>
                <h3 class="text-xl font-bold">${job.role}</h3>
                <p class="text-gray-500">${job.name} - ${job.city}</p>
                <div class="flex gap-2 mt-2">
                    <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">${job.type}</span>
                    <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">${job.pay}</span>
                </div>
            </div>
            <div class="flex gap-3 mt-4 md:mt-0">
                <button onclick="updateJobStatus(${job.id}, 'interview')" class="btn btn-sm ${job.status === "interview" ? "btn-success text-white" : "btn-outline btn-success"}">Interview</button>

                <button onclick="updateJobStatus(${job.id}, 'rejected')" class="btn btn-sm ${job.status === "rejected" ? "btn-error text-white" : "btn-outline btn-error"}">Rejected</button>

                <button onclick="removeJob(${job.id})" class="btn btn-sm btn-ghost text-red-500 font-bold">Delete</button>
            </div>
        `;
    container.appendChild(div);
  });

  document.getElementById("total-jobs-count").innerText = jobs.length;
}

displayJobs();

// Function for Interview and Rejected button clicks
function updateJobStatus(id, newStatus) {
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      // Logic for switching status
      if (jobs[i].status === newStatus) {
        jobs[i].status = "all";
      } else {
        jobs[i].status = newStatus;
      }
    }
  }
  // Call functions to show changes on screen
  displayJobs();
  refreshDashboard();
}

// Function to calculate and show numbers in dashboard
function refreshDashboard() {
  let countI = 0;
  let countR = 0;

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].status === "interview") {
      countI++;
    } else if (jobs[i].status === "rejected") {
      countR++;
    }
  }

  document.getElementById("interview-jobs-count").innerText = countI;
  document.getElementById("rejected-jobs-count").innerText = countR;
}

// Function to remove job from list
function removeJob(id) {
  let remainingJobs = [];
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id !== id) {
      remainingJobs.push(jobs[i]);
    }
  }
  jobs = remainingJobs;
  displayJobs();
  refreshDashboard();

  // Also update total count
  document.getElementById("total-jobs-count").innerText = jobs.length;
}
