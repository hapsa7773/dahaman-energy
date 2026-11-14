"use client";

import { useState } from "react";
import {
  isValid,
  validateIndianMobile,
  validatePositiveNumber,
} from "@/lib/validation";
import Container from "../components/ui/Container";
import FormField from "../components/ui/FormField";

type CalculatorForm = {
  name: string;
  mobile: string;
  bill: string;
  unitCost: string;
};

type CalculatorErrors = Partial<Record<keyof CalculatorForm, string>>;

type CalculatorResult = {
  units: number;
  systemSize: number;
  monthlySavings: number;
  annualSavings: number;
};

/*
 * Estimation formula (unchanged from the original page):
 * - monthly units  = bill / unit cost
 * - system size    = units / 120 per kW, rounded UP to the nearest 0.5 kW (min 1 kW)
 * - monthly saving = 80% of the bill
 * TODO (business): confirm these assumptions with the technical team.
 */
function estimate(bill: number, unitCost: number): CalculatorResult {
  const units = bill / unitCost;
  const systemSize = Math.max(1, Math.ceil((units / 120) * 2) / 2);
  const monthlySavings = bill * 0.8;

  return {
    units: Math.round(units),
    systemSize,
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(monthlySavings * 12),
  };
}

export default function SolarCalculator() {
  const [calculator, setCalculator] = useState<CalculatorForm>({
    name: "",
    mobile: "",
    bill: "",
    unitCost: "",
  });
  const [errors, setErrors] = useState<CalculatorErrors>({});
  const [calculatorResult, setCalculatorResult] = useState<CalculatorResult | null>(null);

  /** Updates one field and clears its error message as the user types. */
  const updateField = (field: keyof CalculatorForm, value: string) => {
    setCalculator((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleCalculatorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors: CalculatorErrors = {
      // Name and mobile are optional here, but if a mobile is typed it must be valid.
      mobile: validateIndianMobile(calculator.mobile, { required: false }),
      bill: validatePositiveNumber(calculator.bill, "monthly bill"),
      unitCost: validatePositiveNumber(calculator.unitCost, "unit cost"),
    };
    setErrors(nextErrors);

    if (!isValid(nextErrors)) {
      // Don't keep showing an old result for different, invalid input.
      setCalculatorResult(null);
      const firstInvalid = (Object.keys(nextErrors) as (keyof CalculatorForm)[]).find(
        (field) => nextErrors[field]
      );
      if (firstInvalid) document.getElementById(`calc-${firstInvalid}`)?.focus();
      return;
    }

    setCalculatorResult(estimate(Number(calculator.bill), Number(calculator.unitCost)));
  };

  return (
    <main className="bg-white text-neutral-900">

      <section
        id="solar-calculator"
        className="page-top relative overflow-hidden bg-ink pb-28"
      >
        {/* Background glow */}
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-orange-400/10 blur-3xl" />

        <Container className="relative z-10">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* LEFT CONTENT */}
            <div>

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-orange-400">
                Solar Calculator
              </p>

              <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
                Know your
                <br />
                <span className="text-white/40">
                  solar potential.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/55 md:text-lg">
                Find out how much you can save by switching to solar.
                Enter your electricity details and take the first step
                towards a smarter energy future.
              </p>

              {/* Small highlights */}
              <div className="mt-10 grid max-w-lg grid-cols-2 gap-6">

                <div className="border-l border-white/10 pl-5">
                  <p className="text-sm font-medium text-white">
                    Smart Calculation
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    Based on your electricity usage
                  </p>
                </div>

                <div className="border-l border-white/10 pl-5">
                  <p className="text-sm font-medium text-white">
                    Better Savings
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    Understand your solar requirement
                  </p>
                </div>

              </div>

            </div>


            {/* CALCULATOR CARD */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl md:p-8">

              <div className="mb-8">

                <p className="text-sm font-medium text-white">
                  Calculate Your Solar Requirement
                </p>

                <p className="mt-1 text-sm text-white/40">
                  Enter your details to get started.
                </p>

              </div>


              <form className="space-y-5" onSubmit={handleCalculatorSubmit} noValidate>

                <FormField
                  id="calc-name"
                  tone="dark"
                  label="Name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={calculator.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />

                <FormField
                  id="calc-mobile"
                  tone="dark"
                  label="Mobile Number"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={calculator.mobile}
                  onChange={(e) => updateField("mobile", e.target.value)}
                  error={errors.mobile}
                />

                <FormField
                  id="calc-bill"
                  tone="dark"
                  label="Monthly Electricity Bill"
                  type="number"
                  inputMode="decimal"
                  min={1}
                  required
                  prefix="₹"
                  placeholder="Enter monthly bill"
                  value={calculator.bill}
                  onChange={(e) => updateField("bill", e.target.value)}
                  error={errors.bill}
                />

                <FormField
                  id="calc-unitCost"
                  tone="dark"
                  label="Electricity Unit Cost"
                  type="number"
                  inputMode="decimal"
                  min={0.01}
                  step="0.01"
                  required
                  prefix="₹"
                  placeholder="Cost per unit"
                  value={calculator.unitCost}
                  onChange={(e) => updateField("unitCost", e.target.value)}
                  error={errors.unitCost}
                />


                {/* BUTTON */}
                <button
                  type="submit"
                  className="group mt-3 flex w-full items-center justify-center gap-3 rounded-xl bg-orange-400 px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-orange-300"
                >
                  Calculate Solar Potential

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

                {calculatorResult && (
                  <div className="mt-6 rounded-2xl border border-orange-400/20 bg-orange-400/10 p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange-300">
                      Estimated Solar Potential
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-2xl font-semibold text-white">{calculatorResult.systemSize} kW</p>
                        <p className="mt-1 text-xs text-white/40">Suggested system size</p>
                      </div>
                      <div>
                        <p className="text-2xl font-semibold text-white">₹{calculatorResult.monthlySavings.toLocaleString("en-IN")}</p>
                        <p className="mt-1 text-xs text-white/40">Estimated monthly savings</p>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-white/10 pt-4">
                      <p className="text-sm text-white/70">
                        Approx. annual savings: <span className="font-semibold text-white">₹{calculatorResult.annualSavings.toLocaleString("en-IN")}</span>
                      </p>
                      <p className="mt-2 text-xs leading-5 text-white/35">
                        Estimate based on your entered bill and unit cost. Final system sizing depends on site conditions and an expert assessment.
                      </p>
                    </div>
                  </div>
                )}

              </form>

            </div>

          </div>

        </Container>
      </section>


    </main>
  );
}