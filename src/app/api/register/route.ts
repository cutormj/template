// import { NextResponse } from "next/server";
// import { createUser } from "@/queries/users";
// import bcrypt from "bcryptjs";
// import { dbConnect } from "@/lib/mongo";

// export const POST = async (request: Request) => {
//   const { name, email, password } = await request.json();

//   console.log(name, email, password);

//   // Create a DB Connection
//   await dbConnect();
//   // Encrypt the password
//   const hashedPassword = await bcrypt.hash(password, 5);
//   // Form a DB payload
//   const newUser = {
//     name,
//     password: hashedPassword,
//     email,
//   };
//   // Update the DB
//   try {
//     await createUser(newUser);
//   } catch (err) {
//     if (err instanceof Error) {
//       return new NextResponse(err.message, {
//         status: 500,
//       });
//     } else {
//       return new NextResponse("An unknown error occurred", {
//         status: 500,
//       });
//     }
//   }

//   return new NextResponse("User has been created", {
//     status: 201,
//   });
// };
