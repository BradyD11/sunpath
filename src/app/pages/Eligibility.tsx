import { useState } from "react";
import { CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";
import { Link } from "react-router";

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string }[];
}

interface EligibilityResult {
  eligible: boolean;
  programs: string[];
  message: string;
}

export default function Eligibility() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const questions: Question[] = [
    {
      id: "residency",
      question: "Are you a resident of Arizona?",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },
    {
      id: "housing",
      question: "Do you own or rent your home?",
      options: [
        { value: "own", label: "I own my home" },
        { value: "rent", label: "I rent my home" },
        { value: "other", label: "Other living situation" },
      ],
    },
    {
      id: "household",
      question: "How many people live in your household?",
      options: [
        { value: "1", label: "1 person" },
        { value: "2", label: "2 people" },
        { value: "3", label: "3 people" },
        { value: "4", label: "4 people" },
        { value: "5+", label: "5 or more people" },
      ],
    },
    {
      id: "income",
      question: "What is your approximate annual household income?",
      options: [
        { value: "under25k", label: "Under $25,000" },
        { value: "25k-40k", label: "$25,000 - $40,000" },
        { value: "40k-60k", label: "$40,000 - $60,000" },
        { value: "60k-80k", label: "$60,000 - $80,000" },
        { value: "over80k", label: "Over $80,000" },
      ],
    },
    {
      id: "utilities",
      question: "Do you pay your own utility bills?",
      options: [
        { value: "yes", label: "Yes, I pay utilities" },
        { value: "included", label: "Utilities are included in rent" },
        { value: "other", label: "Other arrangement" },
      ],
    },
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[step].id]: value });
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateEligibility();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const calculateEligibility = () => {
    let eligiblePrograms: string[] = [];
    let eligible = true;

    // Check residency
    if (answers.residency !== "yes") {
      setResult({
        eligible: false,
        programs: [],
        message: "Unfortunately, these programs are only available to Arizona residents. Please check with programs in your state.",
      });
      return;
    }

    // Determine eligible programs based on answers
    const isLowIncome = ["under25k", "25k-40k"].includes(answers.income);
    const isModerateIncome = ["40k-60k", "60k-80k"].includes(answers.income);
    const isHomeowner = answers.housing === "own";
    const isRenter = answers.housing === "rent";

    if (isLowIncome) {
      eligiblePrograms.push("LIHEAP + Power AZ");
      eligiblePrograms.push("Arizona Weatherization Assistance Program (ADOH WAP)");
      eligiblePrograms.push("APS Energy Support Program");
      
      if (answers.utilities === "yes") {
        eligiblePrograms.push("APS Solar Communities");
      }
    }

    if (isLowIncome || isModerateIncome) {
      eligiblePrograms.push("Solar for All Arizonans (Currently Paused)");
    }

    if (isHomeowner) {
      if (isLowIncome || isModerateIncome) {
        eligiblePrograms.push("Solar for All Arizonans (Currently Paused)");
      }
    }

    if (isRenter) {
      eligiblePrograms.push("SRP Income-Qualified Discount");
      eligiblePrograms.push("Solar for All Arizonans (Currently Paused)");
    }

    // Add bill assistance programs based on utility provider
    if (isLowIncome || isModerateIncome) {
      if (answers.utilities === "yes") {
        eligiblePrograms.push("APS Project SHARE");
      }
    }

    // Deduplicate programs
    eligiblePrograms = Array.from(new Set(eligiblePrograms));

    if (eligiblePrograms.length === 0) {
      setResult({
        eligible: false,
        programs: [],
        message: "Based on your answers, you may not qualify for income-restricted programs, but you can still explore market-rate energy efficiency programs and solar options.",
      });
    } else {
      setResult({
        eligible: true,
        programs: eligiblePrograms,
        message: `Great news! Based on your answers, you may qualify for ${eligiblePrograms.length} program${eligiblePrograms.length > 1 ? 's' : ''}.`,
      });
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  const progress = ((step + 1) / questions.length) * 100;

  if (result) {
    return (
      <div className="bg-white min-h-screen py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-amber-600 to-amber-700 text-white pt-12 pb-8 text-center">
              {result.eligible ? (
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCircle className="h-9 w-9 text-white" />
                </div>
              ) : (
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                  <AlertCircle className="h-9 w-9 text-white" />
                </div>
              )}
              <CardTitle className="text-3xl font-bold text-white">
                {result.eligible ? "You're In!" : "Let's Explore Options"}
              </CardTitle>
              <CardDescription className="text-amber-100 text-base mt-2">
                {result.message}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-10 pb-10">
              {result.programs.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Programs You Qualify For:</h3>
                  <ul className="space-y-2">
                    {result.programs.map((program, index) => (
                      <li key={index} className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-900 font-medium">{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-3">
                <Link to="/programs" state={{ quizResults: result }} className="block">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-6 text-base">
                    Explore Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50 font-semibold py-6 text-base" onClick={resetQuiz}>
                  Start Over
                </Button>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> These results are estimates based on your answers. Final eligibility will be determined by each program administrator.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-8 bg-amber-600 rounded"></div>
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">Eligibility Quiz</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900">Find Your Fit</h1>
          <p className="text-lg text-gray-600">
            Let's discover which programs are right for you. Just a few quick questions.
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-6 border-b border-gray-100">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold text-gray-500 uppercase">Question {step + 1} of {questions.length}</span>
                <span className="text-xs font-semibold text-amber-600">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-1.5" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 mt-6">{questions[step].question}</CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <RadioGroup
              value={answers[questions[step].id] || ""}
              onValueChange={handleAnswer}
            >
              <div className="space-y-3">
                {questions[step].options.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      answers[questions[step].id] === option.value
                        ? "border-amber-600 bg-amber-50"
                        : "border-gray-200 hover:border-amber-400 hover:bg-amber-50"
                    }`}
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="pointer-events-none" />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer font-medium text-gray-900">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex gap-3 mt-10">
              {step > 0 && (
                <Button variant="outline" onClick={handleBack} className="flex-1 border-gray-300 hover:bg-gray-50">
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!answers[questions[step].id]}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold"
              >
                {step < questions.length - 1 ? "Continue" : "See Results"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
