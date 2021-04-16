import Head from "next/head";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        {/* <Logo src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png" /> */}
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div``;

const LoginContainer = styled.div``;

const Logo = styled.img``;
