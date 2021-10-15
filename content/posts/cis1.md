---
title: CIS 1 Explained
excerpt: >-
  The CIS Controls say the most important thing to do to secure your computers is to have a list of all your stuff. They’re a little unclear by what this means and how it helps.
  date: '2020-07-02'
seo:
  title: CIS 1 Explained
  description: >-
    The CIS Controls say the most important thing to do to secure your computers is to have a list of all your stuff.
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: CIS 1 Explained
      keyName: property
    - name: 'og:description'
      value: >-
        The CIS Controls say the most important thing to do to secure your computers is to have a list of all your stuff.
      keyName: property
    - name: 'og:image'
      value: images/6.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: CIS 1 Explained
    - name: 'twitter:description'
      value: >-
        The CIS Controls say the most important thing to do to secure your computers is to have a list of all your stuff.
    - name: 'twitter:image'
      value: images/6.jpg
      relativeUrl: true
layout: post
---
The [CIS Controls](https://www.cisecurity.org/controls/cis-controls-list/) (formerly known as the Critical Security Controls and the CIS Top 20) say the most important thing to do to secure your computers is to have a list of all your stuff.

They’re a little unclear by what this means and how it helps.

The title tries to be specific: “Inventory and Control of Hardware Assets." Per Merriam Webster, _asset_ means an owned item of value. Even if we add “hardware,” this could include lots of things: pizza boxes, mice, cables, radios, floppy diskettes, CNC lathes, security cameras, and monitors.

This is not what CIS is after.

# Why?

There are four big benefits to knowing what stuff you have.

*   Almost every subsequent CIS control relies on this inventory in some way.
*   All the subsequent controls that rely on this inventory need owners.
*   Security is only as strong as your weakest link. A complete inventory is the starting point to completely applying some control to your environment.
*   You want to know when new things show up on the network.

With these goals in mind, it’s clear that your inventory shouldn’t just have hardware assets – it should have everything that could be broken into.

Some may argue that at its core, all computing is actually done on physical hardware, so maybe it’s enough to only track those. This is a bad plan; here are three examples:

*   Containering - If an application is containered and moving around on nodes in a cluster with 30 other containered apps, it’s not very helpful to say that one of the physical nodes had an out-of-date version of Java last Thursday – the vulnerability was probably within the container, and should be addressed by the container owner/publisher.
*   Virtualization - It’s not uncommon for a machine with a hypervisor to host hundreds of virtual machines, each with unique vulnerabilities.
*   Web hosting – a single webserver can host thousands of websites, and serves the correct one based on the url listed in an incoming request.

# So what?

It is difficult to formulate a single explanation describing all and only the things that should be in your inventory.

Prioritizing our asset inventory by the capabilities that need it can help narrow things down. Most of those processes depend on two pieces of information about each asset:

*   Where to find it (“address”)
*   Who can fix problems on it (“owner”)

Those processes also don’t care much about components – mice and monitors and northbridges and cables.

# What counts?

In our age of layered computing abstractions, what does it mean to “act like a computer”?

Coupled with the above priorities, we get:

> _A thing that stores and processes data accessible from a primary address and accountable to a single unique person._

It doesn’t really matter how you define “thing” – owner is often the best place to start.

There are some good rules of thumb.

# Owners

Ownership can also get complicated. Often teams will divide computers by layer:

*   Bob and his team might own an ESX cluster and its component rackmounts and SAN.
*   Jane and her team manage the 10 Linux VMs (all hosted on Bob's cluster)
*   Edith’s team develops and supports 4 JVMs hosted on 10 of those Linux VMs using Tomcat
*   Sanjay owns the reverse proxy, caching server, and WAF that present those web applications at a public address (all hosted on Bob’s cluster).
*   Gloria manages the customer service team that answers questions from the Sales Reps that use it.

Who “owns” the resulting web application or overall sales capability it helps deliver?

Many security teams will ignore the way teams have organized ownership and blindly assign security problems to those who maintain the bottom or top of the stack. Security teams need to educate themselves on how their IT customers organize themselves and engage them only in areas they can affect.

If devices have never had an owner, it usually means that ownership doesn’t take a lot of time, which means that it’s not a big deal to assign someone to it.  Across the whole organization, there's no downside to assigning owners.  When deciding who should own something, err on the side of lower on the totem pole.  If an IP clock is assigned to the CIO, there's no way that CIO will practically do anything to manage it.  

Assigning ownership can reduce blind spots in an organization.

Future posts will describe the overall themes to build and _maintain_ an accurate and dependable **Inventory of IT Stuff**, including:

*   [CIS 1: Why?](/cis1/)
*   [The Mission (CIS 1.4)](/cis1.4)
*   [Discovery (CIS 1.1-1.3)](/cis1.1)
*   [Useful Information (CIS 1.5)](/cis1.5)
*   [Standard Work (CIS 1.6)](/cis1.6)
*   [NAC (CIS 1.7-1.8)](/cis1.7)