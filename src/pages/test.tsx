import React from "react";

export default function Test() {
  const mdText = `
    # Our Project

    Hello, **Markdown!**.

    <br>
    위에 br 태그를 썼음
    <br />
    위에 br/ 태그를 썼음

    띄어쓰기가 되는가?
`;
  return (
    <div>
      test
      <>테스,트 용으로 마크다운을 써봄.</>
    </div>
  );
}
