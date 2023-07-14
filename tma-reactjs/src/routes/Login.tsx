import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Container from "../components/Container";
import Header from "../components/Header";
import Section from "../components/Section";
import { auth, githubProvider, googleProvider } from "../config/firebase";
import { Button, Input } from "@mui/material";
import { useEffect, useState } from "react";

function Login() {
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (auth?.currentUser?.email) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  useEffect(() => {
    if (isLogged) {
      console.log("Đang đăng nhập");
    } else {
      console.log("Chưa đăng nhập");
    }
  }, [isLogged]);

  console.log(auth?.currentUser?.email);

  return (
    <>
      <Header />
      <Container>
        <Section>
          <h2>Login Page!!</h2>
          <div className="mb-20">
            <Input
              type="text"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPasword(e.target.value)}
            />
            <Button onClick={loginWithEmail}>Submit</Button>
          </div>
          <Button onClick={signInWithGoogle} variant="contained">
            Login with Google
          </Button>
          <Button onClick={signInWithGithub} variant="contained">
            Login with Github
          </Button>
          <Button onClick={logOut} variant="contained">
            Logout
          </Button>
        </Section>
      </Container>
    </>
  );
}

export default Login;
