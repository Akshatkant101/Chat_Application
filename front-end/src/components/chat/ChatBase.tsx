"use client";
import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { Button } from "../ui/button";

const ChatBase = () => {
  let socket = useMemo(() => {
    const socket = getSocket();
    socket.connect();
    return socket;
  }, []);

  useEffect(() => {
    socket.on("message", (data: any) => {
      console.log("the socketmessage is", data);
    });

    return () => {
      socket.close();
    };
  }, []);

  const handleClick = () => {
    socket.emit("message",{
        name:"Akshat",
        id:uuidV4()
    });
  };

  return <div>
    <Button onClick={handleClick}>Send Message</Button>
  </div>;
};

export default ChatBase;
