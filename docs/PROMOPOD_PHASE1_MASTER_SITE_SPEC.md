# PROMOPOD PHASE 1 MASTER SITE SPECIFICATION
Version: Phase 1 Foundation Build
Project: PROMOPOD
Domain: promopod.co.za

============================================================
GLOBAL BUILD DIRECTIVE — CLEAN REBUILD REQUIRED
============================================================

Claude Code must:

1. Delete all existing HTML files
2. Delete all existing CSS files
3. Delete unused assets
4. Preserve only:

/assets/fonts (if present)
/assets/images (if present)

5. Rebuild the entire Phase 1 site from scratch
6. Follow this specification exactly
7. Maintain full consistency across all pages
8. Apply the defined design system globally
9. Generate responsive layouts
10. Push changes automatically

FINAL COMMANDS REQUIRED:

git add .
git commit -m "Phase 1 Clean Rebuild from Master Specification"
git push

============================================================
SECTION 1 — GLOBAL PROJECT IDENTITY
============================================================

Project Name:
PROMOPOD

Domain:
promopod.co.za

Tagline:
Understand Your Biology. Trade With Discipline.

Platform Definition:

Promopod is a:

Neuroscience-Driven Trading Discipline Platform

It is designed to help traders:

• Understand biological triggers
• Recognize emotional reactions
• Train discipline
• Regulate nervous system responses
• Improve behavioral consistency
• Reduce impulsive decisions
• Strengthen long-term trading performance

Promopod is NOT:

• A trading signal platform
• A strategy provider
• A financial advisory service
• A market prediction tool

Promopod IS:

A behavioral performance system.

Core Mission:

To help traders train their nervous system to handle market pressure.

Not just:

• Improve mindset
• Learn strategies

But:

• Understand biology
• Recognize triggers
• Build emotional regulation
• Develop disciplined execution

============================================================
SECTION 2 — BRAND PERSONALITY & TONE SYSTEM
============================================================

Primary Personality:

Calm Authority

Supporting Traits:

Scientific
Structured
Analytical
Minimalist
Trustworthy
Performance-focused
Disciplined

Communication Tone:

Hybrid:
Scientific + Practical

Language Requirements:

Must be:

• Clear
• Calm
• Analytical
• Grounded
• Accessible
• Non-academic

Must NEVER be:

• Hype-driven
• Emotional
• Sales-heavy
• Gambling-oriented

Example Tone:

Incorrect:

"Master your mindset and crush the markets!"

Correct:

"Loss activates the brain's threat response.
Understanding this response improves decision control."

============================================================
SECTION 3 — VISUAL DESIGN SYSTEM
============================================================

Primary Theme:

Dark Interface

Primary Background:
#0B0F14

Secondary Background:
#141A22

Primary Accent:
#00D1C1

Secondary Accent:
#4DA3FF

Warning Accent:
#FFC857

Typography:

Primary Fonts:

Inter
Manrope
IBM Plex Sans

Font Hierarchy:

H1 — Bold
H2 — Semi-bold
H3 — Medium
Body — Regular
Labels — Medium

Max Content Width:

1200px

Layout Spacing:

Section Padding:
80px top
80px bottom

Card Padding:
24px

Corner Radius:

16px

Shadow Style:

Soft minimal shadow
Low contrast
Subtle glow allowed on hover

Animation Rules:

Allowed:

• Soft fade-in
• Gentle hover glow
• Smooth transitions

Avoid:

• Flashy animations
• Rapid motion
• Excessive movement

============================================================
SECTION 4 — STARTER TEMPLATE SYSTEM MAPPING
============================================================

Template Source:

https://startersites.io/blocksy/app/

Promopod uses:

Section-Based Layout Model.

Template Mapping:

Hero Section
→ Promopod Core Message

Feature Grid
→ Core Platform Pillars

Content Blocks
→ Neuroscience Education

CTA Section
→ Join Beta Conversion

Footer
→ Navigation + Legal + Branding

Template Reuse Philosophy:

Preserve layout structure
Replace placeholder content
Maintain responsive behavior

Do NOT redesign template layout.

Replace only content.

============================================================
SECTION 5 — GLOBAL LAYOUT RULES
============================================================

Every page must include:

Navbar
Hero
Content Sections
CTA Section
Footer

Spacing Rules:

Between Sections:

80px minimum

Between Cards:

24px

Text Line Height:

1.6

Paragraph Max Width:

750px

Layout Alignment:

Centered content
Consistent vertical spacing

============================================================
SECTION 6 — GLOBAL COMPONENT LIBRARY
============================================================

Claude must generate reusable components.

Component List:

NAVBAR

Includes:

Logo Left
Navigation Menu Right

Menu Items:

Home
Why Traders Fail
Neuroscience
Discipline Pods
AI Coaching
Voice
Funded Traders
Join Beta

Behavior:

Sticky top navigation
Background blur on scroll

------------------------------------------------------------

HERO COMPONENT

Includes:

Headline
Subheadline
Primary CTA
Secondary CTA

Layout:

Centered

Max Width:

800px

------------------------------------------------------------

FEATURE CARD COMPONENT

Includes:

Icon
Title
Description

Layout:

Vertical

Hover Behavior:

Soft glow

------------------------------------------------------------

CONTENT BLOCK

Includes:

Section Title
Subheading
Paragraph Content

Layout:

Stacked vertical

------------------------------------------------------------

CTA COMPONENT

Includes:

Headline
Short text
Primary Button

Primary CTA:

Join Beta

------------------------------------------------------------

FOOTER COMPONENT

Includes:

Navigation Links
Copyright
Tagline

Footer Tagline:

Understand Your Biology. Trade With Discipline.

============================================================
SECTION 7 — NAVIGATION STRUCTURE
============================================================

Primary Navigation:

Home
Why Traders Fail
Neuroscience
Discipline Pods
AI Coaching
Voice Journaling
Funded Traders
Join Beta

Mobile Navigation:

Hamburger Menu

Slide-in panel.

============================================================
SECTION 8 — FILE STRUCTURE RULES
============================================================

Required Output:

promopod-site/

index.html

why-traders-fail.html

neuroscience-of-trading.html

discipline-pods.html

ai-coach.html

voice-journaling.html

funded-traders.html

join-beta.html

assets/

css/
main.css

js/
main.js

images/
fonts/

============================================================
SECTION 9 — RESPONSIVE DESIGN RULES
============================================================

Desktop:

Max width 1200px

Tablet:

Stack grid elements

Mobile:

Single-column layout

Font Scaling:

H1 smaller on mobile
Paragraph spacing increased

Buttons:

Full width on mobile.

============================================================
END OF PART A
============================================================

============================================================
PART B — HOMEPAGE MASTER CONTENT
Page File: index.html
============================================================

PAGE PURPOSE:

The homepage introduces the core problem,
explains the biological cause,
and presents Promopod as the solution.

Primary Psychological Objective:

Create realization:

"My problem is biological — not technical."

Secondary Objective:

Build belief in neuroscience-based discipline training.

Primary CTA:

Join Beta

============================================================
HOMEPAGE STRUCTURE OVERVIEW
============================================================

The homepage must contain:

1 — Hero Section
2 — Hidden Problem Section
3 — Biology of Trading Failure Section
4 — Promopod Solution Section
5 — Discipline Pods Section
6 — AI Behavioral Coaching Section
7 — Nervous System Training Section
8 — Voice Logging Section
9 — Who It's For Section
10 — Join Beta CTA Section

============================================================
SECTION 1 — HERO
============================================================

Layout:

Centered

Max Width:

800px

Background:

Primary Background (#0B0F14)

------------------------------------------------------------

Headline (H1):

Trading Discipline Is Not a Strategy Problem.

Subheadline:

Most traders fail because their biology overrides their discipline.

Promopod trains the nervous system to improve behavioral control under pressure.

------------------------------------------------------------

Primary CTA Button:

Join Beta

Button Style:

Accent color (#00D1C1)

------------------------------------------------------------

Secondary CTA Button:

Learn How It Works

------------------------------------------------------------

Tone Requirements:

Calm  
Scientific  
Direct  
Confident  
Minimal hype  

============================================================
SECTION 2 — THE HIDDEN PROBLEM
============================================================

Section Title:

The Problem Most Traders Never Identify

------------------------------------------------------------

Body Content:

Most traders believe failure is caused by poor strategy.

They spend years searching for better indicators,
better systems,
and better market timing.

But the real problem is rarely technical.

It is biological.

Loss triggers stress.
Stress triggers impulse.
Impulse overrides discipline.

Even skilled traders fail when their nervous system reacts faster than their logic.

------------------------------------------------------------

Psychological Goal:

Shift belief from:

"I need a better strategy"

To:

"I need better regulation"

============================================================
SECTION 3 — THE BIOLOGY OF TRADING FAILURE
============================================================

Section Title:

Trading Loss Activates the Brain's Threat Response

------------------------------------------------------------

Body Content:

When traders lose money,
the brain interprets it as threat.

The amygdala detects danger.
Stress hormones increase.
Attention narrows.
Impulse rises.

This reaction is known as:

The Fight-or-Flight Response.

It prepares the body to react quickly,
but reduces decision quality.

In trading,
this leads to:

Overtrading  
Revenge trading  
Fear-based exits  
Rule violations  

These reactions are not personality flaws.

They are biological responses.

------------------------------------------------------------

Supporting Bullet Points:

Loss activates stress chemistry  
Stress reduces logical control  
Impulse increases under pressure  
Discipline weakens under threat  

------------------------------------------------------------

Visual Suggestion:

Simple neuroscience-style diagram
(optional visual later)

============================================================
SECTION 4 — THE PROMOPOD SOLUTION
============================================================

Section Title:

Promopod Trains Behavioral Discipline

------------------------------------------------------------

Body Content:

Promopod introduces a structured system
designed to train discipline at the behavioral level.

Instead of tracking markets,
Promopod tracks reactions.

Instead of analyzing charts,
Promopod analyzes behavior.

Instead of focusing on prediction,
Promopod focuses on regulation.

This shifts trading performance from emotional reaction
to controlled execution.

------------------------------------------------------------

Key Messaging:

Promopod is not a trading tool.

It is a behavioral training system.

============================================================
SECTION 5 — DISCIPLINE PODS
============================================================

Section Title:

Every Trade Becomes a Behavioral Snapshot

------------------------------------------------------------

Body Content:

Promopod introduces Discipline Pods.

A Discipline Pod is a short behavioral record
captured after a trade.

Each Pod records:

Trade result  
Emotional state  
Rule adherence  
Behavioral reflection  

Pods are:

Fast  
Simple  
Voice-enabled  
Behavior-focused  

Logging takes seconds.

Over time,
Pods reveal behavioral patterns
that would otherwise remain hidden.

------------------------------------------------------------

Psychological Objective:

Make Pods feel simple and useful.

============================================================
SECTION 6 — AI BEHAVIORAL COACHING
============================================================

Section Title:

AI Detects Patterns Humans Miss

------------------------------------------------------------

Body Content:

Promopod uses artificial intelligence
to analyze behavioral data.

Not markets.
Not price.
Not strategy.

Behavior.

The system identifies:

Repeated emotional triggers  
Rule violations  
Impulse patterns  
Stress escalation cycles  

AI converts behavioral activity
into structured insight.

Instead of guessing,
traders see measurable patterns.

------------------------------------------------------------

Key Messaging:

AI observes behavior.
It does not predict markets.

============================================================
SECTION 7 — NERVOUS SYSTEM TRAINING
============================================================

Section Title:

Discipline Requires Nervous System Regulation

------------------------------------------------------------

Body Content:

Discipline is not just mental.

It is physiological.

Stress activates the sympathetic nervous system.
Calm activates the parasympathetic nervous system.

Promopod introduces structured recovery techniques
designed to regulate stress responses.

These include:

Breathing resets  
Pause routines  
Recovery cycles  
Reflection prompts  

Small interventions create measurable behavioral change.

============================================================
SECTION 8 — VOICE LOGGING SIMPLICITY
============================================================

Section Title:

Logging Behavior Should Take Seconds

------------------------------------------------------------

Body Content:

Typing slows adoption.

Voice removes friction.

With Promopod,
users record behavioral reflections
using natural speech.

Tap.
Speak.
Save.

Speech is converted to structured data
without complex input forms.

This allows consistent logging
without interrupting trading flow.

------------------------------------------------------------

Psychological Objective:

Reduce resistance to logging.

============================================================
SECTION 9 — WHO IT'S FOR
============================================================

Section Title:

Built for Traders Under Performance Pressure

------------------------------------------------------------

Body Content:

Promopod is designed for traders
who operate under strict discipline conditions.

Including:

Funded traders  
Prop firm traders  
Retail traders seeking consistency  

These environments demand:

Rule compliance  
Emotional control  
Consistent execution  

Promopod supports performance
in high-pressure conditions.

============================================================
SECTION 10 — JOIN BETA CTA
============================================================

Layout:

Centered

------------------------------------------------------------

Headline:

Join the Promopod Beta

------------------------------------------------------------

Body Text:

Promopod is currently in early development.

Join the beta program
to gain early access
and help shape the platform.

Early participants become
founding users.

------------------------------------------------------------

Primary CTA Button:

Join Beta

Destination:

join-beta.html

------------------------------------------------------------

Tone:

Invitation
Not pressure.

============================================================
END OF PART B
============================================================

============================================================
PART C — CORE EDUCATION PAGES
============================================================

These pages build belief and credibility.

They shift user understanding from:

Strategy Thinking
→ Behavioral Thinking
→ Biological Thinking

Primary Goal:

Create scientific trust.

============================================================
PAGE 1 — WHY TRADERS FAIL
File: why-traders-fail.html
============================================================

PAGE PURPOSE:

Break the strategy myth.

Most traders believe failure is technical.
This page explains that failure is behavioral.

Primary Psychological Objective:

Shift belief from:

"I need better strategy"

To:

"I need better behavioral regulation."

------------------------------------------------------------
SECTION STRUCTURE
------------------------------------------------------------

1 — Hero
2 — Strategy Myth Section
3 — Behavioral Reality Section
4 — Common Failure Behaviors
5 — The Discipline Breakdown Cycle
6 — Promopod Reframing
7 — CTA Section

------------------------------------------------------------
SECTION 1 — HERO
------------------------------------------------------------

Headline:

Most Traders Fail for the Wrong Reason.

Subheadline:

Failure is rarely caused by strategy.
It is caused by behavioral reactions under pressure.

Primary CTA:

Continue Learning

Destination:

neuroscience-of-trading.html

------------------------------------------------------------
SECTION 2 — STRATEGY MYTH
------------------------------------------------------------

Section Title:

The Strategy Myth

Body Content:

Most traders believe performance failure is caused by poor strategy.

They search for better indicators,
better systems,
and more complex technical models.

New tools feel like progress.

But results often remain inconsistent.

This creates a cycle of constant adjustment,
without real behavioral improvement.

Strategy becomes a distraction from the real problem.

------------------------------------------------------------
SECTION 3 — BEHAVIORAL REALITY
------------------------------------------------------------

Section Title:

The Real Cause Is Behavioral

Body Content:

Trading failure is rarely caused by technical knowledge.

It is caused by reactions.

Emotional reactions.
Stress reactions.
Impulse reactions.

Under pressure,
behavior changes.

Rules are ignored.
Risk increases.
Decisions accelerate.

These changes happen automatically.

Not because of weakness,
but because of biology.

------------------------------------------------------------
SECTION 4 — COMMON FAILURE BEHAVIORS
------------------------------------------------------------

Section Title:

Common Behavioral Failures

Bullet Points:

Overtrading after losses

Revenge trading

Entering late due to frustration

Exiting early due to fear

Breaking predefined rules

Increasing risk after loss

Ignoring recovery time

Body Closing Text:

These patterns repeat across traders.

They appear across strategies,
markets,
and experience levels.

------------------------------------------------------------
SECTION 5 — DISCIPLINE BREAKDOWN CYCLE
------------------------------------------------------------

Section Title:

The Discipline Breakdown Cycle

Body Content:

Loss occurs.

Emotion increases.

Impulse rises.

Rules weaken.

Risk increases.

Another loss follows.

Stress accumulates.

Discipline collapses.

This cycle repeats until awareness interrupts it.

------------------------------------------------------------
SECTION 6 — PROMOPOD REFRAMING
------------------------------------------------------------

Section Title:

Behavior Can Be Trained

Body Content:

Behavior is not fixed.

It is trainable.

With structured awareness,
reaction patterns become visible.

Visible patterns become manageable.

Manageable patterns become controllable.

Promopod introduces structured behavioral awareness
designed to interrupt failure cycles.

------------------------------------------------------------
SECTION 7 — CTA
------------------------------------------------------------

Headline:

Understanding Behavior Changes Performance.

Primary Button:

Learn the Neuroscience

Destination:

neuroscience-of-trading.html

============================================================
PAGE 2 — NEUROSCIENCE OF TRADING
File: neuroscience-of-trading.html
============================================================

PAGE PURPOSE:

Introduce scientific credibility.

Explain why the brain reacts during trading.

Primary Objective:

Make users think:

"This explains my behavior."

------------------------------------------------------------
SECTION STRUCTURE
------------------------------------------------------------

1 — Hero
2 — Brain Under Threat
3 — Amygdala Hijack
4 — Fight-or-Flight Response
5 — Stress Hormones
6 — Dopamine and Reward
7 — Loss Pain Biology
8 — Nervous System States
9 — Regulation Concept
10 — CTA

------------------------------------------------------------
SECTION 1 — HERO
------------------------------------------------------------

Headline:

Trading Stress Is a Biological Event.

Subheadline:

Loss activates the brain's threat response.
Understanding this response improves discipline.

Primary CTA:

Continue

Destination:

discipline-pods.html

------------------------------------------------------------
SECTION 2 — BRAIN UNDER THREAT
------------------------------------------------------------

Section Title:

The Brain Reacts to Financial Risk

Body Content:

The brain does not distinguish
between physical danger and financial threat.

Loss activates survival mechanisms.

Even when sitting at a desk,
the body prepares to react.

This preparation reduces decision quality.

------------------------------------------------------------
SECTION 3 — AMYGDALA HIJACK
------------------------------------------------------------

Section Title:

The Amygdala Hijack

Body Content:

The amygdala detects threat.

When activated,
it overrides logical reasoning.

This creates urgency.

Decisions become faster,
but less controlled.

This phenomenon is called:

Amygdala Hijack.

It is a major driver of impulsive behavior.

------------------------------------------------------------
SECTION 4 — FIGHT OR FLIGHT
------------------------------------------------------------

Section Title:

Fight-or-Flight Response

Body Content:

When threat is detected,
the body activates emergency systems.

Heart rate increases.

Stress hormones release.

Attention narrows.

This prepares the body to react quickly.

But reduces discipline.

------------------------------------------------------------
SECTION 5 — STRESS HORMONES
------------------------------------------------------------

Section Title:

Cortisol and Stress

Body Content:

Cortisol is released during stress.

Repeated exposure increases fatigue.

Fatigue reduces patience.

Reduced patience increases impulsive behavior.

------------------------------------------------------------
SECTION 6 — DOPAMINE
------------------------------------------------------------

Section Title:

Dopamine and Reward Seeking

Body Content:

Winning releases dopamine.

This creates pleasure.

Pleasure increases repetition.

Repetition increases risk.

Loss reduces dopamine.

This creates urgency to recover losses.

That urgency drives revenge trading.

------------------------------------------------------------
SECTION 7 — LOSS PAIN
------------------------------------------------------------

Section Title:

Loss Feels Like Pain

Body Content:

Financial loss activates pain centers in the brain.

This explains emotional intensity after loss.

Pain creates urgency.

Urgency creates impulsive action.

------------------------------------------------------------
SECTION 8 — NERVOUS SYSTEM STATES
------------------------------------------------------------

Section Title:

Two Nervous System Modes

Body Content:

Sympathetic State:

Activated during stress.

Creates urgency and reactivity.

Parasympathetic State:

Activated during calm.

Supports discipline and control.

Trading performance improves
when calm states dominate.

------------------------------------------------------------
SECTION 9 — REGULATION CONCEPT
------------------------------------------------------------

Section Title:

Regulation Improves Discipline

Body Content:

Regulation is trainable.

Small recovery routines
restore control.

Breathing,
pausing,
and reflection
restore decision quality.

------------------------------------------------------------
SECTION 10 — CTA
------------------------------------------------------------

Headline:

Behavior Can Be Measured.

Primary Button:

Learn About Discipline Pods

Destination:

discipline-pods.html

============================================================
PAGE 3 — DISCIPLINE PODS
File: discipline-pods.html
============================================================

PAGE PURPOSE:

Introduce the core product concept.

Explain what Discipline Pods are.

Primary Objective:

Make Pods feel simple and valuable.

------------------------------------------------------------
SECTION STRUCTURE
------------------------------------------------------------

1 — Hero
2 — Pod Definition
3 — Pod Inputs
4 — Pod Lifecycle
5 — Pattern Detection
6 — Behavioral Awareness
7 — CTA

------------------------------------------------------------
SECTION 1 — HERO
------------------------------------------------------------

Headline:

Every Trade Creates Behavioral Data.

Subheadline:

Discipline Pods convert behavior into measurable insight.

Primary CTA:

Learn About AI Coaching

Destination:

ai-coach.html

------------------------------------------------------------
SECTION 2 — POD DEFINITION
------------------------------------------------------------

Section Title:

What Is a Discipline Pod?

Body Content:

A Discipline Pod is a behavioral record
captured after a trade.

It records:

Trade result

Emotion

Rule compliance

Behavior reflection

Pods are minimal.

Fast to create.

Easy to repeat.

------------------------------------------------------------
SECTION 3 — POD INPUTS
------------------------------------------------------------

Section Title:

Simple Inputs

Bullet Points:

Win / Loss / Breakeven

Emotion selection

Rule followed — Yes or No

Optional voice note

Closing Text:

Logging takes seconds.

Consistency builds awareness.

------------------------------------------------------------
SECTION 4 — POD LIFECYCLE
------------------------------------------------------------

Section Title:

How Pods Work

Body Content:

Trade occurs.

Pod recorded.

Data saved.

Behavior analyzed.

Insights generated.

Patterns detected.

------------------------------------------------------------
SECTION 5 — PATTERN DETECTION
------------------------------------------------------------

Section Title:

Patterns Reveal Behavior

Body Content:

Single trades reveal little.

Multiple Pods reveal patterns.

Repeated reactions
become measurable.

Measurable behavior
becomes controllable.

------------------------------------------------------------
SECTION 6 — BEHAVIORAL AWARENESS
------------------------------------------------------------

Section Title:

Awareness Builds Discipline

Body Content:

Awareness reduces impulsive decisions.

Patterns create clarity.

Clarity improves discipline.

Discipline improves consistency.

------------------------------------------------------------
SECTION 7 — CTA
------------------------------------------------------------

Headline:

Behavior Tracking Creates Control.

Primary Button:

Explore AI Coaching

Destination:

ai-coach.html

============================================================
END OF PART C
============================================================

============================================================
PART D — FEATURE PAGES
============================================================

These pages explain how the Promopod system works.

They convert curiosity into belief by showing:

How behavior becomes measurable.
How insight becomes actionable.
How discipline becomes trainable.

Primary Goal:

Explain system functionality clearly and simply.

Secondary Goal:

Demonstrate scientific credibility.

============================================================
PAGE 4 — AI COACHING
File: ai-coach.html
============================================================

PAGE PURPOSE:

Explain how artificial intelligence analyzes behavior.

Clarify that AI focuses on behavior — not trading signals.

Primary Psychological Objective:

Create trust in AI-based behavioral feedback.

------------------------------------------------------------
SECTION STRUCTURE
------------------------------------------------------------

1 — Hero
2 — AI Purpose
3 — Behavior Detection
4 — Pattern Recognition
5 — Insight Generation
6 — Risk Detection
7 — Behavioral Feedback
8 — CTA

------------------------------------------------------------
SECTION 1 — HERO
------------------------------------------------------------

Headline:

AI Observes Behavior — Not Markets.

Subheadline:

Promopod uses artificial intelligence to analyze behavioral patterns and reveal hidden discipline risks.

Primary CTA:

Continue Learning

Destination:

voice-journaling.html

------------------------------------------------------------
SECTION 2 — AI PURPOSE
------------------------------------------------------------

Section Title:

AI Is Used for Behavioral Awareness

Body Content:

Promopod uses artificial intelligence
to analyze behavioral activity.

Not market data.

Not indicators.

Not price movement.

Behavior.

Every recorded Discipline Pod
provides structured behavioral data.

AI processes this data
to identify recurring reactions.

------------------------------------------------------------
SECTION 3 — BEHAVIOR DETECTION
------------------------------------------------------------

Section Title:

Behavior Patterns Become Visible

Body Content:

Human memory is limited.

Patterns often go unnoticed.

AI detects:

Repeated emotional triggers

Rule violations

Impulse responses

Risk escalation patterns

These patterns are difficult to recognize manually.

AI makes them visible.

------------------------------------------------------------
SECTION 4 — PATTERN RECOGNITION
------------------------------------------------------------

Section Title:

Sequences Reveal Risk

Body Content:

Behavior rarely occurs in isolation.

It occurs in sequences.

Loss followed by immediate re-entry.

Frustration followed by increased risk.

Repeated entries after missed trades.

AI identifies these sequences
and categorizes them into known behavioral patterns.

------------------------------------------------------------
SECTION 5 — INSIGHT GENERATION
------------------------------------------------------------

Section Title:

Raw Data Becomes Insight

Body Content:

AI converts behavioral activity
into structured feedback.

Instead of guessing,
traders receive measurable information.

Examples include:

Pattern detected:

Repeated entries after loss.

Possible trigger:

Stress escalation.

Suggested response:

Pause trading and reset.

------------------------------------------------------------
SECTION 6 — RISK DETECTION
------------------------------------------------------------

Section Title:

Risk Can Be Measured

Body Content:

Behavior creates measurable risk.

AI calculates risk levels
based on:

Emotion patterns

Trade frequency

Rule violations

Recovery time

Risk states may include:

Low Risk

Moderate Risk

High Risk

Critical Risk

These levels help guide recovery decisions.

------------------------------------------------------------
SECTION 7 — BEHAVIORAL FEEDBACK
------------------------------------------------------------

Section Title:

Feedback Without Judgment

Body Content:

Promopod feedback is neutral.

It does not criticize.

It does not predict markets.

It provides structured observations.

Clear information supports better decisions.

------------------------------------------------------------
SECTION 8 — CTA
------------------------------------------------------------

Headline:

Behavior Can Be Captured Instantly.

Primary Button:

Explore Voice Logging

Destination:

voice-journaling.html

============================================================
PAGE 5 — VOICE JOURNALING
File: voice-journaling.html
============================================================

PAGE PURPOSE:

Explain the voice-first input model.

Remove resistance to logging.

Primary Psychological Objective:

Make logging feel effortless.

------------------------------------------------------------
SECTION STRUCTURE
------------------------------------------------------------

1 — Hero
2 — Friction Problem
3 — Voice Solution
4 — Voice Workflow
5 — Speed Advantage
6 — Consistency Benefit
7 — CTA

------------------------------------------------------------
SECTION 1 — HERO
------------------------------------------------------------

Headline:

Logging Behavior Should Not Interrupt Trading.

Subheadline:

Voice input allows traders to capture behavior instantly without typing.

Primary CTA:

Continue Learning

Destination:

nervous-system-training.html

------------------------------------------------------------
SECTION 2 — FRICTION PROBLEM
------------------------------------------------------------

Section Title:

Typing Creates Resistance

Body Content:

Manual logging slows adoption.

Complex forms discourage consistency.

Typing requires attention.

Attention interrupts trading flow.

Most traders stop logging
because friction becomes overwhelming.

------------------------------------------------------------
SECTION 3 — VOICE SOLUTION
------------------------------------------------------------

Section Title:

Voice Removes Friction

Body Content:

Voice input simplifies behavioral recording.

Users speak naturally.

No typing required.

No complex forms.

Speech is converted into structured behavioral data.

------------------------------------------------------------
SECTION 4 — VOICE WORKFLOW
------------------------------------------------------------

Section Title:

Simple Recording Flow

Body Content:

Tap the microphone.

Speak naturally.

Recording ends.

Speech converts to text.

Pod saves automatically.

Simple workflows increase usage consistency.

------------------------------------------------------------
SECTION 5 — SPEED ADVANTAGE
------------------------------------------------------------

Section Title:

Speed Creates Consistency

Body Content:

Logging takes seconds.

Fast input encourages repetition.

Repeated logging creates measurable behavior history.

Consistency builds meaningful data.

------------------------------------------------------------
SECTION 6 — CONSISTENCY BENEFIT
------------------------------------------------------------

Section Title:

Consistency Builds Awareness

Body Content:

Behavioral awareness requires repetition.

Voice logging supports frequent recording.

Frequent recording produces reliable insight.

Reliable insight improves discipline.

------------------------------------------------------------
SECTION 7 — CTA
------------------------------------------------------------

Headline:

Discipline Requires Recovery.

Primary Button:

Learn About Nervous System Training

Destination:

nervous-system-training.html

============================================================
PAGE 6 — NERVOUS SYSTEM TRAINING
File: nervous-system-training.html
============================================================

PAGE PURPOSE:

Explain biological regulation techniques.

Introduce recovery protocols.

Primary Psychological Objective:

Position regulation as a trainable skill.

------------------------------------------------------------
SECTION STRUCTURE
------------------------------------------------------------

1 — Hero
2 — Stress Response Explanation
3 — Sympathetic Activation
4 — Parasympathetic Recovery
5 — Regulation Techniques
6 — Breathing Protocol
7 — Recovery Importance
8 — CTA

------------------------------------------------------------
SECTION 1 — HERO
------------------------------------------------------------

Headline:

Discipline Requires Nervous System Control.

Subheadline:

Behavior improves when physiological recovery supports decision-making.

Primary CTA:

Continue Learning

Destination:

funded-traders.html

------------------------------------------------------------
SECTION 2 — STRESS RESPONSE
------------------------------------------------------------

Section Title:

Stress Drives Impulsive Behavior

Body Content:

Stress activates emergency systems.

These systems increase reaction speed.

But reduce decision control.

Stress without recovery
leads to discipline failure.

------------------------------------------------------------
SECTION 3 — SYMPATHETIC ACTIVATION
------------------------------------------------------------

Section Title:

The Sympathetic State

Body Content:

Activated during:

Loss

Fear

Market volatility

Effects include:

Increased heart rate

Narrowed focus

Urgency

Impulse

This state reduces control.

------------------------------------------------------------
SECTION 4 — PARASYMPATHETIC RECOVERY
------------------------------------------------------------

Section Title:

The Parasympathetic State

Body Content:

Activated during calm.

Supports:

Stability

Focus

Decision quality

Recovery restores discipline.

------------------------------------------------------------
SECTION 5 — REGULATION TECHNIQUES
------------------------------------------------------------

Section Title:

Small Actions Create Recovery

Body Content:

Promopod introduces:

Pause routines

Reflection prompts

Breathing cycles

Recovery timing

These interventions interrupt impulse patterns.

------------------------------------------------------------
SECTION 6 — BREATHING PROTOCOL
------------------------------------------------------------

Section Title:

4-4-6 Breathing Reset

Body Content:

Inhale — 4 seconds

Hold — 4 seconds

Exhale — 6 seconds

Repeat — 5 cycles.

Slow breathing activates recovery systems.

------------------------------------------------------------
SECTION 7 — RECOVERY IMPORTANCE
------------------------------------------------------------

Section Title:

Recovery Improves Decision Quality

Body Content:

Without recovery,
stress accumulates.

Accumulated stress reduces discipline.

Structured recovery restores control.

------------------------------------------------------------
SECTION 8 — CTA
------------------------------------------------------------

Headline:

Performance Environments Require Discipline.

Primary Button:

See Who Promopod Is Built For

Destination:

funded-traders.html

============================================================
END OF PART D
============================================================

============================================================
PART E — CONVERSION PAGES
============================================================

These pages convert belief into action.

Primary Goal:

Encourage traders to join the beta program.

Secondary Goal:

Target traders operating under structured discipline pressure.

Primary CTA Across Pages:

Join Beta

============================================================
PAGE 7 — FOR FUNDED TRADERS
File: funded-traders.html
============================================================

PAGE PURPOSE:

Target traders operating under strict rule environments.

Primary Psychological Objective:

Create recognition:

"This system fits my trading environment."

------------------------------------------------------------
SECTION STRUCTURE
------------------------------------------------------------

1 — Hero
2 — Performance Pressure Reality
3 — Rule-Based Trading Environment
4 — Discipline Challenges
5 — Stress Accumulation Risks
6 — Why Funded Traders Need Behavioral Training
7 — Promopod Support Model
8 — CTA Section

------------------------------------------------------------
SECTION 1 — HERO
------------------------------------------------------------

Headline:

Funded Trading Requires Behavioral Precision.

Subheadline:

Performance rules demand discipline under pressure.
Promopod supports consistency in structured environments.

Primary CTA:

Join Beta

Destination:

join-beta.html

------------------------------------------------------------
SECTION 2 — PERFORMANCE PRESSURE REALITY
------------------------------------------------------------

Section Title:

Funded Trading Environments Are High Pressure

Body Content:

Funded traders operate under strict performance requirements.

Profit targets must be reached.

Loss limits must not be exceeded.

Consistency is monitored.

These environments create pressure that increases emotional reactivity.

Pressure increases risk of impulsive decisions.

------------------------------------------------------------
SECTION 3 — RULE-BASED ENVIRONMENTS
------------------------------------------------------------

Section Title:

Rules Define Performance

Body Content:

Funded accounts include rules such as:

Maximum daily loss

Maximum total loss

Trade frequency limits

Risk management requirements

Breaking rules results in account termination.

Discipline is not optional.

It is required.

------------------------------------------------------------
SECTION 4 — DISCIPLINE CHALLENGES
------------------------------------------------------------

Section Title:

Common Challenges Under Pressure

Bullet Points:

Revenge trading after loss

Risk escalation during frustration

Overtrading after missed opportunities

Breaking recovery rules

Ignoring emotional fatigue

Closing Text:

These challenges occur across all skill levels.

Experience alone does not prevent behavioral reactions.

------------------------------------------------------------
SECTION 5 — STRESS ACCUMULATION RISKS
------------------------------------------------------------

Section Title:

Stress Builds Across Trades

Body Content:

Stress does not reset automatically.

It accumulates.

Multiple losses increase emotional intensity.

Fatigue reduces patience.

Reduced patience increases impulsive behavior.

Without structured recovery,
discipline weakens.

------------------------------------------------------------
SECTION 6 — WHY FUNDED TRADERS NEED TRAINING
------------------------------------------------------------

Section Title:

Discipline Can Be Trained

Body Content:

Performance improves when behavior becomes measurable.

Measurable behavior becomes manageable.

Manageable behavior becomes controllable.

Structured behavioral awareness supports consistent execution.

------------------------------------------------------------
SECTION 7 — PROMOPOD SUPPORT MODEL
------------------------------------------------------------

Section Title:

Promopod Supports Performance Environments

Body Content:

Promopod helps funded traders:

Track behavioral reactions

Detect rule violations

Measure recovery time

Identify impulse patterns

Strengthen discipline consistency

Over time,
behavior stabilizes.

Stability improves account survival.

------------------------------------------------------------
SECTION 8 — CTA
------------------------------------------------------------

Headline:

Performance Requires Structured Discipline.

Body Text:

Join the Promopod beta
and participate in early-stage behavioral training.

Primary Button:

Join Beta

Destination:

join-beta.html

============================================================
PAGE 8 — JOIN BETA
File: join-beta.html
============================================================

PAGE PURPOSE:

Capture user interest.

Create early user pipeline.

Primary Psychological Objective:

Encourage voluntary engagement.

Tone:

Invitation.
Not pressure.

------------------------------------------------------------
SECTION STRUCTURE
------------------------------------------------------------

1 — Hero
2 — Beta Invitation
3 — Early User Benefits
4 — Founding Member Opportunity
5 — Signup Form Section
6 — Privacy Assurance
7 — Final CTA

------------------------------------------------------------
SECTION 1 — HERO
------------------------------------------------------------

Headline:

Join the Promopod Beta Program.

Subheadline:

Be among the first traders to experience neuroscience-based discipline training.

Primary CTA:

Join Beta

------------------------------------------------------------
SECTION 2 — BETA INVITATION
------------------------------------------------------------

Section Title:

Promopod Is Currently in Development

Body Content:

Promopod is being built step-by-step.

Early participants help shape the platform.

Feedback improves system design.

Participation provides early access
to behavioral tools.

------------------------------------------------------------
SECTION 3 — EARLY USER BENEFITS
------------------------------------------------------------

Section Title:

Benefits of Joining Early

Bullet Points:

Early access to platform features

Influence product development

Priority onboarding

Reduced future pricing

Founding member recognition

Closing Text:

Early users help define the direction of the platform.

------------------------------------------------------------
SECTION 4 — FOUNDING MEMBER OPPORTUNITY
------------------------------------------------------------

Section Title:

Become a Founding User

Body Content:

Founding users participate in early testing phases.

They gain:

Long-term platform familiarity

Priority support access

Influence over feature evolution

This creates shared ownership of the system's development.

------------------------------------------------------------
SECTION 5 — SIGNUP FORM SECTION
------------------------------------------------------------

Form Purpose:

Capture early user interest.

Fields Required:

Name (Text Field)

Email Address (Required)

Trading Type (Dropdown)

Dropdown Options:

Funded Trader  
Retail Trader  
Swing Trader  
Day Trader  
Algorithmic Trader  

Optional Field:

Message / Feedback

Button Label:

Submit Beta Request

Form Behavior:

Store entries via:

Email collection service
(or simple form endpoint)

------------------------------------------------------------
SECTION 6 — PRIVACY ASSURANCE
------------------------------------------------------------

Section Title:

Your Information Remains Private

Body Content:

User information is protected.

Email addresses are used only
for beta communication.

No personal data is shared.

Privacy is maintained throughout development.

------------------------------------------------------------
SECTION 7 — FINAL CTA
------------------------------------------------------------

Headline:

Behavior Awareness Begins With Participation.

Primary Button:

Submit Beta Request

Destination:

Form Submission

============================================================
END OF PART E
============================================================

============================================================
PART F — FINAL BUILD ENGINE
(CLEAN REBUILD + IMAGES + COMPRESSION + SEO + FULL LINKING)
============================================================

This section defines the final operational execution.

Claude must:

• Delete old site files
• Generate all pages
• Generate CSS
• Generate JavaScript
• Download images
• Compress images
• Insert SEO metadata
• Generate sitemap.xml
• Generate robots.txt
• Validate all links
• Push to GitHub

No step may be skipped.

============================================================
SECTION 1 — CLEAN PROJECT RESET
============================================================

Delete existing pages:

index.html  
why-traders-fail.html  
neuroscience-of-trading.html  
discipline-pods.html  
ai-coach.html  
voice-journaling.html  
nervous-system-training.html  
funded-traders.html  
join-beta.html  

Delete:

assets/css/main.css  
assets/js/main.js  

Preserve:

assets/images/  
assets/fonts/  

Create folders if missing:

assets/css/  
assets/js/  
assets/images/  
assets/fonts/  

============================================================
SECTION 2 — FILE GENERATION ORDER
============================================================

Generate:

1 — assets/css/main.css  
2 — assets/js/main.js  

3 — index.html  
4 — why-traders-fail.html  
5 — neuroscience-of-trading.html  
6 — discipline-pods.html  
7 — ai-coach.html  
8 — voice-journaling.html  
9 — nervous-system-training.html  
10 — funded-traders.html  
11 — join-beta.html  

Then:

12 — sitemap.xml  
13 — robots.txt  

============================================================
SECTION 3 — FULL INTERNAL LINK ROUTING
============================================================

ALL links must use these paths exactly.

Navigation Links:

Home → index.html  

Why Traders Fail → why-traders-fail.html  

Neuroscience → neuroscience-of-trading.html  

Discipline Pods → discipline-pods.html  

AI Coaching → ai-coach.html  

Voice Journaling → voice-journaling.html  

Nervous System Training → nervous-system-training.html  

Funded Traders → funded-traders.html  

Join Beta → join-beta.html  

------------------------------------------------------------

CTA Redirect Mapping:

Homepage:

Join Beta → join-beta.html  
Learn How It Works → discipline-pods.html  

Why Traders Fail:

Continue Learning → neuroscience-of-trading.html  

Neuroscience Page:

Continue → discipline-pods.html  

Discipline Pods:

Explore AI Coaching → ai-coach.html  

AI Coaching:

Explore Voice Logging → voice-journaling.html  

Voice Journaling:

Learn About Nervous System Training → nervous-system-training.html  

Nervous System:

See Who Promopod Is Built For → funded-traders.html  

Funded Traders:

Join Beta → join-beta.html  

Join Beta:

Submit Beta Request → form submission

============================================================
SECTION 4 — CORE SEO METADATA
============================================================

Each page must include:

<title>

<meta name="description">

<meta name="keywords">

<meta name="viewport">

<meta property="og:title">

<meta property="og:description">

<meta property="og:image">

<meta property="og:type">

<meta name="twitter:card">

------------------------------------------------------------

Homepage Title:

Promopod | Neuroscience-Based Trading Discipline Platform

Description:

Promopod helps traders improve discipline using neuroscience, behavioral tracking, and AI-driven insight.

------------------------------------------------------------

Apply unique titles to every page.

============================================================
SECTION 5 — AUTOMATED IMAGE ACQUISITION
============================================================

Allowed Sources ONLY:

Unsplash  
Pexels  
Pixabay  

License:

Free commercial use only.

------------------------------------------------------------

Required Image Set:

hero-neuroscience.webp  
amygdala-diagram.webp  
ai-pattern-analysis.webp  
voice-logging.webp  
breathing-regulation.webp  
funded-trader-environment.webp  

------------------------------------------------------------

Image Search Keywords:

Hero:

"neuroscience brain dark visualization"

Neuroscience:

"amygdala fight or flight diagram"

AI Coaching:

"AI neural network analysis visualization"

Voice:

"speech to text visualization interface"

Breathing:

"calm breathing regulation diagram"

Funded Traders:

"trader monitoring screens discipline"

============================================================
SECTION 6 — IMAGE COMPRESSION RULES
============================================================

ALL images must be compressed.

Target Size:

120KB–180KB

Maximum:

200KB

Resize Rules:

Hero images:

1600px width max

Standard images:

1000px width max

Mobile:

800px width max

Preferred Format:

WebP

Quality:

70–80%

============================================================
SECTION 7 — IMAGE OPTIMIZATION RULES
============================================================

All images must include:

ALT text.

Example:

alt="Amygdala fight or flight response diagram"

Include:

loading="lazy"

============================================================
SECTION 8 — CSS GENERATION RULES
============================================================

Generate:

assets/css/main.css

Include:

Dark theme

Buttons

Cards

Layout containers

Responsive breakpoints

============================================================
SECTION 9 — JAVASCRIPT RULES
============================================================

Generate:

assets/js/main.js

Functions required:

Navbar toggle

Smooth scroll

Sticky navbar

Fade animations

============================================================
SECTION 10 — NAVBAR STRUCTURE
============================================================

Navbar must include:

PROMOPOD logo

Navigation:

Home  
Why Traders Fail  
Neuroscience  
Discipline Pods  
AI Coaching  
Voice  
Nervous System  
Funded Traders  
Join Beta  

Sticky behavior required.

============================================================
SECTION 11 — FOOTER STRUCTURE
============================================================

Footer must include:

Navigation links (same as navbar)

Tagline:

Understand Your Biology.
Trade With Discipline.

============================================================
SECTION 12 — SITEMAP GENERATION
============================================================

Generate:

sitemap.xml

Include:

index.html  

why-traders-fail.html  

neuroscience-of-trading.html  

discipline-pods.html  

ai-coach.html  

voice-journaling.html  

nervous-system-training.html  

funded-traders.html  

join-beta.html  

============================================================
SECTION 13 — ROBOTS.TXT
============================================================

Generate:

robots.txt

Content:

User-agent: *

Allow: /

Sitemap: https://promopod.co.za/sitemap.xml

============================================================
SECTION 14 — LINK VALIDATION CHECK
============================================================

Claude must verify:

✔ All buttons work  
✔ All links resolve  
✔ No broken URLs  
✔ Navigation works  
✔ CTA links work  

If broken links detected:

Fix before commit.


============================================================
END OF PART F
============================================================

============================================================
PART G — FINALIZATION ENGINE
(ADVANCED SEO + ANALYTICS + GIT EXECUTION)
============================================================

This section finalizes the build.

============================================================
SECTION 1 — STRUCTURED DATA (SCHEMA)
============================================================

Add Organization Schema.

Add Website Schema.

Add WebPage Schema.

Use:

schema.org

============================================================
SECTION 2 — CANONICAL URLs
============================================================

Each page must include:

<link rel="canonical">

============================================================
SECTION 3 — GOOGLE ANALYTICS SETUP
============================================================

Insert:

Google Analytics 4 script.

Placeholder:

GA_MEASUREMENT_ID

User replaces later.

============================================================
SECTION 4 — GOOGLE SEARCH CONSOLE
============================================================

Insert verification tag placeholder.

============================================================
SECTION 5 — SOCIAL PREVIEW OPTIMIZATION
============================================================

Ensure:

Open Graph images defined.

============================================================
SECTION 6 — PERFORMANCE SEO
============================================================

Enable:

Font preload  
CSS preload  
JS defer  

============================================================
SECTION 7 — FINAL VALIDATION
============================================================

Confirm:

✔ Metadata present  
✔ Schema present  
✔ Canonical URLs  
✔ Analytics script ready  
✔ Sitemap accessible  

============================================================
SECTION 8 — FINAL EXECUTION
============================================================

Run:

git add .

git commit -m "Phase 1 Full Build — Finalized with Advanced SEO and Analytics"

git push

============================================================
END PART G
============================================================