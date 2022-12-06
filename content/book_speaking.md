---
title: Speaking
hide_title: false
excerpt: 'Book Dylan for talks and workshops. Custom topics and setups are also available upon request'
seo:
  title: Speaking
  description: 'I speak at events for a variety of audiences.'
  extra: []
layout: advanced
sections:
  - section_id: speaking-form
    type: section_form
    content: Please include your desired topic, length, date, venue, audience profile, and any other details you think relevant. See [here](/speaking) for a list of common topics for talks and workshops.
    form_id: SpeakingForm
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
        label: Your desired topic
        default_value: 
    submit_label: Send Message
---