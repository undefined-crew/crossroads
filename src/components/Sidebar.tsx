export default function Sidebar() {
  return (
    <div className="w-full md:w-96 h-full md:min-h-[calc(100vh-72px)] md:border-r-2 border-neutral-800 p-2 md:p-8">
      <h1 className="uppercase text-sm font-semibold text-input">
        Life Skills Simulator
      </h1>
      <p className="text-3xl mt-4">
        Real life does not come with a{" "}
        <span className="text-(--accent-light) italic">manual.</span>
      </p>
      <p className="mt-4 text-sm text-secondary-foreground">
        Pick a scenario or describe your own. Crosswords generates an
        interactive panel story with real choices and consequences.
      </p>
      <div className="h-0.5 rounded-full bg-border my-4"></div>
      <p className="mt-4 text-sm text-input uppercase">How it works</p>
      <div className="mt-4">
        <div className="flex items-start text-secondary-foreground">
          <span className="text-sm font-semibold text-input mr-6 mt-0.5">
            01
          </span>
          Describe a situation or pick a scenario from the right.
        </div>
        <div className="flex items-start text-secondary-foreground mt-4">
          <span className="text-sm font-semibold text-input mr-6 mt-0.5">
            02
          </span>
          AI generates comic panels with a narrative and decision points.
        </div>
        <div className="flex items-start text-secondary-foreground mt-4">
          <span className="text-sm font-semibold text-input mr-6 mt-0.5">
            03
          </span>
          AI generates comic panels with a narrative and decision points.
        </div>
      </div>
    </div>
  );
}
