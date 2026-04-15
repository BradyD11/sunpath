import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Sun, Zap, DollarSign, Users, Home, Building2, ExternalLink, Badge as BadgeIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

interface Program {
  id: string;
  name: string;
  provider: string;
  category: "solar" | "efficiency" | "assistance";
  eligibleFor: ("homeowner" | "renter")[];
  description: string;
  benefits: string[];
  incomeRequirement: string;
  link: string;
}

interface QuizResult {
  eligible: boolean;
  programs: string[];
  message: string;
}

export default function Programs() {
  const location = useLocation();
  const quizResults = location.state?.quizResults as QuizResult | undefined;
  const [selectedCategory, setSelectedCategory] = useState<"all" | "your-programs" | "solar" | "efficiency" | "assistance">(
    quizResults ? "your-programs" : "all"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs: Program[] = [
    // Solar Programs
    {
      id: "1",
      name: "APS Solar Communities",
      provider: "Arizona Public Service (APS)",
      category: "solar",
      eligibleFor: ["homeowner"],
      description: "Free rooftop solar installation and maintenance for limited/moderate-income APS customers. Homeowners receive roughly $600/year in bill credits over 20 years.",
      benefits: [
        "Free rooftop installation",
        "~$600/year in bill credits",
        "20-year warranty",
        "Free maintenance included",
      ],
      incomeRequirement: "Limited/Moderate-income APS customers",
      link: "https://www.aps.com/en/About/Sustainability-and-Innovation/Technology-and-Innovation/Solar-Communities",
    },
    {
      id: "2",
      name: "Solar for All Arizonans (Currently Paused)",
      provider: "Arizona Resilience Office",
      category: "solar",
      eligibleFor: ["homeowner", "renter"],
      description: "State program backed by $156M in EPA funding offering low-interest loans and grants for rooftop solar, plus neighborhood solar bill discounts for renters. ⚠️ NOTE: This program has been paused by the current administration.",
      benefits: [
        "Low-interest loans and grants (currently paused)",
        "Rooftop solar for homeowners",
        "Community solar for renters",
        "EPA-backed $156M funding",
      ],
      incomeRequirement: "Low/moderate-income households",
      link: "https://resilient.az.gov/resiliency-programs/energy-programs/energy-affordability/solar-all-arizonans",
    },

    // Utility Bill Assistance
    {
      id: "3",
      name: "LIHEAP + Power AZ",
      provider: "Arizona Department of Economic Security",
      category: "assistance",
      eligibleFor: ["homeowner", "renter"],
      description: "Federally funded program helping low-income households pay heating and cooling bills. Power AZ expands eligibility to households up to 100% State Median Income.",
      benefits: [
        "Help with heating/cooling bills",
        "Crisis assistance up to $500",
        "Single application for both programs",
        "Year-round enrollment",
      ],
      incomeRequirement: "Up to 100% State Median Income",
      link: "https://des.az.gov/liheap",
    },
    {
      id: "4",
      name: "APS Energy Support Program",
      provider: "Arizona Public Service (APS)",
      category: "assistance",
      eligibleFor: ["homeowner", "renter"],
      description: "Monthly bill discount for APS customers. 25% off (up to $95/month) for households up to 200% of federal poverty level, or 60% off (up to $165/month) for those under 100% FPL.",
      benefits: [
        "25-60% monthly bill discount",
        "Up to $95-165/month savings",
        "Crisis bill assistance up to $1,000/year",
        "Ongoing discounts",
      ],
      incomeRequirement: "Up to 200% Federal Poverty Level",
      link: "https://www.aps.com/en/Residential/Account/Assistance-Programs/Energy-Support-Program",
    },
    {
      id: "5",
      name: "SRP Income-Qualified Discount",
      provider: "Salt River Project (SRP)",
      category: "assistance",
      eligibleFor: ["homeowner", "renter"],
      description: "Monthly bill credits for SRP customers. $35/month for households at 0–150% of federal poverty level, $10/month for 151–200% FPL.",
      benefits: [
        "$35/month credits (0-150% FPL)",
        "$10/month credits (151-200% FPL)",
        "Direct bill credits",
        "No application hassle",
      ],
      incomeRequirement: "Up to 200% Federal Poverty Level",
      link: "https://www.srpnet.com/customer-service/residential-electric/limited-income-assistance-programs",
    },
    {
      id: "6",
      name: "TEP Lifeline",
      provider: "Tucson Electric Power (TEP)",
      category: "assistance",
      eligibleFor: ["homeowner", "renter"],
      description: "Flat $20/month bill discount for Tucson Electric Power customers at or below 200% of the federal poverty level.",
      benefits: [
        "$20/month discount",
        "Year-round assistance",
        "Simple application",
        "Stable discount amount",
      ],
      incomeRequirement: "At or below 200% Federal Poverty Level",
      link: "https://www.tep.com/customer-assistance",
    },
    {
      id: "7",
      name: "Southwest Gas LIRA Program",
      provider: "Southwest Gas",
      category: "assistance",
      eligibleFor: ["homeowner", "renter"],
      description: "Low Income Ratepayer Assistance program offering 30% reduction on the per-therm gas rate plus discounted monthly basic service charge.",
      benefits: [
        "30% reduction on gas rates",
        "Discounted service charge",
        "Winter heating assistance",
        "Long-term savings",
      ],
      incomeRequirement: "Income-qualified households",
      link: "https://www.swgas.com/en/az-special-programs",
    },
    {
      id: "8",
      name: "APS Project SHARE",
      provider: "Arizona Public Service (APS)",
      category: "assistance",
      eligibleFor: ["homeowner", "renter"],
      description: "Emergency energy bill assistance up to $500 for APS customers in financial crisis, administered through the Salvation Army.",
      benefits: [
        "Up to $500 emergency assistance",
        "Fast processing",
        "No age/income requirements",
        "Prevent disconnection",
      ],
      incomeRequirement: "Proof of unexpected income drop or high bills",
      link: "https://www.aps.com/en/Residential/Account/Assistance-Programs",
    },

    // Energy Efficiency & Weatherization
    {
      id: "9",
      name: "Arizona Weatherization Assistance Program (ADOH WAP)",
      provider: "Arizona Department of Housing",
      category: "efficiency",
      eligibleFor: ["homeowner", "renter"],
      description: "Free home energy upgrades for income-eligible homeowners and renters (with landlord permission). Services include attic insulation, air sealing, HVAC tuning, and duct repair.",
      benefits: [
        "Free insulation upgrades",
        "Air sealing services",
        "HVAC tuning",
        "Duct repair",
        "Window shading",
        "Covers mobile homes & duplexes",
      ],
      incomeRequirement: "Family of 4: up to $64,300/year (2025)",
      link: "https://housing.az.gov/general-public/weatherization-assistance-program",
    },
    {
      id: "10",
      name: "City of Phoenix Weatherization Program",
      provider: "City of Phoenix",
      category: "efficiency",
      eligibleFor: ["homeowner", "renter"],
      description: "Free weatherization services for eligible Phoenix homeowners and renters who meet income limits.",
      benefits: [
        "Free weatherization services",
        "Reduced energy costs",
        "Improved home comfort",
        "Expert installation",
      ],
      incomeRequirement: "Income-qualified",
      link: "https://www.phoenix.gov/administration/departments/nsd/housing-repairs/weatherization.html",
    },

    // Resources & Support
    {
      id: "11",
      name: "2-1-1 Arizona",
      provider: "Arizona Health and Human Services",
      category: "assistance",
      eligibleFor: ["homeowner", "renter"],
      description: "Arizona's statewide helpline for health and human services. Dial 211 or visit online to be connected with local agencies for energy bills, weatherization, and assistance.",
      benefits: [
        "Free helpline (dial 211)",
        "English and Spanish support",
        "Local agency referrals",
        "Multiple service connections",
      ],
      incomeRequirement: "Open to all Arizonans",
      link: "https://211arizona.org",
    },
    {
      id: "12",
      name: "AZ Clean Energy Hub",
      provider: "Arizona Governor's Office of Resiliency",
      category: "efficiency",
      eligibleFor: ["homeowner", "renter"],
      description: "Central hub listing all available state energy incentives, how they work, and how to apply. Great starting point for exploring all available options.",
      benefits: [
        "Complete program directory",
        "Application instructions",
        "Eligibility guides",
        "State-wide overview",
      ],
      incomeRequirement: "Varies by program",
      link: "https://resilient.az.gov/resiliency-programs/energy-programs/energy-affordability",
    },
  ];

  const filteredPrograms = selectedCategory === "all" 
    ? programs
    : selectedCategory === "your-programs"
    ? programs.filter(p => quizResults?.programs.some(qp => {
        const pNameLower = p.name.toLowerCase();
        const qpLower = qp.toLowerCase();
        // Match if either string is contained in the other
        return pNameLower.includes(qpLower) || qpLower.includes(pNameLower);
      }))
    : programs.filter(p => p.category === selectedCategory);

  const qualifiedProgramNames = quizResults?.programs || [];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "solar":
        return <Sun className="h-5 w-5" />;
      case "efficiency":
        return <Zap className="h-5 w-5" />;
      case "assistance":
        return <DollarSign className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "solar":
        return "bg-amber-100 text-amber-700";
      case "efficiency":
        return "bg-blue-100 text-blue-700";
      case "assistance":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          {quizResults && (
            <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-900 font-medium">
                ✓ {quizResults.message}
              </p>
            </div>
          )}
          <h1 className="text-4xl mb-4 text-gray-900">Energy & Solar Programs</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {quizResults 
              ? "Here are all the programs you may qualify for, plus others available in Arizona."
              : "Browse all available assistance programs for Arizona homeowners and renters. Filter by category to find programs that match your needs."
            }
          </p>
        </div>

        {/* Category Filter */}
        <Tabs 
          defaultValue={quizResults ? "your-programs" : "all"} 
          className="mb-8" 
          onValueChange={(value) => setSelectedCategory(value as any)}
        >
          <TabsList className={`grid w-full ${quizResults ? "max-w-3xl grid-cols-5" : "max-w-2xl grid-cols-4"}`}>
            {quizResults && (
              <TabsTrigger value="your-programs" className="flex items-center gap-2">
                <BadgeIcon className="h-4 w-4" />
                Your Programs
              </TabsTrigger>
            )}
            <TabsTrigger value="all">All Programs</TabsTrigger>
            <TabsTrigger value="solar">Solar</TabsTrigger>
            <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
            <TabsTrigger value="assistance">Bill Assistance</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPrograms.map((program) => {
            const isQualified = qualifiedProgramNames.some(qp => {
              const pNameLower = program.name.toLowerCase();
              const qpLower = qp.toLowerCase();
              return pNameLower.includes(qpLower) || qpLower.includes(pNameLower);
            });
            return (
              <Card 
                key={program.id} 
                className={`hover:shadow-lg transition-shadow ${isQualified && quizResults ? "border-amber-300 border-2" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className={`p-2 rounded-lg ${getCategoryColor(program.category)}`}>
                      {getCategoryIcon(program.category)}
                    </div>
                    <div className="flex gap-2 items-start">
                      {isQualified && quizResults && (
                        <Badge className="bg-amber-600 hover:bg-amber-700 text-white text-xs">
                          ✓ You Qualify
                        </Badge>
                      )}
                      <div className="flex gap-2">
                        {program.eligibleFor.includes("homeowner") && (
                          <Badge variant="outline" className="text-xs">
                            <Home className="h-3 w-3 mr-1" />
                            Homeowners
                          </Badge>
                        )}
                        {program.eligibleFor.includes("renter") && (
                          <Badge variant="outline" className="text-xs">
                            <Building2 className="h-3 w-3 mr-1" />
                            Renters
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{program.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {program.provider}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Income Requirement: </span>
                      <span className="text-gray-700">{program.incomeRequirement}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <a href={program.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No programs found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
