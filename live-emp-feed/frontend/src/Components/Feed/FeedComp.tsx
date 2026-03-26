/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useUsers } from "../../hooks/useUsers";
import "./FeedComp.css";
import { useQuery } from "@tanstack/react-query";

const FeedComp = () => {
  useUsers();

  const { data = [] } = useQuery({
    queryKey: ["users"],
    initialData: [],
  });

  return (
    <div className="feed-comp">
      {data.map((user: any) => (
        <div key={user.id} className="emp-card">
          <strong>
            {user.firstName} {user.lastName}
          </strong>
          <img
            className="emp-img"
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
