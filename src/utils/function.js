export const capitalizeWord = word => {
  if (typeof word !== "string") return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const projectFormTitle = (activeTab, modalMode) => {
  const projectName = capitalizeWord(activeTab);

  if (modalMode === "edit") return `✏️ Update ${projectName} Project`;
  if (modalMode === "review") return `🔍 Review ${projectName} Project`;
  if (modalMode === "restore") return `♻️ Restore ${projectName} Project`;
  return `🚀 Add a New ${projectName} Project`;
};
