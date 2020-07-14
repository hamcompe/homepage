import Header from '../components/header'

function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="h-full">
        <div className="container mx-auto">Welcome to Next.js!</div>
      </main>
    </>
  )
}

export default HomePage
