function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello from TypeScript!");
    }, 1000);
  });
}

getMessage().then((message: string) => {
  console.log(message.toUpperCase());
});
