import Colors from "@repo/ui-react/Colors";

export default function Page() {
  return (
    <main>
      <div className="backgroundGradient relative flex h-[50vh] items-center justify-center px-4 md:px-8">
        <div>
          <h1 className="text-center text-slate-300">
            Turbo with TailwindCSS version 4
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <p className="bg-black p-4 text-white">Custom Primary Colors</p>
          <Colors />
        </div>
        <div className="w-full">
          <p className="bg-black p-4 text-white">Custom Secondary Colors</p>
          <Colors prime />
        </div>
      </div>
    </main>
  );
}
