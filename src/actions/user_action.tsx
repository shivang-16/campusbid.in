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