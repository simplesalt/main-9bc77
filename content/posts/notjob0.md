---
title: Security Is Not Job 0
subtitle: Addressing a Persistent Lie in the Security Industry
date: '2022-02-02'
content_img_alt: 
excerpt: >-
  I am here to tell you now as a seasoned professional: security is not that important. The lie is tempting, and thematically similar to a lie common across cultures and topics: if everyone was like me, they would be a lot better off.
seo:
  title: Security Is Not Job 0
  description: Addressing a Persistent Lie in the Security Industry
  extra: []
layout: post
thumb_img_path: images/picardnomistakes.jpg
thumb_img_alt: Picard
---
# Security is Not Job 0

It&#39;s a popular canard: security is the most important thing to get right. You hear it directly: some of the hippest of tech firms make [pretentious pronouncements](https://aws.amazon.com/blogs/enterprise-strategy/security-at-aws/). You hear it via implication through the security industry: how Security Awareness and Education is so important, that all those people just _need to_ understand security. All the security problems are because people are uneducated. &quot;If they all understood what I do and cared about what I care about, we just wouldn&#39;t have these problems!!1!&quot; the security industry preaches to itself.

This is ridiculous. Most people in the world know this, but some have bought the lie. I&#39;m here to tell you now as a seasoned professional: security isn&#39;t that important.

The lie is tempting, and thematically similar to a lie common across cultures and topics: &quot;if everyone was like me, they&#39;d be a lot better off.&quot; You hear it in political discourse. You hear it in religious rhetoric. You hear it from mommy blogs explaining how their way of parenting should work for everyone. You hear it from articles on the latest diet fad or muscle-building regime implying that it will work miracles if you try hard enough. You hear it every day when your coworker criticizes your ideas while explaining how amazing everything was when she solved this problem at her last company.

If the rest of your organization understood and cared about security as much as the security team, it probably wouldn&#39;t make money. Capital would be used inefficiently, products wouldn&#39;t get launched, and marketing would be a joke.

Here are some common organizational goals that are almost always more important than security:

- Hit an earnings-per-share target (maybe just stay in the black (or maybe just slow the bleeding!))
- Keep patients alive
- Keep the power on
- Missional goals: [rescue slaves](https://www.ijm.org/), [keep kids out of gangs](https://www.bgca.org/), or [just crank out a bunch of surgeries](https://www.doctorswithoutborders.org/).

There are also team goals:

- Increase revenue within a product or segment
- Improve KPIs for your call center
- Improve click rates on an ad campaign
- Reduce costs
- Consolidate procure-to-pay processes onto a single ERP

Further, every person at a company has personal goals. People are wildly different, with their own motivations. Even if they do buy into the organizational goals, people have extra personal goals such as:

- Not get fired
- Avoid extra work
- Avoid conflict
- Feel valuable or important
- Desired role or title
- Avoid wasting time
- Stay out of jail

All these are good goals, and it&#39;s hard to argue that security is more important than any of them. It&#39;s rare for security to rank in anyone&#39;s top 5 priorities.

Even though the risk and impact has exploded in the last 5 years, security will never be the end goal. It is and always will be a supporting priority. It&#39;s hard to save patients if your local Epic instance gets ransomware.

## Even worse

Security isn&#39;t even a single goal. Effective protection consists of many simple things done decently. For instance, Software governance is a piece, but it&#39;s not more important than patching or config management or phishing prevention.

If the success of any particular security program relies on convincing people that it&#39;s more important than any other goal, it will fail.

It will fail.

## Ok, Doomer.

Luckily, the case for security isn&#39;t hopeless. General operational excellence often yields substantial security benefit too. As they say, fewer total product bugs means fewer security product bugs. Also, excellent security can also drive revenue and margin if your customers care about it. These days, a lot of customers care about security. That means people at your company want to hear about security so they can make those customer happier.

## The Winning Strategy

Every day, people in your organization make decisions that impact security, and most won&#39;t consult you or anyone on your team. To scalably reduce security risk, you need to adjust their options to make the secure choice easier and more attractive than the less-secure one. You will be most effective by transforming your organization through steady continual improvement, not heroics and dramatic showdowns with your skeptics.

Some people will make unwise choices about security, even if you&#39;ve done everything right. In general, you cannot fix other people, and security is no exception.

![Jean-Luc Picard Quote: It is possible to commit no mistakes and still lose. That is not weakness; that is life.](/images/picardnomistakes.jpg)

Cultivate partnerships with shared services, improving the security of their capabilities. Then, add your voice to push teams to use them.

For example, consider legal: say you want to improve contractual defensibility and reduce liability on cybersecurity-related clauses. Is it easier to educate:

1. A small team of contract lawyers

OR???

1. Everyone at your organization with a budget and signing authority

![You know this](/images/youknowthis.png)

The same applies to IT, finance, and HR.

When a product or segment GM next chats you up, your talking points will be ready: advise them to direct their team to enterprise services, and explain the security benefits some specific teams invisibly provide to the GM and her teams.

## An example and the philosophy of exceptions

I met a guy at a conference once, recently hired as a security leader. He thought that there were too many active exceptions at his new company, and explained that as part of &quot;fixing&quot; the security program, he was directing a lot of his team&#39;s effort toward eliminating them.

To him, each exception represented a personal affront to his or his team&#39;s authority. Each exception was an indication of softness or weakness; it was another example of when they let someone get away with something. I think he felt that the number of exceptions negatively correlated to his power and influence at the company, and the best way to increase his power was to go after all those past rulebreakers.

Here&#39;s the bananas thing about exceptions: they&#39;re all made up _because the rules are made up_. An exception is a decision not to follow policy, written down. Policy is just security marketing: it sets expectations about what people should do in certain situations.

Some policy statements are gimmes: no plain-text password storage, lock doors at night, and encrypt laptop storage. These are all easy to do, provide massive protection, and are so common it&#39;d be weird not to require them.

But most of the expectations in policy are a compromise on a topic: how complex do passwords need to be? 4 characters is clearly insufficient, but 100 is unrealistic. Do you go for the traditional 8-character with a number and symbol, or the 25-character passphrase that [all the cool kids are talking about](https://xkcd.com/936/)? What&#39;s your stance on other authentication like RFID keycards or facial recognition or yubikeys? Do you SSO all the apps? Only the big apps? Do you disallow apps that can&#39;t speak SAML, KRB5, OIDC, or U2F? Do you add extra language that covers incompatible apps, requiring them to be fronted by a HTML5 presentation service that works with your CASB?

The rabbit hole just keeps going from there, and there&#39;s a lot more to good security than passwords.

Done well, policy reflects your organization&#39;s security strategy and roadmap. If you&#39;re going hard toward 0-trust, you want your policy to reflect what that practically means for each app. If you&#39;re going for scalable PCI compliance, you want your policy to reflect [that culture of &quot;PANs = nuclear waste](https://www.pcisecuritystandards.org/documents/PCI_DSS_v3-2-1.pdf)&quot; you want to be true.

Unless your organization is very small, most adjustments to a policy will change the number of active exceptions in the wild. If you increase the password complexity to 12 characters, your old ERP doesn&#39;t meet the new expectation, and now needs an exception.

Finally, policy itself is a compromise between readability and specificity – it will never address all situations equally. If it&#39;s shorter and easier to understand, more people will read and use it. If you add more granularity and edge case handling, it becomes longer and harder to understand.

The only way to yield zero exceptions is to lower your expectations so far that everything meets them. In that case, why would you spend the time writing policy if everyone&#39;s already gonna follow it? That&#39;s just cargo cult cybersecurity: following the shape of success instead of its substance.

## Summary via Inspirational Quips

Your goals are not everyone else&#39;s goals. It&#39;s ok; help them be the best they can be within your domain and influence.

Don&#39;t be afraid to let other people color outside your lines. They&#39;ll figure it out.

You must lose some battles to win the war.

Play to your strengths. Be organized and credible. Wear down holdouts, don&#39;t fight them.

Ask yourself, &quot;Is this issue how you want to spend your influence?&quot;

Don&#39;t be a cop, be their lawyer.

You got this.
