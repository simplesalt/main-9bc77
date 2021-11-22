---
title: CIS 2 Explained
excerpt: >-
  An Inventory of IT Stuff is a helpful thing: it's a necessary starting point
  for lots of other technical security work. But you know what would be even
  more helpful?  Knowing what each thing does. Zowie! That would be wild.
date: '2021-10-20'
seo:
  title: CIS 2 Explained
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
      value: images/knowing-is-half.webp
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
      value: images/knowing-is-half.webp
      relativeUrl: true
layout: post
---
An **Inventory of IT Stuff** is a helpful thing: it's a necessary starting point for lots of other technical security work.

But you know what would be even more helpful?  *Knowing what each thing does.* Zowie! *That* would be wild.

CIS 2 goes after the easiest-to-detect aspect of what those things do: what software is running on them.  You will notice a lot of similarities with CIS 1; most of the strategies are analogous.  The biggest difference is that the data quality of your software inventory is just going to be lower - there's gonna be lots more one-offs.

We also start to see some cracks in the otherwise pristine, black-and-white perspective that makes CIS so seductive. There will be judgement calls and compromises that you and your customers will have to make. Your software inventory will be messier than your **Inventory of IT Stuff**. Remember, this messiness is not a problem; it's intrinsic to the data and CIS's strategy still adds tremendous value.  Just keep the overall goals for the Software Inventory in mind and don't get hung up on making it perfect.

# Why?

There are four big benefits to knowing what software is on your **Stuff**.

*   It is a prerequisite for managing vulnerabilities at scale (CIS 7).  Getting solid on CIS 7 gets the best bang/buck ratios for organizations with a lot of brownfield IT.
*   It is a strong step toward proscriptively managing configuration (CIS 4).
*   It gives you a valuable picture of what people need and do across your organization, which can help inform IT strategy and consolidation.  Consolidating onto fewer platforms often can reduce cost and improve quality, but there are security benefits as well: there are fewer things to secure!
*   Having strong and lean software management processes eliminates biggest need for localadmin on worker endpoints.  Removing localadmin (CIS 5.4) can be one of the best ways to make your worker endpoints more resistant to malware and compromise.

Ready?  We'll dive into [CIS 2.1](saltyonsecurity.net/post/cis2\_1) next week.
