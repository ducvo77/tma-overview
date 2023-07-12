import { createContext, useCallback, useState } from "react";

export const PostContext = createContext(null);

interface PostNumberProviderProps {
  children: React.ReactNode;
}

interface PostData {
  postNumber: number;
  handleClick: () => void;
}

function PostNumberProvider({ children }: PostNumberProviderProps) {
  const [postNumber, setPostNumber] = useState(0);
  const handleClick = useCallback(() => {
    setPostNumber(postNumber + 1);
  }, [postNumber]);

  const postData: PostData = { postNumber, handleClick };
  return (
    <PostContext.Provider value={postData}>{children}</PostContext.Provider>
  );
}

export default PostNumberProvider;
