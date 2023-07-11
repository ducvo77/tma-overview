import { createContext, useCallback, useState } from "react";

export const PostContext = createContext();

function PostNumberProvider({ children }) {
  const [postNumber, setPostNumber] = useState(0);
  const handleClick = useCallback(() => {
    setPostNumber(postNumber + 1);
  }, [postNumber]);

  const postData = { postNumber, handleClick };
  return (
    <PostContext.Provider value={postData}>{children}</PostContext.Provider>
  );
}

export default PostNumberProvider;
