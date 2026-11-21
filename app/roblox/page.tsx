"use client";

import { InfoIcon, AlertTriangleIcon, ChevronLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Roblox() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-background text-foreground">
            <Button className="mt-4" onClick={() => { window.location.href = "/" }} variant="link">
                <ChevronLeft data-icon="inline-start" />
                Go Back
            </Button>
            <Separator className="max-w-md my-4" />
            <Card className="bg-[#3b67fe] max-w-md">
              <CardContent>
                <img className="w-full" src="/company-logos/Roblox.png" alt="Roblox"></img>
              </CardContent>
            </Card>
            <p className="mt-4 text-lg text-center">
                Last updated 2026-11-21
            </p>
            <Separator className="max-w-md my-4" />
            <Accordion multiple className="max-w-lg  mb-4" defaultValue={["general"]}>
                <AccordionItem key="general" value="general">
                    <AccordionTrigger>General points</AccordionTrigger>
                    <AccordionContent>
                        Roblox is a gaming platform where players can create games and share them with others. Roblox is historically and widely known for its safety flaws, and prioritizes growth and revenue over user safety. Most of its safety issues come from groups of users who engage in innapropriate activity. Roblox hardly takes action, and many valid reports with valid proof are denied. Although, Roblox has recently taken safety measures, which is a good thing. Violations of their own Terms of Service and Community Guidelines remain undetected.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem key="reportsmain" value="reportsmain">
                    <AccordionTrigger>Reporting content (non-DSA / OSA) </AccordionTrigger>
                    <AccordionContent>
                        Reporting content on Roblox is possible by pressing "Report Abuse" on the content's page.
                        <br />
                        In-game, enter the escape menu (press ESC on your keyboard or press the Roblox icon on the top left), and go to "Report" at the top.
                        <br />
                        You need to be logged in in order to report something.
                        <Alert className="w-full max-w-md mt-4">
                            <InfoIcon />
                            <AlertTitle>View your report status</AlertTitle>
                            <AlertDescription>
                                {"If you want to view the status of your report, you can head to your "}
                                <a href="https://www.roblox.com/safety-dashboard#/report-inbox">safety dashboard's report history</a>
                                {'. Usernames are hidden.'}
                            </AlertDescription>
                        </Alert>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem key="reportsdsaosa" value="reportsdsaosa">
                    <AccordionTrigger>Reporting content (DSA / OSA) </AccordionTrigger>
                    <AccordionContent>
                        {"Reporting illegal content on Roblox is possible by going to the "}
                        <a href="https://www.roblox.com/illegal-content-reporting">illegal content reporting form</a>
                        {"."}
                        <br />
                        You will receive updates about your report via E-Mail. Responses are usually within 5 minutes up to a day.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem key="experience" value="experience">
                    <AccordionTrigger>Experience with Roblox</AccordionTrigger>
                    <AccordionContent>
                        <Alert className="w-full max-w-md mb-4 border-amber-900 bg-amber-950 text-amber-50">
                            <AlertTriangleIcon />
                            <AlertTitle>Heads up</AlertTitle>
                            <AlertDescription>
                                This is based on what the writer(s) experienced. This means there is no guarantee your experience will end up as described here. Currently, it is only me that is describing my experience.
                            </AlertDescription>
                        </Alert>
                        Many reports (DSA / Non-DSA) which are more complex are usually denied. Reports of illegal activity by other people with valid proof have been denied, and accounts of known child predators stayed online for extensive times, even after the suspects have been arrested. People describe false bans, and their reporting system is entirely AI driven (potentially just an algorithm) and it can not take proper action on innapropriate content because they are too flawed to properly detect them.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}