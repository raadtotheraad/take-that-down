"use client";

import { InfoIcon, AlertTriangleIcon, ChevronLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Discord() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-background text-foreground ">
            <Button className="mt-4" onClick={() => { window.location.href = "/" }} variant="link">
                <ChevronLeft data-icon="inline-start" />
                Go Back
            </Button>
            <Separator className="max-w-md my-4" />
            <Card className="bg-[#5865f2] max-w-md">
              <CardContent>
                <img className="w-full" src="/company-logos/Discord.png" alt="Discord"></img>
              </CardContent>
            </Card>
            <p className="mt-4 text-lg text-center">
                Last updated 2026-11-21
            </p>
            <Separator className="max-w-md my-4" />
            <Accordion multiple className="max-w-lg mb-4" defaultValue={["general"]}>
                <AccordionItem key="general" value="general">
                    <AccordionTrigger>General points</AccordionTrigger>
                    <AccordionContent>
                        Discord is a social media platform focused on gaming chats. Users can create Servers where they can chat about different topics. Discord also has a history of safety flaws, where servers with high amounts of violations are ignored and not reviewed more thorougly. Due to the safety flaws, many people use it to host innapropriate content, including the groups who engage in innapropriate activity inside Roblox.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem key="reportsmain" value="reportsmain">
                    <AccordionTrigger>Reporting content (non-DSA / OSA) </AccordionTrigger>
                    <AccordionContent>
                        Reporting content on Discord is possible by pressing the 3 dots on a message and pressing "Report message". You can also right click the message.
                        <br />
                        For some reason, reporting Servers is only possible on mobile. You need to be in the server. Click the server name at the top when selecting the server, and press "Report server".
                        <br />
                        You need to be logged in in order to report something.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem key="reportsdsaosa" value="reportsdsaosa">
                    <AccordionTrigger>Reporting content (DSA / OSA) </AccordionTrigger>
                    <AccordionContent>
                        {"Reporting illegal content on Discord is possible by going to the "}
                        <a href="https://discord.com/report">illegal content reporting form</a>
                        {"."}
                        <br />
                        You will receive updates about your report via E-Mail. Responses are usually within a few days to 2 weeks, potentially even longer.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem key="experience" value="experience">
                    <AccordionTrigger>Experience with Discord</AccordionTrigger>
                    <AccordionContent>
                        <Alert className="w-full max-w-md mb-4 border-amber-900 bg-amber-950 text-amber-50">
                            <AlertTriangleIcon />
                            <AlertTitle>Heads up</AlertTitle>
                            <AlertDescription>
                                This is based on what the writer(s) experienced. This means there is no guarantee your experience will end up as described here. Currently, it is only me that is describing my experience.
                            </AlertDescription>
                        </Alert>
                        On Discord, the reporting system is pretty good. Although, once again, complex cases are still usually denied. Servers with high volumes of reports are not removed, and Discord unfortunately has kept features which allow Servers which do get removed to migrate quickly. (most notably using the "Join Servers for you" option when authorizing something)
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}