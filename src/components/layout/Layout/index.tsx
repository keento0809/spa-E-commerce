import Footer from "@/components/common/Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
