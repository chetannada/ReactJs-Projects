export const statusTooltips = {
  pending: "This project is awaiting approval",
  approved: "This project has been approved",
  rejected: "This project was rejected by an admin",
};

export const fieldLabels = {
  title: "title",
  techstack: "tech stack",
  contributedBy: "contributed by",
};

export const projectFormDefaultValues = {
  projectTitle: "",
  projectDescription: "",
  githubCodeUrl: "",
  liveUrl: "",
  techStack: ["React.js"],
  status: "approved",
  rejectionReason: "",
  restoredReason: "",
};
