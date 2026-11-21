"use client";

import { InfoIcon, AlertTriangleIcon, ChevronLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Cloudflare() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-background text-foreground">
            <Button className="mt-4" onClick={() => { window.location.href = "/" }} variant="link">
                <ChevronLeft data-icon="inline-start" />
                Go Back
            </Button>
            <Separator className="max-w-md my-4" />
            <Card className="bg-foreground max-w-md">
              <CardContent>
                <img className="w-full" src="/company-logos/Cloudflare.png" alt="Roblox"></img>
              </CardContent>
            </Card>
            <p className="mt-4 text-lg text-center">
                Last updated 2026-11-20
            </p>
            <Separator className="max-w-md my-4" />
            <Accordion multiple className="max-w-lg mb-4" defaultValue={["general"]}>
                <AccordionItem key="general" value="general">
                    <AccordionTrigger>General points</AccordionTrigger>
                    <AccordionContent>
                        Cloudflare is a DNS / Proxy platform and usually not the hosting provider. They do not provide a specialized tool for DSA reports and handle it in the same portal.
                        <Alert className="w-full max-w-md mt-4">
                            <InfoIcon />
                            <AlertTitle>Tip</AlertTitle>
                            <AlertDescription>
                                Sites ending in "pages.dev" are hosted on Cloudflare Pages and therefore in general hosted by Cloudflare.
                            </AlertDescription>
                        </Alert>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem key="reports" value="reports">
                    <AccordionTrigger>Reporting content</AccordionTrigger>
                    <AccordionContent>
                        {"Reporting content on Cloudflare is relatively easy. Head to "}
                        <a href="https://abuse.cloudflare.com">Cloudflare's Abuse dashboard</a>
                        {" and select an abuse type. Fill out the information requested on the form (depends on abuse type) and then click Submit."}
                        <Alert className="w-full max-w-md mt-4">
                            <InfoIcon />
                            <AlertTitle>Do you have a Cloudflare account?</AlertTitle>
                            <AlertDescription>
                                {"If you have a Cloudflare account, you can report content directly from your dashboard. Head to your "}
                                <a href="https://dash.cloudflare.com/?to=%2F%3Aaccount%2Fabuse-reports%2Fsubmitted">abuse reports dashboard</a>
                                {', press "Submit an Abuse Report" and then select your category. Finally fill out your form just like usual.'}
                            </AlertDescription>
                        </Alert>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem key="experience" value="experience">
                    <AccordionTrigger>Experience with Cloudflare</AccordionTrigger>
                    <AccordionContent>
                        <Alert className="w-full max-w-md mb-4 border-amber-900 bg-amber-950 text-amber-50">
                            <AlertTriangleIcon />
                            <AlertTitle>Heads up</AlertTitle>
                            <AlertDescription>
                                This is based on what the writer(s) experienced. This means there is no guarantee your experience will end up as described here. Currently, it is only me that is describing my experience.
                            </AlertDescription>
                        </Alert>
                        If you have an account, Cloudflare is very quick with a response. For some cases, they respond in ~24 hours. Although, in other categories, they ignore reports. There is no way to ask for more information.
                        Without an account, you will likely be provided no response at all.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}