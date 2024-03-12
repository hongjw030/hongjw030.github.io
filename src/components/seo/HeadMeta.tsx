import Head from "next/head";

interface HeadMetaProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export default function HeadMeta({
  title,
  description,
  url,
  image,
}: HeadMetaProps) {
  return (
    <Head>
      <title>{title || "블로그 포스팅"}</title>
      <meta
        name="description"
        content={description || "프론트엔드 기술 블로그입니다."}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "블로그 포스팅"} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={
          url
            ? `https://hongjw030-github-io.vercel.app/${url}`
            : "https://hongjw030-github-io.vercel.app"
        }
      />
      <meta property="og:image" content={image || "/profile.jpg"} />
      <meta property="og:article:author" content="프론트엔드" />
    </Head>
  );
}
