import type { ConceptHowItWorks } from "@/types/content";

interface ConceptHowItWorksProps {
  howItWorks: ConceptHowItWorks;
}

export function ConceptHowItWorksSection({ howItWorks }: ConceptHowItWorksProps) {
  return (
    <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50/40 p-4 sm:p-5">
      <h4 className="text-sm font-semibold text-slate-900">How It Works</h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{howItWorks.summary}</p>

      {/* Flow diagram */}
      <div className="mt-5 overflow-x-auto" role="img" aria-label="Session management flow diagram">
        <div className="flex min-w-[280px] flex-col items-center gap-0">
          {howItWorks.steps.map((step, index) => (
            <div key={step.step} className="flex w-full max-w-md flex-col items-center">
              <div className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-center shadow-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  {step.step}
                </span>
                <p className="mt-2 text-sm font-medium text-slate-900">{step.title}</p>
              </div>
              {index < howItWorks.steps.length - 1 && (
                <div className="flex flex-col items-center py-1 text-blue-400" aria-hidden="true">
                  <div className="h-4 w-px bg-blue-300" />
                  <span className="text-lg leading-none">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step details */}
      <ol className="mt-5 space-y-3">
        {howItWorks.steps.map((step) => (
          <li key={step.step} className="flex gap-3 text-sm">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
              {step.step}
            </span>
            <div>
              <p className="font-medium text-slate-900">{step.title}</p>
              <p className="mt-0.5 leading-relaxed text-slate-600">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
