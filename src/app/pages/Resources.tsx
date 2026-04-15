import { ExternalLink, Phone, Mail, MapPin, FileText, AlertCircle, HelpCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

export default function Resources() {
  const contacts = [
    {
      name: "2-1-1 Arizona",
      description: "Statewide helpline for health and human services",
      phone: "2-1-1 (dial or text)",
      website: "https://211arizona.org",
      services: ["Energy Assistance", "Weatherization", "Bill Help", "Local Referrals"],
    },
    {
      name: "LIHEAP + Power AZ",
      description: "Help with heating and cooling bills",
      phone: "1-866-494-1981",
      website: "https://des.az.gov/liheap",
      services: ["Bill Assistance", "Crisis Help", "Energy Programs"],
    },
    {
      name: "Arizona Public Service (APS)",
      description: "Solar programs and bill assistance for APS customers",
      phone: "602-371-7171",
      website: "https://www.aps.com/en/Residential/Account/Assistance-Programs",
      services: ["Solar Communities", "Energy Support", "Project SHARE"],
    },
    {
      name: "Salt River Project (SRP)",
      description: "Bill assistance and rebates for SRP customers",
      phone: "602-236-8888",
      website: "https://www.srpnet.com/customer-service/residential-electric/limited-income-assistance-programs",
      services: ["Income-Qualified Discounts", "Rebates", "Audits"],
    },
    {
      name: "Tucson Electric Power (TEP)",
      description: "Bill assistance for TEP customers",
      phone: "520-623-7711",
      website: "https://www.tep.com/customer-assistance",
      services: ["TEP Lifeline", "Assistance Programs"],
    },
    {
      name: "Arizona Department of Housing - Weatherization",
      description: "Free home energy upgrades",
      phone: "602-771-1000",
      website: "https://housing.az.gov/general-public/weatherization-assistance-program",
      services: ["Weatherization Assistance", "Energy Upgrades"],
    },
    {
      name: "City of Phoenix Weatherization",
      description: "Free weatherization for Phoenix residents",
      phone: "602-534-4444 ext. 3",
      website: "https://www.phoenix.gov/administration/departments/nsd/housing-repairs/weatherization.html",
      services: ["Weatherization", "Energy Efficiency"],
    },
    {
      name: "Arizona Clean Energy Hub",
      description: "Complete directory of state energy programs",
      phone: "N/A",
      website: "https://resilient.az.gov/resiliency-programs/energy-programs/energy-affordability",
      services: ["Program Directory", "Application Help", "Eligibility Info"],
    },
  ];

  const faqs = [
    {
      question: "Who qualifies as 'low-income' for these programs?",
      answer: "Eligibility varies by program. Generally, you may qualify if your household income is at or below 80% of the Area Median Income (AMI), or below 200% of the Federal Poverty Level. Many programs use different thresholds, so check each program's specific requirements.",
    },
    {
      question: "Can renters qualify for solar programs?",
      answer: "Yes! Renters can participate in community solar programs, which don't require rooftop installation. You'll receive credits on your electricity bill. Some weatherization programs also serve renters with landlord permission.",
    },
    {
      question: "How long does the application process take?",
      answer: "Processing times vary by program. Energy assistance programs may provide help within a few weeks, while weatherization and solar programs may take 2-6 months due to waitlists and installation scheduling.",
    },
    {
      question: "Do I need to pay anything upfront?",
      answer: "Most low-income programs have no upfront costs. Weatherization, community solar, and bill assistance programs are typically free. Some solar installation programs may require a small deposit or monthly payment based on income.",
    },
    {
      question: "Can I apply to multiple programs at once?",
      answer: "Yes! You can apply to multiple programs simultaneously. In fact, many programs complement each other. For example, you can receive weatherization assistance and participate in a community solar program at the same time.",
    },
    {
      question: "What documents do I need to apply?",
      answer: "Typically you'll need: proof of Arizona residency, proof of income (pay stubs, tax returns, or benefit statements), utility bills, and identification. Homeowners may need proof of ownership; renters may need a lease agreement.",
    },
    {
      question: "What if my application is denied?",
      answer: "If you're denied, ask for the specific reason. You may be able to reapply with additional documentation, or you might qualify for a different program. Organizations can also help you appeal decisions.",
    },
    {
      question: "Are these programs available year-round?",
      answer: "Most programs accept applications year-round, but some have specific enrollment periods or waitlists. Energy assistance programs often prioritize extreme weather seasons (summer cooling, winter heating).",
    },
  ];

  const documents = [
    "Valid Arizona ID or driver's license",
    "Recent utility bills (last 2-3 months)",
    "Proof of income (pay stubs, tax returns, or benefit statements)",
    "Lease agreement (for renters) or deed (for homeowners)",
    "Social Security numbers for all household members",
    "Proof of household size (birth certificates, etc.)",
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl mb-4 text-gray-900">Resources & Support</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Find helpful information, contact details, and answers to common questions about
            energy assistance programs in Arizona.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-amber-200 bg-amber-50">
          <AlertCircle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-900">Important Information</AlertTitle>
          <AlertDescription className="text-amber-800">
            This website is an informational resource only. To apply for programs, please contact
            the providers directly using the contact information below. Application processes and
            eligibility requirements may change.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <section>
              <h2 className="text-2xl mb-6 text-gray-900">Contact Information</h2>
              <div className="grid gap-6">
                {contacts.map((contact) => (
                  <Card key={contact.name}>
                    <CardHeader>
                      <CardTitle className="text-xl">{contact.name}</CardTitle>
                      <CardDescription>{contact.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-700">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <a href={`tel:${contact.phone}`} className="hover:text-amber-600">
                            {contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <ExternalLink className="h-4 w-4 text-gray-400" />
                          <a
                            href={contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-600"
                          >
                            Visit Website
                          </a>
                        </div>
                        <div className="pt-2">
                          <div className="text-sm font-semibold text-gray-900 mb-2">Services:</div>
                          <div className="flex flex-wrap gap-2">
                            {contact.services.map((service) => (
                              <span
                                key={service}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-2xl mb-6 text-gray-900">Frequently Asked Questions</h2>
              <Card>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Documents Needed */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Documents Needed
                </CardTitle>
                <CardDescription>
                  Gather these documents before applying
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 mt-0.5">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <HelpCircle className="h-5 w-5" />
                  Application Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-blue-900 space-y-2">
                <p>• Apply as early as possible - some programs have waitlists</p>
                <p>• Keep copies of all documents you submit</p>
                <p>• Follow up on your application after 2-3 weeks</p>
                <p>• Ask for help if you need assistance with the application</p>
                <p>• Don't be discouraged by initial denials - reapply or try other programs</p>
              </CardContent>
            </Card>

            {/* Additional Support */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help Applying?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                <p className="mb-4">
                  Local community organizations can help you navigate the application process:
                </p>
                <ul className="space-y-2">
                  <li>• Community Action Agencies</li>
                  <li>• Local utility company assistance programs</li>
                  <li>• Legal aid organizations</li>
                  <li>• Senior centers (for seniors)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
