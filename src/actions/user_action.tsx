import { getCookie } from "./cookie_actions";

export const joinWaitingList = async(email: string) => {

  try {
    console.log(process.env.NEXT_PUBLIC_API_BASE_URL, "here is the url");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/join-waitlist-campusbid?email=${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    
      return await response.json();
  } catch (error) {
    return error
  }
};

export const getUser = async () => {
  const token = await getCookie("token");
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${token}`,
        },
        credentials: "include",
        // cache: "force-cache",
        next: {
          tags: ["userData"],
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error in fetching logged in user: ${error.message}`);
    } else {
      throw new Error(
        "An unknown error occurred while fetching logged in user"
      );
    }
  }
};