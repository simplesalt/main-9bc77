---
title: CIS 2.3 - Unauthorized Software
excerpt: >-
  The biggest risk from software is vulnerabilities and packaged malware. CIS
  2.3 tells you to get rid of the worst stuff.  
date: '2021-12-08'
seo:
  title: CIS 2.3 - Discovery
  description: What is more helpful than a list of IT Stuff? Knowing what each thing does!
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: CIS 2 Explained
      keyName: property
    - name: 'og:description'
      value: >-
        What is more helpful than a list of IT Stuff? Knowing what each thing
        does!
      keyName: property
    - name: 'og:image'
      value: images/messydesktops.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: CIS 2 Explained
    - name: 'twitter:description'
      value: >-
        What is more helpful than a list of IT Stuff? Knowing what each thing
        does!
    - name: 'twitter:image'
      value: images/messydesktops.png
      relativeUrl: true
layout: post
thumb_img_path: images/implications.png
thumb_img_alt: This Control Contains Implications
content_img_path: images/implications.png
---
> CIS 2.3: Ensure that unauthorized software is either removed from use on enterprise assets or receives a documented exception. Review monthly, or more frequently.

CIS 2.3 contains multitudes. It looks simple, but even if you have built processes and can execute on them consistently and efficiently, there's a lot more going on than meets the eye. Luckily, it doesn't have to be hard if you build it right. If you don't want to read all the linguistic analysis and commentary, here's the Salty version:

> Eliminate bad software.

with common sense answering the where/when/why/how.  This article builds on the foundations and vision described in the [CIS 2](/posts/cis2) and [CIS 2.1](/posts/cis\_2.1) articles.  Still want to read more?  Let's dig in.

## Implication 1: Enterprise Assets

Let's start with scope: where do we need to govern software? CIS says, "enterprise assets". By context, "asset" is almost certainly one of the things in your **Inventory of IT Stuff.**

Enterprise is harder. It usually indicates that the capability or thing is managed by an all-organization shared service. Examples include Enterprise HR, Enterprise Marketing, or Enterprise Finance, and contrasts to an embedded function: "segment Finance" or "\<Business Unit> Marketing". IT even has its own term for capabilities it doesn't control: "Shadow IT".

It could also mean "belonging to or managed by your enterprise". This interpretation is a bit redundant - what are you gonna do, manage assets in someone else's enterprise? Even so, this is a more sensical path: CIS 1 was all about getting a handle on *all* the IT assets. CIS isn't gonna turn around and say, "now that you've gotten your big list of Everything Everywhere, just govern the parts managed by Shared Service teams."

You could also interpret "enterprise" to distinguishes assets under complete control from those partially managed by the organization (employee-provided cellphones used for company work, commonly "BYOD"). An IT team doesn't have legal rights to delete Farmville from an employee's phone unless the company owns that phone and notifies the employee of their acceptable use of the device. I like this interpretation best; it's mostly the same as the second interpretation and fits other situations in which an organization has only partial control over an IT Asset.

## Implication 2: Documented Exception

Most large security teams have a team called Governance, Risk, and Compliance. These are usually the least technical, and help interpret regulations, handle audits, and mostly help the rest of security stay organized. One of their standard capabilities is exception management. Audits check to see whether what you've written down matches what's true. Audits depend on policy, then check adherence to it. If a team decides not to follow policy in a certain instance, auditors expect that decision to be written down. That is an exception. While it's theoretically possible for an exception to remain undocumented, it's indistinguishable from no exception at all and the ever-popular approach of "ignoring policy and making it up as you go along."

Just like any reasonable idea, there are a million ways that exceptions can become dysfunctional and worse than useless. A thorough discussion of indicators for high-quality GRC capabilities does not belong in an article about software governance, but I will say one thing: it is necessary.

Many GRC thought leaders and talking heads rail against exceptions, often because they've cut their teeth in unhealthy organizations with bad exception management. Further, every exception means more work for the GRC team, and it's thankless work. People in GRC naturally try to optimize their work by reducing or eliminating exceptions. "Everything would be so much better if everyone just followed the policies!" they resentfully mutter to each other. They dream of A Bright Future With No Exceptions.

But here's the thing: Policies are inherently compromises. If proscriptive, there will be more situations they don't fit, and thus incur more exceptions. If they are less proscriptive, they won't be as useful in communicating security's priorities and vision. If they are proscriptive and but deeply granular, they'll be longer, fewer people will read them, and they'll be less useful. In a healthy exception and policy process, the only difference between an exception and a carve-out in policy is just marketing.

Writing extensively about GRC isn't on my shortlist. If you're interested, [hit me up](/contact).

### Fine, what do I do?

If you don't have an exception process, it's easy to build. You can do it with 6 columns in an excel worksheet. Assign someone to manage them, publish an intake, and write a barebones procedure. Your worker will assess the scariness ("risk") of each exception and socialize it appropriately – if it's very scary, more senior executives need to be aware. Your exception manager also needs to follow up periodically – maybe they are now following policy. CIS is weirdly aggressive on this – nobody changes their mind after a month.  For most organizations, a yearly review cycle is about right.

## Implication 3: Unauthorized Software

I have yet to see an organization that had desktop software buttoned down. It's getting easier as more use cases move to webapps, but most large organizations have buckets of apps of dubious origin and incomprehensible variety.

Not all of it needs localadmin either: there are portable binaries, browser plugins, and locally-developed "applications". Some apps (Chrome and VSCode are the best examples) don't even want to be installed with any privilege – the binaries are stored in user data locations.

If you have macs or linux, the line gets even more blurred: anyone can chmod +x a text file and it's now an executable.

It can be overwhelming. Where do you start?

You could interpret "Unauthorized Software" as any software that hasn't been approved. This is the default interpretation of many hard-nosed security engineers. It's in that spirit of "I need to look at everything you do to make sure it's not bad" approach that pervades the security industry.

Vetting every piece of software before use is a huge effort and not the point of this control – that is delivered by CIS 2.5-2.7.

Unauthorized in CIS 2.3 means maintaining a list of bad software and using your discovery engine to find and squash any installs (with exceptions as warranted, per above). In this vision, you continually improve the security and health of your worker endpoints by gradually expanding your list of bad software as you drive people to better options.

The software you want to start with is the possibly illegal or malicious stuff: TOR browsers, freeware packaged with adware or malware, downloads from cnet or a torrent. From there, you'll want to work on EOL apps with major and common vulnerabilities: old java, IE6, etc. You may also consider adding software that allows people to bypass security controls such as Type 2 Hypervisors.  You can even go crazy and disallow some software by function: maybe fancy powershell consoles are Unauthorized for everyone except IT.

## Implication 4: The Challenge

The hardest part will be the cultural transition from an organization where people install what they want, when they want, to one where they use approved tools and processes.

You will need excellent partners in IT to pull this off. People install junk for a reason – they think it will solve their problem. If you're going to make any headway, you need to persuade them that vetted alternatives are better than what they find. Getting authorized software needs to be faster and easier than unauthorized. You need to build credibility for yourself and your partners.

As you add items to your list of unauthorized software and start telling people to remove it, you will need a repeatable, friendly process to help them find a good replacement for whatever they needed it for. IT desktop teams are usually the best equipped to meet this need.

# The Bigger Picture

As you get rid of the easy bad software, you'll start to tackle applications used by larger groups of people, and for some of them, you'll decide that their application is the best fit for their use case. What then?

Next week, we'll talk about an Authorized Software Inventory, CIS 2.2, and other next steps in progressing you toward that shining utopia of CIS 2.5-2.7, proscriptive allowlists.

CIS 2.3's mission of whacking bad junk can help you start your journey of governing software. Coupled with the [discovery engine you plumbed](/cis2\_4) in CIS 2.4 and the other continuous improvement ideas we'll describe in CIS 2.2, it can really help reduce risk of compromise on your worker endpoints.
