import { Link } from "react-router";
import { Sun, Home, Zap, DollarSign, ArrowRight, CheckCircle, Leaf, Lightbulb } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function HomePage() {
  const stats = [
    { value: "12+", label: "Real Programs Available", icon: Sun },
    { value: "$600/yr", label: "Potential Savings Per Home", icon: DollarSign },
    { value: "Free", label: "Many Programs Have No Upfront Costs", icon: Lightbulb },
  ];

  const programs = [
    {
      icon: Sun,
      title: "Solar Installation",
      description: "Free or low-cost rooftop solar for homeowners, community solar for renters",
      link: "/programs",
      color: "amber",
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Home upgrades, weatherization, and HVAC improvements",
      link: "/programs",
      color: "blue",
    },
    {
      icon: DollarSign,
      title: "Bill Assistance",
      description: "Monthly discounts and emergency help for utility payments",
      link: "/programs",
      color: "green",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-blue-50"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-8 bg-amber-600 rounded"></div>
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">Energy Assistance For Arizonans</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Lower your energy costs
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Free solar installations, efficiency upgrades, and bill assistance for Arizona residents. Find out what you qualify for in 2 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/eligibility">
                  <Button size="lg" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold py-6 px-8">
                    Start Quiz
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-gray-300 font-semibold py-6 px-8">
                    Browse All Programs
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">12+</div>
                  <p className="text-sm text-gray-600">Active Programs</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">$600/yr</div>
                  <p className="text-sm text-gray-600">Avg. Savings</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">Free</div>
                  <p className="text-sm text-gray-600">No Upfront</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl opacity-10 blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765745141914-0a92e0d8c5e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGFyaXpvbmElMjBob21lfGVufDF8fHx8MTc3NjI4NDY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Solar panels on Arizona home"
                className="rounded-2xl shadow-2xl w-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Categories - Simplified */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const colorMap = {
                amber: "bg-amber-100 text-amber-600",
                blue: "bg-blue-100 text-blue-600",
                green: "bg-green-100 text-green-600",
              };
              return (
                <Link key={index} to={program.link}>
                  <div className="group cursor-pointer">
                    <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardContent className="pt-8">
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${colorMap[program.color as keyof typeof colorMap]}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{program.description}</p>
                        <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm group-hover:gap-3 transition-all">
                          Learn more
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get started in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Take the Quiz",
                description: "Answer a few quick questions about your home and income. Takes just 2 minutes.",
              },
              {
                step: "02",
                title: "See Your Programs",
                description: "Get a personalized list of programs you qualify for based on your answers.",
              },
              {
                step: "03",
                title: "Apply & Save",
                description: "Apply directly through the program providers. Most have no waiting periods.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-amber-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-gray-300">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Programs, Real Savings</h2>
            <p className="text-lg text-gray-600">Powered by Arizona's official government and utility programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">APS Solar Communities</h3>
                <p className="text-sm text-gray-600">Free rooftop solar with $600/year in bill credits</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">LIHEAP + Power AZ</h3>
                <p className="text-sm text-gray-600">Help with heating and cooling bills (1-866-494-1981)</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Weatherization Program</h3>
                <p className="text-sm text-gray-600">Free home energy upgrades and improvements</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Bill Discounts</h3>
                <p className="text-sm text-gray-600">Up to 60% off monthly bills with APS/SRP/TEP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Leaf className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide text-amber-100">Take Action Today</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">See what you qualify for</h2>
          <p className="text-lg mb-8 text-amber-50 max-w-2xl mx-auto">
            Join thousands of Arizona residents who are saving money on energy costs. Start your eligibility quiz now.
          </p>
          <Link to="/eligibility">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 font-semibold py-6 px-8">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
