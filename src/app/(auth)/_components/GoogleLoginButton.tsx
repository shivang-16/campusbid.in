"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { userData } from "@/redux/slices/userSlice";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

interface GoogleLoginButtonProps {
  className?: string;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ className = "" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      setIsLoading(true);
      try {
        const res = await axios.post(
          "/api/google/auth",
          {
            access_token: credentialResponse.access_token,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        dispatch(userData(res.data.user));

        toast.success("Login success");
        router.replace("/dashboard");
        // if (res.status === 201) {
        //   router.replace("/initial-info");
        // } else {
        //   router.replace("/");
        // }
      } catch (error: any) {
        console.error("Axios error:", error);
        toast.error("Google login failed!");
      } finally {
        setIsLoading(false);
      }
    },
    onError: (error: any) => {
      console.error("Google login error:", error);
      toast.error("Google login failed!");
    },
  });

  return (
    <Button
      type="button"
      variant={"outline"}
      onClick={() => login()}
      className={`w-full text-lg lg:text-lg text-gray-800 h-10 gap-2 ${className}`} // Include the passed className
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
        </>
      ) : (
        <>
        <FcGoogle className="mr-3 text-red-500" />
          Sign in with Google
        </>
      )}
    </Button>
  );
};

export default GoogleLoginButton;
