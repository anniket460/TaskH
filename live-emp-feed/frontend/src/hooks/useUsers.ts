/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export const useUsers = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:4000/stream");

    eventSource.onmessage = (event) => {
      const newUser = JSON.parse(event.data);

      queryClient.setQueryData(["users"], (old: any[] = []) => {
        return [...old, newUser];
      });
    };

    eventSource.onerror = () => {
      console.log("Stream error");
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [queryClient]);
};
