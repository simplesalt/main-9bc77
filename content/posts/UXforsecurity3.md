---
title: "Better Security through Solid UX 3: Another example"
subtitle: "What's the user experience of your CMDB?"
date: '2022-06-07'
excerpt: >-
  Perhaps you, like many, subscribe to the wisdom of CIS and campaign for an accurate IT Asset Inventory. Working with the IT Infrastructure and the CMDB teams, you've plumbed in discovery of on-prem server assets with your vulnerability scanner. You still need IT people to add useful information to the discovered assets, and need them to manually add cloud-hosted assets and worker endpoints. Consider the following user stories for managing IT Assets in the CMDB. Next week, we’ll unravel common threads, opportunities, and potential fixes.
seo:
  title: "Better Security through solid UX 3: Another example"
  description: "What's the user experience of your CMDB?"
  robots: []
  extra: []
layout: post
thumb_img_path: /images/sarah_executive.jpg
thumb_img_alt: Sarah
---

Last time, we introduced User Experience and how it can help you improve perceptions of the security team and your overall influence. Last week, we made it real with a practical example about authenticating to a CRM. Today, we'll extend with another example, writing 6 more user stories centered on adding assets to a CMDB at a hypothetical organization. We will leave common threads and best next steps as an exercise, with my observations the following week.

Perhaps you, like many, subscribe to the [wisdom of CIS](https://saltyonsecurity.net/posts/why_cis/) and campaign for an accurate [IT Asset Inventory](https://saltyonsecurity.net/posts/cis1_1/). Working with the IT Infrastructure and the CMDB teams, you've plumbed in [discovery](https://saltyonsecurity.net/posts/cis1_3-5/) of on-prem server assets with your vulnerability scanner.

You still need IT people to add useful information to the discovered assets, and need them to manually add cloud-hosted assets and worker endpoints.

Consider the following user stories for managing IT Assets in the CMDB. Next week, we’ll unravel common threads, opportunities, and potential fixes.

# Persona 4: Frankie

Frankie, 42, has 5 kids and is deeply involved in their lives and his community. He is an infrastructure engineer, managing the blades, the SAN, the VMWare clusters, the monitoring and alert system, and the SQL farm. Frankie is diligent and careful; he hates surprises and being embarrassed.

| ![Frankie](/images/frankie.webp) |
|:---:|
| *Frankie gets it done* |

## What is Frankie's likely experience?

When he installs new hardware, Frankie updates the CMDB by uploading a CSV with the new assets; he dislikes using the mouse. He's configured automatic failovers and outage alerts on all his systems, so doesn't see much point in CMDB notifications. He created a mail rule to send all the CMDB messages to spam because there are so many of them; he checks them when he's bored.

Frankie never puts his name on the assets he uploads because he doesn't want confused executives or application teams calling him in the middle of the night asking if he can fix their outage—if it was his problem to fix, he'd already have an automated text about it.

He has painful memories of being forced to apply a patch to quickly eliminate a vulnerability, but the patch caused overnight alerts, downtime, angry people, and had to be painfully reverted. These make him distrust the security team, and he has a personal policy of only applying patches after they've been out for 6 months.

Updating assets works well for Frankie, but his assets don't provide useful information to anyone else. He doesn't want tickets about outages or to patch his systems and wouldn't respond to them anyway. Several times, other IT busybodies (including security) have tried to get him to add metadata to his assets, but his manager stuck up for him, saying that they don't have the resources.

### User Story 4.1

*As* Frankie, *I want to* make CMDB updates fast and easy *so that* nobody gets mad at me.

### User Story 4.2

*As* Frankie, *I want to* avoid getting unnecessary emergency escalations *so that* I have a better quality of life.

# Persona 5: Sarah

Sarah, 33, is passionate about her work and making a difference in the world. She balances work, a board position on an international nonprofit, and an advisory role with a professional association. She has been recently hired as a Business Transformation Officer reporting to the CEO, championing the rollout of a new R&D pipeline for product commercialization.

Sarah has selected and gotten approval for a new cloud-based platform to manage the pre-revenue product portfolio. She needs to get it working fast but is still hiring her team. She knows security will be important for her system and wants that team's future support. She meets with a security leader, who promises partnership and asks her to register her IT assets.

| ![Sarah](/images/sarah_executive.jpg) |
|:---:|
| *Sarah is going places* |

## What is Sarah's likely experience?

She tries to follow through but must first request an account in the CMDB, and it takes 8 days. Once she gets in, she searches around for how to add a SaaS app, but the form she finds has 15 mandatory fields about IP addresses and VLANs and support groups and other technical details that don't apply. She calls the service desk for help, but the rep doesn't know either and files a ticket for her. Two days later, she gets a call from the CMDB team, who directs her to another page for registering applications, and gives her some dummy values to cheat 4 mandatory but inapplicable fields.

Sarah spent 4 hours over 2 weeks honoring the security leader's request, and almost all that time was spent trying to navigate the system. The experience made her feel like she was swimming upstream—that maybe she was the first person he’s ever asked. She's also not sure what value her effort was supposed to produce; maybe it was a waste of her time.

### User story 5.1

*As* Sarah, *I want to* quickly record a new IT Asset *in order to* follow the rules.

### User Story 5.2

*As* Sarah, *I want to* record SaaS apps *in order to* follow the rules.

# Persona 6: Larry

Larry, 66, is a home brew enthusiast and does salsa dancing now that his kids are grown. He works on the service desk team, managing the fleet of laptops and desktops. He pushes out monthly patches, maintains app packages, mentors the tier-1 support, and does tier-2 support for desktop issues.

| ![Larry](/images/larry.jpg) |
|:---:|
| *Larry is over it* |

## What is Larry's likely experience?

Larry knows he's supposed to add all the laptops and desktops to the CMDB, but doesn't see the point. He provisions and decommissions 10 each week in replacements, refreshes, and employees leaving or joining. It takes 25 minutes to register a single laptop through the form in the CMDB: he must search for the record if it exists, find the record in Active Directory, and paste relevant information into the CMDB record. He's also learned that the CMDB times out his session while he's looking up the information, so he can't fill out the form directly or it will lose his work when he tries to submit.

The CMDB doesn't really help him with his work, so Active Directory is his source of truth for asset records. He has a monthly reminder to extract the updated computer records from Active Directory and upload them to the CMDB, but sometimes forgets. He rarely deletes decommissioned laptops. He also doesn't realize this, but because laptops and desktops are IPed with Active Directory DHCP, almost none of the laptop IPs are correct; they've gotten new leases since he initially recorded them.

### User Story 6.1

*As* Larry, *I want to* update IT Asset records without timing out *in order to* follow the rules.

### User Story 6.2

*As* Larry, *I want* the CMDB to match the records in AD *in order to* save time and errors.

# Next time

Join us next week as we highlight opportunities and common threads identified in the personas and user stories. If you'd like to use this article as an exercise to practice your new UX skills, see if you can answer the following:

-   What other personas should we consider?
-   What other user stories are worth writing?
-   What common threads, root causes, and opportunities do you see?
-   How would you best fix them?

I'd love to hear your answers—throw them in a comment below. If you'd like to discuss, [hit me up](http://saltyonsecurity.net/contact).
