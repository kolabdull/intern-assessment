import { User } from "./users";
import userList from "../users.json";

export function parse(json: string): User[] {
  const stringifiedUsers = JSON.stringify(userList);
  const parsedUsers = JSON.parse(stringifiedUsers.toString());
  let usersArray: User[] = [];
  if (Array.isArray(parsedUsers)) {
    parsedUsers.forEach((user) => {
      if (
        user.firstName &&
        user.lastName &&
        user.email &&
        user.phone &&
        user.address.city
      ) {
        let newUser: User = {
          fullname: `${user.firstName} ${user.lastName}`,
          email_address: user.email,
          phone_number: user.phone,
          city: user.address.city,
        };
        console.log(newUser);

        usersArray.push(newUser);
      }
    });
    parsedUsers.filter;
  }
  console.log(usersArray.length);

  return usersArray;

  // console.log(userss);
  // Array.isArray(userss);
  console.log(Array.isArray(parsedUsers));

  // console.log(userList);
  return [];
}
