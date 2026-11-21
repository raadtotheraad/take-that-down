import { Separator } from "@/components/ui/separator";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background text-foreground h-5 gap-4">
      <div className="flex items-center gap-6">
        <img src="Take that down 404.png" alt="404" className="max-w-3xs h-auto"></img>
        <div className="flex h-full items-center">
          <Separator orientation="vertical" className="h-24" />
        </div>
        <p>Unfortunately, you can't report content to the platform "404 | Not Found".</p>
      </div>
    </div>
  );
}
