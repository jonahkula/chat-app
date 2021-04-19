import Head from "next/head";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Chat App - Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Sidebar />
      <WelcomeContainer>
        <WelcomeMessage>Click on an existing chat or create a new one to start messaging!</WelcomeMessage>
      </WelcomeContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const WelcomeContainer = styled.div`
  background-color: #e5ded8;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const WelcomeMessage = styled.p`
  font-size: 24px;
`;
