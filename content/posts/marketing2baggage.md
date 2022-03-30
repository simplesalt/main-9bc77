---
title: "Security Marketing and Sales, Part 2: Baggage"
subtitle: Common barriers and how to overcome them.
date: '2022-03-01'
content_img_alt: Common barriers and how to overcome them.
excerpt: >-
  Today, I expand on the challenges most security leaders face when explaining the value of security: usually people already don't like you. We discuss what you can do about it, focusing on how you can make your services and platforms support your message of helpfulness.
seo:
  title: "Security Marketing and Sales 2: Baggage"
  description: Common barriers and how to overcome them.
  robots: []
  extra: []
layout: post
thumb_img_path: /images/publictrust.jpg
thumb_img_alt: Security Teams could be more trusted.
---
Last week, [I laid out an overview](https://saltyonsecurity.net/posts/securitymarketing/) of how you can use standard best practices of sales and marketing to achieve your security goals.  Today, we'll talk through some common barriers in that strategy and what you can do.  

# Security&#39;s Brownfield Problem

Most IT professionals are familiar with [greenfield and brownfield](https://en.wikipedia.org/wiki/Greenfield_project) and know that greenfield projects are always better; dealing with old mistakes and compromises made by other people is less fun. The patterns of greenfield and brownfield also apply to relationships: partnerships and trust are a capability like any other, with tools, operational excellence, and KPIs to match. Unfortunately, when joining an organization, relational greenfield is mostly a myth. Most leaders get brownfield, inheriting everyone&#39;s perceptions and associations about their team, predecessor, and industry. 

Many people perceive security to be a barrier to progress. They have stories about how they wanted something good for them or their team, and Security said no. They have stories about how Security made them build more things they didn&#39;t need or buy a more expensive product or extend their project timeline for unclear reasons. They believe that Security is a bunch of anal-retentive, perfectionist, power-tripping idiots who would never make it in the real world.

If this is your narrative, it&#39;s clear that avoiding Security is your best bet for success.

There is an ugly cycle here: a team tries to avoid the Security team, builds a vulnerable capability, then Security finds out and escalates to Legal, the CIO, or the CFO. The team is then forced to bolt-on some security measures to their already-in-use product that makes it annoying. They resent Security and feel even more strongly that Security only causes problems. Security resents them for unnecessarily exposing the organization to risk that Security will have to step in and rescue them from, especially because the bolt-on measures will never be as strong as a capability built with security in mind. Everyone loses in this scenario.

![Trust in Security teams is sometimes low](/images/publictrust.jpg)

# It doesn&#39;t have to be this way

The root cause is the lack of trust for the security team, the belief that they are against progress and good. The solution to this is [security marketing and sales](https://saltyonsecurity.net/posts/securitymarketing/), but those measures go a lot farther if you have concrete examples of providing benefit. Your best approach is [building out standard](https://saltyonsecurity.net/posts/notjob0/#the-winning-strategy), secure solutions that work for most people. Success in this strategy is showing your customers that an existing solution meets their needs and provides unexpected value over the solution they&#39;re considering without demeaning them or their judgement.

Here are some common barriers to achieving that:

## Finding options

The sooner you can get your solution in front of people with a problem, the less invested they&#39;ll be in their way of doing it. [Advertise](https://saltyonsecurity.net/posts/securitymarketing/) your standard solutions: a searchable, linked landing page explaining how and when (and why!) to use a particular standard goes a long way.

## Figuring out how

Even if they know about a standard solution, you&#39;ll lose them if it&#39;s hard or unclear how to get started. Make it easy: create how-to videos or procedures. Make your doc easy to understand. Make the steps easy. Link directly to intakes if administrative action is required to get them started. Respond to intakes in a timely way.

## The time it takes to use

If they start using your standard solution but it takes a long time to do what they need, they will try to find another solution that works better for them. Sometimes you can fix this with training. Sometimes you need to adapt the user experience to meet their needs.

## Whether it worked

If the interface doesn&#39;t always work the way users expect, that quickly builds distrust of the system. If people can&#39;t trust something, they need to spend extra time &quot;babysitting&quot; it to ensure that what they wanted is what actually happened. Babysitting time builds ill-will faster than most other sorts of work.

## Whether it was fast

[People are](https://www.nngroup.com/articles/response-times-3-important-limits/) [sensitive](https://designingforperformance.com/performance-is-ux/) to [performance](https://services.google.com/fh/files/blogs/google_delayexp.pdf); they [resent](https://www.researchgate.net/publication/228975627_Frustration_A_common_user_experience) time spent waiting. Also consider fulfillment time if the system fronts a service. If people think that engaging a team through your ticketing system is slower than emailing them, they will blame that experience on the ticketing system and try to avoid filing tickets.

User Stories are one of the best methods for finding and prioritizing opportunities in lowering these barriers. Next week, we&#39;ll explore how that&#39;s done.

## Meta-barriers

Sometimes, improvements are hard to deliver because underlying issues increase their cost.

### Cultural barriers to change

If your organization prefers capitalizing spend, you may be vulnerable to stagnating capabilities.

Continual improvement (or its close relatives Agile and devops) usually starts with a consistent effort or spend and delivers a steady stream of improvements within that commitment.

Capitalizing spend is the opposite: leaders jockey for transformational jumps with one-time, upfront costs, then amortize that spend over the next 5-7 years.

One of the dangers of favoring capital spend is a high barrier to continual improvements: once you get approval to build your system, you may go 10 years before getting significant budget again to make changes. As the organization evolves, the processes and capabilities as originally built may become cumbersome or even more trouble than they&#39;re worth. In extreme cases, this culture can even yield deferred maintenance, which in the IT world produces substantial security risk.

In any organization, it requires extra effort to stay on top of the performance of your managed capabilities. It&#39;s easier to make something good than to keep it good. A culture of continuous improvement is the only consistent way I know to prevent stagnation and backsliding.

### Technical barriers to change

Higher cost or risk to change a system exponentially discourages improvements. This is a huge hidden cost of static, heavy designs; avoiding it is a driving pillar of devops.

Consider: if it takes 5 minutes to adjust the wording on a landing page and you have high confidence that your change will not break anything else, you won&#39;t think twice. You don&#39;t need change tickets, you don&#39;t need outage windows, you don&#39;t need reversion plans or hypercare or communication or even testing. You just do it.

![Rihanna thinks you can do it!](/images/workworkworkjustdoit.jpg)

Think of the further savings if little skill is needed: the person who wants the change can do it themselves. They don&#39;t need to find someone to build it, they don&#39;t need to propose funding for paying that person, they don&#39;t need to submit their proposal to a queue and wait for their ticket, their builder doesn&#39;t need to write functional and technical specs, and nobody needs UAT. You get to skip arguments about where blame should fall if the requester isn&#39;t happy with the deliverables. Everybody avoids the risk that the requester forgot what they wanted by the time it was delivered.

Some rigor [may still be wise](https://www.joelonsoftware.com/2000/10/02/painless-functional-specifications-part-1-why-bother/) if the changes are complicated enough, but you do get to skip all the steps that catch gaps between the vision and deliverables. Worst case, if they fail it&#39;s another opportunity for them to appreciate how hard building is and how easy delivery teams make it look.

Low barriers to change encourages creativity and problem-solving at lower organizational levels, letting more people make more improvements faster. When selecting platforms and tools, prioritize those that require little effort to change workflows, dataflows, and UIs.

[No-code, Low-code](https://www.forbes.com/sites/forbesbusinesscouncil/2021/07/30/a-guide-to-low-codeno-code-development-platforms-in-2021/?sh=13a784b71093), and RPA platforms promise to deliver on this vision, but the same principles of user experience design apply: if they&#39;re [buggy, slow, or hard-to-use](https://powerusers.microsoft.com/t5/General-Power-Automate/bd-p/MPAForum), you&#39;re just moving the high barrier to change and you may not get the magical awesomeness you hoped for.

# Key Questions

As you [listen carefully](https://saltyonsecurity.net/posts/securitymarketing/#sales) to your customers and [market your capabilities](https://saltyonsecurity.net/posts/securitymarketing/#marketing) within the context of their goals, consider the boring ways you may be frustrating them daily. Do their interactions with your teams and platforms damage your credibility? Do people complain about or resist you because of unrelated pain they blame you for? How much goodwill and influence can you gain by reducing that frustration?

Next week, we&#39;ll start to explore some concrete lessons from the world of UI/UX design that can help reduce frustration, pain, and avoidance with your services and platforms, allowing you to change hearts and minds. Woo.

![Change Hearts and Minds just like the Shockmaster!](/images/heartsandminds.png)