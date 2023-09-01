export default function Layout({ children }:any) {
  return (
    <>
      <div>헤더 영역</div>
      <div>{children}</div>
      <div>푸터 영역</div>
    </>
  );
}