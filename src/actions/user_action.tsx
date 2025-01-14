export const joinWaitingList = async(email: string) => {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/join-waiting-list?email=${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      return await response.json();
  } catch (error) {
    return error
  }
};