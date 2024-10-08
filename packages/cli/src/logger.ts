import pc from "picocolors";

export function format(
  message: string,
  messageType: "error" | "success" | "info" | "none",
  scope?: string
) {
  let prefix = {
    error: " " + pc.red("error"),
    success: " " + pc.green("success"),
    info: " " + pc.cyan("info"),
    none: "",
  }[messageType];
  let fullPrefix = "🎁" + prefix + (scope ? " " + pc.cyan(scope) : "");
  return String(message)
    .split("\n")
    .map((line) => {
      if (!line.trim()) {
        return fullPrefix;
      }
      return `${fullPrefix} ${line}`;
    })
    .join("\n");
}
export function error(message: string, scope?: string) {
  console.error(format(message, "error", scope));
}

export function success(message: string, scope?: string) {
  console.log(format(message, "success", scope));
}

export function info(message: string, scope?: string) {
  console.log(format(message, "info", scope));
}

export function log(message: string) {
  console.log(format(message, "none"));
}
