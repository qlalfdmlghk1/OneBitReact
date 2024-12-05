import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// const memoizedHeader = memo(Header); // 최적화가 이루어진 헤더

export default memo(Header); // 헤더의 불필요한 리렌더링을 방지함
