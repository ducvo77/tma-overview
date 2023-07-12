interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="mt-20 mx-20 min-h-[50rem]">{children}</div>;
}

export default Container;
