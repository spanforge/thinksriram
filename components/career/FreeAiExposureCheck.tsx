"use client";

import { useMemo, useState } from "react";
import { track } from "@/lib/career/analytics";
import Link from "next/link";

const ROLES = [
  ["QA / Manual Testing", "QA Engineer Survival Guide 2026", "/guides/qa-engineer-survival-guide-2026"],
  ["Selenium / Automation Testing", "Selenium Engineer Upgrade Guide 2026", "/guides/selenium-engineer-upgrade-guide-2026"],
  ["Cloud Engineer", "Cloud Engineer AI Survival Guide 2026", "/guides/cloud-engineer-ai-survival-guide-2026"],
  ["Java Developer", "Java Developer AI Leverage Guide 2026", "/guides/java-developer-ai-leverage-guide-2026"],
  ["Business Analyst", "Business Analyst Survival Guide 2026", "/guides/business-analyst-survival-guide-2026"],
  ["BA to AI PM Transition", "Business Analyst to AI Product Manager Career Transition Guide 2026", "/guides/ba-to-ai-pm-guide-2026"],
  ["DevOps Engineer", "DevOps Survival Guide 2026", "/guides/devops-survival-guide-2026"],
  ["Data Engineer", "Data Engineer AI Survival Guide 2026", "/guides/data-engineer-ai-survival-guide-2026"],
  ["Data Analyst", "Data Analyst Career Guide 2026", "/guides/data-analyst-career-guide-2026"],
  ["BPO / Customer Support", "BPO & Customer Support Career Survival Guide 2026", "/guides/bpo-career-survival-guide-2026"],
  ["HR / Recruiter", "HR Recruiter Survival Guide 2026", "/guides/hr-recruiter-survival-guide-2026"],
  ["Project / Delivery Manager", "Project Manager / Delivery Manager Survival Guide 2026", "/guides/project-delivery-manager-survival-guide-2026"],
  ["FDE (Forward Deployed Engineer)", "FDE Career Transition Guide 2026", "/guides/fde-career-transition-guide-2026"],
  ["Fresher / Student", "Fresher AI Survival Guide", "/guides/fresher-ai-survival-guide"],
  ["Other / Not listed", "Browse all career guides", "/guides"],
] as const;

type Question = {
  key: string;
  title: string;
  options: readonly { label: string; points: number }[];
  dimension?: string;
  insight?: string;
};

const QUESTIONS: readonly Question[] = [
  { key: "experience", title: "How many years of experience do you have?", options: [
    { label: "Less than 2 years", points: 10 }, { label: "2–5 years", points: 5 },
    { label: "5–10 years", points: 0 }, { label: "10+ years", points: -5 },
  ]},
  { key: "repeatability", title: "How much of your day-to-day work is repeatable and rule-based?", options: [
    { label: "1 — Mostly judgment calls", points: 0 }, { label: "2", points: 15 },
    { label: "3 — A balanced mix", points: 30 }, { label: "4", points: 45 },
    { label: "5 — Mostly repeatable tasks", points: 60 },
  ], dimension: "Task Repeatability", insight: "A large share of your day-to-day work is repeatable — that is the single biggest factor behind your score."},
  { key: "aiAdoption", title: "Are you currently using AI tools in your daily work?", options: [
    { label: "Not at all", points: 20 }, { label: "A little, occasionally", points: 12 },
    { label: "Regularly", points: 6 }, { label: "Heavily embedded in my workflow", points: 0 },
  ], dimension: "AI Tool Adoption", insight: "You are not yet using AI tools regularly — closing that gap alone would move your score."},
  { key: "automationHistory", title: "Has your organization automated or reduced any part of your role using AI in the last 12 months?", options: [
    { label: "Yes", points: 20 }, { label: "No", points: 0 }, { label: "Not sure", points: 10 },
  ], dimension: "Automation History", insight: "Your organization has already started automating parts of this role — a forward signal, not a hypothetical."},
  { key: "confidence", title: "If AI tools got twice as capable in the next 12 months, how confident are you that your role stays essential?", options: [
    { label: "1 — Not confident at all", points: 20 }, { label: "2", points: 15 },
    { label: "3 — Somewhat confident", points: 10 }, { label: "4", points: 5 },
    { label: "5 — Very confident", points: 0 },
  ], dimension: "Role Confidence", insight: "You are not fully confident your role stays essential as AI improves — worth addressing directly."},
];

type Stage = "intro" | "role" | "questions" | "result";

export default function FreeAiExposureCheck() {
  const [stage, setStage] = useState<Stage>("intro");
  const [roleIndex, setRoleIndex] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const score = useMemo(() => {
    const total = QUESTIONS.reduce((sum, question) => {
      const answer = answers[question.key];
      return sum + (answer === undefined ? 0 : question.options[answer].points);
    }, 0);
    return Math.round(((total + 5) / 135) * 100);
  }, [answers]);

  const weakest = useMemo(() => QUESTIONS.slice(1).reduce<Question | null>((current, question) => {
    const answer = answers[question.key];
    if (answer === undefined) return current;
    const ratio = question.options[answer].points / Math.max(...question.options.map((option) => option.points));
    if (!current) return question;
    const currentAnswer = answers[current.key];
    const currentRatio = current.options[currentAnswer].points / Math.max(...current.options.map((option) => option.points));
    return ratio > currentRatio ? question : current;
  }, null), [answers]);

  const band = score <= 35
    ? { label: "Low Exposure", color: "#1a4fd6", bg: "#eef3ff", copy: "You are ahead of the curve. Your work leans on judgment AI cannot easily replace yet — staying ahead remains an active choice." }
    : score <= 65
      ? { label: "Moderate Exposure", color: "#b45309", bg: "#fdf3e9", copy: "Parts of your role overlap with what AI tools do well. The gap is closable, but it takes a deliberate plan." }
      : { label: "High Exposure", color: "#b45309", bg: "#fdf3e9", copy: "A meaningful share of your work overlaps with what AI already does well. It is worth acting while you have the most options." };

  const question = QUESTIONS[questionIndex];
  const guideName = roleIndex === null ? "Matched Career Guide" : ROLES[roleIndex][1];
  const guideHref = roleIndex === null ? "/guides" : ROLES[roleIndex][2];

  function begin() {
    track("Free Assessment Start");
    setStage("role");
  }

  function nextQuestion() {
    if (questionIndex < QUESTIONS.length - 1) setQuestionIndex((value) => value + 1);
    else {
      track("Free Assessment Complete", { score, band: band.label });
      setStage("result");
    }
  }

  return (
    <section className="assessment-shell">
      <div className="assessment-card">
        <p className="assessment-eyebrow">Sriram Advisory · Free Tool</p>

        {stage === "intro" && <div className="assessment-center">
          <div className="assessment-icon" aria-hidden="true">✦</div>
          <h1>Free AI Exposure Check</h1>
          <p>Six quick questions. Get a directional view of how exposed your role is to AI and what to do next.</p>
          <button className="assessment-primary" onClick={begin}>Start the free check <span>→</span></button>
          <small>No signup required to see your result · About 2 minutes</small>
        </div>}

        {stage === "role" && <div>
          <Progress current={1} />
          <p className="assessment-step">Question 1 of 6</p>
          <h2>What best describes your current role?</h2>
          <select value={roleIndex ?? ""} onChange={(event) => setRoleIndex(Number(event.target.value))}>
            <option value="" disabled>Select your role</option>
            {ROLES.map(([role], index) => <option value={index} key={role}>{role}</option>)}
          </select>
          <div className="assessment-actions"><button className="assessment-secondary" onClick={() => setStage("intro")}>← Back</button><button className="assessment-primary" disabled={roleIndex === null} onClick={() => setStage("questions")}>Next →</button></div>
        </div>}

        {stage === "questions" && <div>
          <Progress current={questionIndex + 2} />
          <p className="assessment-step">Question {questionIndex + 2} of 6</p>
          <h2>{question.title}</h2>
          <div className="assessment-options">{question.options.map((option, index) => <button key={option.label} className={answers[question.key] === index ? "selected" : ""} onClick={() => setAnswers((current) => ({ ...current, [question.key]: index }))}>{option.label}</button>)}</div>
          <div className="assessment-actions"><button className="assessment-secondary" onClick={() => questionIndex ? setQuestionIndex((value) => value - 1) : setStage("role")}>← Back</button><button className="assessment-primary" disabled={answers[question.key] === undefined} onClick={nextQuestion}>{questionIndex === QUESTIONS.length - 1 ? "See my result" : "Next →"}</button></div>
        </div>}

        {stage === "result" && <div>
          <div className="assessment-center assessment-result"><p className="assessment-step">Your result</p><div className="assessment-score">{score}<span>/100</span></div><strong style={{ color: band.color, background: band.bg }}>{band.label}</strong><p>{band.copy}</p></div>
          {weakest && <div className="assessment-insight"><b>Your biggest factor: {weakest.dimension}</b><span>{weakest.insight}</span></div>}
          <div className="assessment-lead">
            <h3>A relevant next resource</h3>
            <p>{guideName}</p>
            <Link className="assessment-primary" href={guideHref} onClick={() => track("Free Assessment Recommendation", { role: ROLES[roleIndex ?? 14][0], score })}>Review this guide →</Link>
          </div>
        </div>}
      </div>
      <p className="assessment-footnote">A directional lite assessment built on the SA-AIRS™ framework.</p>
    </section>
  );
}

function Progress({ current }: { current: number }) {
  return <div className="assessment-progress" aria-label={`Question ${current} of 6`}><span style={{ width: `${(current / 6) * 100}%` }} /></div>;
}
