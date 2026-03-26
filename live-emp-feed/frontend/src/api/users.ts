export type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  image: string;
  company: {
    name: string;
    title: string;
  };
};

export type UsersResponse = {
  users: User[];
};

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://dummyjson.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: UsersResponse = await res.json();

  return data.users;
};
