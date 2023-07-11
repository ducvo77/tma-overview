import { useContext } from "react";
import PostList from "../components/Blog/PostList";
import Container from "../components/Container";
import Header from "../components/Header";
import { PostContext } from "../components/PostNumberProvider";
import Section from "../components/Section";
import { Button } from "@mui/material";

function Blog() {
  const postData = useContext(PostContext);
  return (
    <>
      <Header />
      <Container>
        <Section>
          <h2>Blog Page!!</h2>
          <PostList />
          <Button variant="contained" onClick={postData.handleClick}>
            Click Me!!
          </Button>
        </Section>
      </Container>
    </>
  );
}

export default Blog;
