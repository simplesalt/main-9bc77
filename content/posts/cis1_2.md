---
title: CIS 1.2 - Standard Work
excerpt: >-
  There are several standard processes that most organizations will need to keep the inventory healthy and credible.  Some can be integrated with existing processes, but none can be totally eliminated.  CIS 1.2 proscribes the largest and most important kind of standard work: triage.  
date: '2020-12-10'
seo:
  title: CIS 1.2 - Standard Work
  description: >-
    CIS 1.2 proscribes the largest and most important kind of standard work: triage. 
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: CIS 1.2 - Standard Work
      keyName: property
    - name: 'og:description'
      value: >-
        CIS 1.2 proscribes the largest and most important kind of standard work: triage. 
      keyName: property
    - name: 'og:image'
      value: images/knowing-is-half.webp
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: CIS 1.2 - Standard Work
    - name: 'twitter:description'
      value: >-
        CIS 1.2 proscribes the largest and most important kind of standard work: triage. 
    - name: 'twitter:image'
      value: images/knowing-is-half.webp
      relativeUrl: true
layout: post
---
> Ensure that a process exists to address unauthorized assets on a weekly basis. The enterprise may choose to remove the asset from the network, deny the asset from connecting remotely to the network, or quarantine the asset.


There are several standard processes that most organizations will need to keep the inventory healthy and credible.  Some can be integrated with existing processes, but none can be totally eliminated.  CIS 1.2 proscribes the largest and most important kind of standard work: triage.  

It also implies a new security goal for the **Inventory**: know when a bad thing gets connected.  We usually talk about compromise as the takeover of existing, good assets.  The next most popular option is build or connect new bad things.  This can take many forms: a WiFi exploit box, a new VM, or just a boring old server or workstation pre-loaded with Kali and some scripts.  

If you’re running a IaaS/PaaS like AWS, this is the main way to be infected: new assets (instances) can be almost instantly spun up using the same APIs that make managing AWS so easy, then maintain themselves faster than you can block or delete them.  They can also hide in platforms that you’ve never used or seen – if a script creates a new Lambda, S3, and EC2 instance – you’d have half a chance of finding those, but what if they spin up an EKS or Beanstalk instance?  You may not even know what those services do!  Finding and eliminating compromise in a cloud environment like AWS or Azure is perhaps the must infuriating game of whack-a-mole you can image.  

CIS has it right: the best way to fix this situation is to never get into it: automatically learn when new assets are created or attached, then do some standard things when they first show up.  This will require some technical and organizational prep, but gives you great, actionable visibility when bad things happen.  

# Triage

Assuming you’ve also built discovery services per CIS 1.3-1.5, you’ll probably have a steady flow of things that show up on your network, but aren’t yet in your inventory.  You’ll want to triage these to ensure they aren’t malicious, especially in IaaS environments.  Strong change management and NAC (see [CIS 13.9](/cis13_9)) can reduce the number.  

If your network team has a standard process to add new switches and WAPs, it should be easy for them to update your Inventory of IT Stuff at the same time.  Server teams and container teams and desktop teams and manufacturing teams and everyone else can probably do the same.  Some of these teams may do it automatically – Vsphere can be configured to capture a lot of the critical information you decided on in CIS 1.5 during the VM creation process.  An API can then insta-feed it into your Inventory, which then lines up with the next active discovery scan, and everything is wonderful.  

If you’ve done this and are lucky, mostly what you’ll see are false positives.  Cowboys in your “devops” team will keep spinning up new instances without telling anyone, and [Alexa-enabled séance candles](https://www.kickstarter.com/projects/candletouch/candle-touch-the-first-smart-connected-real-flame-candle) will keep showing up in your CMO’s corner office.  

Somehow, you need to vet each of these things, but you’ll need to strike a balance: applying more governance will add friction every time someone needs to create an asset.  Don’t waste the time of your internal customers.  If they think your process is useless, they’ll figure out ways to avoid it.  

For most organizations, the best balance assumes that if all the required fields are present the Inventory, the asset is supposed to be there.  The biggest factor is the Owner field, because it functions as a signoff: someone is saying, “yes, this IT asset is supposed to be here; I am responsible if it has problems.”  If needed, you can even have reasonableness checks on owner assignment as further assurance:

*   Is the account that created the asset different from the owner?  
*   If not, maybe it’s ok if they are on the same team?  
*   Does the owner’s role in the organization appropriate?  
*   Is the owner a contractor?  Maybe you want to assign it to someone a little more permanent?  

The heaviest approach is to disallow access to anything that isn’t explicitly known and provisioned.  This is usually done with a NAC solution like 802.1X or similar.  This makes the vetting easy – new IT assets won’t really work until they meet all your requirements.  See the upcoming article on CIS 13.9 NAC for the best ways to do this.  

# Data Quality Management

To keep your inventory accurate, it’s best to assign someone to get and address regular reports of wrongness in your **Inventory**.  Some popular choices include:

*   Duplicate (or possibly duplicate) assets
*   Verify owners after role changes or employee departures.  
*   Validate field contents after someone creates an inventory record
*   Deactivate or purge stale assets.  If your active discovery engine hasn’t seen something in a while, maybe it’s even worth notifying the owner?
*   differences between what the discovery service found and what’s in the inventory.  

I covered approaches for this in [CIS 1.1: The Mission](/cis1_1).  

See other posts for detailed techniques to build and _maintain_ an accurate and dependable **Inventory of IT Stuff**, including:

*   [CIS 1: Why?](/cis1/)
*   [The Mission (CIS 1.1)](/cis1_1/)
*   [Discovery (CIS 1.3-1.5)](/cis1_3-5/)
*   [Useful Information (CIS 1.1, part 2)](/cis1_1_2/)
*   [Standard Work (CIS 1.2)](/cis1_2/)