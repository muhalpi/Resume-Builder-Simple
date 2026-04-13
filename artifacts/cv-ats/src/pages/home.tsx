import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileText, Zap, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-accent/20">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                  Build a Professional, ATS-Friendly CV
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A quiet, professional workspace to help you land your dream job. Calm, encouraging, and does all the heavy lifting for you.
                </p>
              </div>
              <div className="space-x-4 pt-6">
                <Link href="/cv/new">
                  <Button size="lg" className="h-12 px-8 font-medium shadow-md transition-transform hover:-translate-y-1">
                    Start Creating Now
                  </Button>
                </Link>
                <Link href="/cv">
                  <Button size="lg" variant="outline" className="h-12 px-8 font-medium">
                    View My CVs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-none shadow-sm bg-card hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <CardTitle>ATS-Optimized</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Structured formats that pass seamlessly through Applicant Tracking Systems.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-card hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <CardTitle>Fast & Easy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A step-by-step process that removes the hassle of formatting.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-card hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Download className="h-5 w-5" />
                  </div>
                  <CardTitle>Downloadable PDF</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Generate a clean, print-ready layout and save it as a PDF instantly.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-card hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <CardTitle>100% Free</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    No hidden paywalls or premium templates. Completely free to use.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} BuatCV. Built to help you succeed.</p>
        </div>
      </footer>
    </div>
  );
}
