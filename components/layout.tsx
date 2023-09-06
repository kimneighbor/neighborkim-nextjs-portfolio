import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({children}: LayoutProps) {
    return (
        <div className="bg-primary">
            <Header/>
            <div>{children}</div>
            {/* children 은 하위 컴포넌트를 의미한다. 즉 보여지는 위치를 지정할 수 있음 */}
            <Footer/>
        </div>
    );
}
