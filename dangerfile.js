import circleci from 'danger-plugin-circleci'

import {warn,fail,} from 'danger'


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
