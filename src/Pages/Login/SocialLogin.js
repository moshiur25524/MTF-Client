import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [token] = useToken(user);

  if (token) {
    navigate(from, { replace: true });
  }

  if (user) {
    console.log(user);
  }

  return (
    <div>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">OR</div>
        <div className="grid h-20 card w-full rounded-full place-items-center">
          <button onClick={() => signInWithGoogle()} className="btn btn-block">
            <FcGoogle /> &nbsp; Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
