let currentTab = "all"; // To track which tab is selected

// Job data with salary range updates
let jobs = [
  {
    id: 1,
    name: "Tech Solutions",
    role: "Frontend Developer",
    city: "Dhaka",
    type: "Full-Time",
    pay: "$40,000 - $60,000",
    status: "all",
  },
  {
    id: 2,
    name: "Creative Agency",
    role: "UI/UX Designer",
    city: "Remote",
    type: "Part-Time",
    pay: "$30,000 - $45,000",
    status: "all",
  },
  {
    id: 3,
    name: "Soft Systems",
    role: "Backend Developer",
    city: "Sylhet",
    type: "Full-Time",
    pay: "$50,000 - $75,000",
    status: "all",
  },
  {
    id: 4,
    name: "Digital Hub",
    role: "Digital Marketer",
    city: "Dhaka",
    type: "Contract",
    pay: "$25,000 - $35,000",
    status: "all",
  },
  {
    id: 5,
    name: "InnoSoft",
    role: "Full Stack Developer",
    city: "Remote",
    type: "Full-Time",
    pay: "$60,000 - $90,000",
    status: "all",
  },
  {
    id: 6,
    name: "App Pro",
    role: "App Developer",
    city: "Dhaka",
    type: "Full-Time",
    pay: "$45,000 - $65,000",
    status: "all",
  },
  {
    id: 7,
    name: "Web Masters",
    role: "QA Engineer",
    city: "Rajshahi",
    type: "On-Site",
    pay: "$35,000 - $50,000",
    status: "all",
  },
  {
    id: 8,
    name: "Data Mine",
    role: "Data Analyst",
    city: "Dhaka",
    type: "Remote",
    pay: "$55,000 - $80,000",
    status: "all",
  },
];

// Main function to render job cards on screen
function displayJobs() {
  const container = document.getElementById("job-container");
  container.innerHTML = "";

  // Filtering jobs based on current tab selection
  const filteredJobs = jobs.filter(function (job) {
    if (currentTab === "all") return true;
    return job.status === currentTab;
  });

  // Updating the filter counter (e.g., 1 of 8 jobs)
  const filterInfo = document.getElementById("filter-info");
  if (filterInfo) {
    filterInfo.innerText = filteredJobs.length + " of " + jobs.length + " jobs";
  }

  // Check if there are no jobs in current category
  if (filteredJobs.length === 0) {
    container.innerHTML = `
      <div class="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300 w-full col-span-full">
        <h2 class="text-2xl font-bold text-gray-400">No Jobs Available</h2>
        <p class="text-gray-400">Please switch categories or update job status.</p>
      </div>
    `;
  } else {
    // Generate card for each job
    filteredJobs.forEach(function (job) {
      const div = document.createElement("div");

      div.className =
        "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-4 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition-shadow cursor-pointer";

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
  }

  // Update the total job count display
  document.getElementById("total-jobs-count").innerText = jobs.length;
}

// Initial call to display data
displayJobs();

// Function to handle status updates for interview/rejected
function updateJobStatus(id, newStatus) {
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      if (jobs[i].status === newStatus) {
        jobs[i].status = "all"; // Toggle back to default
      } else {
        jobs[i].status = newStatus; // Set to new status
      }
    }
  }
  displayJobs();
  refreshDashboard();
}

// Function to update the dashboard count numbers
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

// Function to remove a specific job from list
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
}

// Function for tab navigation
function changeTab(tabName) {
  currentTab = tabName;
  displayJobs();
}

// Make sure counts are right on first load
refreshDashboard();
