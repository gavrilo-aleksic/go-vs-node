const { Colors } = require("./colors");

const colorText = (text, color = Colors.white) => `\x1b[${color}${text}\x1b[0m`;

const currentTimestamp = `${colorText(new Date().toISOString(), Colors.cyan)}`;

const logRequest = ({ router, url }) => {
  if (!router) {
    return console.log(
      `[${currentTimestamp}] URL: ${colorText(url, Colors.magenta)} ${colorText(
        "Not Found",
        Colors.red
      )}`
    );
  }
  console.log(
    `[${currentTimestamp}] Route: ${colorText(
      router?.path,
      router?.path !== undefined ? Colors.blue : Colors.red
    )} Method: ${colorText(
      router?.method,
      router?.method ? Colors.yellow : Colors.red
    )}, URL: ${colorText(url, Colors.magenta)}`
  );
};

module.exports = {
  logRequest,
};
