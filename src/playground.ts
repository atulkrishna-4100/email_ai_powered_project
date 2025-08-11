import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "test@gmail.com",
    firstName: "Atul",
    lastName: "Krishna",
  },
});
console.log("Done");
