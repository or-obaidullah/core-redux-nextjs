import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Redux</title>
      </Head>
      <main>
          <h1>Welcome To redux</h1>
          <button><a href="/redux-counter">Counter</a></button>
      </main>
    </>
  )
}
