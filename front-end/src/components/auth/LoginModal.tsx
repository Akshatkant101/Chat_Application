import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";

const LoginModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Getting Start</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to ChatNest</DialogTitle>
          <DialogDescription>
            ChatNest is a modern, lightweight web-based chat application
            designed to bring people together in one secure and seamless
            platform. Whether you’re connecting with friends, collaborating with
            a team, or building a community, ChatNest provides a clean
            interface, real-time messaging, and smooth performance across
            devices.
          </DialogDescription>
        </DialogHeader>
        <Button variant="outline">
          <Image
            src="/images/google.png"
            alt="google"
            width={25}
            height={25}
            className="mr-4 "
          />
        </Button>
        Continue With Google
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
