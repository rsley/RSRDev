/*
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Rafael Soley Robles                                                     │
  │ v1.0.0                                                                  │
  │                                                                         │
  │ Limited Source Software, see LICENSE.                                   │
  │ © All rights reserved.                                                  │
  │                                                                         │
  │ The above copyright notice and this permission shall be included in all │
  │ copies or substantial portions of the Software.                         │
  └─────────────────────────────────────────────────────────────────────────┘
 */

//-- Imports --\
import fs from "fs-extra";
import path from "path";
import ora from "ora"; // Loading spinner
import chalk from "chalk"; // Colored output
import { fileURLToPath } from "url";
import { processVerification } from "./check.js";

//-- Constants --\
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, "../app");
const comment = `/*
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Rafael Soley Robles                                                     │
  │ v1.0.0                                                                  │
  │                                                                         │
  │ Limited Source Software, see LICENSE.                                   │
  │ © All rights reserved.                                                  │
  │                                                                         │
  │ The above copyright notice and this permission shall be included in all │
  │ copies or substantial portions of the Software.                         │
  └─────────────────────────────────────────────────────────────────────────┘
 */\n\n`;
const commentCheck = comment.split("\n")[0]; // First line of the comment to check

//-- Variables --\
let fileCount = 0;
let totalFiles = 0;
let dirCount = 0;

//-- Function to add comment if it is missing --\
const addCommentIfMissing = async (src) => {
  try {
    const items = await fs.readdir(src);

    for (const item of items) {
      const srcPath = path.join(src, item);
      const stats = await fs.stat(srcPath);

      if (stats.isDirectory()) {
        dirCount++;
        await addCommentIfMissing(srcPath); // Recurse into subdirectory
      } else if (stats.isFile()) {
        const fileContent = await fs.readFile(srcPath, "utf-8");
        totalFiles++;

        // Check if the comment is present
        if (!fileContent.startsWith(commentCheck)) {
          // Prepend the comment and write the file
          const updatedContent = comment + fileContent;
          fileCount++;
          await fs.outputFile(srcPath, updatedContent);
        }
      }
    }
  } catch (err) {
    console.error(chalk.red("Error during the process:"), err);
  }
};

//-- Function to process files from srcDir --\
const processFiles = async () => {
  const spinner = ora("Adding disclaimer to files...").start();

  try {
    await addCommentIfMissing(srcDir);

    spinner.succeed(
      chalk.green(
        `Added disclaimer to ${fileCount} files, processed ${totalFiles} files in ${dirCount} directories`
      )
    );

    // Run verification after processing files
    await processVerification();
  } catch (err) {
    spinner.fail(chalk.red("Error during the process"));
    console.error(err);
  }
};

//-- Exports --\
export { addCommentIfMissing, processFiles };
