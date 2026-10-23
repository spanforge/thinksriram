export type InsightTopic = "career" | "business" | "technology-digital-safety" | "education";

export type Insight = {
  slug: string;
  type: "Analysis" | "Framework";
  title: string;
  summary: string;
  topic: InsightTopic;
  date: string;
  readTime: string;
  body: string;
};

export const INSIGHTS: Insight[] = [
  {
    slug: "delivery-reporting-that-supports-decisions",
    type: "Framework",
    title: "Delivery Reporting Should Make the Next Decision Easier",
    summary: "A practical test for whether project reporting is helping leaders act or simply documenting activity.",
    topic: "business",
    date: "2026-09-24",
    readTime: "5 min read",
    body: `## The purpose of a delivery report

A delivery report is useful when it helps someone make a better decision. It should clarify what has changed, why it matters, who owns the response and when the situation will be reviewed again.

Many reports become collections of activity: meetings held, tasks completed, percentages updated and risks copied from the previous week. The information may be accurate, but accuracy alone does not make it useful.

## Start with the decision

Before adding a measure or status field, ask who will read it and what decision that person may need to make. A delivery lead may need to rebalance capacity. A sponsor may need to resolve a dependency. A customer may need to choose between scope, time and cost.

When the required decision is clear, the report becomes easier to design. Detail that does not support the decision can move to supporting material.

## Four questions every report should answer

1. What changed since the previous review?
2. What consequence could follow if no action is taken?
3. What decision or support is required, and from whom?
4. When will the result be reviewed?

This structure turns a risk from a label into a management conversation. It also makes ownership visible without creating a larger reporting burden.

## Keep evidence close to the conclusion

A status should be supported by a small amount of relevant evidence. This could be a missed dependency date, a repeated defect pattern, an unresolved acceptance decision or a material change in available capacity.

The aim is not to place every project artefact in front of leadership. It is to make the reasoning behind the status understandable and open to challenge.

## Review whether the report changes behaviour

A report can look polished and still have little value. Review whether risks are resolved earlier, decisions are made faster and owners leave the discussion knowing what they must do next. If the same issues appear week after week without a decision, the reporting process needs attention.`
  },
  {
    slug: "sales-to-delivery-handover",
    type: "Framework",
    title: "Make Sales Commitments Survive the Handover to Delivery",
    summary: "A simple way to expose assumptions, dependencies and ownership before a proposal becomes a delivery problem.",
    topic: "business",
    date: "2026-09-17",
    readTime: "6 min read",
    body: `## The handover is a decision point

The move from sales to delivery is often treated as an administrative transfer. In practice, it is the point at which commercial language must become an executable commitment.

Delivery problems begin when important assumptions remain implicit. A timeline may depend on customer access, a specialist may be shared across projects, or an estimate may exclude work that the customer believes is included.

## Translate the promise

The delivery team should be able to explain the promised outcome, the boundaries of the work and the conditions required for success. If the team can only repeat proposal wording, the handover is incomplete.

A useful handover covers:

1. The customer outcome and how it will be accepted
2. Scope boundaries and material exclusions
3. Assumptions that affect effort or schedule
4. Customer and supplier dependencies
5. Named owners for unresolved decisions
6. The first point at which progress will be reviewed

## Separate facts from confidence

Teams sometimes inherit a confident date without seeing the evidence behind it. Record what is known, what is estimated and what still needs confirmation. This allows leaders to manage uncertainty instead of hiding it inside a single status.

## Keep commercial context visible

Delivery needs to understand why a commitment matters. It may protect a customer milestone, enable a later phase or respond to a competitive promise. That context helps teams make sensible trade-offs when circumstances change.

## Close the loop

The handover should improve future selling as well as current delivery. At the end of an engagement, compare the original assumptions with what happened. Feed recurring gaps back into discovery, estimation and proposal review. The goal is a learning system across sales and delivery, not a larger checklist.`
  },
  {
    slug: "choose-ai-use-cases-before-tools",
    type: "Analysis",
    title: "Choose the AI Use Case Before Choosing the Tool",
    summary: "A disciplined way to test whether an AI idea solves a useful problem and can be adopted responsibly.",
    topic: "technology-digital-safety",
    date: "2026-09-10",
    readTime: "5 min read",
    body: `## Start with work, not a product

Technology adoption becomes difficult when a tool is selected before the work is understood. Teams then search for places to use it, measure activity instead of value and create new steps around an unclear purpose.

A stronger starting point is a recurring problem: slow access to information, repeated drafting, inconsistent classification or a decision that lacks timely evidence.

## Describe the current workflow

Map where information enters, who makes a judgment, what output is created and what can go wrong. This makes it possible to distinguish a useful AI contribution from work that still needs accountable human judgment.

## Test five conditions

1. The problem occurs often enough to matter
2. The required information can be used appropriately
3. The output can be checked before it causes harm
4. A person remains accountable for the decision
5. Success can be observed in quality, time or experience

If these conditions are weak, a pilot may produce an impressive demonstration without a sustainable improvement.

## Define the boundary

Teams need to know what information should not be entered, when output must be verified and when the tool should not be used. These boundaries are part of adoption, not an appendix to it.

## Measure the change in work

Usage is not the same as value. Review whether the workflow became clearer, faster or more reliable. Also look for displaced effort: time saved in drafting may reappear as time spent correcting, formatting or checking output.

A useful technology decision connects the tool to a defined problem, a responsible workflow and an observable outcome.`
  },
  {
    slug: "practical-learning-reveals-understanding",
    type: "Framework",
    title: "Practical Learning Should Reveal What a Student Understands",
    summary: "Why application, explanation and revision can show more than completion alone.",
    topic: "education",
    date: "2026-09-03",
    readTime: "5 min read",
    body: `## Completion is only one signal

A submitted assignment shows that work was produced. It does not always show how a student understood the problem, selected an approach or responded when an assumption failed.

Practical learning creates opportunities for that reasoning to become visible.

## Ask students to explain choices

A short explanation can reveal whether a student understands why a method fits the problem. It can also surface uncertainty that a polished final submission conceals.

The explanation does not need to become another large assessment. A brief oral review, annotated decision or reflection on a changed assumption may be enough.

## Include moments of revision

Real work rarely moves directly from instruction to a perfect result. Milestones and feedback allow students to revise their approach and demonstrate how they use evidence.

This also changes the role of feedback. It becomes part of the learning process rather than a comment delivered after the opportunity to improve has passed.

## Use AI without hiding the learning

Students may use AI to explore ideas, organise material or test an explanation. The learning design should still make their judgment visible. Asking what was accepted, rejected, verified or changed is often more useful than asking only whether a tool was used.

## Adapt the method to the subject

An engineering project, a literature analysis and a business case require different evidence of understanding. The common principle is that students should be able to apply knowledge, explain a choice and examine the result.

Practical learning is strongest when the activity and the evidence both serve the intended learning outcome.`
  },
  {
    slug: "seniority-trap-mid-career-ai-risk",
    type: "Analysis",
    title: "The Seniority Trap: When Experience Needs a Different Role",
    summary: "Why structural change can place pressure on experienced specialists and managers, and what to examine next.",
    topic: "career",
    date: "2026-05-14",
    readTime: "6 min read",
    body: `## Expertise can remain valuable while a role changes

Mid-career professionals often hold deep knowledge, internal trust and responsibility for coordinating other people’s work. Those strengths matter, but the structure around the role can still change when technology reduces the effort required for repeatable analysis, drafting or coordination.

The useful question is not whether experience has value. It is where that experience influences decisions, relationships and outcomes that remain important as tasks change.

## Look beyond the job title

Two people with the same title can face different exposure. One may spend most of the week producing standard outputs. Another may frame ambiguous problems, negotiate trade-offs and remain accountable when evidence is incomplete.

A role review should examine actual tasks, the context in which they are performed and the consequences of error.

## Signals worth examining

1. Core deliverables are repeatable and largely digital
2. Seniority depends mainly on depth in one stable process
3. The role coordinates work that tools increasingly simplify
4. Important relationships are internal and tied to the current structure

These signals are prompts for investigation rather than a prediction of job loss.

## Move toward judgment and ownership

Repositioning often means changing what you are accountable for. A specialist can move from producing an analysis to defining the question, checking the evidence and helping others act on the conclusion.

This does not remove the need for technical skill. It connects that skill to a decision, customer outcome or operating responsibility that others can recognise.

## Build evidence before pressure rises

A practical next step is to identify one area where you can own a clearer outcome, use new tools responsibly and show the quality of your judgment. Small, visible evidence is more useful than a broad claim that you are adaptable.`
  },
];
