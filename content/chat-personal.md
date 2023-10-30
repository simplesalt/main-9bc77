---
title: Let's chat
hide_title: false
seo:
  noindex: true
layout: advanced
sections:
  - section_id: intro
    type: section_form
    content: >
      Evening availability is listed below. If that isn't convenient, just send me a message:
    form_id: contactForm
    form_action: /api/contactform
    form_fields:
      - input_type: text
        name: You
        is_required: true
        default_value: Name
      - input_type: email
        name: email
        default_value: Your email
        is_required: true
      - input_type: textarea
        name: message
        default_value: What's up?
    submit_label: Send
  - section_id: evening_chat_scheduler
    type: section_content
    title: Get together some evening
    content: >
      Evenings are a bit less predictable; I'll confirm your slot within a couple business days. Please bother me if I don't.
      {{< hubspot_scheduler "https://meetings.hubspot.com/bob-bobson/demo?embed=true">}}
    

---