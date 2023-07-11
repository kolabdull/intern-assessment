import { User } from "./users";

export function parse(json: string): User[] {
  const parsedUsers = JSON.parse(json);
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
        const newUser: User = {
          fullname: `${user.firstName} ${user.lastName}`,
          email_address: user.email,
          phone_number: user.phone,
          city: user.address.city,
        };

        usersArray.push(newUser);
      }
    });
  }

  return usersArray;
}
