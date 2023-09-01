export default function Layout({ children }:any) {
  return (
    <>
      <div>layout</div>
      {/* children 은 하위 컴포넌트를 의미한다. 즉 보여지는 위치를 지정할 수 있음 */}
      <div>{children}</div>

    </>
  );
}