import { useContext } from "react";
import { PostContext } from "../PostNumberProvider";

interface PostDataType {
  postNumber: number;
  handleClick: () => void;
}

function Post() {
  const postData: PostDataType = useContext(PostContext);

  return <div>This is Post number {postData.postNumber}!!</div>;
}

export default Post;
