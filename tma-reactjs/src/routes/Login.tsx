import Container from "../components/Container";
import Header from "../components/Header";
import Section from "../components/Section";

import firebase from "firebase/compat/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/compat/auth";

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function Login() {
  return (
    <>
      <Header />
      <Container>
        <Section>
          <h2>Login Page!!</h2>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Section>
      </Container>
    </>
  );
}

export default Login;
