---
title: CIS 2.1 - the Mission
excerpt: >-
  CIS 2.1 contains the core mission of CIS 2: have an accurate Software Inventory.  The other CIS 2 controls are just supporting ways that help deliver that core mission. 
date: '2020-12-10'
seo:
  title: CIS 2.1 - the Mission
  description: >-
    CIS 1.1 contains the core mission of CIS 2: have an accurate Software Inventory. 
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: CIS 2.1 - the Mission
      keyName: property
    - name: 'og:description'
      value: >-
        CIS 1.1 contains the core mission of CIS 1: have an accurate Software Inventory. 
      keyName: property
    - name: 'og:image'
      value: images/knowing-is-half.webp
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: CIS 2.1 - the Mission
    - name: 'twitter:description'
      value: >-
        CIS 1.1 contains the core mission of CIS 1: have an accurate Software Inventory. 
    - name: 'twitter:image'
      value: images/knowing-is-half.webp
      relativeUrl: true
layout: post
---
> Establish and maintain a detailed inventory of all licensed software installed on enterprise assets. The software inventory must document the title, publisher, initial install/use date, and business purpose for each entry; where appropriate, include the Uniform Resource Locator (URL), app store(s), version(s), deployment mechanism, and decommission date. Review and update the software inventory bi-annually, or more frequently.

I'll be straight with you: the specifics in version 8 on this control are bananas and I don't see how most of the details help the security objectives it's designed to deliver.  I suspect that the writers walked back some of the vision behind this control after feedback that it was too hard.  They switched the vision from "an automatically-populated list of discovered software" to "a high-level list of Big Systems in use". Consider the previous wording in v7:

> Maintain an up-to-date list of all authorized software that is required in the enterprise for any business purpose on any business system. (CIS 2.1)

> The software inventory system should be tied into the hardware asset inventory so all devices and associated software are tracked from a single location. (CIS 2.5)

Pretty different, no?

I advise you to ignore this new compromise, and go after the vision described in version 7:

> Know what software is installed or running on each thing in your **Inventory of IT Stuff**, and tie each record back to a central **Software Inventory**.  

Let's talk about why and what it looks like.

# The Basic Approach

Create a list (**Software Inventory**)of all the software installed and running in your environment (CIS 2.1).  The easiest way is to use discovery tools (CIS 2.4), then deduplicate across them to get a single list.  Use your discovery tools to create and maintain a list for each IT Asset. Store all the lists in your CMDB and use some data quality management to keep them usefully accurate.  

Next, augment each item on the **Software Inventory** with some helpful data, including some kind of vetting (CIS 2.2, 2.3).  

When you're mature with those, lock down operating systems to only permit software vetted in the **Software Inventory** to run (CIS 2.5-2.7).

# The Specifics of 2.1

Your Software Inventory [is useful](/cis2/) mostly as a foundation for other security processes:
1.  Managing vulnerabilities at scale (CIS 7).  
2.  Proscriptively managing configuration (CIS 4).
3.  Contributes to your picture of IT tools.
4.  Allows you to remove localadmin on worker endpoints.

We'll leave the mechanics of generating and maintaining the **Software Inventory** to subsequent articles and focus on particulars of the approach and some of the reasons why I still suggest following the vision of CIS version 7 for Software Inventory.

## Manually Maintained Lists

The problem with this new vision is that it must be manually maintained, and the required details hint at this: you must capture "business purpose", and it mentions that you should "review and update it biannually".  

There's some solid value you can get out of manually maintained lists.  App Tiering is a great example: it's helpful to create several categories of resiliency requirements, then bucket apps into each.  If you're having a conversation with your VP of Sales, your VP of Customer Service, someone from IT Infrastructure, and the ecommerce product manager about a CRM platform, the conversation will be more successful if you're able to say, "Is this CRM important enough to warrant Tier 1 resiliency?"  Each rep will have heard the term before and have a feeling for what that means for their capability. 

But what Tier 1 actually means is a judgement call, and is best determined by the organization and its culture.  Further, the decision of which apps belong in which tier is even more a judgement call, and ideally informed by complex factors specific to the organization's overall strategy.  Manually maintained lists are good at summarizing many contributing factors into a single, simple picture.  But they inherently are most effective when contextualized to the audience, and so are really most effective as a cross-functional communication tool rather than an extract of objective truth.

## Splitting the Difference

As written, this control tries to straddle being a manually maintained list and a Big Data appproach.  While I think both have value, I advise you to disregard the manual side of this objective and focus on getting a solid list of what is installed where, using automatic tools.  The standard work proscribed in CIS 2.3, the automatic collection in 2.4, and switching to proscriptive software management in 2.5-2.7 are much more compatible with the Big Data approach anyway.

You should maintain manual lists of systems, apps and software, but they each should be audience-specific and purpose-built to answer a persistent question in your organization.  CIS focuses on how to _deliver_ security results, and that focus makes it great.  Manual lists are best for explaining and educating about the value of security.  Do them, but not as part of CIS.   

## Other Goofiness

### "Licensed" Software

In the US legal code (and probably most other Common Law legal codes), there's an assumption that everything is owned by someone or entity.  This applies to tangible objects (eg pizzas, cows, real estate), and intangible constructs (books, patents, source code, contractual rights).  There are exceptions that restrict an owner's ability to license, rent, or sell their property (eminent domain, public domain, fair use), but these are all structured as implied, universal addendums to standard licenses.

Long story short, all software is categorically owned and your use of it is always only permitted under license. 

WHile it's technically always true, I advise you to disregard CIS's suggestion to only include licensed software in your inventory.  Any software can be a source of vulnerabilities or a hiding place for malware, regardless of how you acquired it or the contract that governs your use of it.

### Required Fields
> title, publisher, initial install/use date, and ... where appropriate, include the Uniform Resource Locator (URL), app store(s), version(s), deployment mechanism, and decommission date. 

Most of the software metadata described also doesn't help this capability meet our goals. Here's what will be most important:

#### A unique identifier   
You want a universal identifier that uniquely describes each piece of software you want to track.  For instance, if you find Adobe Indesign on one computer, you should be able to tie it back to the idea of "Adobe Indesign" so you can cross-reference it with Adobe Indesign you find on other computers.  Do not make this version-specific, you'll want to be able to say, "Here's all the computers that have Indesign".  Use other fields (such as a version string) to add more context relevant to your security goals.  

In a sense, Title sounds like a good unique identifier.  Any DBA will tell you that's a bad idea, though: use an easily indexed, truly unique field and then just display the software name in the UI.  This will also avoid problems when two pieces of software have the same name because their marketing teams were insufficiently original.

#### Configuration Compliance

This is not included in CIS's required fields, but because your software inventory will be so foundational to Configuration Management (CIS 4), you'll usually want to indicate whether the software on a particular machine conforms to the configuration baseline you've set for it.  Depending on how much your Config Assurance teams work in the Software Inventory vs a dedicated config tool (ansible, SCCM, native AWS, etc), you may want extra contextual configuration fields as well to help them track status.  

#### Proscriptive fields
Some data isn't helpful at the IT Asset level - once it's installed, the download link doesn't really matter.  You should maintain this and other information in a central Authorized Software Inventory - we'll get into this more in CIS 2.2.  

#### Everything else

The rest of the fields don't really help this control satisfy it's security objectives.  Publisher, initial install/use date, licensing, and decommission date may be helpful to IT Operations staff, but they don't help security.  

### Bundles of software
It's often helpful to bundle together software if you want to manage them together. The most common example may be a standard desktop image.  Such an image would contain the operating system, endpoint security software, required clients for enterprise systems (Citrix, SAP, Chrome, Office, etc), and all the configuration for each.  

You may have different bundles that mix and match different software components.  Many companies maintain bundles for webservers, kiosks, database servers, and mobile devices.  

Many organizations consider a bundle to deserve its own entry in the Software Inventory.  Some organizations even structure their software inventories to include dependency information, so bundles can be defined by groups of references to other items in the authorized software inventory, with potential extra configuration baselines for each defined at the bundle level to make it all work together.  

Linux uses this model natively to manage software, with yum and apt delivering the software and ansible, chef, terraform, or puppet delivering configuration assurance.  Many other vendors are also promoting that design, including Microsoft through it's DSC platform.  The basic model has also been extended in cloud infrastructure; see Terraform, Cloudformation, Google Deployment Manager, and Azure Resource Manager.  

### Containers

Containers are an easy way to easily define bundles.  You define them through a yaml file, then tell some compute engine (usually kubernetes or some branded equivalent) to run as many of them as needed to meet performance and resiliency targets. It just creates or deletes instances to match your targets.  Load balancing and near-perfect segmentation happen automagically, and if something weird happens with a running instance, you just delete it and spin up a new one off your recipe file.  

CIS isn't yet very container literate - it still assumes you're running workloads on servers with some persistence.  This makes containers a bit of an odd duck.  

I find it makes most sense to include authoritative, production-ready container images in the software inventory, and then as they're deployed, consider the set of running instances to be an "IT Asset".  There's no sense tracking each one individually - they should all be the same anyway.  If they're not, the best cure is deletion and re-provisioning.  

### Other Weird stuff

There's a variety of edge cases - WAPs IP phones and network appliances and all manners of IoT doohickeys.  Technically, all of them run software.  Practically, though, there's a limit: does it change often enough to warrant its own entry in the Software Inventory?  Remember the value we expect this **Software Inventory** to deliver: 

1.  Managing vulnerabilities at scale (CIS 7).  
2.  Proscriptively managing configuration (CIS 4).
3.  Contributes to your picture of IT tools.
4.  Allows you to remove localadmin on worker endpoints.

Many edge cases won't help much with these goals if added to your **Software Inventory**. Usually, your **Inventory of IT Stuff** meaningfully satisfies Goal #3 and Goal #4 is rarely affected.  Depending on the type of weird thing, you may find value for Goal #1 and #2, but often these edge cases have their own dedicated patching and configuration management solution that doesn't integrate well with a central system.  For instance, you _can_ manage patching and configuration management of [Cisco] (https://developer.cisco.com/automation-ansible/) or [Juniper](https://www.juniper.net/documentation/us/en/software/junos-ansible/ansible/topics/topic-map/junos-ansible-configuration-loading-committing.html) network equipment with ansible, but it doesn't deliver as much value as server software, and may require your network team to completely transform their operations.   Further, it's definitely not practical to centrally manage the patch levels of TVs in your conference rooms or your [MRI machines](https://www.gehealthcare.com/en-US/security), so its probably not worth tracking them in your **Software Inventory**.  

## Partners

Some other teams may be interested in a **Software Inventory**.  Here's a short list:
*   License Management
*   Desktop Engineering
*   Server Engineering
*   Service Desk/Tech Support

Often, the best automated tooling for populating your list will come from other teams anyway.  [Snow](https://www.snowsoftware.com/) and [Flexera](https://www.flexera.com) make great software inventory tools (see CIS 2.2: Automatic Discovery for more), but their marketing is focused on helping companies optimize their licensing and support operations.  This is ok: keeping an accurate **Software Inventory** is one of the best security objectives to let other leaders sponsor.  Most of these groups' needs will overlap with yours, so the only influence you should need to apply is if they go off the rails. 

As with an **Inventory of IT Stuff**, the biggest risk to a **Software Inventory**'s success is bad process.  Many technical teams aren't good at user experience and end up designing heavy forms or governance that people then try to avoid.  More on this in CIS 2.3 Standard Work.  




What are you experiences in building a **Software Inventory**?  What have you found most important?  Can you better explain why CIS changed its vision?  I'd love to hear your thoughts: leave a comment below or [hit me up](/contact/).