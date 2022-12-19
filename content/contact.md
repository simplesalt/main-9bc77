---
title: Hit me up
hide_title: false
sections:
  - section_id: contact-form
    type: section_form
    content: >
      Interested in something?  Want to chat? I'd love to hear from you.

      If you want to book me for speaking, [go here](/book_speaking).
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
        default_value: Your message
      - input_type: CheckBox
        name: bot_field
        display: none
    submit_label: Send
seo:
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
layout: advanced
---