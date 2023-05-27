import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
function SignIn() {
  const handleClick = function () {
    signInWithPopup(auth, provider);
    console.log(auth, provider);
  };
  return (
    <>
      <button onClick={handleClick}> Sign In with google</button>
    </>
  );
}
export default SignIn;
