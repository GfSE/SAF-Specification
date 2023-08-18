# Decision Gates

This article views decision gates from a Systems Engineering perspective
Some possible decision gates in a development process may be
 * System Concept Review (SCR)
 * System Requirements Review (SRR)
 * [Preliminary Design Review (PDR)](preliminarydesignreview.md)
 * Critical Design Review (CDR)


## Decision Gates Concept

A Decision Gate is a major decision point in a project.
Its purpose is to
* prevent the beginning of subsequent activities that are dependent on previous activities, before the previous activities are satisfactorily completed and baselined.
* make sure the handover of process products to subsequent process activities works
 
 Satisfactorily in this context means, that the risk(s) to proceed are identified and acceptable to engineering stakeholders.

Normally, a decision gate requires the evaluation of the previous activities outcome by engineering stakeholders, including those using the outcome in the subsequent activities. This is to achieve commitment that the project can proceed along the development process orderly.

The evaluation of previous activities is usually conducted in form of Reviews on process artefacts. Review Checklists assists in both creation of process artefacts and review execution.

## Decision Gate Result
The possible result of a Decision Gate can be:
 * Acceptable : Proceed with project.
 * Acceptable with reservations : Proceed and respond to action items.
 * Unacceptable: Do not proceed, resolve problems that led to the rejection and repeat review.
 * Unsalvagable: Abort project

Upon successful completion, the baseline shall be changed only under configuration control and agreement of the involved engineering stakeholders.

## Decision Gate Definition
A decision gate definition shall include:
 * purpose of the decision gate
 * outcome of activities to be evaluated
 * required engineering stakeholders
 * individual acceptance criteria for each engineering stakeholder
 * engineering stakeholder responsible for decision gate

The preparation and execution of an Decision Gate is often called a Review, but it consists of two phases
 * preparation
   * the outcome of previous activities needed for the decision is baselined and provided to the engineering stakeholders
   * the engineering stakeholders evaluate the outcome according to their acceptance criteria and pass the result
 * execution of decision gate
   * the engineering stakeholders present their evaluation result
   * a decision is taken according to the results

## Pitfalls
### No Measurement	

Since the assessment and control activities are highly dependent on insightful measurement information, it is usually ineffective to proceed independently from the measurement efforts - what you get is what you measure.

### "Something in Time" Culture
Some things are easier to measure than others - for instance, delivery to cost and schedule. Don't focus on these and neglect harder things to measure like quality of the system. Avoid a "something in time" culture where meeting the schedule takes priority over everything else, but what is delivered is not fit for purpose, which results in the need to rework the project.
### No Teeth
	
Make sure that the technical review gates have "teeth". Sometimes the project manager is given authority (or can appeal to someone with authority) to over-ride a gate decision and allow work to proceed, even when the gate has exposed significant issues with the technical quality of the system or associated work products. This is a major risk if the organization is strongly schedule-driven; it can't afford the time to do it right, but somehow it finds the time to do it again (rework).

### Too Early Baselining
Don't baseline requirements or designs too early. Often there is strong pressure to baseline system requirements and designs before they are fully understood or agreed, in order to start subsystem or component development. This just guarantees high levels of rework.

## Good Practices
### Independence
Provide independent (from customer) assessment and recommendations on resources, schedule, technical status, and risk based on experience and trend analysis.

### Peer Reviews
Use peer reviews to ensure the quality of a products work before they are submitted for gate review.

### Accept Uncertainty
Communicate uncertainties in requirements or designs and accept that uncertainty is a normal part of developing a system.

### Risk Mitigation Plans
Do not penalize a project at gate review if they admit uncertainty in requirements - ask for their risk mitigation plan to manage the uncertainty.

### Just In-Time Baselining
Baseline requirements and designs only when you need to - when other work is committed based on the stability of the requirement or design. If work has to start and the requirement or design is still uncertain, consider how you can build robustness into the system to handle the uncertainty with minimum rework.

### Communication
Document and communicate status findings and recommendations to stakeholders.

### Full Visibility
Ensure that action items and action-item status, as well as other key status items, are visible to all project participants.

### Leverage Previous Root Cause Analysis
When performing root cause analysis, take into account the root cause and resolution data documented in previous related findings/discrepancies.

### Concurrent Management
Plan and perform assessment and control concurrently with the activities for Measurement and Risk Management.

### Lessons Learned and Post-Mortems
Hold post-delivery assessments or post-project reviews to capture knowledge associated with the project – e.g., to augment and improve estimation models, lessons learned databases, gate review checklists, etc.

# References
 * [Defense Aquisition Guide Book Chapter 3](https://ac.cto.mil/wp-content/uploads/2022/02/Eng-Defense-Systems_Feb2022-Cleared-slp.pdf)
 * [Systems Engineering Body of Knowledge](https://sebokwiki.org/wiki/Guide_to_the_Systems_Engineering_Body_of_Knowledge_(SEBoK))
 * [ Visualizing Project Management](https://www.amazon.com/Visualizing-Project-Management-Frameworks-Mastering/dp/0471648485)
