interface Props {
  children: React.ReactNode;
  variant?: "lg" | "full";
}

const Container = ({ children, variant = "lg" }: Props) => {
  const maxWidthClass = variant === "full" ? "w-full" : "max-w-[1200px]";
  
  return (
    <section className={`${maxWidthClass} mx-auto px-3`}>
      {children}
    </section>
  );
};

export default Container;