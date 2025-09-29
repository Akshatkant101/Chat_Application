import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = ({ name, image }: { name: string; image?: string }) => {
  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback className="uppercase">{name[0]}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
