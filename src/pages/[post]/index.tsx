import { useRouter } from "next/router";
import React from "react";

export default function BlogPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <div>각 포스트..</div>
    </div>
  );
}
