import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const suggestions = [
    "Paycheck confusion",
    "Hospital Bill",
    "Landlord issues",
    "Salary Question",
  ];
  return (
    <div className="flex h-[calc(100vh-82px)]">
      <div className="w-96 h-full hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 m-4 mb-8 h-full relative">
        <div className="flex md:hidden justify-center items-center space-x-4 w-full border-b-2 mb-4 pb-4">
          <Link href="/scenarios" className="hover:text-secondary-foreground">
            Scenarios
          </Link>
          <div className="h-6 w-0.5 rounded-full bg-border" />
          <Link href="/about" className="hover:text-secondary-foreground">
            About
          </Link>
        </div>
        <div className="md:hidden h-[calc(100%-300px)] overflow-y-scroll flex flex-col">
          <Sidebar />
        </div>
        <div className="w-full mt-8 absolute bottom-8">
          <div className="w-full flex gap-2 flex-wrap">
            {suggestions.map((s) => (
              <Button
                key={s}
                className="bg-neutral-900 rounded-lg py-2 px-4 text-sm text-neutral-300 cursor-pointer"
              >
                {s}
              </Button>
            ))}
          </div>
          <div className="w-full relative mt-4">
            <Field orientation="horizontal">
              <Textarea
                placeholder="Describe your situation... e.g. landlord won't fix the heat"
                className="border-neutral-800 h-24 resize-none"
              />
              <Button
                variant="secondary"
                size="icon"
                className="cursor-pointer bg-accent-foreground hover:bg-accent-foreground/80 text-primary-foreground"
              >
                <ArrowUpRight />
              </Button>
            </Field>
          </div>
        </div>
      </div>
    </div>
  );
}
