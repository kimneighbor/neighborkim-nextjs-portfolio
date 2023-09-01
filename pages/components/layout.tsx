import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};


export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div>layout</div>
      {/* children 은 하위 컴포넌트를 의미한다. 즉 보여지는 위치를 지정할 수 있음 */}
      <div>{children}</div>
      <Footer />
    </>
  );
}