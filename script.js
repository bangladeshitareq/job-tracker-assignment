let currentTab = "all";
let jobs = [
  {
    id: 1,
    name: "Mobile First Corp",
    role: "React Native Developer",
    city: "Remote",
    type: "Full-time",
    pay: "$130,000 - $175,000",
    status: "all",
    desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
  },
  {
    id: 2,
    name: "WebFlow Agency",
    role: "Web Designer & Developer",
    city: "Los Angeles, CA",
    type: "Part-time",
    pay: "$80,000 - $120,000",
    status: "all",
    desc: "Create stunning web experiences for high-profile clients with modern design trends.",
  },
  {
    id: 3,
    name: "Tech Solutions",
    role: "Data Visualization Specialist",
    city: "Dhaka",
    type: "Full-time",
    pay: "$125,000 - $165,000",
    status: "all",
    desc: "Transform complex data into compelling visualizations using D3.js and React.",
  },
  {
    id: 4,
    name: "Innovate Hub",
    role: "Backend Developer",
    city: "Seattle, WA",
    type: "Full-time",
    pay: "$140,000 - $190,000",
    status: "all",
    desc: "Design and maintain scalable backend systems using Python and cloud infrastructure.",
  },
  {
    id: 5,
    name: "Soft Systems",
    role: "QA Engineer",
    city: "Sylhet",
    type: "Full-Time",
    pay: "$50,000 - $75,000",
    status: "all",
    desc: "Ensuring software quality through rigorous automated and manual testing scripts.",
  },
  {
    id: 6,
    name: "Creative Minds",
    role: "UI/UX Designer",
    city: "Remote",
    type: "Contract",
    pay: "$40k - $60k",
    status: "all",
    desc: "Developing user-centric designs and wireframes for mobile and web platforms.",
  },
  {
    id: 7,
    name: "App Pro",
    role: "App Developer",
    city: "Dhaka",
    type: "Full-Time",
    pay: "$45,000 - $65,000",
    status: "all",
    desc: "Focusing on native Android and iOS development with high performance.",
  },
  {
    id: 8,
    name: "Data Mine",
    role: "Data Analyst",
    city: "Dhaka",
    type: "Remote",
    pay: "$55,000 - $80,000",
    status: "all",
    desc: "Analyzing large datasets to provide actionable business insights for stakeholders.",
  },
];

function displayJobs() {
  const container = document.getElementById("job-container");
  container.innerHTML = "";

  document
    .querySelectorAll(".btn")
    .forEach((btn) => btn.classList.remove("active-tab"));
  document.getElementById(`btn-${currentTab}`).classList.add("active-tab");

  const filteredJobs = jobs.filter(
    (job) => currentTab === "all" || job.status === currentTab,
  );
  document.getElementById("filter-info").innerText =
    `${filteredJobs.length} of ${jobs.length} jobs`;

  // Empty State logic with ICON
  if (filteredJobs.length === 0) {
    container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20">
                <div class="mb-6">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-white mb-2">No jobs available</h2>
                <p class="text-gray-400 text-lg">Check back soon for new job opportunities</p>
            </div>`;
    return;
  }

  filteredJobs.forEach((job) => {
    const div = document.createElement("div");
    div.className =
      "bg-[#1f2937] p-8 rounded-3xl border border-gray-700 relative job-card";

    let badgeClass = "bg-gray-700 text-gray-300";
    let badgeText = "NOT APPLIED";

    if (job.status === "interview") {
      badgeClass = "bg-green-900/30 text-green-400 border border-green-800";
      badgeText = "INTERVIEW";
    } else if (job.status === "rejected") {
      badgeClass = "bg-red-900/30 text-red-400 border border-red-800";
      badgeText = "REJECTED";
    }

    div.innerHTML = `
            <button onclick="removeJob(${job.id})" class="absolute top-6 right-8 text-gray-500 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
            <div>
                <span class="inline-block px-3 py-1 rounded text-[10px] font-black mb-4 ${badgeClass}">${badgeText}</span>
                <h3 class="text-2xl font-bold">${job.name}</h3>
                <p class="text-lg text-gray-400 mb-1">${job.role}</p>
                <p class="text-gray-500 text-sm mb-6">${job.city} • ${job.type} • ${job.pay}</p>
                <p class="text-gray-400 text-sm border-t border-gray-700 pt-4 mb-6">${job.desc}</p>
                <div class="flex gap-2">
                    <button onclick="updateJobStatus(${job.id}, 'interview')" class="btn btn-sm btn-outline btn-success px-6">Interview</button>
                    <button onclick="updateJobStatus(${job.id}, 'rejected')" class="btn btn-sm btn-outline btn-error px-6">Rejected</button>
                </div>
            </div>`;
    container.appendChild(div);
  });
}

function updateJobStatus(id, newStatus) {
  jobs = jobs.map((j) =>
    j.id === id
      ? { ...j, status: j.status === newStatus ? "all" : newStatus }
      : j,
  );
  displayJobs();
  refreshDashboard();
}

function removeJob(id) {
  jobs = jobs.filter((j) => j.id !== id);
  displayJobs();
  refreshDashboard();
}

function changeTab(tabName) {
  currentTab = tabName;
  displayJobs();
}

function refreshDashboard() {
  document.getElementById("total-jobs-count").innerText = jobs.length;
  document.getElementById("interview-jobs-count").innerText = jobs.filter(
    (j) => j.status === "interview",
  ).length;
  document.getElementById("rejected-jobs-count").innerText = jobs.filter(
    (j) => j.status === "rejected",
  ).length;
}

displayJobs();
refreshDashboard();
