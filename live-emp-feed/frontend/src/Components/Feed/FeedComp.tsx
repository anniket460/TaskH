/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useUsers } from "../../hooks/useUsers";
import { useQuery } from "@tanstack/react-query";

const FeedComp = () => {
  useUsers();

  const { data = [] } = useQuery({
    queryKey: ["users"],
    initialData: [],
  });

  return (
    <div className="bg-gray-800 flex flex-col">
      {data.map((user: any) => (
        <div
          key={user.id}
          className="flex flex-col items-center my-4 mx-auto bg-white w-[300px]"
        >
          <strong>
            {user.firstName} {user.lastName}
          </strong>

          <img
            className="w-[200px]"
            src={user.image}
            alt={`${user.firstName}'s avatar`}
          />

          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedComp;
