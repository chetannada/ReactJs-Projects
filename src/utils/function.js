export const capitalizeWord = word => {
  if (typeof word !== "string") return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const projectFormTitle = (activeTab, editItem, reviewItem, restoreItem) => {
  const projectName = capitalizeWord(activeTab);

  if (editItem) return `✏️ Update ${projectName} Project`;
  if (reviewItem) return `🔍 Review ${projectName} Project`;
  if (restoreItem) return `♻️ Restore ${projectName} Project`;
  return `🚀 Add a New ${projectName} Project`;
};
