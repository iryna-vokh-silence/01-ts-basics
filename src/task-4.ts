function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Name: ${name}, Age: ${age}`);
  if (email) {
    console.log(`Email: ${email}`);
  }
}

printUserInfo("Iryna", 25);
printUserInfo("Taras", 26, "taras@example.com");
