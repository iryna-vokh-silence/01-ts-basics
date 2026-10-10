type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else {
    console.log("Error!");
  }
}

logStatus("loading");
logStatus("success");
logStatus("error");
// logStatus("done"); // TypeScript error: "done" is not a Status
