---
title: Hit me up
hide_title: false
sections:
  - section_id: contact-form
    type: section_form
    content: >
      Wanna tell me I'm full of it?  Interested in something?  Whatever it is,
      I'd love to hear it.  
    form_id: contactForm
    form_action: /api/contactform
    form_fields:
      - input_type: text
        name: Name
        label: You
        is_required: true
        default_value: Name
      - input_type: email
        name: email
        label: Email
        default_value: Your email
        is_required: true
      - input_type: textarea
        name: message
        label: Message
        default_value: Your message
      - input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
    submit_label: Send Message
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
layout: page

---
Interested in something? Wanna tell me I'm full of it? Whatever it is, I'd [love to hear from you](mailto:dylan@saltyonsecurity.net).  