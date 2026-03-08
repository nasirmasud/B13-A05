let allIssues = [];
const issueContainer = document.getElementById("issue-container");

async function loadAllIssues() {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  allIssues = data.data;

  displayIssues(allIssues);
}

function displayIssues(issues) {
  issues.forEach((issue) => {
    const isOpen = issue.status === "open";

    const statusImg = isOpen
      ? "./assets/Open-Status.png"
      : "./assets/Closed-Status.png";

    let priorityStyle = "";
    if (issue.priority === "high") priorityStyle = "bg-red-200 text-red-600";
    else if (issue.priority === "medium") {
      priorityStyle = "bg-yellow-200 text-yellow-600";
    } else {
      priorityStyle = "bg-slate-200 text-slate-600";
    }
    const labelsHtml = issue.labels
      .map((label) => {
        const text = label.toUpperCase().trim();
        let style = "bg-gray-50 text-gray-500 border-gray-200";
        let icon = "fa-tags";

        if (text === "BUG") {
          style = "bg-red-50 text-red-500 border-red-200";
          icon = "fa-bug";
        } else if (text === "HELP WANTED") {
          style = "bg-orange-50 text-orange-600 border-orange-200";
          icon = "fa-life-ring";
        } else if (text === "ENHANCEMENT") {
          style = "bg-emerald-50 text-emerald-600 border-emerald-200";
          icon = "fa-wand-magic-sparkles";
        }

        return `<span class="badge border rounded-full px-3 py-3 text-[10px] font-bold flex items-center gap-1 ${style}">
            <i class="fa-solid ${icon}"></i>${text}
          </span>`;
      })
      .join("");

    const card = document.createElement("div");
    card.className = `card bg-white border-t-4 ${isOpen ? "border-t-emerald-500" : "border-t-indigo-500"} shadow-sm rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer`;

    card.innerHTML = `
      <div class="p-5">
        <div class="flex justify-between items-start mb-3">
          <span class="bg-emerald-50 p-1.5 rounded-full text-xs">
            <img src='${statusImg}' alt='${issue.status}' />
          </span>
          <span class="badge ${priorityStyle} text-[10px] font-bold py-1 border-none">
            ${issue.priority.toUpperCase()}
          </span>
        </div>
        <h3 class="font-bold text-gray-800 mb-2 leading-snug">${issue.title}</h3>
        <p class="text-xs text-gray-500 line-clamp-2 mb-4">${issue.description}</p>
        <div class="flex flex-wrap gap-1 mb-6">${labelsHtml}</div>
        <div class="border-t pt-4 text-[11px] text-gray-400">
          <p>#${issue.id} by ${issue.author}</p>
          <p>${new Date(issue.createdAt).toLocaleDateString("en-US")}</p>
        </div>
      </div>`;

    issueContainer.appendChild(card);
  });
}

loadAllIssues();
