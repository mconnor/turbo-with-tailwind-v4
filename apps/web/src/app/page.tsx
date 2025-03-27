import { Colors } from "@repo/ui/Colors";
import { Button } from "@repo/design-system/Button";
import { FaGithub, FaMedium } from "react-icons/fa";

export default function Page() {
  return (
    <main>
      <div className="backgroundGradient relative flex h-[50vh] items-center justify-center px-4 md:px-8">
        <div>
          <h1 className="text-center text-slate-300">
            Turbo with TailwindCSS version 4
          </h1>
          <div className="mt-4 flex flex-col justify-evenly gap-4 md:flex-row md:gap-0">
            <Button href="https://medium.com/@philippbtrentmann/setting-up-tailwind-css-v4-in-a-turbo-monorepo-7688f3193039">
              <span>Medium Article</span>
              <FaMedium className="ml-2 inline-block" />
            </Button>
            <Button
              href="https://github.com/philipptpunkt/turbo-with-tailwind-v4"
              color="secondary"
            >
              <span>Github Repository</span>
              <FaGithub className="ml-2 inline-block" />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 flex w-full justify-center">
            <Button
              href="https://medium.com/@philippbtrentmann/using-tailwind-css-in-a-turborepo-with-apps-and-packages-5a05d2076caf"
              variant="text"
            >
              {`-> Turbo with TailwindCSS version 3 <-`}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <p className="bg-black p-4 text-white">Custom Primary Colors</p>
          <Colors />
        </div>
        <div className="w-full">
          <p className="bg-black p-4 text-white">Custom Secondary Colors</p>
          <Colors secondary />
        </div>
      </div>
    </main>
  );
}
