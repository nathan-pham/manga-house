import Root from "../components/Root"

export default function Login() {
  return (
    <Root>
      <main className="flex justify-center items-center min-h-screen bg-red-100">
        <div className="rounded-lg px-6 py-6 w-80 bg-white">
          <h1 className="text-lg">Sign In</h1>
          <form action="/api/login" method="GET" className="flex flex-col">

          </form>
        </div>
      </main>
    </Root>
  )
}