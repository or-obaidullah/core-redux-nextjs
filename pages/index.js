import Head from 'next/head'
import Link from 'next/link'



export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Redux</title>
      </Head>
      <main>
          <h1>Welcome To redux</h1>
          <button><Link href="/redux-counter">Counter</Link></button>
          <button><Link href="/todos-fetch-data">Fetch Data</Link></button>
      </main>
    </>
  )
}
