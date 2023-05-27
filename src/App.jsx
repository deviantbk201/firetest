import "./App.css";
import { auth } from "../src/components/googleSignIn/config";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/googleSignIn/SignIn";
import Home from "./components/Home";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import BasicAppBar from "./components/Molucules/BasicAppBar";
import { Avatar, Typography } from "@mui/material";
import { Button } from "@mui/material";
function App() {
  // const [currentUser, setCurrentUSer] = useState(
  // );

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
          <BasicAppBar>
            <Avatar src={user.photoURL} alt="pfp" width={10} height={10} />

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {user.displayName}
            </Typography>
            <Button color="inherit" onClick={logout}>
              Log out
            </Button>
          </BasicAppBar>
        ) : (
          <SignIn />
        )}
      </header>
      <section>{user && <Home />}</section>
    </>
  );
}
export default App;
