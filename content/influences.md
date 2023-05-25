---
title: Influences
hide_title: false
seo:
  title: Influences
  description: 'A summary of the thinkers and works that have shaped my approach to work and life.'
  extra: []
layout: page
---
I’ve found the following thinkers and projects influential to how I approach my work and life.

Usually, the practices that generate excellent security also generate efficient, consistent, high-quality products and services. While there are some best practices and knowledge unique to security, it is mostly technical and fundamentally transient: the most important security issues of 10 years ago rarely apply today, and there’s no reason to think that the challenges and accompanying strategies of today will apply in 10 years. The only enduring patterns deeply coincide with good design.

## About People

### [Joel Spolsky](https://www.joelonsoftware.com/)
Joel breaks down the best practices of managing thought workers, notably building software. I read two of his [recommended](https://www.google.com/books/edition/Peopleware/DVlsAQAAQBAJ) [books](https://www.google.com/books/edition/\_/20zXQQAACAAJ) and also recommend them. I especially appreciate his guide to UI/UX design, which share a lot in common with Shingo’s ideas about mistake-proofing.

### [Richard Feynman](https://en.wikipedia.org/wiki/Surely_You%27re_Joking,\_Mr.\_Feynman!) 
The celebrated [sex symbol](https://calisphere.org/item/10bedb2c1485caf64e851f4e75fe0214/) of theoretical physics, Dr. Feynman wrote one of the most compelling arguments about how science can control a fundamental human failing: to lie to ourselves. His commentary on cargo cults also highlights the pitfalls of prioritizing the shape of a solution over its function.

### [Alcoholics Anonymous](https://www.aa.org/pages/en_US/read-the-big-book-and-twelve-steps-and-twelve-traditions)
AA addresses the same temptation toward self-deception that Feynman discusses. Unlike science, its solution is best at addressing lies that are not objective or easily measured. Like Deming and SPC, its model for success is an ongoing effort: it starts with a frank assessment of the problem and iteratively addresses root causes in order of importance.

## About Process

### [W. Edward Deming](https://www.youtube.com/watch?v=7pXu0qxtWPg)

Widely considered the forefather of Lean, Six Sigma, Statistical Process Control, Toyota Production System, and modern process engineering, Deming’s thoughts on quality and governance have become ubiquitous. In the spirit of science and Feynman’s writings, he emphasized true understanding of how work is done, statistical analysis of the results, and a spirit of objective truth over wishful thinking. I’ll highlight two: he addressed a standard management practice of holding employees accountable for performance outside their control, that this is a convenient self-deception on their part. He also addresses another opportunity for lies: after an improvement project is complete, you must check whether it has delivered the improvements you expected in a statistically significant way.

### [Shigeo Shingo](https://en.wikipedia.org/wiki/Shigeo_Shingo)

Shigeo wrote some technical books in the 1980s about how to set up a manufacturing plant for maximal efficiency, providing excellent practical examples to Deming’s theories. While those books were foundational in manufacturing circles, his ideas have broad applicability to everyday life. Two of his ideas have strongly influenced me: First, a high barrier to change can dramatically slow continuous  improvement. Second, mistake-proofing (Poka Yoke) processes can invisibly reduce decisions and failures, which collectively improves quality and efficiency.

### [Phoenix Project](https://itrevolution.com/the-phoenix-project/)

The Phoenix project applies many of the process engineering practices from Deming, Shingo, and other process engineering things to IT work. Before this book, IT was culturally risk-averse because internal customers expected perfection and punished failure. As a result, IT developed a culture where failure was unacceptable, dominated by huge projects to design and built utopias. The book addresses this lie:  failure is natural because people fail, and proposed a model intuitive to Deming but earth-shattering to IT: if a system’s resiliency and success hinges on people performing tasks perfectly, then it is a poorly designed system and the only rational fix is to change the system to be resilient to individual failure. The lessons in this book are not IT-specific – they can be equally applied to any team paid to think.

### [Go](https://golang.org/doc/faq#principles)

Go is a computer language created by some computer science rockstars. It has many technical advantages that get most of the press, but its biggest advantage is a human one: it encourages people to write code that others can easily understand. This is subtly the most important because in a product which consists solely of instructions, understanding it comprises the biggest share of the work in changing it. Making it easier to change enables the only reliable path to excellence: continuous improvement.

## About Quantitative Thinking

### [How to Measure Anything](https://www.google.com/books/edition/How_to_Measure_Anything/693e2X6XV3MC)

Often we have a hard time choosing how to measure success. This is a critical decision: if you incent them, your teams will work to optimize to the metrics you choose. If you choose poorly, they may reduce what you actually want in favor of what you measure. This is especially true of continuous improvement the Deming way: the foundation of improvement is measurement. This book guides you toward how to measure your true goals. There are many practical examples and exercises. Hubbard followed up with a [more targeted book for security](https://www.google.com/books/edition/How_to_Measure_Anything_in_Cybersecurity/8gulDAAAQBAJ), which also has excellent examples and also slightly rebukes the security industry: apparently we need special, remedial education.

### [Envisioning Information](https://www.edwardtufte.com/tufte/books_ei)

Equally important to choosing metrics is communicating them. People are wildly different in how they receive and process information, and most aren’t natively fluent in math. Tufte wrote this book in the 70s; it’s full of examples for presenting complicated information visually for a variety of audiences.

### [Google SRE](https://sre.google/books/)

Google’s resiliency engineering team has written several books applying strategies to measure and communicate the resilience of its applications. The series is an excellent case study for the principles described in the first two books of this section – they explain challenges, approaches, and options for improving performance in a domain dominated for 30 years by two (bad) metrics.
