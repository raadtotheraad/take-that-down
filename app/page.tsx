"use client";

import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircleIcon, ArrowRight } from "lucide-react"
import { createAuthClient } from "better-auth/client";
import { authClient } from "@/lib/auth-client";

export default function Home() {

    const signIn = async () => {
      const data = await authClient.signIn.social({
        provider: "discord",
      });
    };

    const { data: session, isPending } = authClient.useSession();

    return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background text-foreground px-4 sm:px-0">
      <img src="Take that down Logo.png" alt="Take that down!" className="max-w-lg max-h-64 px-24 sm:px-0"></img>
      <p className="mt-4 text-lg text-center text-zinc-500">
        ...i want that off the internet, please.
      </p>
      <Separator className="max-w-md my-4" />
      <p className="mt-4 text-lg text-center">
        <img src="Take that down Logo.png" alt="Take that down!" className="inline-block w-[120px] h-aut"></img> Is a simple tool to help YOU find out on how to report things, and hopefully get them removed from the internet.
        <br />
        You will find out on how to report something on different platforms, and on how to use the DSA / OSA (Europe / UK only) tools to report illegal content.
        <br />
        The goal of this place is to spread awareness and to educate people to report harmful content. The internet can be a shaky place, and everyone should know how to contribute to its safety.
      </p>
      <Separator className="max-w-md my-4" />
      <Alert variant="destructive" className="w-full max-w-md">
        <AlertCircleIcon />
        <AlertTitle>Disclaimer</AlertTitle>
        <AlertDescription>
          This is NOT a place for information on how to get help in situations where immediate danger is present! Incase you think someone is seriously in danger, call your local law enforcement instead!
        </AlertDescription>
      </Alert>
      <Separator className="max-w-md my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl px-4 items-start">
        <Card className="w-full max-w-md">
          <CardContent>
            <Card className="bg-[#F1F2F2]">
              <CardContent>
                <img className="w-full" src="/company-logos/NCMEC.png" alt="NCMEC"></img>
              </CardContent>
            </Card>
          </CardContent>
          <CardFooter>
            Child abuse
          </CardFooter>
          <p className="p-4">If you come across child abuse, please report it to the NCMEC CyberTipline.</p>
          <Button className="mx-4 mb-4 whitespace-normal py-6" variant="default" onClick={() => window.location.href = "https://report.cybertip.org/"}>
            Report child abuse to the NCMEC CyberTipline
            <ArrowRight data-icon="inline-end" />
          </Button>
        </Card>
        <Card className="w-full max-w-md">
          <CardContent>
            <Card className="bg-foreground">
              <CardContent>
                <img className="w-full" src="/company-logos/Cloudflare.png" alt="Roblox"></img>
              </CardContent>
            </Card>
          </CardContent>
          <CardFooter>
            Cloudflare
          </CardFooter>
          <Button className="mb-4 mx-4 " variant="default" onClick={() => window.location.href = "/cloudflare"}>
            How to report content on Cloudflare
            <ArrowRight data-icon="inline-end" />
          </Button>
        </Card>
        <Card className="w-full max-w-md">
          <CardContent>
            <Card className="bg-[#3b67fe]">
              <CardContent>
                <img className="w-full" src="/company-logos/Roblox.png" alt="Roblox"></img>
              </CardContent>
            </Card>
          </CardContent>
          <CardFooter>
            Roblox
          </CardFooter>
          <Button className="mb-4 mx-4" variant="default" onClick={() => window.location.href = "/roblox"}>
            How to report content on Roblox
            <ArrowRight data-icon="inline-end" />
          </Button>
        </Card>
        <Card className="w-full max-w-md">
          <CardContent>
            <Card className="bg-[#5865f2]">
              <CardContent>
                <img className="w-full" src="/company-logos/Discord.png" alt="Discord"></img>
              </CardContent>
            </Card>
          </CardContent>
          <CardFooter>
            Discord
          </CardFooter>
          <Button className="mb-4 mx-4" variant="default" onClick={() => window.location.href = "/discord"}>
            How to report content on Discord
            <ArrowRight data-icon="inline-end" />
          </Button>
        </Card>
      </div>
        <Separator className="max-w-md my-4" />
        <p className="mb-4 text-center">Submitting suggestions is work-in-progress and will come eventually. In the meanwhile, <a href="https://github.com/raadtotheraad/take-that-down" className="underline">check out the code.</a></p>
          {/*
          <Separator className="max-w-md my-4" />
          <Card className="w-full max-w-md mb-4">
            <CardHeader >
              <CardTitle>
                Do you have any suggestions?
              </CardTitle>
              <CardDescription>
                If you do, sign in with Discord and send your suggestion.
              </CardDescription>
              <CardContent>
                {isPending ? <p className="mt-4 text-center">Checking to see if you're logged in...</p> : (
                  session ? (
                    <p className="mt-4 text-center">Logged in!</p>
                  ) : (
                    <Button onClick={signIn} className="mt-4 w-full bg-[#5865f2] text-[#e0e3ff] hover:bg-[#4752C4]">
                      <img src="Discord-Symbol-Light Blurple.svg" className="max-h-3" />
                      Sign in with Discord
                    </Button>
                  )
                )}
              </CardContent>
            </CardHeader>
          </Card>
          */}
    </div>
  );
}