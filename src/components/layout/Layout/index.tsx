import { Footer } from "@/components/common/Footer";
import { Nav } from "@/components/common/Nav";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
