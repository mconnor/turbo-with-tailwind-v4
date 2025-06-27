import Colors from '@repo/ui-react/Colors';
import Btns from '@repo/ui-react/Btns';
export default function Page() {
  return (
    <main>
      <Btns />
      <div className="backgroundGradient relative flex h-[50vh] items-center justify-center px-4 md:px-8">
        <div>
          <h1 className="text-center text-6xl text-slate-300">
            xxTurbo with TailwindCSS version 4
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
          <Colors prime textCol="red" />
        </div>
      </div>
    </main>
  );
}
