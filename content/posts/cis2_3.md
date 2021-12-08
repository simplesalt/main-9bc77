---
title: CIS 2.3 - Unauthorized Software
excerpt: >-
  The biggest risk from software is vulnerabilities and packaged malware. CIS
  2.3 tells you to get rid of the worst stuff.  
date: '2021-12-08'
seo:
  title: CIS 2.4 - Discovery
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

CIS 2.3 contains multitudes. At the core, it says that detecting and removing bad software is helpful in reducing security risk. It looks simple, but even if you have built processes and can execute on them consistently and efficiently, there&#39;s a lot more going on than meets the eye. Luckily, it doesn&#39;t have to be hard if you build it right.

## Implication 1: Enterprise Assets

Let&#39;s start with scope: where do we need to govern software? CIS says, &quot;enterprise assets&quot;. By context, &quot;asset&quot; is almost certainly one of the things in your **Inventory of IT Stuff.**

Enterprise is harder. It usually indicates that the capability or thing is managed by an all-organization shared service. Examples include Enterprise HR, Enterprise Marketing, or Enterprise Finance, and contrasts to an embedded function: &quot;segment Finance&quot; or &quot;\&lt;Business Unit\&gt; Marketing&quot;. IT even has its own term for capabilities it doesn&#39;t control: &quot;Shadow IT&quot;.

It could also mean &quot;belonging to or managed by your enterprise&quot;. This interpretation is a bit redundant - what are you gonna do, manage assets in someone else&#39;s enterprise? Even so, this is a more sensical path: CIS 1 was all about getting a handle on _all_ the IT assets. CIS isn&#39;t gonna turn around and say, &quot;now that you&#39;ve gotten your big list of Everything Everywhere, just govern the parts managed by Shared Service teams.&quot;

You could also interpret &quot;enterprise&quot; to distinguishes assets under complete control from those partially managed by the organization (employee-provided cellphones used for company work, commonly &quot;BYOD&quot;). An IT team doesn&#39;t have legal rights to delete Farmville from an employee&#39;s phone unless the company owns that phone and notifies the employee of their acceptable use of the device. I like this interpretation best; it&#39;s mostly the same as the second interpretation and fits other situations in which an organization has only partial control over an IT Asset.

## Implication 2: Documented Exception

Most large security teams have a team called Governance, Risk, and Compliance. These are usually the least technical, and help interpret regulations, handle audits, and mostly help the rest of security stay organized. One of their standard capabilities is exception management. Audits check to see whether what you&#39;ve written down matches what&#39;s true. Audits depend on policy, then check adherence to it. If a team decides not to follow policy in a certain instance, auditors expect that decision to be written down. That is an exception. While it&#39;s theoretically possible for an exception to remain undocumented, it&#39;s indistinguishable from no exception at all and the ever-popular approach of &quot;ignoring policy and making it up as you go along.&quot;

Just like any reasonable idea, there are a million ways that exceptions can become dysfunctional and worse than useless. A thorough discussion of indicators for high-quality GRC capabilities does not belong in an article about software governance, but I will say one thing: it is necessary.

Many GRC thought leaders and talking heads rail against exceptions, often because they&#39;ve cut their teeth in unhealthy organizations with bad exception management. Further, every exception means more work for the GRC team, and it&#39;s thankless work. People in GRC naturally try to optimize their work by reducing or eliminating exceptions. &quot;Everything would be so much better if everyone just followed the policies!&quot; they resentfully mutter to each other. They dream of A Bright Future With No Exceptions.

But here&#39;s the thing: Policies are inherently compromises. If proscriptive, there will be more situations they don&#39;t fit, and thus incur more exceptions. If they are less proscriptive, they won&#39;t be as useful in communicating security&#39;s priorities and vision. If they are proscriptive and but deeply granular, they&#39;ll be longer, fewer people will read them, and they&#39;ll be less useful. In a healthy exception and policy process, the only difference between an exception and a carve-out in policy is just marketing.

Writing extensively about indicators for GRC team effectiveness isn&#39;t on my shortlist, so if you&#39;re interested, hit me up.

### Fine, what do I do?

If you don&#39;t have an exception process, it&#39;s easy to build. You can do it with 6 columns in an excel worksheet. Assign someone to manage them, an intake, and probably a barebones procedure. Your worker will assess the scariness (&quot;risk&quot;) of each exception and socialize it appropriately – if it&#39;s very scary, more senior executives need to be aware that it&#39;s happening. Your exception manager also needs to follow up periodically – maybe they figured it out and are now following policy. CIS is aggressive on this – don&#39;t do it monthly; a year is usually about right. Nobody changes their mind on a decision to not follow policy within a month.

## Implication 3: Unauthorized Software

I have yet to see an organization that had desktop software buttoned down. It&#39;s getting easier as more use cases move to webapps, but most large organizations have buckets of apps of dubious origin and incomprehensible variety.

Not all of it needs localadmin either: there are portable binaries, browser plugins, and locally-developed &quot;applications&quot;. Some apps (Chrome and VSCode are the best examples) don&#39;t even want to be installed with any privilege – the binaries are stored in user data locations.

If you have macs or linux, the line gets even more blurred: anyone can chmod +x a text file and it&#39;s now an executable.

It can be overwhelming. Where do you start?

You could interpret &quot;Unauthorized Software&quot; as any software that hasn&#39;t been approved. This is the default interpretation of many hard-nosed security engineers. It&#39;s in that spirit of &quot;I need to look at everything you do to make sure it&#39;s not bad&quot; approach that pervades the security industry.

Vetting every piece of software before it&#39;s allowed to be used is a huge effort, and not really the point of this control – that is delivered by CIS 2.5-2.7.

The true meaning of Unauthorized in CIS 2.3 is to maintain a list of bad software and use your discovery engine to find and squash any installs (with exceptions as warranted, per above). In this vision, you continually improve the security and health of your worker endpoints by adding bad software to the list and eliminating any associated installs. This allows you to start small and gradually expand your list of bad software as you drive people to your recommended options.

The software you want to start with is the possibly illegal or malicious stuff: TOR browsers, freeware packaged with adware or malware, downloads from cnet or a torrent. From there, you'll want to work on EOL apps with major and common vulnerabilities: old java, proprietary browser plugins that only work with IE6, etc. You may also consider adding software that allows people to bypass security controls such as Type 2 Hypervisors. 

This approach is a great next step toward governing software throughout your organization. It&#39;s much less effort than the allowlisting and with CIS 2.2, delivers most of the value.

## Implication 4: The Challenge

The hardest part will be the cultural transition from an organization where people install what they want, when they want, to one where they use approved tools and processes.

You will need excellent partners in IT to pull this off. People install junk for a reason – they think it will solve their problem. If you&#39;re going to make any headway, you need to persuade them that vetted alternatives are better than what they find. Getting authorized software needs to be faster and easier than unauthorized. You need to build credibility for yourself and your partners.

As you add items to your list of unauthorized software and start telling people to remove it, you will need a repeatable, friendly process to help them find a good replacement for whatever they needed it for. IT desktop teams are usually the best equipped to meet this need.

# The Bigger Picture

CIS 2.3&#39;s mission of whacking bad junk can help you start your journey of governing software. Coupled with the discovery engine you plumbed in CIS 2.4, it can really help reduce risk of compromise on your worker endpoints like desktops and laptops.

As you get rid of the easy bad software, you&#39;ll start to tackle applications used by larger groups of people, and for some of them, you&#39;ll decide that their application is the best fit for their use case. What then?

Next week, we&#39;ll talk about an Authorized Software Inventory, CIS 2.2, and other next steps in progressing you toward that shining utopia of CIS 2.5-2.7, proscriptive allowlists.