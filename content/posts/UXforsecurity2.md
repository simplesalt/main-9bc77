---
title: "Better Security through solid UX 2: An example"
subtitle: "We look at an example security capability and write some user stories"
date: '2022-03-30'
excerpt: >-
  We extend the principles of User Experience to a practical example: authenticating to a CRM.
seo:
  title: "Better Security through solid UX 2: An example"
  description: "We extend the principles of User Experience to a practical example: authenticating to a CRM"
  robots: []
  extra: []
layout: post
thumb_img_path: /images/wrongpassword.jpeg
thumb_img_alt: Wrong Password Purgatory
---
[Last week](https://saltyonsecurity.net/posts/uxforsecurity1/), we discussed how User Experience design can help you identify the best opportunities to improve the experience of your internal customers. Today, we&#39;ll make those lessons real with an extended example, constructing some user stories within the experience of authenticating to a model CRM. Each starts with a persona, a fictitious person that represent the perspective of a meaningful portion of your users. I&#39;ve included personal details for each. While not necessary for assessing different user experiences, it&#39;s often helpful when starting out to help your design team empathize with users and their perspectives.

After defining your personas, you define user stories: what they would want to do with your product, and why. User Stories are often condensed into a short card that follows the form, &quot;As &lt;persona&gt;, I want to &lt;feature&gt; so that I can &lt;goal&gt;&quot;. Experienced UX teams can usually go straight from personas to realistic User Stories, but I&#39;ve included narratives to help you bridge that gap.

# Product: Basic Requirements

As security professionals, we know that a moderately competent authentication stack must:

- Capture some non-repudiatable, encrypted secret that uniquely identifies each person.
- Capture data that could be transformed into quality indicators of compromise or risk – source IP, device fingerprinting, etc.
- Potentially apply extra authentication rigor (extra factors, etc) based on indicators of risk

In this example, let&#39;s say the current state is a standard login page which asks for a username and password specific to the CRM. It has a standard timer that logs people off after 10 minutes of inactivity.

## Persona 1: Janet

Janet, 52, likes dogs and is passionate about her Norwegian ancestry. She works as a sales rep, is easily distractible, and excels once she gets a possible customer on the phone. She splits her time between the CRM, the phone, email, and scrolling LinkedIn.

Janet rarely forgets her password because she sets it to be the same everywhere, including her personal accounts. She knows she&#39;s not supposed to do that, but also knows that no one will be able to tell.

### What is Janet&#39;s likely experience?

Whenever she wants to use the CRM, she must log in. She occasionally mis-types her password and it takes an extra 15 seconds to think. When she must wait longer than 15 seconds, she gets bored and scrolls LinkedIn, and she can sometimes get stuck doing that for an hour.

She often spends more than 10 minutes when on the phone with a customer, so usually gets logged out of the CRM. This frustrates her because she loses her train of thought once she&#39;s done with the call – the record she called isn&#39;t on the screen anymore because logging in returns her to the CRM home screen. This frequently leads to more LinkedIn doomscrolling.

| ![Janet with her dogs](/images/janet.jpg) |
|:---:|
| *Janet and her dog* |

### User Story 1.1

_As_ Janet, _I want to_ log in quickly _so that_ I can update my customer record before I forget it.

### User Story 1.2

_As_ Janet, _I want to_ stay logged in _so that_ I don&#39;t have to waste time logging in again.

## Persona 2: Barry

Barry, 68, has worked for the company for 46 years; his only distractions from work are on TV; he loves the Broncos and true crime drama. He is an accountant and pulls sales forecasting data out of the CRM several times a month as part of his FP&amp;A work.

### What is Barry&#39;s likely experience?

He finds the new CRM much harder and frustrating than the previous system, which let him connect directly to the backend database with a non-expiring stored credential. He forgets or mis-types his password frequently, so sets it to something very simple. His new passwords are often rejected because he recently used them. He is impatient with the authentication process and thinks the security and IT teams are a bunch of dramatic busybodies.

| ![Barry resetting passwords](/images/wrongpassword.jpeg) |
|:---:|
| *How Barry feels when resetting passwords* |

### User Story 2.1

_As_ Barry, _I want to_ quickly access sales data _so that_ I can do sales reporting.

### User Story 2.2

_As_ Barry, _I want to_ avoid dealing with passwords _so that_ I waste less time on failed logins and the resets process.

## Persona 3: Emma

Emma, 26, loves knitting and true crime podcasts. She has worked for the company for 15 months, doing tier 1 security operations: password resets, virus alerts, and phishing reports. She wants to move to security engineering, and volunteers for special projects when they come up.

### What is Emma&#39;s likely experience?

Emma doesn&#39;t log in to the CRM, but gets a lot of calls from people who do. She gets more password reset requests about it than any other application, and thinks the Sales teams are the most entitled, disrespectful, and impatient in the company. She doesn&#39;t have a lot of respect for the judgement of senior Sales and IT leaders because the CRM&#39;s security is so poor; the authentication barely meets the requirements and doesn&#39;t provide many useful indicators of unauthorized access.

| ![Emma's internal monologue when dealing with Sales](/images/CSRperspective.jpeg) |
|:---:|
| *Emma's internal monologue when dealing with Sales* |
### User Story 3.1

_As_ Emma, _I want to_ handle fewer password reset requests _so that_ fewer people will be grumpy at me and give me more time to work on interesting projects.

### User Story 3.2

_As_ Emma, _I want_ the CRM to be more resistant to cred-stuffing attacks _so that_ I worry less about the CRM getting compromised and the resulting firestorm of response work to me and my team.

# Identified Opportunities

After generating User Stories, discuss them. Often, common threads present themselves, and a single change can often address many stories.

## Thread 1

In Lean terms, re-authenticating is [_muda_](https://theleanway.net/muda-mura-muri)_:_ work that consumes resources without providing value. Perhaps that work can be completely removed by replacing the current login page with tokenized SSO like OIDC or SAML, perhaps via a CASB.

When the organization first started using the CRM, the key decisionmakers on the project may not have understood the [value of SSO](https://www.rfideas.com/about-us/roi-sso-how-single-sign-paying-hospitals) and decided not to fund it. User stories like Janet&#39;s may help better explain to them possible productivity gains: How much time does their team waste:

- Logging in to the CRM?
- Getting distracted when logging in is slow?
- Asking for password resets?

A CASB may also improve security through capturing high-quality indicators of compromise such as impossible travel scenarios or login attempts from known malicious IP addresses.

[The ROI](https://bluefletch.com/how-much-can-retailers-save-with-sso/) of an SSO integration for this CRM can be estimated, but the work of estimating won&#39;t happen until the possibility is raised. User stories are a great source of determining possible improvements to user experience.

## Thread 2

Other optimizations may not require meaningful capital expenditure – perhaps the 10-minute timeout was a system default that nobody considered when implementing and raising it to 30 minutes would smooth the experience for a fair number of users without adding much security risk.

## Thread 3

There may also be intangible opportunities suggested by User Stories. A consistently bad authentication experience probably manifests through angry calls to the service desk for password resets or other help. If the service desk frequently blames &quot;Security&quot; to divert that anger and protect themselves, that could systematically reduce the credibility and influence of the Security Team. Security wouldn&#39;t even know: who has the time to listen in on Service Desk calls?

In all cases, user stories should be prioritized. If Barry&#39;s first story is unique to only 5 people and is only needed several times a month, maybe optimizing for it should be at the bottom of the list. If Barry&#39;s second story applies to many people (Maybe a lot of Janets have that problem too), it could be a top priority.

# Lessons

Constructing even three personas can help your team consider your customers. With only a couple user stories apiece, you can easily identify how to make their experience better and ultimately increase the value of your product.

Generating reasonable User Stories is quick and easy. You can brainstorm some high-level personas in a group, then assign each to a team member to flesh out on their own. Then, next week, review them all and start prioritizing. You will have decent user stories inside of a week and maybe an hour or two of combined effort for each persona.

You can get [very fancy](https://www.romanpichler.com/blog/10-tips-writing-good-user-stories/) with User Stories, and [sophisticated](https://www.amazon.com/User-Story-Mapping-Discover-Product/dp/1491904909/ref=sr_1_5?crid=LDXUEDU8HJ6K&amp;keywords=user+stories&amp;qid=1647606387&amp;sprefix=microsd%2Caps%2C111&amp;sr=8-5) product shops often do. As with all projects, beware the temptation to go from 0 to 60 in one step; acceleration takes time. Do it simply first and continually improve.

Next week, we&#39;ll talk through more sample User Stories, focused on the experience of adding or updating assets in a CMDB.

Have you used User Stories to improve user experience? Have you seen Security teams improve their influence by reducing the pain their products cause people? [Tell me](https://saltyonsecurity.net/contact/) your stories or comment below; I&#39;d love to hear them.