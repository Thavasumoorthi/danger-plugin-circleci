import circleci from 'danger-plugin-circleci'

import { danger, warn, fail, message } from "danger";



// Rule 1: Ensure PR has a proper title and description
if (danger.github.pr.title.length < 10) {
    fail("PR title should be at least 10 characters long.");
  }
  
  if (!danger.github.pr.body || danger.github.pr.body.length < 20) {
    fail("PR description should provide enough context (at least 20 characters).");
  }

// Rule 3: Fail if console.log() is used in JS/TS files
const newOrModifiedFiles = [
    ...danger.git.modified_files,
    ...danger.git.created_files,
  ];
  
  newOrModifiedFiles.forEach(async (file) => {
    if (file.endsWith(".js") || file.endsWith(".ts")) {
      const fileContent = await danger.github.utils.fileContents(file);
      if (fileContent.includes("console.log")) {
        fail(`Please remove console.log from ${file}`);
      }
    }
  });


  circleci()
