function App() {
  return (
    <div className="font-redditMono p-8 text-sm font-semibold">
      <h1 className="text-3xl">hi, i'm isabella 👋</h1>
      <p className="pt-3 font-medium">
        i'm currently building an awesome company with awesome people.
      </p>
      <p className="pt-1">
        <a
          href="https://x.com/davidwrossiter"
          className="underline text-blue-700"
          target="_blank"
        >
          twitter
        </a>{" "}
        /{" "}
        <a
          href="https://www.linkedin.com/in/davidwrossiter/"
          className="underline text-blue-700"
          target="_blank"
        >
          linkedin
        </a>
      </p>
      {/* Projects section */}
      <p className="mt-6 font-[400] text-xl">projects</p>

      <div className="mt-6">
        <p className="font-bold text-base">rabbitcode</p>
        <p className="max-w-[500px] mt-1 font-[400]">coming soon...</p>
      </div>

      <div className="mt-6">
        <p className="font-bold text-base">chapter one</p>
        <p className="pt-1">
          <a href="#" className="underline text-blue-700" target="_blank">
            live project
          </a>{" "}
          /{" "}
          <a href="#" className="underline text-blue-700" target="_blank">
            figma file
          </a>{" "}
        </p>
        <p className="max-w-[500px] mt-3 font-[350]">
          enter the job that you are trying to get, upload your resume/cv and
          get instant feedback and guidance on how you should optimise your
          resume/cv for the job you are looking to get.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-bold text-base">UI library demo</p>
        <p className="pt-1">
          <a
            href="https://www.figma.com/design/hlQhHlpgvd04wuOGGWOnxg/UI-Library-Demo?node-id=0-1&t=kzHyZQztBVB9WPtD-1"
            className="underline text-blue-700"
            target="_blank"
          >
            figma file
          </a>{" "}
        </p>
        <p className="max-w-[500px] mt-3 font-[350]">
          This is a demo website for a UI library.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-bold text-base">davi beats</p>
        <p className="pt-1">
          <a
            href="https://www.figma.com/design/kH2jNY9wzxA8ynFytiwtb0/Davi-Beats?node-id=0-1&t=JDtVrbmz6bUQHZD9-1"
            className="underline text-blue-700"
            target="_blank"
          >
            figma file
          </a>{" "}
        </p>
        <p className="max-w-[500px] mt-3 font-[350]">
          i designed this website for my{" "}
          <a
            href="https://rossiter.dev"
            target="_blank"
            className="underline text-blue-700"
          >
            brother
          </a>{" "}
          who makes music. it is a platform that you can buy instrumental beats
          from.
        </p>
      </div>
    </div>
  );
}

export default App;
