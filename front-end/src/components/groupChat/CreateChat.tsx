"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import {
  createChatSchema,
  createChatTypeSchema,
} from "@/validations/groupChatValidation";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { Chat_Group_URL } from "@/lib/apiEndPoints";

const CreateChat = ({ user }: { user: CustomUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createChatTypeSchema>({
    resolver: zodResolver(createChatSchema),
  });

  const onSubmit = async (payload: createChatTypeSchema) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        Chat_Group_URL,
        { ...payload, user_id: user.id },
        {
          headers: {
            Authorization: user.token,
          },
        },
      );
      if (data?.message) {
        setLoading(false);
        setOpen(false);
        toast.success(data?.message);
      }
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong!!");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Group</Button>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Create your new chat</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <Input
              placeholder="Enter your chat Title name"
              {...register("title")}
            />
            <span className="text-red-500 uppercase">
              {errors?.title?.message}
            </span>
            <div className="mt-4 relative w-full">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your chat Passcode"
                {...register("passcode")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              <span className="text-red-500 uppercase">
                {errors?.passcode?.message}
              </span>
            </div>
            <div className="mt-4">
              <Button className="w-full" disabled={loading}>
                {loading ? "Processing..." : "Submit"}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateChat;
