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
    content:  Use the form below to book Dylan for a talk. See [here](/speaking) for a list of common topics for talks and workshops. Custom topics and setups are also available upon request. 
    form_id: SpeakingForm
    form_action: /api/contactform
    form_fields:
      - input_type: text
        name: Name
        is_required: true
        default_value: Your name
      - input_type: email
        name: email
        default_value: Your email
        is_required: true
      - input_type: CheckBox
        name: newsletter_consent
        display: none
        appearance: none
      - input_type: textarea
        name: message
        default_value: Please include your desired topic, length, date, venue, audience profile, and any other details.
    submit_label: Request a talk
---