export default function Home(props: any) {
  return (
    <div className="text-3xl font-bold">
      <h1>지금 우리의 리얼리-사이클 #BTRC</h1>
    </div>
  );
}

export async function getStaticProps() {
  // fetch data from an API

  return {
    props: {},
  };
}
