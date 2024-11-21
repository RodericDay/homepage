const SocialLink = ({ label, url }:{ label: string, url: string }) => (
  <a
    href={url}
    className="text-blue-500 mx-2 hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >{label}</a>
)

const Avatar = ({ url }:{ url: string }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img
      src={url}
      alt="Avatar"
      className="rounded-full w-36 h-36 mx-auto"
    />
  </a>
)

const App = () => (
  <div className="bg-blue-300">
   <div className="top-0 text-center p-6 h-dvh max-w-xl mx-auto shadow-lg bg-white">
      <Avatar url="/me.jpeg" />
      <h1 className="text-3xl font-semibold mt-4">Harold Day</h1>
      <p className="text-lg text-gray-600 mt-2">
        I'm a software developer and an occasional writer.
      </p>
      <div className="mt-6">
        <SocialLink label="GitHub" url="https://github.com/RodericDay" />
        <SocialLink label="Resume" url="/resume.pdf" />
        <SocialLink label="LinkedIn" url="https://www.linkedin.com/in/haroldday/" />
      </div>
    </div>
  </div>
)

export default App
