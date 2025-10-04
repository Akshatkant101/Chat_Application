import { Chat_Group_URL } from "@/lib/apiEndPoints";

export async function fetchChatGroups(token: string) {
  const res = await fetch(Chat_Group_URL, {
    headers: {
      Authorization: token,
    },
    next: {
      revalidate: 60 * 60,
      tags: ["dashboard"],
    },
  });
  if (!res.ok) {
    throw new Error("failed to fetch data!!");
  }
  const response = await res.json();
  if (response?.data) {
    return response?.data;
  }
  return [];
}
