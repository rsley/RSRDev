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
import chalk from "chalk";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

//-- Environment --\
const __dirname = dirname(fileURLToPath(import.meta.url));

//-- Constants --\
const srcDir = join(__dirname, "../app");
const commentCheck = `/*
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
 */`;

//-- Variables --\
let unverifiedFiles = [];

//-- Verification --\
const verifyBuild = async (src) => {
  try {
    const items = await fs.readdir(src);

    for (const item of items) {
      const srcPath = join(src, item);
      const stats = await fs.stat(srcPath);

      if (stats.isDirectory()) {
        await verifyBuild(srcPath);
      } else if (stats.isFile()) {
        const content = await fs.readFile(srcPath, "utf8");
        if (!content.trim().startsWith(commentCheck.trim())) {
          unverifiedFiles.push(srcPath);
        }
      }
    }
  } catch (e) {
    console.error(
      chalk.red(`Error occured during verification: ${e.message}`),
      e
    );
  }
};

//-- Process Verification --\
const processVerification = async () => {
  try {
    await verifyBuild(srcDir);

    if (unverifiedFiles.length > 0) {
      console.log(
        chalk.red(`Found ${unverifiedFiles.length} unverified files`)
      );
      unverifiedFiles.forEach((file) => {
        console.log(chalk.red(`- ${file}`));
      });
    } else {
      console.log(chalk.green("All files verified"));
    }
  } catch (e) {
    console.error(
      chalk.red(`Error occured during verification: ${e.message}`),
      e
    );
  }
};

//-- Exports --\
export { verifyBuild, processVerification };
