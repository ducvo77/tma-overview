import { useContext } from "react";
import { PostContext } from "../PostNumberProvider";

function Post() {
  const postData = useContext(PostContext);

  return <div>This is Post number {postData.postNumber}!!</div>;
}

export default Post;
