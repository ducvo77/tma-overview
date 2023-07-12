interface SectionNumberProviderProps {
  children: React.ReactNode;
}

function Section({ children }: SectionNumberProviderProps) {
  return <section>{children}</section>;
}

export default Section;
