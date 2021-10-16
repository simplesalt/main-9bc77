---
title: CIS 1.1 -  the Mission
excerpt: >-
  CIS 1.1 contains the core mission of CIS 1: have an accurate Inventory of IT Stuff.  The other CIS 1 controls are just supporting ways that help deliver that core mission. 
date: '2020-12-10'
seo:
  title: CIS 1.1 -  the Mission
  description: >-
    CIS 1.1 contains the core mission of CIS 1: have an accurate Inventory of IT Stuff. 
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: CIS 1.1 -  the Mission
      keyName: property
    - name: 'og:description'
      value: >-
        CIS 1.1 contains the core mission of CIS 1: have an accurate Inventory of IT Stuff. 
      keyName: property
    - name: 'og:image'
      value: images/6.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: CIS 1.1 -  the Mission
    - name: 'twitter:description'
      value: >-
        CIS 1.1 contains the core mission of CIS 1: have an accurate Inventory of IT Stuff. 
    - name: 'twitter:image'
      value: images/6.jpg
      relativeUrl: true
layout: post
---
> Establish and maintain an accurate, detailed, and up-to-date inventory of all enterprise assets with the potential to store or process data, to include: end-user devices (including portable and mobile), network devices, non-computing/IoT devices, and servers. Ensure the inventory records the network address (if static), hardware address, machine name, enterprise asset owner, department for each asset, and whether the asset has been approved to connect to the network. For mobile end-user devices, MDM type tools can support this process, where appropriate. This inventory includes assets connected to the infrastructure physically, virtually, remotely, and those within cloud environments. Additionally, it includes assets that are regularly connected to the enterprise’s network infrastructure, even if they are not under control of the enterprise. Review and update the inventory of all enterprise assets bi-annually, or more frequently.

CIS 1.1 contains the core mission of CIS 1: have an accurate **Inventory of IT Stuff**.  The other CIS 1 controls are just supporting ways that help deliver that core mission. 

We’ve already covered the vagueness of “assets” in the overview of CIS 1.  The scariest part of 1.1, and the most important part, is the word “maintain”.  If this inventory is going to be the starting place for many security capabilities, it needs to be accurate, otherwise you’ll waste your and your friends’ time on chasing bum leads for old or wrong asset records.  From personal experience, this can be enormously frustrating.

This is the biggest challenge: how do you keep an inventory accurate?  You’ve got scanners and all sorts of people feeding you all sorts of data, and you are responsible for mushing it together into something dependable. 

## An old problem

If you ask IT Management Consulting companies or experienced Enterprise Architects, this is a common general problem on data and analytics teams; it’s called “Master Data Management.”  For our purposes, two MDM approaches apply:

*   **Check incoming info for badness**.  Sometimes called “data validation.”  Examples:
    *   If you have a “New VM Request Form” that creates a record in the Inventory, maybe you should check whether “Owner” field looks like a person.  Better yet – maybe you can design the form to be a selection from current employees. 
    *   Do new records match existing records where you’d expect them to be unique?  For instance, IP address, domain name. 
    *   If you just picked this thing up on a recent scan, is it good or bad?  Is it going to infect things?  Does anyone know anything about it?
*   **Check existing info for badness**.  Examples:
    *   Is the person in the owner field still an employee? 
    *   Is the person in the owner field still in the same job role? 
    *   Has one of your automatic scanners seen this asset recently? 
    *   Has the address of this asset changed recently?  Gracefully managing address changes can be a headache. 
    *   Does the asset still have the same purpose?

You can certainly think of other wrongness in the inventory that would cause your customers frustration.  The most painful sources of bad data will differ by organization and environment.  But they will also change over time for each environment: new sources of bad data will show up and need fixing.  This requires people: **_You cannot automate your way to good data quality_**.  You will _always_ need good people to keep looking at it, because most of the wrongness needs some kind of triage and thought to resolve. 

You can use your people effectively, and you can get your customers into doing a lot of your work for you. 

## Your customers

Different internal customers will want different things from an inventory.  Some common customers are listed below, with typical perspectives and priorities listed:

*   Server Management: needs to know about the important servers and the infrastructure supporting them.  They mostly want to know, “how angry will my CEO be if this thing dies” so they can work to keep that from happening. 
*   Backup and Disaster Recovery: similar needs to Server Management: needs to know about the important servers so they can make sure they’re resilient.  They want to know, “how angry will my CEO be if this thing dies and we can’t get it back.”
*   User Device Management: wants to know about every user device.  This can include computers, desk phones, organization-managed cellphones, printers, and meeting room equipment.  They are usually trying to minimize the problems users report on their devices, measured by the number of complaints and how much work it is to solve them. 
*   Machine Management Security: security teams need server and user device teams to apply minimum security for all their assets: patching operating systems and installing some special security software.  Security teams need to be sure that their minimum requirements are actually on all the assets, so needs to know the assets where their requirements apply.  Sometimes the Server and User Device teams also use the same model because it’s often cheaper and more reliable if everything you manage looks the same.  For more, see the articles on CIS 5: Secure Configurations. 
*   Vulnerability Management: needs to know every IT thing that could be broken into so they can point an automated vulnerability scanner at it.  Needs to know who can address the vulnerabilities they find – often this is a combination of owners or support teams.  Is often tempted to think that each address should have a single point of contact to fix all vulnerabilities because that’s how their tools work. 
*   IT Incident Response: The team that watches IT health dashboards, get angry people calling when things are broken, and wake the right people up to fix things.  They need to know about every IT thing, how important it is, and who can fix it. 
*   Security Incident Response: The team that watches security dashboards to watch for hacking, viruses, and suspicious behavior.  They need to know about every IT thing, how scary it is, and who can fix its problems.  For a deeper discussion of “scary,” see the section on CIS 13.1 and Inherent Risk.  Often this team’s incidents are less frequent and cost more than the service outages that IT Incident Response is concerned with. 
*   Regulatory: sometimes there are legal or contractual restrictions based on data types, so these teams often care about what data sits on which things so they can make sure those things meet requirements.  Examples include HIPAA, PCI, and PII localization and retention. 

## Strategies

to help you manage the inventory:

*   If your organization has a decent data/analytics team, a great option is to convince them to own the inventory – this is their area of expertise.  Step into a coordinating role, letting the teams that consume the inventory discuss their priorities directly with the data team.  If this isn’t possible and you need to fulfill the capability within your own team, hire someone with data, reporting, or analytics experience to manage the inventory, even if they have no experience in security.  It is easier to teach someone a new set of data than it is to teach them the techniques to work with it. 
*   Frame the asset inventory as a service to internal customers.  Negotiate with them to choose data quality metrics that describe the kinds of wrongness in the inventory most important to them, and regularly publish those metrics to them.  This will make the errors that cause them pain impersonal and give you a solid way to discuss what more they need: if they need a higher degree of accuracy on a particular field in your inventory, let them advocate for whatever resources you would need to make that happen: an extra FTE, help from an internal resource, organizational change, or contractor dollars to code some new data transformation logic. 
*   Listen closely for mentions of shadow inventories.  Because so many teams need the information in an asset Inventory, often they start maintaining their own because they perceive it to be easier than working with the central one.  In the end, this often has large hidden costs because of duplicate data management, and often politically devalues the central inventory.  When you encounter a shadow inventory, listen closely to the needs and priorities that drove the team to generate their own, and try to court them as a potential customer – what more could you do to meet their needs?
*   Regularly talk to customers: are they happy with the inventory?  What challenges do they face that you might help with?
*   Designate a Product Manager to do all this stuff for you.  Let them be the point of contact for each of your internal customers and anyone who works on the data.  The primary skills for this role are soft: customer service, communication, and organization, but needs to have a decent grasp on data quality to understand customer needs.  Their mission is to make sure all the customers are satisfied with the inventory. 

## Priorities and disconnected things

Your inventory will not be perfect.  It will miss devices it should have, and it won’t ever have every useful bit of information that your customers would want.  Regularly measure its imperfection, and report those metrics to your customers.  Talk to them about what they want, and if capturing it is worthwhile. 

Like almost everything else, trying to make your inventory perfect will fail because of diminishing returns – many improvements will impose more cost on your organization than the value of the improvement.  Adding more governance often backfires, too.  If people find it overwhelming to keep their assets updated because you require too much information, they will avoid doing it, and your inventory will suffer.  Their creativity in avoiding your process is much greater than your ability to force them into it.  If people are avoiding your governance, the problem is not them, it’s your process. I'll repeat:

> People's creativity in avoiding your process is much greater than your ability to force them into it.

I disagree with CIS’ statement that the inventory must contain all hardware assets, including disconnected ones.  It reminds me of the lofty pronouncements in ISO, which draw clear lines but are fuzzy on the details; see [CSC 1: Why](/cis1/) for more on why some hardware assets aren't worth it.  Tracking down every cold-storage hard drive and standalone CNC lathe with embedded XP is a waste of your time.  Knowing about the Box.com accounts your sales reps use to share off-color memes and sensitive customer data is way more valuable.  Use common sense and your customer’s priorities when determining which kinds of things you need in your inventory, and how accurate each part needs to be. 

See other posts for detailed techniques to build and _maintain_ an accurate and dependable **Inventory of IT Stuff**, including:

*   [CIS 1: Why?](/cis1/)
*   [The Mission (CIS 1.1)](/cis1_1/)
*   [Discovery (CIS 1.3-1.5)](/cis1_3-5/)
*   [Useful Information (CIS 1.1, part 2)](/cis1_1_2/)
*   [Standard Work (CIS 1.2)](/cis1_2/)