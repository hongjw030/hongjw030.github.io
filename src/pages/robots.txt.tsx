const Robots = () => {};

export async function getServerSideProps({ res }: any) {
  let robotsString = `      
  User-agent: *
  Allow: / Sitemap:
  https://hongjw030-github-io.vercel.app/sitemap.xml`;

  res.setHeader("Content-Type", "text/plain");
  res.write(robotsString);
  res.end();

  return {
    props: {},
  };
}

export default Robots;
