import "./App.css";
import { auth } from "../src/components/googleSignIn/config";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/googleSignIn/SignIn";
import Home from "./components/Home";
import { signOut } from "firebase/auth";
import Profile from "./components/Molucules/Profile";
import { useEffect, useState } from "react";
function App() {
  const [currentUser, setCurrentUSer] = useState("");

  const [user] = useAuthState(auth);
  // useEffect(() => {
  //   user && setCurrentUSer(user);
  //   console.log(currentUser);
  // }, []);
  const logout = () => {
    signOut(auth);
  };

  return (
    <>
      <header className="App-header">
        {user ? (
          <div>
            <h1>Current User: {user.displayName}</h1>
            <button onClick={logout}>Log out</button>
          </div>
        ) : (
          <SignIn />
        )}
      </header>
      <section>{user && <Home />}</section>
    </>
  );
}
export default App;
