export const consultingResources = [
  {
    slug: "problem-framing-worksheet", title: "Problem-framing worksheet", summary: "Separate the situation, evidence and assumptions before committing to a solution.",
    kind: "worksheet", sections: [
      { title: "1. Describe what is happening", body: "Write one observable problem, where it occurs and who is affected. Replace broad labels such as ‘poor productivity’ with a specific recurring pattern.", prompts: ["What happened, and how often?", "What consequence matters to the business?", "What is within this discussion's scope?"] },
      { title: "2. Separate evidence from explanations", body: "Record what you have observed before explaining why it happens. Include the date, source and limits of each observation.", prompts: ["What do we know from evidence?", "What are we assuming?", "What other explanation could fit the same evidence?"] },
      { title: "3. Define a useful outcome", body: "Describe the change you want to observe, without deciding the intervention in advance.", prompts: ["What would improve for customers or the team?", "How would we recognise progress?", "What must not get worse?"] },
      { title: "4. Choose the next question", body: "Identify the smallest useful evidence-gathering step before buying a tool, booking training or redesigning a process.", prompts: ["Which unanswered question changes the decision?", "Who can help answer it?", "When will we review what we learn?"] },
    ],
  },
  {
    slug: "sprint-deliverables-example", title: "Sample Sprint deliverables", summary: "Inspect a fictional problem brief, decision note and 30-day action plan for recurring delivery interruptions.", kind: "sample", sections: [
      { title: "Problem brief", body: "Fictional situation: a delivery team repeatedly misses agreed commitments. The sponsor has proposed productivity training. The question is which constraint to address first; this example covers one team and one work queue.", prompts: ["Evidence to collect: active work, blocked decisions, priority changes and repeated work over an agreed observation period.", "Assumptions to test: a skill gap, excessive concurrent work, or delays in decisions.", "Useful outcome: more predictable completion, without increasing overtime or reducing quality."] },
      { title: "Decision note", body: "Provisional recommendation: examine interruptions and decision delays before commissioning training. This is a hypothesis, not a finding from an actual client engagement.", prompts: ["Option A: training, if observations show a specific skill gap.", "Option B: a bounded work-in-progress experiment, if interruptions and blocked decisions dominate.", "Decision condition: review the evidence with the team before selecting an intervention. Record remaining uncertainty and what would change the recommendation."] },
      { title: "30-day action plan", body: "A fictional sequence showing the level of specificity an agreed action plan can contain. Actual actions, owners and dates depend on the engagement.", prompts: ["Days 1–7 · Delivery lead: establish the baseline and record where work waits.", "Days 8–14 · Team lead and sponsor: agree one experiment and an owner for blocked decisions.", "Days 15–21 · Team: test the agreed change and review interruptions weekly.", "Days 22–30 · Sponsor and team: compare completion time, blocked items, rework and workload with the baseline; decide whether to continue, adjust or stop."] },
      { title: "Readout and handover", body: "Discuss the reasoning, challenge the assumptions and record decisions. A sample shows format and depth; it does not promise these findings or results for another organisation.", prompts: ["What was decided, by whom and on what evidence?", "What remains uncertain?", "What support, if any, needs a separate scope?"] },
    ],
  },
  {
    slug: "decision-note-template", title: "Decision-note template", summary: "Make options, evidence, trade-offs and ownership visible in a concise decision record.", kind: "template", sections: [
      { title: "The decision", body: "State the question, decision owner, deadline and intended outcome.", prompts: ["We need to decide…", "The accountable owner is…", "The decision is needed by… because…"] },
      { title: "Evidence and uncertainty", body: "Distinguish observations from assumptions. Record source dates and material gaps.", prompts: ["Evidence we have…", "Assumptions we are making…", "Information that could change the recommendation…"] },
      { title: "Options and trade-offs", body: "Include continuing the current approach where relevant. Compare practical implications rather than listing features.", prompts: ["Option and expected contribution to the outcome…", "Cost, effort, dependencies and risks…", "What would make this option unsuitable…"] },
      { title: "Decision and review", body: "Record the chosen direction, reasoning, first action and review point.", prompts: ["We chose… because…", "First action, owner and date…", "We will review… using…", "We will reconsider if…"] },
    ],
  },
  {
    slug: "sales-delivery-handover-checklist", title: "Sales-to-delivery handover checklist", summary: "Check commitments, assumptions, dependencies and acceptance before delivery begins.", kind: "checklist", sections: [
      { title: "The promise", body: "Confirm the intended customer outcome and the actual commitments in the agreed proposal.", prompts: ["Scope, exclusions and acceptance criteria are explicit.", "Dates and commercial assumptions match the delivery plan.", "Unresolved promises are visible to the delivery owner."] },
      { title: "The conditions", body: "Identify what delivery depends on, including customer decisions and access.", prompts: ["Dependencies have owners and required dates.", "Staffing and capability assumptions have been checked.", "Customer inputs, approvals and access are agreed."] },
      { title: "Ownership and escalation", body: "Make it clear who acts when reality differs from the original assumptions.", prompts: ["A delivery owner has accepted the handover.", "Risks and open questions have named owners.", "The change and escalation route is understood by both teams."] },
      { title: "The first review", body: "Schedule a review early enough to resolve gaps before they become missed commitments.", prompts: ["The first review date and attendees are agreed.", "Unresolved decisions are carried into the working plan.", "The handover record is accessible to the people responsible for delivery."] },
    ],
  },
] as const;
