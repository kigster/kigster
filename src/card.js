import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

import chalk from "chalk";
import boxen from "boxen";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const boxOptions = {
  title: "• Konstantin Gredeskoul •",
  titleAlignment: "center",
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

const handle = "kigster";

const data = [
  chalk.white.bold("          Work: ") +
    chalk.gray("Principal Engineer at HealthSherpa"),
  chalk.white.bold("     Home page: ") + chalk.blue("https://kig.re"),
  "",
  chalk.white.bold("       Twitter: ") +
    chalk.grey("https://twitter.com/") +
    chalk.cyan("kig"),
  chalk.white.bold("      Mastodon: ") +
    chalk.grey("https://mastodon.social/") +
    chalk.magenta(`@${handle}`),
  chalk.white.bold("      LinkedIn: ") +
    chalk.grey("https://www.linkedin.com/in/") +
    chalk.blue(handle),
  "",
  chalk.white.bold("           DEV: ") +
    chalk.grey("https://dev.to/") +
    chalk.white(handle),
  chalk.white.bold("        Medium: ") +
    chalk.grey("https://medium.com/") +
    chalk.white(`@kig`),
  "",
  chalk.white.bold("        GitHub: ") +
    chalk.grey("https://github.com/") +
    chalk.white(handle),
  chalk.white.bold("      RubyGems: ") +
    chalk.grey("https://rubygems.org/profiles/") +
    chalk.red(handle),
  chalk.white.bold("Stack Overflow: ") +
    chalk.grey("https://stackoverflow.com/users/542553/") +
    chalk.yellow(handle),
];

const output = boxen(data.join("\n"), boxOptions);

writeFileSync(join(__dirname, "..", "dist", "output.txt"), output);
