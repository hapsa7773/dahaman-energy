"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function SolarCalculator() {
  const [calculator, setCalculator] = useState({
    name: "",
    mobile: "",
    bill: "",
    unitCost: "",
  });

  const [calculatorResult, setCalculatorResult] = useState<{
    units: number;
    systemSize: number;
    monthlySavings: number;
    annualSavings: number;
  } | null>(null);

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bill = Number(calculator.bill);
    const unitCost = Number(calculator.unitCost);

    if (!bill || !unitCost) return;

    const units = bill / unitCost;

    const systemSize = Math.max(
      1,
      Math.ceil((units / 120) * 2) / 2
    );

    const monthlySavings = bill * 0.8;

    setCalculatorResult({
      units: Math.round(units),
      systemSize,
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(monthlySavings * 12),
    });
  };

  return (
    <main className="bg-white text-neutral-900">
      <Navbar />

      {/* SOLAR CALCULATOR SECTION WILL COME HERE */}
            <section
        id="solar-calculator"
        style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
        className="relative overflow-hidden bg-neutral-950 px-6 py-28 md:px-10 lg:px-12"
      >
        {/* Background glow */}
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* LEFT CONTENT */}
            <div>

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-orange-400">
                Solar Calculator
              </p>

              <h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
                Know your
                <br />
                <span className="text-white/40">
                  solar potential.
                </span>
              </h2>

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


              <form className="space-y-5" onSubmit={handleCalculatorSubmit}>

                {/* NAME */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    value={calculator.name}
                    onChange={(e) => setCalculator({ ...calculator, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-orange-400/60"
                  />
                </div>


                {/* MOBILE */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={calculator.mobile}
                    onChange={(e) => setCalculator({ ...calculator, mobile: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-orange-400/60"
                  />
                </div>


                {/* MONTHLY BILL */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
                    Monthly Electricity Bill
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                      ₹
                    </span>

                    <input
                      type="number"
                      placeholder="Enter monthly bill"
                      value={calculator.bill}
                      onChange={(e) => setCalculator({ ...calculator, bill: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-9 pr-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-orange-400/60"
                    />
                  </div>
                </div>


                {/* UNIT COST */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
                    Electricity Unit Cost
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                      ₹
                    </span>

                    <input
                      type="number"
                      placeholder="Cost per unit"
                      value={calculator.unitCost}
                      onChange={(e) => setCalculator({ ...calculator, unitCost: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-9 pr-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-orange-400/60"
                    />
                  </div>
                </div>


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

        </div>
      </section>


    </main>
  );
}