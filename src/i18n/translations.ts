export const translations = {
  en: {
    nav: {
      knowledgeBase: 'Knowledge base',
      support: 'Support',
      pricing: 'Pricing',
      logIn: 'Log in',
      signUp: 'Sign up'
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
      system: 'System'
    },
    hero: {
      headline: 'Smart platform for email campaigns',
      subheadline: 'Creating a campaign is easy!',
      cta: 'Try for free'
    },
    stepper: {
      step1: 'Step 1 | Import your list',
      step2: 'Step 2 | Create your campaign',
      step3: 'Step 3 | Analyze results'
    },
    benefits: {
      simplicity: {
        title: 'A platform built for simplicity',
        description: 'We build tools that let you launch email campaigns without unnecessary complexity. Fewer steps, better results.',
        cta: 'Try for free'
      },
      free500: {
        title: '500 subscribers for free',
        description: 'We support small businesses. If your list has fewer than 500 contacts, you can use all platform features completely free.',
        cta: 'Create account'
      }
    },
    features: {
      templates: {
        title: 'Responsive templates',
        description: 'Create campaigns on any topic in minutes.'
      },
      forms: {
        title: 'Subscription forms',
        description: 'Choose from ready-made forms or create your own with a simple, powerful form builder.'
      },
      editor: {
        title: 'Email editor',
        items: [
          'Ready-made templates',
          'Personalization',
          'Import your own HTML',
          'Built-in AI tools'
        ]
      }
    },
    analytics: {
      title: 'Email analytics has never been this convenient',
      description: 'Track opens, clicks, and unsubscribes in a single, easy-to-read dashboard so you can improve every new campaign.'
    },
    pricing: {
      pageTitle: 'Pricing',
      free: {
        title: 'Free',
        subtitle: 'A good way to get to know EmailMassivo',
        price: '0 $/month',
        contactsLabel: 'Contacts',
        contactsDefault: '500',
        benefitsTitle: 'Key benefits',
        benefits: [
          '2,000 emails per month',
          'Easy-to-use email editor',
          'Scheduled campaigns',
          'Segmented campaigns'
        ],
        cta: 'Free'
      },
      premium: {
        title: 'Premium',
        subtitle: 'An excellent solution for marketers',
        contactsLabel: 'Contacts',
        contactsDefault: '1,000',
        benefitsTitle: 'Everything in "Free", plus:',
        benefits: [
          'Unlimited emails',
          'Priority support',
          'Assistance with list import',
          'Priority review'
        ],
        cta: 'Choose'
      },
      freeApi: {
        title: 'Free API+SMTP',
        subtitle: 'A good way to get to know EmailMassivo',
        price: '0 $/month',
        sendsLabel: 'Email per month',
        sendsDefault: '100',
        benefitsTitle: 'Key benefits',
        benefits: [
          'Statistics and send history',
          'Sending from your own domain',
          'Tracking of unsubscribes and complaints',
          'Support for system headers'
        ],
        cta: 'Free'
      },
      premiumApi: {
        title: 'Premium API+SMTP',
        subtitle: 'An excellent solution for marketers',
        sendsLabel: 'Email per month',
        sendsDefault: '6,000',
        benefitsTitle: 'Everything in "Free", plus:',
        benefits: [
          'Unlimited API keys',
          'Unlimited SMTP connections',
          'Priority support'
        ],
        cta: 'Choose'
      },
      apiTitle: 'API+SMTP plans',
      periodMonth: 'Month',
      periodYear: 'Year −20%',
      month: 'month',
      year: 'year'
    },
    hosting: {
      freeHosting: {
        title: 'Free hosting',
        description: 'Upload your campaign images to EmailMassivo servers at no extra cost.'
      },
      stableAccess: {
        text: 'Stable access to your files'
      },
      freePlan: {
        text: 'Even on the free plan'
      }
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'What contact lists can I send email campaigns to?',
          answer: 'You can send email campaigns only to contact lists you collected yourself, whose subscribers have explicitly agreed to receive messages from you. Sending campaigns to lists compiled from public sources is not allowed.'
        },
        {
          question: 'How do I start if I\'m sending email campaigns for the first time?',
          answer: 'To send your first email campaign, you need to add and verify your domain, upload your email list, and create the campaign.'
        },
        {
          question: 'How do I import a contact list from another service?',
          answer: 'If you have used other services before, you can transfer your lists in one click using the import feature.'
        },
        {
          question: 'Where can I get a contact list for my email campaigns?',
          answer: 'You can send emails only to people who have confirmed their subscription. To get good results, build your own subscriber list. There are many ways to do this: add a signup form to your website or social media, invite your customers to subscribe, and offer valuable content or product discounts in exchange for signing up.'
        },
        {
          question: 'What should I do if I don\'t have an email address on my domain?',
          answer: 'If you own a domain, you can set up your email using popular services such as Google Workspace.'
        },
        {
          question: 'How do I verify my domain?',
          answer: 'To verify your domain, first add it in the Senders section. Then, at the registrar where you bought your domain, you need to add all the required DNS records. If this is your first time going through domain verification and/or you need more information or assistance with this step, please refer to the detailed step-by-step guide in our knowledge base or contact EmailMassivo support.'
        },
        {
          question: 'Why is domain verification necessary?',
          answer: 'Domain verification is a mandatory technical requirement for high-quality email campaigns. Receiving mail servers treat messages from a verified domain more favorably, so your emails are less likely to end up in the spam folder. After verifying your domain, you will also get more detailed statistics on how your campaign performed and which folders the receiving mail services delivered your messages to.'
        },
        {
          question: 'How do I send email campaigns from a new domain?',
          answer: 'If you have just created an email address on a new domain, you need to build a good reputation with mail providers before sending bulk campaigns. You can find detailed information on how to warm up and build your domain\'s reputation in our knowledge base.'
        },
        {
          question: 'How do I add a sender address for my campaigns?',
          answer: 'By default, after registration you already have one sender address — your registration email (as long as it is not blocked by a DMARC policy). You can find detailed information on how to add a new sender address here.'
        },
        {
          question: 'What pricing plans do you offer?',
          answer: 'EmailMassivo offers two main pricing plans: "Free" and "Premium", as well as two API+SMTP plans: "Free API+SMTP" and "Premium API+SMTP". You can review the plans and purchase a subscription in your account on the "Pricing" page. If you send campaigns to lists with no more than 500 contacts and no more than 2,000 emails per month, you can use our service free of charge.'
        },
        {
          question: 'Do you offer an API?',
          answer: 'In EmailMassivo, you can create an API key at the following link: https://app.emailmassivo.com/api. The free plan includes 100 emails. You can read more about creating and using the API here.'
        },
        {
          question: 'Do you provide an SMTP service?',
          answer: 'Yes, we offer an SMTP service for sending emails. The free plan includes 100 emails. You can find more details about setting up and using SMTP in our knowledge base.'
        }
      ]
    },
    finalCta: {
      headline: 'Creating a campaign is easy!',
      subheadline: 'Create campaigns on any topic in just a few minutes.',
      ctaPrimary: 'Try for free',
      ctaSecondary: 'Create account'
    },
    footer: {
      product: {
        about: 'About us',
        blog: 'Blog',
        knowledgeBase: 'Knowledge base',
        glossary: 'Glossary',
        apiDocs: 'Email API documentation'
      },
      legal: {
        license: 'License agreement',
        antiSpam: 'Anti-spam policy',
        privacy: 'Privacy policy'
      },
      support: 'Support',
      copyright: '© 2026 EmailMassivo — smart platform for email campaigns. All rights reserved.'
    },
    support: {
      hero: {
        title: 'Support 24/7',
        subtitle: 'Get help and information about EmailMassivo in our Knowledge Base.'
      },
      knowledgeBase: {
        title: 'Knowledge Base',
        description: 'Learn in detail how to work with the EmailMassivo service.'
      },
      needHelp: {
        title: 'Need help?',
        description: 'Fill out the "Ask a question" form or email us at support@emailmassivo.com — we\'ll be happy to assist you.'
      },
      quickStart: {
        title: 'Quick Start with EmailMassivo',
        description: 'A step-by-step guide to quickly learn the platform and send your first campaign.',
        button: 'Knowledge Base'
      },
      form: {
        title: 'Ask a question',
        fields: {
          name: 'Your name',
          website: 'Company website',
          email: 'Email',
          message: 'Message'
        },
        checkbox: 'I consent to the processing of my personal data.',
        submit: 'Send'
      }
    },
    privacyPolicy: {
      content: `This Privacy Policy ("Policy", "Privacy Policy") forms an integral part of the License Agreement with the User and defines the rules for processing personal data that Compubyte Limited (hereinafter referred to as "EmailMassivo", "we") may collect about users ("User" or "you") in connection with the User's use of the EmailMassivo service (the "Service"). In particular, it determines the categories of data collected, the ways and methods of data collection, the purposes and measures for ensuring the protection of data, as well as the User's rights in relation to his/her Personal Data.

By this Policy the User gives us consent to the processing of his/her Personal Data under the terms of this Privacy Policy. The User's actions aimed at using the Service constitute unconditional acceptance of this Policy and of the terms of processing his/her Personal Data specified herein. We strongly urge you to read this Policy and make sure that you fully understand and agree with it before you start using our Service. If you have not read this Policy in full, do not understand something or do not accept the terms of this Privacy Policy, you must immediately stop using the Service.

The User warrants that, in accordance with the User's jurisdiction, he/she has reached the age that allows him/her to independently give consent to the processing of his/her personal data (but not less than 16 years), or the User can duly confirm the appropriate permission of the holder of parental responsibility over him/her.

Please note that, according to law, you are not obliged to provide us with any data; however, the provision of such data is a mandatory condition for the use of our Service. You hereby confirm, warrant and agree that any data you provide to us is provided of your own free will, is specific and unambiguous, and corresponds to your wish to have your data used for the purposes described below.

You may withdraw your consent to the processing of your personal data at any time, as we strive to ensure that the procedure for withdrawal of consent is no less simple than the procedure for granting it. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.

## **Terms and Definitions**

Personal Data — any information relating to an identified or identifiable natural person who, in accordance with the Agreement, is a User of the Service.

Agreement — the license agreement between the User and EmailMassivo for the use of the Service, duly accepted by the User and having binding legal force for the User and EmailMassivo.

Service — the EmailMassivo software intended for sending mailings, including, but not limited to, a set of information, texts, graphic elements, designs, images, photo and video materials, and other results of intellectual activity, as well as computer programs contained in an information system that ensures the availability of such information on the Internet.

User — a natural or legal person who has accepted the Agreement and uses the Service.

All other terms and definitions used in the text of the Policy shall be interpreted in accordance with other rules governing the use of the Service, with established practice on the Internet and with applicable legislation governing the processing of personal data.

## **1. Personal Data Collected**

1.1. In our activities we are guided by the legislation of the Republic of Cyprus in the field of personal data processing and by the GDPR.

1.2. In accordance with the principle of "data minimisation", we collect Personal Data only to the extent sufficient for the convenient use of the Service and for achieving the purposes of its collection.

1.3. In the course of the User's use of the Service, we collect two types of Personal Data: Personal Information and Anonymised Information.

1.3.1. Personal Information. Such data includes individual information that identifies a specific User and that the User provides to us during Registration.

Mandatory types of Personal Information required for the use of the Service include:

* e-mail address.

1.3.2. Anonymised Information. Anonymised Information is data that does not identify a specific User and is collected automatically during Registration and use of the Service.

Anonymised Information may include:

* information obtained through cookies, pixel tags, web beacons, browser analysis tools and web server logs, as well as other similar technologies and tools;  
* information about the devices that the User uses to access the Service, including the type of operating system, device model, browser type, system settings, including information about the language used by the User's system, geolocation data (determination of country/region), the User's device time zone, communications service provider;  
* action logs stored on the server that record the IP addresses of the devices that the User uses to interact with the Service, access time, sequence of the User's actions in the Service, session information, including response time and loading errors;  
* information from the User's social network account (depending on the privacy settings set by the User for his/her social network account), so we may obtain information about your interests and preferences, as well as access to your photo;  
* other non-identifying information depending on the permissions you grant.

1.4. The User accepts and agrees that in certain cases we are entitled to request additional information about the User, as well as copies of documents to confirm the specified data, and to make any other requests when this is necessary based on reasonable assumptions and legitimate interests.

## **2. Methods of Collecting Personal Data**

2.1. The legal basis for collecting Personal Data is the User's consent to the collection of data.

2.2. Personal Information is collected by us at the moment of the User's Registration in the Service.

2.3. Anonymised Information is collected by us in the course of your use of the Service.

## **3. Purposes of Collecting Personal Data**

3.1. We use Personal Data for the following purposes:

3.1.1. Providing access to the Service and its further operation.

3.1.2. Improving the Service, enhancing ease of use and configuring necessary settings, based on general or individual preferences, user experience or difficulties encountered by Users.

3.1.3. Providing technical support and feedback, including sending notifications, requests and information related to the use of the Service (notifications about updates, information on security issues, changes to our rules and terms of use of the Service).

3.1.4. Creating aggregate statistical information, including analytics and monitoring of trends in the use of the Service and Users' actions within the Service.

3.1.5. Sending marketing communications to your e-mail address or to your mobile phone, including notifications about products, services, promotions, events and other news and information which, in our opinion, may be of interest to the User. We may send you marketing information. You can easily opt out of receiving marketing messages by using the "unsubscribe" option provided in such messages.

3.1.6. Preventing fraud or violations of applicable laws, in particular for detecting, investigating and preventing fraudulent transactions and other unlawful activities, and for protecting the rights and property of EmailMassivo, other users and third parties.

3.1.7. Complying with any applicable law.

3.2. The User's Personal Data will not be used for purposes other than those specified above.

3.3. The User confirms that the purposes of using his/her Personal Data correspond to his/her interests, and that the consent to processing of Personal Data by us, expressed by the User at the beginning of the use of the Service, is given for each processing purpose specified in clause 3.1 of the Agreement.

## **4. Disclosure of Personal Data**

4.1. We undertake not to disclose the User's Personal Data to third parties, except in the following cases:

4.1.1. The User has given explicit and specific consent to the disclosure of his/her Personal Data.

4.1.2. Such transfer of data is necessary for the User's use of the Service or for the performance of the License Agreement or other binding documents governing the relations between us and the User.

4.1.3. When such transfer of data is necessary for the operation of the Service and its functionality (transfer of data to hosting providers, communication and content delivery networks (distribution), data protection and cybersecurity services, billing and payment processing services, fraud detection and prevention services, web analytics, e-mail distribution and monitoring of the Service status, including measurement of performance and data optimisation, marketing and advertising services), third parties (recipients of Personal Data) may receive or otherwise have access to the User's Personal Data, in full or in part, depending on the role and purposes of each such party in maintaining the operation of the Service or its improvement; furthermore, they may use the data received only for the purposes specified in this Policy.

4.1.4. The transfer of Personal Data is carried out in accordance with applicable law at the request of authorised entities entitled to receive such data (court requests and requests from law enforcement authorities), when we are obliged to disclose such data and we in good faith believe that the law requires us to act in this way.

4.1.5. There is a transfer of ownership or control over all or part of the Service to a new owner.

4.1.6. The transfer of Personal Data is carried out in order to enable the protection of our rights and legitimate interests or the rights and interests of third parties in cases where the User violates this Privacy Policy or other binding documents governing the relations between us and the User, as well as applicable laws. The above cases cannot be regarded as unauthorised disclosure of personal data, since these actions are aimed at realising the purposes of processing Personal Data.

4.2. We will never sell Users' Personal Data to third parties.

4.3. Data may be transferred only in strict accordance with this Privacy Policy and within the framework of applicable law.

## **5. Territory of Storage and Cross-Border Transfer of Personal Data**

5.1. We store and process the Personal Data of EmailMassivo Users and of recipients of your messages in the territory of the European Union.

5.2. We strive to protect and preserve Users' Personal Data in accordance with international industry standards and do not take into consideration any legal requirements that are lower than those of the User's jurisdiction.

5.3. If we and the User are located in different jurisdictions, by accessing or using the Services or otherwise providing us with his/her Personal Data, the User consents to the processing and transfer of the data to the country of our incorporation; at the same time, we guarantee that we will take appropriate measures to protect the User's Personal Data in accordance with this Privacy Policy and applicable law.

## **6. Use of Tracking Technologies**

6.1 We use certain monitoring and tracking technologies in order to maintain, ensure and continuously improve the operation of our Service, and to provide the User with convenient use of the Service. By default, we use several such technologies for session and User authentication, security, saving the User's preferences (for example, in relation to default language and settings), connection stability, monitoring the performance of our Service and marketing campaigns, as well as for providing and improving our Services.

## **7. User Rights**

7.1. Within the framework of this Privacy Policy, each User has the following rights in relation to his/her Personal Data:

7.1.1. Right of access to his/her Personal Data. To ensure this right, the Service provides a special section in the Account, where all Personal Information received by us from the User is indicated. The User may go to the Personal Information section and review the Personal Information that we hold at a given point in time. At the User's request, we provide a complete list of Personal Data that we have collected about the User, the legal grounds and purposes of processing, the categories of Personal Data, a list of third parties to whom the Personal Data has been or will be disclosed, the period for which the Personal Data will be stored, as well as the measures for the protection of Personal Data. A response will be provided within a reasonable period in accordance with applicable law.

7.1.2. Right to rectification. The User has the right at any time to independently make corrections to his/her Personal Data through the Account; if, for any reason, the User experiences difficulties in rectifying Personal Data, he/she may send us an appropriate request, and we will make the corrections within a reasonable period of time. Taking into account the purposes of processing, the data subject has the right to have incomplete Personal Information by indicating only the mandatory types of Personal Data necessary to provide access to the Service.

7.1.3. Right to withdraw consent to the processing of Personal Data. The User has the right to withdraw his/her consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal. The Service provides the possibility to withdraw consent as easily as it is given. Thus, the User may at any time send us a request to delete the Account, and we will delete the Account within a reasonable period of time after receiving the corresponding request.

Please note that you may correct, update or delete certain parts of Personal Data yourself.

When making corrections to Personal Data or when the User withdraws consent, we will notify all third parties having access to the User's Personal Data of the changes.

7.1.4. Right to erasure ("right to be forgotten"). The User has the right to request, and we are obliged to effect, the deletion of the User's Personal Data without undue delay if:

* Personal Data is no longer necessary for the purposes for which it was collected;  
* the data subject withdraws consent to the processing of his/her Personal Data which constitutes the basis for its collection;  
* Personal Data has been unlawfully processed;  
* Personal Data must be erased in accordance with law.

7.1.5. Right to data portability. The User has the right to receive his/her Personal Data in a structured, commonly used and machine-readable format. The User may obtain in structured form all Personal Data ever received by us by sending an appropriate request to the technical support service. The User has the right to transmit his/her Personal Data directly from one controller to another, where technically feasible.

## **8. Period of Storage of Personal Data**

8.1. We store your Personal Data for the entire period of use of the Service (the existence of your Account) or until such time as we no longer need these data to provide the Service, or for a longer period if so required by applicable law or if this is done for the settlement of disputes with our Users, prevention of fraud and abuse and/or protection of our legitimate interests.

## **9. Information Security**

9.1. We hereby guarantee that we take all necessary and sufficient organisational and technical measures, in accordance with applicable legislation, to protect the User's Personal Data from unlawful or accidental access, destruction, alteration, blocking, copying, distribution, as well as from other unlawful actions with it by third parties. In our activities, we use generally accepted industry standards to protect the User's Personal Data and strive to maximally protect and ensure the confidentiality of Personal Data. Personal Data protection is implemented by default at the design level of the Service during its development. Security measures include firewall protection, pseudonymisation, data encryption, data minimisation, resilience of processing systems to failures, the ability to timely restore availability of and access to Personal Data in the event of a physical or technical incident, control of physical access to data centres, as well as control of authorisations for access to data. We regularly monitor our systems for potential vulnerabilities and attacks, assess the effectiveness of technical and organisational measures to ensure the security of Personal Data, and constantly look for new ways and service providers to further improve the security of our Service and the protection of the privacy of our Users. All third parties that gain access to Personal Data and are involved in providing the User with access to the Service adhere to security measures for Personal Data that are no less stringent.

9.2. However, we cannot guarantee absolute protection and therefore urge you to exercise caution, set a strong password for your account and avoid providing any sensitive data, the disclosure of which may cause you significant harm.

9.3. In the event of any Personal Data breach, we take all measures within our control to eliminate or minimise possible negative consequences, and also ensure immediate notification of the relevant supervisory authorities and of the User about this incident, indicating all available information about the breach of confidentiality. The facts of such incidents are entered into a special register of incidents that we are obliged to maintain in accordance with applicable law.

9.4. For the purposes of this Policy, a Personal Data breach means a security breach leading to accidental or unlawful destruction, loss, alteration, unauthorised disclosure of or access to transmitted or processed Personal Data.

## **10. Amendment and Interpretation of the Privacy Policy**

10.1. This Privacy Policy, its interpretation and any claims and disputes related to it shall be governed by, construed and enforced exclusively in accordance with the laws of our place of incorporation, without regard to the applicable principles of conflict of laws.

10.2. You hereby agree that any disputes arising shall be resolved exclusively by the courts at our place of incorporation.

10.3. We are entitled to amend the Privacy Policy at any time. If we consider that the amendments made are material (in our own good-faith opinion), we will notify you of this before such amendments enter into force.

10.4. We recommend that you periodically review this page to obtain up-to-date information about our Privacy Policy. Unless expressly provided otherwise, our latest edition of the Privacy Policy applies to all information that we hold about you.

## **11. Communication with Us and Responses to Your Questions**

11.1. If you have any questions regarding this Privacy Policy, please contact us at support@emailmassivo.com.

11.2. You can also send a letter to the address: 9 Vasili Michailidi, 3026, Limassol, Cyprus.

11.3. We will respond to your request within a reasonable period of time or within the period established by applicable law.

11.4. In cases where this Policy or applicable law establishes our obligation to provide you with copies of data or any documents, we provide them in a single copy free of charge; for any additional copies requested, we are entitled to charge a reasonable fee based on administrative costs. If you make a request by electronic means, and unless you request otherwise, we will provide a response in a commonly used electronic format.

11.5. If the User's requests are manifestly unfounded or excessive, in particular due to their repetitive character, we are entitled to charge a reasonable fee taking into account the administrative costs of providing the information, or to refuse to act on the request.

11.6. If we have reasonable doubts as to the identity of the person making the request, we may request additional data necessary to confirm the User's identity.`
    },
    antiSpamPolicy: {
      content: `Appendix No. 1 to the License Agreement for the Right to Use the EmailMassivo Service

By registering in the Service, the User accepts the terms of this Anti-SPAM Policy.

## **1. Key Terms**

1.1. Service – the EmailMassivo service intended for creating, sending and monitoring the results of sending electronic mail to Subscribers subject to their mandatory prior consent. Sending unsolicited messages using the Service is strictly prohibited.

1.2. Spam – messages transmitted via telecommunications channels, the requirements of which do not comply with applicable law.

1.3. Subscriber – natural or legal persons who have given explicit consent to receive informational mailings from the User and are included in the User's customer database for the purpose of receiving messages.

1.4. Subscription form - a functional block placed on a website that contains fields for entering information (name, email address, contact phone number, etc.). The main purpose of the subscription form is to collect personal contact information of users who have expressed a wish to receive the mailing.

1.5. Spam complaint – one of the following events:  
a) notification from a Subscriber or from an anti-spam organization about receipt of unsolicited correspondence by their users;  
b) blocking of the User's mail servers and URLs on major Internet resources;  
c) receipt of a spam complaint from a mail server.

## **2. General Provisions**

2.1. The User is prohibited from sending mailings of messages that do not comply with applicable law or the law of the Subscriber's country, including mailings containing:

* spam in any form and manifestation;  
* inaccurate information;  
* obscene language;  
* malicious and unlicensed software;  
* incitement to racial, religious or gender discrimination;  
* copyrighted material and third-party trademarks used without the rights holder's permission;  
* pornographic material;  
* the sending of email messages that contain in the header and/or in the body of the message offers of quick and easy earnings on the Internet, quick and easy money or pyramid schemes.

The personal account of Users found to be distributing spam is blocked.

2.2. Each message sent through the Service must mandatorily include a link by which the Subscriber can unsubscribe from the User's mailings. The User has no right to hide or mask this link.

2.3. The User is prohibited from sending mailings to their subscriber database that are ordered by third parties for the purpose of advertising their product.

2.4. The User agrees that certain mailings, in particular, but not limited to, cases where the content of the mailing does not meet the requirements established by this Anti-SPAM Policy or applicable law, or contains indications that Subscribers did not consent to receiving such mailing, may be blocked by the Software or by the Service's staff.

## **3. Cases in Which Messages Are Interpreted as SPAM**

3.1. Targeted information is sent to purchased or publicly available email lists without sending a prior email to obtain consent to the mailing.

3.2. In the overwhelming majority of cases, messages are sent to mailboxes such as info@, sales@ and other generic email mailboxes.

3.3. Incorrect or distorted contact details are indicated.

3.4. The subject and text of the message contain false, incorrect or misleading information.

3.5. An email address is used that does not belong to the domain associated with the company.

3.6. The body of the email does not contain an "unsubscribe from the mailing list" link.

3.7. For a long period of time after receipt of a request to unsubscribe from the mailing, the unsubscribe is not executed.

3.8. In mailing reports, the rates of clicks on the "spam" button or blocking of messages by email providers' spam filters or the number of bounces significantly exceed the average values for the Service **(hard bounces no more than 5%, "this is spam" clicks - 0.5%)**.

3.9. The User's actions and/or the content of the mailing are contrary to applicable law.

## **4. Grounds for Contacting the Recipient**

The email recipient made a purchase, requested information, responded to questions/surveys, is a client of the User, contacted the User offline, filled out a subscription form, or responded positively to a prior email requesting consent to receive the mailing. At the same time, the email recipient received a clear understanding of the purpose for which the email address requested would be used.

## **5. Preventive Methods of Combating SPAM**

5.1. Mandatory pre-moderation of all mailings.

5.2. Automated analytical systems for recognizing SPAM.

5.3. Verification of User data in order to prevent access to the system being obtained for the purpose of unlawful use.

5.4. Ongoing training and consulting of Users for the purpose of creating proper email marketing campaigns.

5.5. Ongoing cooperation with Internet and hosting providers in order to ensure that the operation of the Service is interpreted as a lawful method of conducting marketing activities and sales.

5.6. Blocking of Users who use the Service for sending SPAM. In the absence of weighty arguments on the part of the User within 24 hours from the moment of blocking, the account is subject to deletion without the possibility of refund of unused funds.

## **6. Mailing Lists Permitted and Prohibited for Use in the Service**

6.1 Use of a mailing list is permitted if the email addresses it contains were obtained in one of the following ways:

6.1.1. On the User's website via a subscription form.

6.1.2. On the User's website via any other form (for example, during user registration), subject to the mandatory condition that the form contained a separate checkbox for consenting to receive mailings to the email address provided.

6.1.3. Via paper questionnaires, forms, surveys that the recipient filled in by hand and entered their email address, subject to the mandatory condition that the form contained a separate checkbox for consenting to receive mailings to the email address provided.

6.1.4 From among the User's current clients after the User has sent them a request for consent to receive mailings and has received a positive response.

6.2 Use of a mailing list is not permitted if:

6.2.1. The User cannot prove the recipients' consent to receive the mailing.

6.2.2. The User obtained addresses by means of verbal consent, for example, via a phone call.

6.2.3. The User acquired, leased or received addresses from third parties.

6.2.4. Address databases are collected from "open sources".`
    },
    licenseAgreement: {
      content: `Terms of Use of the EmailMassivo Service

This licence agreement is a binding agreement between Compubyte Limited (hereinafter "EmailMassivo") and the User, under which the User is granted the right to use the EmailMassivo web service (the "Service") for the purpose of carrying out mailings, in the manner and on the terms set out in this Agreement.

This Agreement constitutes a public offer addressed to an unlimited number of persons (a "public offer") and contains all essential terms. The User's acceptance of these terms gives this Agreement binding legal force. By clicking the "Create account" button, the User accepts the terms of the Agreement. Partial acceptance of the terms is not allowed. The fact of obtaining access to, as well as any use of, the Service without any exceptions or reservations is deemed to constitute unconditional confirmation that the User has read, understood and agreed to comply with the terms of the Agreement.

The User represents and warrants to EmailMassivo that, under the law of the User's jurisdiction, the User has reached the age that allows the User to independently enter into contractual relations, acquire the corresponding rights and obligations thereunder and bear liability as prescribed by law, and that, in the event of any limitations of the User's legal capacity, where required by applicable law, the User has obtained in advance the relevant consent of the User's legal representatives (or guardians) to accept this Agreement. Acceptance may be carried out on behalf of the User by a third party with the User's consent or where such person is the User's legal representative.

A mandatory condition for the use of the Service is the User's consent to the Service's Privacy Policy.

Before using the Service, EmailMassivo recommends that the User carefully read this Agreement in full. If the User does not meet the requirements of the Agreement, has not read, does not understand or does not agree with the terms of the Agreement, the right to use the Service cannot be granted to the User, and the User must refrain from accepting the Agreement and from any use of the Service.

Terms and definitions used in this Agreement shall be interpreted in accordance with the laws of the country of incorporation of EmailMassivo, business customs, and the established rules for interpreting the relevant terms on the Internet.

## **1. Subject of the Agreement**

1.1. EmailMassivo hereby grants the User a simple (non-exclusive), personal (non-sublicensable), limited, revocable licence to use the Service for its direct functional purpose, in the manner and on the terms of this Agreement.

1.2. The scope of the rights (functional capabilities of the Service) granted to the User is determined by the tariff plan selected by the User.

1.3. Term of the licence granted to the User:

1.3.1. Within tariff plans that do not provide for payment – from the moment of acceptance of the terms of the Agreement and for an indefinite period, subject to continuous use of the Service.

1.3.2. Within tariff plans that provide for payment – from the moment funds are credited in favour of EmailMassivo and until the expiry of the term of the paid tariff plan.

1.4. The territory of the User's use of the Service is not limited (worldwide).

## **2. Rights and Obligations of the Parties**

2.1. The User undertakes to:

2.1.1. Use the Service in a manner not prohibited by applicable law and this Agreement.

2.1.2. Provide full and accurate information about the User when completing the registration procedure. If the User's data changes after completion of the registration procedure, the User undertakes to promptly and independently update the relevant data. EmailMassivo does not assume any obligation to verify the accuracy and completeness of the data provided by the User and shall not be liable for any losses of the User or of third parties due to any discrepancy between the information provided by the User and the actual data.

2.1.3. Ensure the confidentiality of the User's account login details (login and password) from third parties and to change them in a timely manner in case of loss or compromise. EmailMassivo treats any actions performed using the User's account, where access was obtained by using the correct login details for the account, as actions performed directly by the User.

2.1.4. Regularly review up-to-date information on changes to the Agreement, the cost of tariff plans, and the list of functional capabilities of the Service available upon payment of the respective tariff plans.

2.1.5. Ensure compliance with the applicable law on personal data when processing personal data of message recipients whose messages are sent by the User, as well as compliance with the applicable advertising law in relation to the content of messages sent.

2.1.6. Respond to requests from EmailMassivo within the time limits specified in such requests. Failure to respond within the time limits set in the request is regarded by us as the provision by the User of inaccurate contact details during the registration procedure, which constitutes a breach of this Agreement.

2.1.7. Obtain the recipient's consent to receive a message prior to sending any message to that recipient. Upon receipt by the User of a corresponding request from EmailMassivo, the User undertakes to provide EmailMassivo with the consents of the recipients of the messages sent by the User.

2.1.8. Send messages to recipients only on the User's own behalf.

2.1.9. Include in every message sent a link enabling the recipient to unsubscribe from further messages. The User is not entitled to mask or hide this link.

2.1.10. Not include in the address database recipients who have not consented to receive mailings from the User, and to remove from the address database recipients who have refused to receive messages.

2.2. The User has the right to:

2.2.1. Contact technical support regarding registration, operation of the Service and restoration of lost access to the Service at support@emailmassivo.com, as well as via the User's account. EmailMassivo reserves the right to refuse to provide technical support in case of inappropriate behaviour by the User when communicating with technical support specialists.

2.3. EmailMassivo undertakes to:

2.3.1. Provide the User with the right to use the Service on the terms of the Agreement, twenty-four (24) hours a day, seven (7) days a week, including weekends and public holidays, within the limits of the tariff plan selected by the User.

2.3.2. Use reasonable efforts to ensure the stable operation of the Service, its improvement and the correction of errors in the operation of the Service.

2.3.3. Provide technical support to the User regarding registration, operation of the Service and restoration of lost access to the Service. EmailMassivo does not provide advice on legal matters, configuration of hardware, software or Internet access, or any other matters not directly related to the operation of the Service.

2.3.4. Ensure an appropriate level of security for the User's registration data in accordance with the Privacy Policy accepted by the User and applicable law.

2.3.5. Forward to the User communications received from third parties regarding information contained in messages sent by the User. The User hereby instructs us to process the personal data of such third parties on behalf of and in the interests of the User.

2.4. EmailMassivo has the right to:

2.4.1. Terminate the User's access to the Service in the event of a breach of the terms of the Agreement or failure to fulfil payment obligations.

2.4.2. Terminate the User's access to the Service in the event that the User creates a critical load on server equipment and/or interferes with the stable operation of the Service, and/or creates other threats to the Service entailing or creating a risk of negative consequences in any form for the server equipment, the Service and users of the Service.

2.4.3. Suspend the operation of the Service for the time required to carry out scheduled maintenance and repair work on the equipment. EmailMassivo does not assume any obligation to notify the User in advance of any upcoming suspension of the Service, but will seek to do so in a manner convenient for EmailMassivo.

2.4.4. Send to the User advertising and informational messages to the email address or mobile phone number indicated during the registration procedure, regarding offers, promotions, events related to the Service and new products, contact the User for the purpose of checking the quality of the Service, send messages containing important information relating to the use of the Service, as well as other information which, in our opinion, may be of interest to the User.

2.4.5. Request from the User information and copies of documents proving the User's identity upon receipt of requests from the User related to the processing of their personal data, restoration of access to the Service, for the purpose of protecting our interests and the interests of third parties, and upon receipt of requests for information from authorised public authorities and persons where EmailMassivo in good faith believes that applicable law requires EmailMassivo to provide such information.

2.4.6. From time to time provide updates to the Service. Such updates are designed to improve the Service and may be provided in the form of separate bug fixes, feature enhancements, additions of new features or new versions of the Service. The content of Service updates is determined by us at our sole discretion. The User agrees to receive such updates and authorises us to provide them.

2.4.7. Conduct promotions under which EmailMassivo offers the purchase of tariff plans on special conditions, including with the User receiving gifts, discounts or promotional codes from our partners. Gifts, discounts or promotional codes received by the User under a promotion are gratuitous only upon full use of the tariff plan to which the promotion applied. In case of a request for a refund, the refund amount is calculated as the remaining funds minus the value of the gratuitous benefits received.

2.5. Warranties of the Parties:

2.5.1. The User warrants that:

* the User holds all rights in respect of the materials included in the messages being sent, including images, videos, audio files, texts and other materials, or that the User has obtained the relevant consents for the lawful use of such materials;  
* the information included in the messages being sent is accurate, does not infringe the rights and legitimate interests of third parties and does not violate applicable law;  
* the User has obtained all necessary consents and/or authorisations to conduct the User's activities using the Service, where such consent and/or authorisation is required under applicable law.

## **3. Financial Terms**

3.1. The amount of remuneration payable to EmailMassivo for granting the User the right to use the Service is determined based on the cost of the tariff plan selected by the User and its term.

3.2. The current cost of tariff plans, as well as the list of Service functions that are accessible subject to payment for a tariff plan, is published in the relevant sections of the Service designated for the purchase of Service tariff plans.

3.3. Tariff plans are purchased by the User on the condition of full prepayment. The User independently chooses a payment method from among the options provided in the relevant sections of the Service designated for the purchase of Service tariff plans.

3.4. EmailMassivo's obligations to grant the User the right to use the Service within the functional capabilities conditioned upon payment of the relevant tariff plans are deemed fulfilled at the moment the User is granted access to such functional capabilities, regardless of whether the User actually exercises the granted right or not. Accordingly, a paid tariff plan will only expire upon the end of the paid period; cancellation of a tariff plan that has already been paid for is impossible, and the tariff fee paid is not subject to refund or exchange. The User also cannot obtain compensation for any unused but paid period of a tariff plan in the event of the User's refusal to use the Service (revocation of the licence), withdrawal of consent to the processing of personal data or termination of access to the Service due to a breach by the User of the terms of the Agreement. Each request for a refund from the User will be considered on an individual basis, depending on the circumstances of the situation, and EmailMassivo reserves the right to vary the refund terms in specific cases where EmailMassivo deems this necessary.

3.5. EmailMassivo has the right unilaterally and without prior notice to change the cost of tariff plans, as well as to change the list of functional capabilities of the Service that become available upon payment for the relevant tariff plan. Changes to the cost of a tariff plan and the list of functional capabilities of the Service that become available upon payment for the relevant tariff plan will not apply to tariff plans that have already been paid for by the User.

3.6. If tariff plans are paid for by a bank card belonging to an individual, where the payer is a legal entity, no supporting documentation will be issued to the legal entity.

## **4. Prohibited Actions**

4.1. The User is prohibited from:

4.1.1. Using the Service to:

* organise the sending of SPAM messages;  
* intentionally send messages that may lead to disruption of the Service's operability;  
* send messages of an offensive or defamatory nature;  
* send messages of a pornographic nature;  
* send messages that mislead recipients, for example, messages sent on behalf of another person or containing false information;  
* send messages containing malicious software;  
* send messages that infringe exclusive or copyright rights of third parties;  
* send messages containing advertising of pyramid schemes, medicinal products, narcotic substances, tobacco or alcohol products, or services of an intimate nature;  
* send messages included in lists of extremist materials, or that promote or justify terrorism, extremism, Nazism, incitement of religious, racial, ethnic or interethnic hatred, or violations of applicable law and public order;  
* send messages containing threats to life and health, as well as messages encouraging the infliction of harm to life and health, persecution, harassment or incitement to suicide;  
* send messages that insult the honour and dignity of a person, harm business reputation, contain slander or obscene language;  
* send messages containing information that is not permitted to be disclosed by law or by contractual obligations (information constituting state, commercial, banking or medical secrets, personal data).

4.1.2. Use the Service in any manner not expressly provided for by this Agreement.

4.1.3. Use the Service for the illegal sale of narcotic and psychotropic substances, explosives, weapons and ammunition, or for the sale of other goods or services whose sale is prohibited or restricted by law.

4.1.4. Mislead any person by misappropriating another person's identity for the purpose of intentionally causing damage or for any other selfish purpose.

4.1.5. Compromise the integrity of the Service's security system, exploit any vulnerabilities of the Service, attempt to bypass technical restrictions established by the Service, gain unauthorised access to other Users' accounts, or cause harm to the software and hardware components of the Service and to Users' devices.

4.1.6. Remove, hide or modify the mandatory Service copyright notice (links to our official website in the form of text or images) and any notices of exclusive and copyright rights included in the Service and its components.

4.1.7. Use the Service to distribute malicious software, to hack or aggregate personal data ("phishing"), to distribute doorway pages, code that opens a new window (popUp, popUnder), to conduct automatic mass mailings of any content without the consent of recipients ("spam", including any forms of search engine spam), "chain letters", multi-level marketing schemes, including Internet earning schemes, or information provoking a chain reaction in the sending of messages.

4.1.8. Carry out unlawful processing of personal data of data subjects.

4.1.9. Use the Service for any other unlawful purpose.

4.2. The fact of committing prohibited actions by the User may result in the User being held liable as prescribed by law.

## **5. Applicable Law**

5.1. EmailMassivo complies with the laws of the Republic of Cyprus and gives no guarantee that the Service or any part of it is available for use in any other jurisdiction.

5.2. By accepting the terms of this Agreement, the User confirms the User's consent that legal relations related to the use of the Service shall be governed by the laws of the country of incorporation of EmailMassivo, without regard to conflict of law rules. The User hereby assumes responsibility for complying with the laws of the country of incorporation of EmailMassivo, as well as any other law applicable to the User.

5.3. EmailMassivo has the right to restrict access to the Service, in whole or in part, to any person, territory or jurisdiction at any time and at its sole discretion. Access to the Service from territories where the Service is recognised as unlawful, or may be used only on the basis of a special authorisation and/or licence, is prohibited.

5.4. Upon receipt of an official request submitted in accordance with the procedure prescribed by applicable law, EmailMassivo will cooperate with authorised authorities in any investigation of alleged illegal activities related to the use of the Service.

## **6. Liability**

6.1. EmailMassivo will seek to ensure the operability of the Service; however, the Service is provided to the User on an "as is" basis, and EmailMassivo does not warrant uninterrupted operation, error-free functioning, or immunity from the effects of malicious software, destruction, alteration or theft of information, or unauthorised access by third parties.

6.2. EmailMassivo shall not be liable for failure to perform or improper performance of its obligations due to failures in telecommunications and power networks, accidents at equipment locations, actions of malicious software, or bad faith actions of third parties aimed at unauthorised access to and/or disabling of the software and/or hardware complex of the Service.

6.3. EmailMassivo shall not be liable in the event of inoperability or incorrect operation of the Service on the User's device, or incompatibility of the Service with other applications installed on the User's device. To minimise the risk of such situations arising, the User should use the latest versions of the device software.

6.4. The Service is intended for personal purposes and is used by the User at the User's own risk. EmailMassivo does not guarantee that the User will achieve any results and shall not be liable for any losses incurred as a result of the use of the Service. EmailMassivo disclaims all warranties, express or implied, that the Service will meet the User's expectations regarding its use.

6.5. In no event shall EmailMassivo be liable for any direct, indirect, punitive, fiscal or other losses, loss of profit or any other damage related to the User's use of the Service.

6.6. The above limitations do not reduce or exclude EmailMassivo's liability in connection with gross negligence, fraud or wilful, criminal acts. The laws of some jurisdictions do not allow the limitation or exclusion of liability for incidental or indirect losses, and therefore some of the limitations of liability provided for in this Agreement may not apply to a particular User. Nevertheless, to the maximum extent permitted by applicable law, the limitations and exclusions set out in this section shall apply.

6.7. The Service is integrated with various third-party services and applications. The Service only provides the capability to access such third-party services/applications. All issues related to the use of such third-party services/applications are governed by the terms of use of the respective third-party services/applications and are resolved directly between the administrators of the third-party services/applications and the User.

6.8. The User bears full personal responsibility for the content and compliance with applicable law of all materials placed in messages sent using the Service, including software, texts, photographs, audio and video files, etc.

6.9. In the event of a breach by the User of any of the terms of the Agreement, we reserve the right to revoke the User's right to use the Service by blocking the User's account.

6.10. The User undertakes to compensate EmailMassivo for all losses and expenses incurred as a result of the User's breach of this Agreement, any applicable law or damage caused to third parties.

6.11. The User is responsible for keeping confidential the User's authorisation data (login and password) required to access the User's account.

6.12. The User is independently responsible for the lawfulness of any actions taken by the User in connection with the placement, storage and distribution of information using the Service. The User must bear full responsibility in the event of violations of advertising legislation in accordance with the legislation applicable to the User.

## **7. Term of the Agreement**

7.1. The Agreement enters into force upon the User's acceptance of the terms of the Agreement in the manner specified in the Agreement and remains in force for an indefinite period.

7.2. EmailMassivo reserves the right at any time and at its sole discretion, unilaterally, out of court, with or without notice, temporarily or permanently to revoke the User's right to use the Service (by blocking the User's account) or to restrict access to the User's account, where EmailMassivo in good faith believes that the User has breached the terms of the Agreement or that such action is necessary under applicable law/changes in applicable law, as well as in other cases provided for by the Agreement.

7.3. The decision to revoke the User's right to use the Service (by blocking the User's account) and to restrict access to the User's personal website is final and not subject to review.

7.4. The User may at any time refuse the right to use the Service granted to the User. EmailMassivo recognises such refusal and deletes the User's account upon the occurrence of one of the following events:

7.4.1. Receipt from the User of a statement refusing the right to use the Service granted to the User;

7.4.2. Receipt from the User of a withdrawal of consent to the processing of the User's personal data. EmailMassivo undertakes to delete the User's account within a reasonably necessary period for this purpose, but no later than the period established by applicable law.

7.5. From the moment the User's account is deleted, the right to use the Service is deemed terminated. Deletion of the User's account may result in the destruction of all information associated with such account. EmailMassivo may continue to store data about the User where applicable law imposes such an obligation on EmailMassivo.

7.6. EmailMassivo reserves the right to amend the Agreement by updating it on the page where it is published. EmailMassivo does not assume any obligation to provide notice of such amendments, and therefore the User undertakes to independently monitor amendments to the Agreement by visiting from time to time the page where the Agreement is published. Any amendments to the Agreement take effect from the moment of their publication on the relevant page. The User accepts the terms of the Agreement as amended each time the User uses the Service. If the User does not agree with the amendments made to the Agreement, the User must immediately cease using the Service.

## **8. Confidentiality**

8.1. Processing of the User's personal data is carried out in accordance with applicable personal data legislation and with the Privacy Policy accepted by the User.

8.2. The User confirms to EmailMassivo the User's consent to the processing of personal data in accordance with the provisions of the GDPR.

## **9. Dispute Resolution**

9.1. Any claims, requests and other correspondence must be sent by the User to the email address support@emailmassivo.com or to the postal address 9 Vasili Michailidi, 3026, Limassol, Cyprus.

9.2. Technical support is provided in English from 10:00 to 18:00 (GMT+2) on business days.

9.3. EmailMassivo reserves the right not to respond to claims, requests and other correspondence sent by persons whose identity cannot be identified (anonymously) or in any manner other than those specified above.

9.4. Claims and requests are considered by EmailMassivo within a period reasonably necessary for their consideration, taking into account the complexity of the matter.

9.5. The User agrees that all disputes arising out of or in connection with the Agreement shall be submitted to the exclusive jurisdiction of the courts at the place of EmailMassivo's registration/incorporation and shall be resolved in the manner provided for by the applicable law of the country of incorporation of EmailMassivo.

9.6. The User agrees that filing joint and/or collective claims and actions against EmailMassivo is not considered an appropriate or permissible means of protecting Users' rights, where this is permitted by applicable law. Accordingly, the User undertakes not to participate in any joint and/or collective claims and actions against us.

## **10. Final Provisions**

10.1. The legal relations of the Parties in connection with the performance of the Agreement are governed by the applicable law of the country of incorporation of EmailMassivo, without regard to conflict of law rules.

10.2. If the User has any questions regarding legal rights and obligations, or any lack of understanding of the terms of the Agreement or of applicable law, before accepting the terms of the Agreement the User must consult a qualified specialist. EmailMassivo does not provide legal advice or recommendations regarding applicable law or requirements that apply to the User or to third parties, nor regarding the User's compliance with the requirements of applicable law.

10.3. The User may not assign the User's rights and obligations under the Agreement without the prior consent of EmailMassivo.

10.4. EmailMassivo may assign its rights and obligations under the Agreement to a third party without any changes to the rights or obligations of the User under the Agreement.

10.5. Each provision of the Agreement operates separately. If one or more provisions of the Agreement becomes invalid, the remaining provisions shall continue in full force and effect.

10.6. The Agreement is drawn up in English and may be translated into other languages for the User's convenience. The User may review other language versions of the Agreement by changing the Service's language settings. In the event that a translation of the Agreement from English into another language is in any part inconsistent with another version, the English version shall prevail.`
    }
  },
  es: {
    nav: {
      knowledgeBase: 'Base de conocimiento',
      support: 'Soporte',
      pricing: 'Precios',
      logIn: 'Iniciar sesión',
      signUp: 'Crear cuenta'
    },
    theme: {
      light: 'Claro',
      dark: 'Oscuro',
      system: 'Sistema'
    },
    hero: {
      headline: 'Plataforma inteligente para campañas de email',
      subheadline: '¡Crear una campaña es fácil!',
      cta: 'Probar gratis'
    },
    stepper: {
      step1: 'Paso 1 | Importa tu lista',
      step2: 'Paso 2 | Crea tu campaña',
      step3: 'Paso 3 | Analiza resultados'
    },
    benefits: {
      simplicity: {
        title: 'Plataforma diseñada para la simplicidad',
        description: 'Creamos herramientas que le permiten lanzar campañas de email sin complicaciones. Mínimos pasos, resultados rápidos.',
        cta: 'Probar gratis'
      },
      free500: {
        title: '500 suscriptores gratis',
        description: 'Apoyamos a los pequeños negocios. Por eso, si en su base hay menos de 500 contactos, puede usar todas las funciones del servicio totalmente gratis.',
        cta: 'Crear cuenta'
      }
    },
    features: {
      templates: {
        title: 'Plantillas responsivas',
        description: 'Crea campañas de todo tipo en minutos.'
      },
      forms: {
        title: 'Formularios de suscripción',
        description: 'Elige entre formularios listos o crea los tuyos con un constructor simple y potente.'
      },
      editor: {
        title: 'Editor de emails',
        items: [
          'Plantillas listas',
          'Personalización',
          'Importar HTML propio',
          'Herramientas de IA integradas'
        ]
      }
    },
    analytics: {
      title: 'La analítica de email nunca fue tan conveniente',
      description: 'Siga aperturas, clics y bajas en un panel sencillo para optimizar cada nueva campaña.'
    },
    pricing: {
      pageTitle: 'Precios',
      free: {
        title: 'Free',
        subtitle: 'Una buena opción para conocer EmailMassivo',
        price: '0 $/mes',
        contactsLabel: 'Contactos',
        contactsDefault: '500',
        benefitsTitle: 'Beneficios clave',
        benefits: [
          '2 000 emails al mes',
          'Editor de emails fácil de usar',
          'Envíos programados',
          'Campañas por segmentos'
        ],
        cta: 'Gratis'
      },
      premium: {
        title: 'Premium',
        subtitle: 'Una excelente solución para profesionales de marketing',
        contactsLabel: 'Contactos',
        contactsDefault: '1 000',
        benefitsTitle: 'Todo lo incluido en «Free», más:',
        benefits: [
          'Cantidad ilimitada de emails',
          'Soporte prioritario',
          'Asistencia con la importación de bases',
          'Moderación prioritaria'
        ],
        cta: 'Elegir'
      },
      freeApi: {
        title: 'Free API+SMTP',
        subtitle: 'Una buena opción para conocer EmailMassivo',
        price: '0 $/mes',
        sendsLabel: 'Email al mes',
        sendsDefault: '100',
        benefitsTitle: 'Beneficios clave',
        benefits: [
          'Estadísticas e historial de envíos',
          'Envío desde su propio dominio',
          'Registro de bajas y quejas',
          'Compatibilidad con encabezados del sistema'
        ],
        cta: 'Gratis'
      },
      premiumApi: {
        title: 'Premium API+SMTP',
        subtitle: 'Una excelente solución para profesionales de marketing',
        sendsLabel: 'Email al mes',
        sendsDefault: '6 000',
        benefitsTitle: 'Todo lo incluido en «Free», más:',
        benefits: [
          'Cantidad ilimitada de claves de API',
          'Cantidad ilimitada de conexiones SMTP',
          'Soporte prioritario'
        ],
        cta: 'Elegir'
      },
      apiTitle: 'Planes API+SMTP',
      periodMonth: 'Mes',
      periodYear: 'Año −20 %',
      month: 'mes',
      year: 'año'
    },
    hosting: {
      freeHosting: {
        title: 'Alojamiento gratuito',
        description: 'Sube tus imágenes para campañas a los servidores de EmailMassivo sin costo.'
      },
      stableAccess: {
        text: 'Acceso estable a tus archivos'
      },
      freePlan: {
        text: 'Incluso en el plan gratis'
      }
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿A qué bases de contactos puedo enviar campañas de correo electrónico?',
          answer: 'Solo puede enviar campañas a bases de contactos que usted haya recopilado por su cuenta y cuyos suscriptores hayan dado su consentimiento explícito para recibir mensajes suyos. Está prohibido enviar campañas a bases recopiladas de fuentes públicas.'
        },
        {
          question: '¿Por dónde empiezo si voy a enviar campañas de correo por primera vez?',
          answer: 'Para enviar su primera campaña de correo, debe agregar y verificar su dominio, cargar la base de correos electrónicos y crear la campaña.'
        },
        {
          question: '¿Cómo puedo importar una base de contactos desde otro servicio?',
          answer: 'Si antes ha usado otros servicios, puede transferir sus bases en un solo clic mediante la función de importación.'
        },
        {
          question: '¿De dónde puedo obtener una base de contactos para mis campañas de correo?',
          answer: 'Solo puede enviar correos a quienes hayan confirmado su suscripción. Para obtener buenos resultados, construya su propia base de suscriptores. Hay muchas formas de hacerlo: coloque un formulario de suscripción en su sitio web o redes sociales, ofrezca la suscripción a sus clientes y entregue contenido interesante o descuentos en sus productos a cambio del registro.'
        },
        {
          question: '¿Qué hago si no tengo un correo electrónico en mi propio dominio?',
          answer: 'Si usted es propietario de un dominio, puede configurar su correo electrónico usando servicios populares, como Google Workspace.'
        },
        {
          question: '¿Cómo puedo verificar mi dominio?',
          answer: 'Para verificar su dominio, primero agréguele en la sección Remitentes. Luego, en el registrador donde compró su dominio, debe añadir todos los registros indicados. Si es la primera vez que realiza el proceso de verificación del dominio y/o necesita información adicional o ayuda para completar este paso, consulte la guía detallada paso a paso en nuestra base de conocimientos o comuníquese con el soporte de EmailMassivo.'
        },
        {
          question: '¿Para qué sirve la verificación de dominio?',
          answer: 'La verificación de dominio es un requisito técnico obligatorio para realizar campañas de correo electrónico de buena calidad. Los servidores de correo receptores son más favorables con los envíos que provienen de un dominio verificado, por lo que es menos probable que sus mensajes terminen en la carpeta de spam. Al verificar su dominio, también podrá obtener estadísticas más detalladas sobre cómo se envió su campaña y en qué carpetas las distintas plataformas de correo colocaron sus mensajes.'
        },
        {
          question: '¿Cómo envío campañas de correo desde un dominio nuevo?',
          answer: 'Si acaba de crear un correo electrónico en un dominio nuevo, primero debe generar una buena reputación en los proveedores de correo antes de enviar campañas masivas. Puede encontrar información detallada sobre cómo calentar y construir la reputación de su dominio en nuestra base de conocimientos.'
        },
        {
          question: '¿Cómo puedo añadir un remitente para mis campañas?',
          answer: 'De forma predeterminada, después del registro ya tiene un remitente configurado: su correo electrónico de registro (si no está bloqueado por una política DMARC). Puede encontrar información detallada sobre cómo agregar un nuevo remitente aquí.'
        },
        {
          question: '¿Qué planes de precios ofrecen?',
          answer: 'En EmailMassivo hay dos planes principales: "Free" y "Premium", y además dos planes API+SMTP: "Free API+SMTP" y "Premium API+SMTP". Puede revisar los planes y contratar uno desde su cuenta, en la página de "Planes" o "Precios". Si envía campañas a bases con hasta 500 contactos y no más de 2.000 correos al mes, puede utilizar nuestro servicio de forma gratuita.'
        },
        {
          question: '¿Tienen API disponible?',
          answer: 'En EmailMassivo puede crear una clave de API en el siguiente enlace: https://app.emailmassivo.com/api. En el plan gratuito tiene disponibles 100 emails. Puede leer más sobre cómo crear y usar la API aquí.'
        },
        {
          question: '¿Cuentan con servicio SMTP?',
          answer: 'Sí, ofrecemos un servicio SMTP para el envío de correos electrónicos. En el plan gratuito tiene disponibles 100 emails. Puede encontrar más información sobre cómo configurar y usar SMTP en nuestra base de conocimientos.'
        }
      ]
    },
    finalCta: {
      headline: '¡Crear una campaña es fácil!',
      subheadline: 'Crea campañas de todo tipo en minutos.',
      ctaPrimary: 'Probar gratis',
      ctaSecondary: 'Crear cuenta'
    },
    footer: {
      product: {
        about: 'Sobre nosotros',
        blog: 'Blog',
        knowledgeBase: 'Base de conocimiento',
        glossary: 'Glosario',
        apiDocs: 'Documentación del API de Email'
      },
      legal: {
        license: 'Acuerdo de licencia',
        antiSpam: 'Política anti-spam',
        privacy: 'Política de privacidad'
      },
      support: 'Soporte',
      copyright: '© 2026 EmailMassivo — plataforma inteligente para campañas de email. Todos los derechos reservados.'
    },
    support: {
      hero: {
        title: 'Soporte 24/7',
        subtitle: 'Obtén ayuda e información sobre EmailMassivo en nuestra Base de conocimientos.'
      },
      knowledgeBase: {
        title: 'Base de conocimientos',
        description: 'Conoce en detalle cómo trabajar con el servicio de EmailMassivo.'
      },
      needHelp: {
        title: '¿Necesitas ayuda?',
        description: 'Completa el formulario "Hacer una pregunta" o escríbenos a support@emailmassivo.com; con gusto te ayudaremos.'
      },
      quickStart: {
        title: 'Inicio rápido en EmailMassivo',
        description: 'Guía paso a paso para aprender a usar la plataforma y enviar tu primera campaña.',
        button: 'Base de conocimientos'
      },
      form: {
        title: 'Hacer una pregunta',
        fields: {
          name: 'Tu nombre',
          website: 'Sitio web de la empresa',
          email: 'Correo electrónico',
          message: 'Mensaje'
        },
        checkbox: 'Doy mi consentimiento para el tratamiento de mis datos personales.',
        submit: 'Enviar'
      }
    },
    privacyPolicy: {
      content: `La presente Política de Privacidad («Política», «Política de Privacidad») es parte integrante del Acuerdo de Licencia con el Usuario y establece las reglas para el tratamiento de la Información personal que Compubyte Limited (en lo sucesivo, «EmailMassivo», «nosotros») puede recopilar sobre los Usuarios (el «Usuario» o «usted») en relación con el uso por parte del Usuario del servicio «EmailMassivo» (el «Servicio»). En particular, determina los tipos de información recopilada, las formas y métodos de recopilación de la información, las finalidades, las medidas para garantizar la protección de la información, así como los derechos del Usuario respecto de su Información personal.

Por la presente, el Usuario nos otorga su consentimiento para el tratamiento de su Información personal en los términos de la presente Política de Privacidad. Las acciones del Usuario dirigidas al uso del Servicio constituyen la aceptación incondicional de las condiciones de esta Política y de las condiciones de tratamiento de su Información personal indicadas en la misma. Le recomendamos encarecidamente que lea esta Política y se asegure de que la entiende por completo y de que está de acuerdo con ella antes de empezar a utilizar nuestro Servicio. Si no ha leído íntegramente esta Política, no ha entendido algo o no acepta las condiciones de la Política de Privacidad, debe dejar de usar el Servicio inmediatamente.

El Usuario garantiza que, de acuerdo con la legislación de su jurisdicción, ha alcanzado la edad que le permite otorgar por sí mismo el consentimiento para el tratamiento de su información personal (pero en ningún caso menos de 16 años) o que puede acreditar, en la forma y el procedimiento establecidos, la autorización correspondiente de la persona titular de la responsabilidad parental sobre él.

Llamamos su especial atención al hecho de que, de conformidad con la ley, usted no está obligado a proporcionarnos ninguna información; sin embargo, el suministro de dicha información es una condición indispensable para el uso de nuestro Servicio. Por la presente, usted confirma, garantiza y acepta que cualquier información que nos proporcione se entrega por su propia voluntad libremente expresada, es específica, inequívoca y corresponde a su voluntad de que sus datos se utilicen para las finalidades descritas a continuación.

Usted puede retirar su consentimiento para el tratamiento de su Información personal en cualquier momento, ya que procuramos garantizar un procedimiento de revocación del consentimiento que no sea menos sencillo que su otorgamiento. La revocación del consentimiento no afectará a la licitud del tratamiento basada en el consentimiento previo a su retirada.

## **Términos y definiciones**

Información personal: cualquier información sobre una persona física identificada o identificable que sea, de conformidad con el Acuerdo, Usuario del Servicio.

Acuerdo: el acuerdo de licencia entre el Usuario y EmailMassivo para el uso del Servicio, aceptado por el Usuario en la forma establecida y que tiene fuerza jurídica obligatoria para el Usuario y para EmailMassivo.

Servicio: el software de EmailMassivo destinado a la realización de envíos de mensajes, que incluye, entre otros, el conjunto de información, textos, elementos gráficos, diseño, imágenes, materiales fotográficos y de vídeo, y otros resultados de la actividad intelectual, así como programas de ordenador contenidos en el sistema de información que garantiza la disponibilidad de dicha información en Internet.

Usuario: persona física o jurídica que ha aceptado el Acuerdo y utiliza el Servicio.

Todos los demás términos y definiciones que se encuentren en el texto de la Política se interpretarán de conformidad con las demás normas que regulan el uso del Servicio, con las prácticas establecidas en Internet y con la legislación aplicable que regula el tratamiento de datos personales.

## **1. Información personal recopilada**

1.1. En nuestra actividad nos regimos por la legislación de la República de Chipre en materia de tratamiento de datos personales y por el GDPR.

1.2. De conformidad con el principio de «minimización de datos», recopilamos Información personal sólo en la medida necesaria para el uso cómodo del Servicio y para alcanzar las finalidades de su recopilación.

1.3. En el proceso de uso del Servicio por parte del Usuario, recopilamos dos tipos de Información personal: Información personal identificable e Información despersonalizada.

1.3.1. Información personal identificable. Dicha información incluye información individual que identifica a un Usuario concreto y que el Usuario nos proporciona durante el Registro.

Los tipos obligatorios de Información personal identificable necesarios para utilizar el Servicio incluyen:

* dirección de correo electrónico.

1.3.2. Información despersonalizada. Información despersonalizada es aquella que no identifica a un Usuario concreto y que se recopila automáticamente durante el Registro y el uso del Servicio.

La Información despersonalizada puede incluir:

* información obtenida mediante cookies, etiquetas de píxel, balizas web, herramientas de análisis del navegador y registros del servidor web, así como otras tecnologías y herramientas similares;  
* información sobre los dispositivos que el Usuario utiliza para acceder al Servicio, incluidos el tipo de sistema operativo, el modelo del dispositivo, el tipo de navegador, la configuración del sistema, incluida la información sobre el idioma que utiliza el sistema del Usuario, datos de geolocalización (determinación del país/región), la zona horaria del dispositivo del Usuario y el operador de telecomunicaciones;  
* registros de actividad almacenados en el servidor que registran las direcciones IP de los dispositivos que el Usuario utiliza para interactuar con el Servicio, la hora de acceso, la secuencia de acciones del usuario en el Servicio, información sobre la sesión, incluido el tiempo de respuesta y los errores de carga;  
* información de la cuenta del Usuario en una red social (en función de la configuración de privacidad establecida por el Usuario para su cuenta en la red social), de modo que podamos obtener información sobre sus intereses y preferencias, así como acceso a su foto;  
* otra información que no identifique al Usuario, dependiendo de los permisos que usted nos haya concedido.

1.4. El Usuario acepta y reconoce que, en algunos casos, tenemos derecho a solicitar información adicional sobre el Usuario, así como copias de documentos que confirmen los datos indicados, y a realizar cualquier otra solicitud cuando ello resulte necesario sobre la base de suposiciones razonables y de nuestros intereses legítimos.

## **2. Métodos de recopilación de la Información personal**

2.1. La base jurídica para la recopilación de la Información personal es el consentimiento del Usuario para la recopilación de la información.

2.2. La Información personal identificable es recopilada por nosotros en el momento del Registro del Usuario en el Servicio.

2.3. La Información despersonalizada es recopilada por nosotros durante el uso que usted realiza del Servicio.

## **3. Finalidades de la recopilación de la Información personal**

3.1. Utilizamos la Información personal para las siguientes finalidades:

3.1.1. Proporcionar acceso al Servicio y su posterior funcionamiento.

3.1.2. Mejorar el Servicio, aumentar la comodidad de su uso y configurar los parámetros necesarios, sobre la base de las preferencias generales o individuales, de la experiencia de uso o de las dificultades surgidas para los Usuarios.

3.1.3. Garantizar la asistencia técnica y la comunicación, incluyendo el envío de notificaciones, solicitudes e información relacionada con el uso del Servicio (avisos sobre actualizaciones, información sobre cuestiones de seguridad, modificaciones de nuestras normas y condiciones de uso del Servicio).

3.1.4. Crear información estadística agregada, incluida la analítica y el seguimiento de tendencias en el uso del Servicio y en las acciones de los Usuarios dentro del Servicio.

3.1.5. Enviar comunicaciones publicitarias a su dirección de correo electrónico o a su teléfono móvil con avisos sobre productos, servicios, promociones, eventos y otras noticias e información que, a nuestro juicio, puedan resultar de interés para el Usuario. Podemos enviarle información de carácter publicitario. Usted puede cancelar fácilmente la recepción de mensajes publicitarios utilizando la opción de «cancelar suscripción» que le ofrecemos en dichos mensajes.

3.1.6. Prevenir el fraude o la infracción de las leyes aplicables, en particular para detectar, investigar y evitar operaciones fraudulentas y otras actividades ilícitas, así como para proteger los derechos y bienes de EmailMassivo, de otros usuarios y de terceros.

3.1.7. Cumplir con cualquier legislación aplicable.

3.2. La Información personal del Usuario no se utilizará para finalidades distintas de las anteriormente indicadas.

3.3. El Usuario confirma que las finalidades del uso de su Información personal se ajustan a sus intereses y que el consentimiento para el tratamiento de la Información personal otorgado por el Usuario al comenzar a utilizar el Servicio se concede para cada una de las finalidades de tratamiento indicadas en el punto 3.1 del Acuerdo.

## **4. Comunicación de la Información personal**

4.1. Nos comprometemos a no comunicar la Información personal del Usuario a terceros, salvo en los casos en que:

4.1.1. El Usuario haya otorgado un consentimiento directo y específico para la comunicación de su Información personal.

4.1.2. Dicha transmisión de información sea necesaria para el uso del Servicio por parte del Usuario, o para la ejecución del Acuerdo de Licencia u otros documentos de obligado cumplimiento que regulen las relaciones entre nosotros y el Usuario.

4.1.3. Cuando dicha transmisión de información sea necesaria para el funcionamiento del Servicio y sus funcionalidades (transmisión de información a proveedores de servicios de hosting, comunicaciones y redes de distribución de contenido (CDN), servicios de protección de datos y ciberseguridad, facturación y servicios de procesamiento de pagos, servicios de detección y prevención de fraude, analítica web, distribución de correo electrónico y monitoreo del estado del Servicio, incluyendo la medición de rendimiento y la optimización de datos, así como servicios de marketing y publicidad), terceros (destinatarios de la Información personal) pueden recibir o tener acceso, de otro modo, a la Información personal del Usuario, en todo o en parte, dependiendo del rol y de las finalidades de cada uno de dichos terceros para mantener la operatividad del Servicio o mejorarlo; además, sólo podrán utilizar la información recibida para las finalidades indicadas en la presente Política.

4.1.4. La transmisión de Información personal se realice de conformidad con la legislación aplicable a petición de los sujetos facultados para recibir dicha información (solicitudes judiciales y solicitudes de autoridades encargadas de hacer cumplir la ley), cuando se nos imponga la obligación de revelar dicha información y actuemos de buena fe considerando que la ley nos exige proceder de ese modo.

4.1.5. Se produzca la transmisión de los derechos de propiedad o del control de la totalidad o de una parte del Servicio a un nuevo propietario.

4.1.6. La transmisión de Información personal se lleve a cabo a fin de garantizar la posibilidad de proteger nuestros derechos e intereses legítimos o los derechos e intereses de terceros en los casos en que el Usuario infrinja la presente Política de Privacidad u otros documentos de obligado cumplimiento que regulen las relaciones entre nosotros y el Usuario, así como las leyes aplicables. Los casos mencionados no se considerarán como una comunicación no autorizada de información personal, ya que estas acciones están dirigidas a la consecución de las finalidades del tratamiento de la Información personal.

4.2. Nunca venderemos la Información personal de los Usuarios a terceros.

4.3. La información sólo podrá ser transmitida estrictamente de conformidad con la presente Política de Privacidad y dentro del marco de la legislación aplicable.

## **5. Territorio de almacenamiento y transferencia transfronteriza de la Información personal**

5.1. Almacenamos y tratamos la Información personal de los Usuarios de EmailMassivo y de los destinatarios de sus mensajes en el territorio de la Unión Europea.

5.2. Nos esforzamos por proteger y preservar la Información personal de los Usuarios de conformidad con los estándares internacionales del sector y no aceptamos requisitos jurídicos inferiores a los de la jurisdicción del Usuario.

5.3. En caso de que nosotros y el Usuario nos encontremos en distintas jurisdicciones, al acceder o utilizar el Servicio o, de otro modo, proporcionarnos su Información personal, el Usuario acepta el tratamiento y la transferencia de su información al país de nuestra incorporación. Al mismo tiempo, garantizamos que adoptaremos las medidas adecuadas para proteger la Información personal del Usuario de conformidad con la presente Política de Privacidad y con la legislación aplicable.

## **6. Uso de tecnologías de seguimiento**

6.1. Utilizamos determinadas tecnologías de control y seguimiento con el fin de mantener, garantizar y mejorar el funcionamiento continuo de nuestro Servicio y de proporcionar al Usuario un uso cómodo del Servicio. De forma predeterminada, utilizamos varias de estas tecnologías para fines de autenticación de la sesión y del Usuario, seguridad, conservación de las preferencias del Usuario (por ejemplo, en relación con el idioma predeterminado y la configuración), estabilidad de la conexión, monitoreo del rendimiento de nuestro Servicio y de las campañas de marketing, así como para la prestación y mejora de nuestros Servicios.

## **7. Derechos del Usuario**

7.1. En el marco de la presente Política de Privacidad, cada Usuario tiene los siguientes derechos con respecto a su Información personal:

7.1.1. Derecho de acceso a su Información personal. Para garantizar este derecho, el Servicio prevé una sección especial en la Cuenta donde se indica toda la Información personal identificable del Usuario que hayamos recibido. El Usuario puede acceder a la sección con la Información personal identificable y revisar la Información personal identificable de la que disponemos en ese momento. A petición del Usuario, le proporcionaremos el listado completo de la Información personal que hayamos recopilado sobre él, la base jurídica y las finalidades del tratamiento, las categorías de Información personal, la lista de terceros a los que se haya comunicado o vaya a comunicarse la Información personal, el periodo durante el cual se almacenará la Información personal, así como las medidas de protección de la Información personal. La respuesta se facilitará en un plazo razonable, de conformidad con la legislación aplicable.

7.1.2. Derecho de rectificación. El Usuario tiene derecho, en cualquier momento, a corregir por sí mismo su Información personal a través de la Cuenta; si, por algún motivo, el Usuario encuentra dificultades para corregir su Información personal, puede enviarnos la solicitud correspondiente y realizaremos las correcciones en un plazo razonable. Teniendo en cuenta las finalidades del tratamiento, el titular de los datos tiene derecho a proporcionar Información personal identificable incompleta, indicando únicamente los tipos obligatorios de Información personal necesarios para permitir el acceso al Servicio.

7.1.3. Derecho a retirar el consentimiento para el tratamiento de la Información personal. El Usuario tiene derecho a retirar su consentimiento en cualquier momento. La retirada del consentimiento no afectará a la licitud del tratamiento basada en el consentimiento antes de su retirada. El Servicio prevé la posibilidad de retirar el consentimiento con la misma facilidad con que se otorga. Así, el Usuario tiene la posibilidad de enviarnos en cualquier momento una solicitud de eliminación de la Cuenta; eliminaremos la Cuenta en un plazo razonable después de recibir la solicitud correspondiente.

Tenga en cuenta que usted puede corregir, actualizar o eliminar por sí mismo determinadas partes de la Información personal.

Cuando el Usuario rectifique su Información personal o retire su consentimiento, informaremos de ello a todos los terceros que tengan acceso a la Información personal del Usuario.

7.1.4. Derecho de supresión («derecho al olvido»). El Usuario tiene derecho a solicitar, y nosotros estamos obligados a proceder a la supresión de la Información personal del Usuario sin dilaciones indebidas cuando:

* la Información personal ya no sea necesaria para las finalidades para las que fue recopilada;  
* el titular de los datos retire el consentimiento para el tratamiento de su Información personal que constituye la base para su recopilación;  
* los datos personales hayan sido tratados de forma ilícita;  
* los datos personales deban suprimirse de conformidad con la ley.

7.1.5. Derecho a la portabilidad de los datos. El Usuario tiene derecho a recibir su Información personal en un formato estructurado, de uso común y lectura mecánica. El Usuario puede obtener en formato estructurado toda la Información personal que hayamos recibido en cualquier momento, enviando la solicitud correspondiente al servicio de soporte técnico. El Usuario tiene derecho a transmitir su Información personal directamente de un responsable del tratamiento a otro, cuando ello sea técnicamente posible.

## **8. Plazo de almacenamiento de la Información personal**

8.1. Conservamos su Información personal durante todo el tiempo de uso del Servicio (vigencia de su Cuenta) o hasta el momento en que ya no necesitemos dichos datos para prestar el Servicio, o durante un plazo más largo cuando así se establezca (si estamos obligados a conservarla durante más tiempo en virtud de la legislación aplicable o si ello se hace para resolver controversias con nuestros Usuarios, prevenir el fraude y los abusos y/o proteger nuestros intereses legítimos).

## **9. Seguridad de la información**

9.1. Por la presente, garantizamos que adoptamos todas las medidas organizativas y técnicas necesarias y suficientes, de conformidad con la legislación aplicable, para proteger la Información personal del Usuario contra el acceso ilícito o accidental, la destrucción, la modificación, el bloqueo, la copia, la divulgación, así como otras acciones ilícitas de terceros con respecto a dicha información. En nuestra actividad utilizamos estándares de la industria ampliamente aceptados para proteger la Información personal del Usuario y procuramos proteger y garantizar al máximo la confidencialidad de la Información personal. La protección de la Información personal se implementa por defecto a nivel de diseño del Servicio durante su desarrollo. Las medidas de seguridad incluyen cortafuegos, seudonimización, cifrado de datos, minimización de datos, resistencia de los sistemas de tratamiento frente a fallos, capacidad de restablecer oportunamente la disponibilidad y el acceso a la Información personal en caso de incidente físico o técnico, control del acceso físico a los centros de datos, así como control de las autorizaciones de acceso a los datos. Supervisamos regularmente nuestros sistemas para detectar posibles vulnerabilidades y ataques, evaluar la eficacia de las medidas técnicas y organizativas para garantizar la seguridad de la Información personal, y buscamos constantemente nuevas formas y proveedores de servicios para mejorar aún más la seguridad de nuestro Servicio y la protección de la confidencialidad de nuestros Usuarios. Todos los terceros que obtienen acceso a la Información personal y participan en el proceso de proporcionar al Usuario acceso al Servicio cumplen medidas de seguridad de la Información personal no menos estrictas.

9.2. Sin embargo, no podemos garantizar una protección absoluta y, por tanto, le instamos a que actúe con cautela, establezca una contraseña segura para su cuenta y evite proporcionar cualquier información sensible cuya divulgación pueda causarle un daño significativo.

9.3. En caso de cualquier violación de la confidencialidad de la Información personal, adoptaremos todas las medidas a nuestro alcance para eliminar o minimizar las posibles consecuencias negativas, así como para garantizar la notificación inmediata de dicho incidente a las autoridades de control competentes y al Usuario, indicando toda la información disponible sobre la violación de la confidencialidad. Los hechos de tales incidentes se incluirán en un registro especial de incidentes que estamos obligados a llevar de conformidad con la legislación aplicable.

9.4. A efectos de la presente Política, se entenderá por violación de la confidencialidad de la Información personal toda violación de la seguridad que dé lugar a la destrucción, pérdida, alteración, divulgación o acceso no autorizados, ya sean accidentales o ilícitos, a la Información personal transmitida o tratada.

## **10. Modificación e interpretación de la Política de Privacidad**

10.1. La presente Política de Privacidad, su interpretación y cualesquiera reclamaciones y controversias relacionadas con ella se regirán, interpretarán y aplicarán exclusivamente de conformidad con las leyes del país de nuestra incorporación, sin tener en cuenta los principios de derecho internacional privado aplicables.

10.2. Por la presente, usted acepta que cualquier controversia que surja será resuelta exclusivamente por los tribunales del lugar de nuestra incorporación.

10.3. Podemos modificar la Política de Privacidad en cualquier momento. En caso de que consideremos que las modificaciones introducidas son sustanciales (según nuestro leal saber y entender), se lo comunicaremos antes de que dichas modificaciones entren en vigor.

10.4. Le recomendamos revisar periódicamente esta página para obtener la información más actualizada sobre nuestra Política de Privacidad. Salvo que se disponga expresamente lo contrario, nuestra última versión de la Política de Privacidad se aplicará a toda la información que tengamos sobre usted.

## **11. Comunicación con nosotros y respuesta a sus consultas**

11.1. Si tiene alguna pregunta sobre la presente Política de Privacidad, comuníquese con nosotros a la dirección support@emailmassivo.com.

11.2. También puede enviar una carta a la dirección 9 Vasili Michailidi, 3026, Limassol, Cyprus.

11.3. Responderemos a su solicitud en un plazo razonable o en el plazo establecido por la legislación aplicable.

11.4. En los casos en que la presente Política o la legislación aplicable establezcan nuestra obligación de proporcionarle copias de información o de algún documento, le proporcionaremos un ejemplar de forma gratuita; para cualquier copia adicional solicitada tendremos derecho a cobrar una tarifa razonable basada en los costos administrativos. Si usted realiza la solicitud por medios electrónicos, y salvo que solicite otra cosa, le proporcionaremos la respuesta en un formato electrónico de uso generalizado.

11.5. Si las solicitudes del Usuario son manifiestamente infundadas o excesivas, en particular debido a su carácter repetitivo, tendremos derecho a cobrar una tarifa razonable teniendo en cuenta los costos administrativos de proporcionar la información o a negarnos a actuar conforme a la solicitud.

11.6. En caso de que tengamos dudas razonables respecto de la identidad de la persona que presenta la solicitud, podremos pedir información adicional necesaria para confirmar la identidad del Usuario.`
    },
    antiSpamPolicy: {
      content: `Anexo Nº 1 al Acuerdo de licencia sobre el derecho de uso del Servicio EmailMassivo

Al registrarse en el Servicio, el Usuario acepta las condiciones de la presente Política Antispam.

## **1. Conceptos básicos**

1.1. Servicio – el servicio EmailMassivo destinado a la creación, envío y monitoreo de los resultados del envío de correo electrónico a los Suscriptores, siempre que medie su consentimiento previo obligatorio. El envío de mensajes no deseados mediante el Servicio está terminantemente prohibido.

1.2. Spam – mensajes transmitidos por canales de telecomunicaciones cuyo contenido o características no se ajustan a la legislación aplicable.

1.3. Suscriptor – personas físicas o jurídicas que han expresado un consentimiento explícito para recibir boletines informativos del Usuario y que se encuentran en la base de clientes del Usuario para la recepción de mensajes.

1.4. Formulario de suscripción - bloque funcional ubicado en el sitio web que contiene campos para introducir información (nombre, dirección de correo electrónico, teléfono de contacto, etc.). La tarea principal del formulario de suscripción es recopilar la información de contacto personal de los usuarios que han manifestado su deseo de recibir el boletín.

1.5. Reclamación por spam – se considera cualquiera de los siguientes eventos: a) notificación del Suscriptor o de una organización antispam sobre la recepción de correspondencia no deseada por parte de sus usuarios; b) bloqueo de los servidores de correo y direcciones URL del Usuario en grandes recursos de Internet; c) recepción de una reclamación por spam por parte de un servidor de correo.

## **2. Disposiciones generales**

2.1. Se prohíbe al Usuario realizar envíos de mensajes que no cumplan la legislación aplicable o la legislación del país del Suscriptor, incluidos, entre otros, los envíos que contengan:

* spam de cualquier tipo y en cualquiera de sus manifestaciones;  
* información inexacta o falsa;  
* lenguaje soez u ofensivo;  
* software malicioso o no licenciado;  
* llamados a la discriminación racial, religiosa o de género;  
* material sujeto a derechos de autor y marcas comerciales de terceros utilizados sin la autorización del titular de los derechos;  
* material de carácter pornográfico;  
* envío de correos electrónicos que contengan en el encabezado y/o en el cuerpo del propio mensaje ofertas de ganancias rápidas y fáciles en Internet, dinero rápido y fácil o esquemas de pirámide financiera.

La cuenta personal de los Usuarios sorprendidos en la distribución de spam será bloqueada.

2.2. Cada mensaje enviado a través del Servicio deberá incluir obligatoriamente un enlace mediante el cual el Suscriptor pueda darse de baja de los envíos del Usuario. El Usuario no tiene derecho a ocultar ni a enmascarar dicho enlace.

2.3. Se prohíbe al Usuario realizar envíos a su propia base de suscriptores por encargo de terceros con el fin de promocionar el producto de dichos terceros.

2.4. El Usuario acepta que determinados envíos, en particular, entre otros casos, cuando el contenido del envío no cumpla los requisitos establecidos en la presente Política Antispam o en la legislación aplicable, o presente indicios de que los Suscriptores no han aceptado recibir dicho envío, podrán ser bloqueados por el Software o por el personal del Servicio.

## **3. Supuestos en los que los mensajes se consideran SPAM**

3.1. Se realiza el envío de información dirigida a listas de correo electrónico adquiridas o de acceso público sin el envío previo de una carta para obtener el consentimiento para la suscripción.

3.2. En la gran mayoría de los casos, los mensajes se envían a buzones del tipo info@, sales@ y otros buzones de correo electrónicos genéricos.

3.3. Se indican datos de contacto incorrectos o distorsionados.

3.4. El asunto y el texto del mensaje contienen información falsa, incorrecta o engañosa.

3.5. Se utiliza una dirección de correo electrónico que no pertenece al dominio asociado con la empresa.

3.6. En el cuerpo del correo electrónico no existe un enlace "cancelar la suscripción al boletín".

3.7. Durante un período prolongado después de la recepción de la solicitud de baja de la suscripción, la baja no se hace efectiva.

3.8. En los informes de envío, los indicadores de clics en el botón "spam", o de bloqueo de mensajes por los filtros de spam de los proveedores de correo, o la cantidad de rebotes, superan sustancialmente los valores promedio del Servicio **(rebotes duros no superiores al 5%, clics en "esto es spam" - 0.5%)**.

3.9. Las acciones del Usuario y/o el contenido del envío contravienen la legislación aplicable.

## **4. Motivo para contactar al destinatario.**

El destinatario del mensaje ha realizado una compra, ha solicitado información, ha respondido preguntas/encuestas, es cliente del Usuario, se ha comunicado con él fuera de línea, ha completado un formulario de suscripción o ha respondido afirmativamente a un correo previo para obtener el consentimiento para el envío. Al mismo tiempo, el destinatario del mensaje ha recibido una comprensión clara de la finalidad de la dirección de correo electrónico solicitada.

## **5. Métodos preventivos de lucha contra el SPAM**

5.1. Moderación previa obligatoria de todos los envíos.

5.2. Sistemas analíticos automáticos de detección de SPAM.

5.3. Verificación de los datos de los Usuarios a fin de evitar la obtención de acceso al sistema con el propósito de un uso indebido.

5.4. Formación y asesoría constantes a los Usuarios con el fin de elaborar campañas correctas de email marketing.

5.5. Trabajo constante con proveedores de Internet y de alojamiento (hosting) a fin de que la actividad del Servicio sea interpretada como un medio legítimo de ejecución de actividades de marketing y ventas.

5.6. Bloqueo de los Usuarios que utilizan el Servicio para el envío de SPAM. En caso de que el Usuario no aporte argumentos de peso dentro de las 24 horas siguientes al momento del bloqueo, la cuenta será eliminada sin posibilidad de devolución de los fondos no utilizados.

## **6. Listas de distribución permitidas y no permitidas para su uso en el Servicio**

6.1 Se permite el uso de listas de distribución si las direcciones de correo electrónico que contienen se han obtenido por alguno de los siguientes medios:

6.1.1. En el sitio web del Usuario a través de un formulario de suscripción.

6.1.2. En el sitio web del Usuario mediante cualquier otro formulario (por ejemplo, al registrar al usuario). Con la condición obligatoria de que el formulario contenga un apartado específico para prestar el consentimiento a recibir el boletín en la dirección introducida.

6.1.3. A través de cuestionarios, formularios o encuestas en papel que el destinatario haya completado a mano e incluido su dirección de correo electrónico. Con la condición obligatoria de que el formulario contenga un apartado específico para prestar el consentimiento a recibir el boletín en la dirección introducida.

6.1.4. Entre los clientes actuales del Usuario después de que este les haya enviado una solicitud de consentimiento para recibir el boletín y haya recibido una respuesta afirmativa.

6.2 No se permite el uso de listas de distribución si:

6.2.1. El Usuario no puede demostrar el consentimiento de los destinatarios para recibir su boletín.

6.2.2. El Usuario las obtuvo únicamente mediante consentimiento verbal, por ejemplo, a través de una llamada telefónica.

6.2.3. El Usuario ha comprado, alquilado u obtenido direcciones de correo de terceros.

6.2.4. Las bases de direcciones se han recopilado a partir de "fuentes abiertas".`
    },
    licenseAgreement: {
      content: `Términos de uso del servicio «EmailMassivo»

El presente acuerdo de licencia (el «Agreement») es un acuerdo jurídicamente vinculante entre Compubyte Limited (en adelante, «EmailMassivo») y el usuario (el «User»), en virtud del cual se concede al User el derecho a utilizar el servicio web de EmailMassivo (el «Service») con el fin de realizar envíos de mensajes, en la forma y en los términos establecidos en el presente Agreement.

El Agreement constituye una oferta pública dirigida a un número ilimitado de personas (una «public offer») y contiene todas las condiciones esenciales. La aceptación de estas condiciones por parte del User confiere fuerza jurídica vinculante al Agreement. Al hacer clic en el botón «Crear cuenta», el User acepta las condiciones del Agreement. No se permite la aceptación parcial de las condiciones. El mero hecho de obtener acceso al Service, así como cualquier uso del Service sin excepción ni reserva alguna, se considerará confirmación incondicional de que el User ha leído, entendido y aceptado cumplir las condiciones del Agreement.

El User garantiza a EmailMassivo que, de conformidad con la legislación de la jurisdicción del User, ha alcanzado la edad que le permite celebrar relaciones contractuales de forma independiente, adquirir los correspondientes derechos y obligaciones en el marco de dichas relaciones y asumir la responsabilidad prevista por la ley, y que, en caso de existir cualquier limitación de su capacidad jurídica, cuando así lo exija la legislación aplicable, el User ha obtenido previamente la autorización correspondiente de sus representantes legales (o tutores) para aceptar el Agreement. La aceptación podrá efectuarse en nombre del User por un tercero con el consentimiento del User o cuando dicha persona sea su representante legal.

Condición indispensable para el uso del Service es el consentimiento del User con la política de privacidad del Service (la «Privacy Policy»).

Antes de utilizar el Service, EmailMassivo recomienda que el User lea detenidamente el Agreement en su totalidad. Si el User no cumple los requisitos del Agreement, no lo ha leído, no lo entiende o no está de acuerdo con sus condiciones, el derecho a utilizar el Service no puede serle concedido y deberá abstenerse de aceptar el Agreement y de utilizar el Service de cualquier forma.

Los términos y definiciones utilizados en el Agreement se interpretarán de conformidad con la legislación del país de incorporación de EmailMassivo, las prácticas comerciales y las reglas generalmente aceptadas de interpretación de los términos correspondientes en Internet.

## **1. Objeto del Agreement**

1.1. Por el presente, EmailMassivo concede al User una licencia simple (no exclusiva), personal (no sublicenciable), limitada y revocable para utilizar el Service conforme a su finalidad funcional directa, en la forma y en los términos establecidos en el presente Agreement.

1.2. El volumen de derechos (capacidades funcionales del Service) otorgados al User viene determinado por el plan tarifario elegido por el User.

1.3. Plazo de concesión de la licencia al User:

1.3.1. Dentro de los planes tarifarios que no prevén pago: desde el momento de la aceptación de las condiciones del Agreement por parte del User y por un plazo indefinido, siempre que el uso del Service sea continuo.

1.3.2. Dentro de los planes tarifarios que sí prevén pago: desde el momento en que los fondos se abonan a favor de EmailMassivo y hasta la expiración del plazo del plan tarifario pagado.

1.4. El territorio en el que el User puede utilizar el Service no está limitado (en todo el mundo).

## **2. Derechos y obligaciones de las partes**

2.1. El User se obliga a:

2.1.1. Utilizar el Service de una forma no prohibida por la legislación aplicable ni por el Agreement.

2.1.2. Proporcionar información completa y veraz sobre sí mismo al realizar el procedimiento de registro. En caso de que cambien los datos del User tras la finalización del procedimiento de registro, el User se obliga a corregir de manera inmediata y autónoma los datos correspondientes. EmailMassivo no asume obligación alguna de verificar la exactitud ni la integridad de los datos facilitados por el User y no será responsable de cualesquiera pérdidas del User o de terceros derivadas de la falta de correspondencia entre la información facilitada por el User y los datos reales.

2.1.3. Garantizar la confidencialidad de los datos de acceso a la cuenta del User (nombre de usuario y contraseña) frente a terceros y cambiar dichos datos oportunamente en caso de pérdida o compromiso de los mismos. EmailMassivo considerará que las acciones realizadas utilizando la cuenta del User, cuando el acceso a la misma se haya obtenido mediante la utilización de datos de acceso correctos, han sido realizadas directamente por el User.

2.1.4. Revisar periódicamente la información actualizada sobre las modificaciones del Agreement, el coste de los planes tarifarios y la lista de capacidades funcionales del Service disponibles previo pago de los planes tarifarios correspondientes.

2.1.5. Garantizar el cumplimiento de la legislación vigente en materia de tratamiento de datos personales al tratar los datos personales de los destinatarios de mensajes cuyos envíos hayan sido organizados por el User, así como garantizar el cumplimiento de la legislación vigente en materia de publicidad respecto del contenido de los mensajes enviados.

2.1.6. Responder a las solicitudes de EmailMassivo dentro de los plazos indicados en dichas solicitudes. La falta de respuesta dentro de los plazos establecidos en la solicitud se considerará por nosotros como facilitación de datos de contacto inexactos por parte del User durante el procedimiento de registro, lo cual constituye un incumplimiento de las condiciones del presente Agreement.

2.1.7. Obtener del destinatario el consentimiento para recibir un mensaje antes de enviarle cualquier mensaje. Una vez recibida por el User la correspondiente solicitud de EmailMassivo, el User se obliga a proporcionar a EmailMassivo los consentimientos de los destinatarios de los mensajes enviados por el User.

2.1.8. Enviar mensajes a los destinatarios únicamente en su propio nombre.

2.1.9. Incluir obligatoriamente en cada mensaje enviado un enlace mediante el cual el destinatario pueda darse de baja de la recepción de futuros mensajes. El User no tiene derecho a enmascarar ni ocultar dicho enlace.

2.1.10. No incluir en la base de direcciones a destinatarios que no hayan prestado su consentimiento para recibir mensajes del User, y eliminar de la base de direcciones a los destinatarios que se hayan negado a recibir mensajes.

2.2. El User tiene derecho a:

2.2.1. Contactar con el servicio de soporte técnico en relación con la inscripción, el funcionamiento del Service y la restauración del acceso perdido al Service en la dirección support@emailmassivo.com, así como a través de la cuenta del User. EmailMassivo se reserva el derecho de denegar la prestación de soporte técnico en caso de comportamiento inadecuado del User al comunicarse con los especialistas de soporte técnico.

2.3. EmailMassivo se obliga a:

2.3.1. Garantizar al User el derecho a utilizar el Service en los términos del Agreement, veinticuatro (24) horas al día, siete (7) días a la semana, incluidos fines de semana y días festivos, dentro de los límites del plan tarifario elegido por el User.

2.3.2. Emplear esfuerzos razonables para garantizar el funcionamiento estable del Service, su mejora y la corrección de errores en el funcionamiento del Service.

2.3.3. Prestar soporte técnico al User en cuestiones de registro, funcionamiento del Service y restauración del acceso perdido al Service. EmailMassivo no proporciona asesoramiento en cuestiones jurídicas, de configuración de hardware, software o acceso a Internet, ni en otras cuestiones que no guarden relación directa con el funcionamiento del Service.

2.3.4. Garantizar un nivel adecuado de seguridad de los datos de registro del User conforme a la Privacy Policy aceptada por el User y a la legislación aplicable.

2.3.5. Reenviar al User las comunicaciones de terceros referentes a la información contenida en los mensajes enviados por el User. Por el presente, el User nos encomienda el tratamiento de los datos personales de dichos terceros en nombre y en interés del User.

2.4. EmailMassivo tiene derecho a:

2.4.1. Interrumpir el acceso del User al Service en caso de incumplimiento de las condiciones del Agreement o de incumplimiento de las obligaciones de pago.

2.4.2. Interrumpir el acceso del User al Service en caso de que el User cree una carga crítica sobre los equipos de servidor y/o dificulte el funcionamiento estable del Service y/o genere otras amenazas para el Service que impliquen o creen un riesgo de consecuencias negativas en cualquier forma para los equipos de servidor, el Service y los usuarios del Service.

2.4.3. Suspender el funcionamiento del Service durante el tiempo necesario para realizar trabajos de mantenimiento programado y trabajos de restauración en los equipos. EmailMassivo no asume la obligación de notificar previamente al User sobre la próxima suspensión del Service, pero procurará hacerlo de la manera que resulte más conveniente para EmailMassivo.

2.4.4. Enviar al User mensajes publicitarios e informativos a la dirección de correo electrónico o al número de teléfono móvil indicados durante el procedimiento de registro, sobre ofertas, promociones, eventos relacionados con el Service y nuevos productos; contactar al User con el fin de comprobar la calidad del funcionamiento del Service; enviar mensajes con información importante relativa al uso del Service, así como otra información que, a nuestro juicio, pueda resultar de interés para el User.

2.4.5. Solicitar al User información y copias de documentos de identidad del User al recibir solicitudes del User relacionadas con el tratamiento de sus datos personales, la restauración del acceso al Service, a fin de proteger nuestros intereses y los intereses de terceros, así como al recibir solicitudes de información de autoridades públicas y personas autorizadas cuando EmailMassivo, de buena fe, considere que la legislación aplicable obliga a EmailMassivo a facilitar dicha información.

2.4.6. Proporcionar periódicamente actualizaciones del Service. Dichas actualizaciones están diseñadas para mejorar el Service y podrán proporcionarse en forma de correcciones de errores individuales, mejoras de funciones, incorporaciones de nuevas funcionalidades o nuevas versiones del Service. El contenido de las actualizaciones del Service lo determinamos a nuestra entera discreción. El User acepta recibir dichas actualizaciones y nos autoriza a proporcionarlas.

2.4.7. Llevar a cabo promociones en el marco de las cuales EmailMassivo ofrezca la compra de planes tarifarios en condiciones especiales, incluso con la obtención por parte del User de regalos, descuentos o códigos promocionales de nuestros socios. Los regalos, descuentos o códigos promocionales obtenidos por el User en el marco de una promoción son gratuitos únicamente cuando el plan tarifario al que se aplica la promoción se ha utilizado íntegramente. En caso de que se solicite un reembolso, el importe del reembolso se calculará como el saldo de fondos menos el valor de los beneficios recibidos a título gratuito.

2.5. Garantías de las partes:

2.5.1. El User garantiza que:

* es titular de todos los derechos sobre los materiales incluidos en los mensajes enviados, incluidos imágenes, videos, archivos de audio, textos y otros materiales, o que el User ha obtenido los consentimientos pertinentes para utilizar dichos materiales de forma lícita;  
* la información incluida en los mensajes enviados es veraz, no vulnera los derechos ni los intereses legítimos de terceros y no infringe la legislación vigente;  
* ha obtenido todos los consentimientos y/o autorizaciones necesarios para el ejercicio de su actividad mediante el uso del Service, cuando dicho consentimiento y/o autorización sea necesario de conformidad con la legislación vigente.

## **3. Condiciones financieras**

3.1. El importe de la remuneración de EmailMassivo por la concesión al User del derecho a utilizar el Service se determina en función del coste del plan tarifario elegido por el User y de su duración.

3.2. El coste vigente de los planes tarifarios, así como la lista de funciones del Service cuyo acceso depende del pago del plan tarifario, se publica en las secciones correspondientes del Service destinadas a la adquisición de planes tarifarios del Service.

3.3. Los planes tarifarios son adquiridos por el User bajo la condición de pago anticipado íntegro. El User elige de forma independiente el método de pago de entre las opciones previstas en las secciones correspondientes del Service destinadas a la adquisición de planes tarifarios del Service.

3.4. Las obligaciones de EmailMassivo de conceder al User el derecho a utilizar el Service dentro de las capacidades funcionales condicionadas al pago de los respectivos planes tarifarios se considerarán cumplidas en el momento en que el User obtenga acceso a dichas capacidades funcionales, independientemente de que el User ejerza o no el derecho concedido. En consecuencia, un plan tarifario de pago solo terminará una vez finalizado el periodo pagado; la cancelación de un plan tarifario ya pagado es imposible, y el importe abonado por el plan tarifario no está sujeto a devolución ni sustitución. El User tampoco podrá recibir compensación por el periodo de plan tarifario no utilizado pero pagado en caso de que renuncie al uso del Service (revocación de la licencia), retire su consentimiento para el tratamiento de datos personales o cese su acceso al Service debido a un incumplimiento por parte del User de las condiciones del Agreement. Cada solicitud de reembolso por parte del User será examinada individualmente en función de las circunstancias del caso concreto, y EmailMassivo se reserva el derecho de variar las condiciones de reembolso en casos específicos cuando lo considere necesario.

3.5. EmailMassivo tiene derecho, de forma unilateral y sin previo aviso, a modificar el coste de los planes tarifarios, así como a modificar la lista de capacidades funcionales del Service que pasan a estar disponibles al pagar el plan tarifario correspondiente. Las modificaciones del coste de un plan tarifario y de la lista de capacidades funcionales del Service que pasan a estar disponibles al pagar el plan tarifario correspondiente no se aplicarán a los planes tarifarios que ya hayan sido pagados por el User.

3.6. Si los planes tarifarios se pagan con una tarjeta bancaria perteneciente a una persona física cuando el pagador es una persona jurídica, no se expedirá documentación acreditativa a nombre de la persona jurídica.

## **4. Acciones prohibidas**

4.1. El User tiene prohibido:

4.1.1. Utilizar el Service para:

* organizar el envío de mensajes de SPAM;  
* transmitir intencionadamente mensajes que puedan provocar la interrupción del funcionamiento del Service;  
* enviar mensajes de carácter ofensivo o difamatorio;  
* enviar mensajes de carácter pornográfico;  
* enviar mensajes que induzcan a error a los destinatarios, por ejemplo, enviados en nombre de otra persona o que contengan información falsa;  
* enviar mensajes que contengan software malicioso;  
* enviar mensajes que infrinjan derechos exclusivos o derechos de autor de terceros;  
* enviar mensajes que contengan publicidad de esquemas piramidales, medicamentos, sustancias estupefacientes, productos de tabaco y bebidas alcohólicas o servicios de carácter íntimo;  
* enviar mensajes incluidos en listas de materiales extremistas, o que promuevan o justifiquen el terrorismo, el extremismo, el nazismo, la incitación al odio religioso, racial, étnico o nacional, o que inciten a infringir la legislación vigente y el orden público;  
* enviar mensajes que contengan amenazas contra la vida y la salud, así como mensajes que inciten a causar daños a la vida y la salud, a la persecución, al acoso o a inducir al suicidio;  
* enviar mensajes que insulten el honor y la dignidad de una persona, dañen la reputación comercial, contengan calumnias o lenguaje obsceno;  
* enviar mensajes que contengan información cuya divulgación no esté permitida por la ley o por obligaciones contractuales (información que constituya secreto de Estado, secreto comercial, bancario o médico, datos personales).

4.1.2. Utilizar el Service de una forma no prevista directamente en el Agreement.

4.1.3. Utilizar el Service para la venta ilícita de sustancias estupefacientes y psicotrópicas, explosivos, armas y sus municiones, o para la venta de otros bienes o servicios cuya comercialización esté prohibida o restringida por la ley.

4.1.4. Inducir a error a cualquier persona apropiándose de la identidad de otra persona con el fin de causar daños intencionadamente o por otro motivo de carácter ilícito o lucrativo.

4.1.5. Destruir la integridad del sistema de protección del Service, explotar cualquier vulnerabilidad del Service, intentar eludir las restricciones técnicas establecidas por el Service, obtener acceso no autorizado a las cuentas de otros Users o causar daños a las partes de software y hardware del Service y a los dispositivos de los Users.

4.1.6. Eliminar, ocultar o modificar el aviso de copyright obligatorio del Service (enlaces a nuestro sitio web oficial en forma de texto o imagen) y cualquier aviso de derechos exclusivos y de autor incluido en el Service y en sus componentes.

4.1.7. Utilizar el Service para distribuir programas maliciosos, para piratear o agregar datos personales («phishing»), para distribuir páginas puerta (doorways), código que abre una nueva ventana (popUp, popUnder), para llevar a cabo envíos masivos automáticos de cualquier tipo de contenido sin el consentimiento de los destinatarios de la información («spam», incluidas todas las formas de spam de motores de búsqueda), «cartas en cadena», esquemas de marketing multinivel, incluidos esquemas de obtención de ingresos en Internet, o información que provoque una reacción en cadena en el envío de mensajes.

4.1.8. Llevar a cabo un tratamiento ilícito de los datos personales de los titulares de los datos personales.

4.1.9. Utilizar el Service para cualquier otro fin ilícito.

4.2. El hecho de que el User lleve a cabo acciones prohibidas puede conllevar la imposición al User de la responsabilidad prevista por la ley.

## **5. Legislación aplicable**

5.1. EmailMassivo cumple la legislación de la República de Chipre y no ofrece garantía alguna de que el Service o cualquiera de sus partes sean accesibles para su utilización en cualquier otra jurisdicción.

5.2. Al aceptar las condiciones del presente Agreement, el User confirma su conformidad con que las relaciones jurídicas relativas al uso del Service se rijan por la legislación del país de incorporación de EmailMassivo, sin tener en cuenta las normas sobre conflicto de leyes. Por el presente, el User asume la responsabilidad de cumplir la legislación del país de incorporación de EmailMassivo, así como cualquier otra ley aplicable al User.

5.3. EmailMassivo tendrá derecho a restringir el acceso al Service, total o parcialmente, a cualquier persona, territorio o jurisdicción en cualquier momento y a su entera discreción. El acceso al Service desde territorios en los que el Service sea considerado ilícito o solo pueda operar sobre la base de una autorización y/o licencia especial está prohibido.

5.4. Tras recibir una solicitud oficial presentada de conformidad con el procedimiento previsto por la legislación aplicable, EmailMassivo cooperará con las autoridades competentes en cualquier investigación sobre presuntas actividades ilícitas relacionadas con el uso del Service.

## **6. Responsabilidad**

6.1. EmailMassivo tratará de garantizar la operatividad del Service; sin embargo, el Service se proporciona al User «tal cual» («as is»), por lo que EmailMassivo no garantiza su funcionamiento ininterrumpido, la ausencia de errores ni la inmunidad frente a los efectos de software malicioso, la destrucción, modificación o robo de información o el acceso no autorizado de terceros.

6.2. EmailMassivo no será responsable del incumplimiento o del cumplimiento defectuoso de sus obligaciones como consecuencia de fallos en las redes de telecomunicaciones y energía, accidentes en los lugares de ubicación de los equipos, acciones de software malicioso o acciones de terceros de mala fe dirigidas a obtener acceso no autorizado y/o a inutilizar el complejo de software y/o hardware del Service.

6.3. EmailMassivo no será responsable en caso de inoperatividad o funcionamiento incorrecto del Service en el dispositivo del User o de incompatibilidad del Service con otras aplicaciones instaladas en el dispositivo del User. Para minimizar la aparición de tales situaciones, el User deberá utilizar las últimas versiones del software de su dispositivo.

6.4. El Service está destinado a fines personales y es utilizado por el User por su cuenta y riesgo. EmailMassivo no garantiza que el User vaya a alcanzar resultado alguno y no será responsable de las pérdidas ocasionadas como consecuencia del uso del Service. EmailMassivo renuncia a todas las garantías, explícitas o implícitas, de que el Service cumplirá las expectativas del User en relación con su uso.

6.5. En ningún caso EmailMassivo será responsable de cualesquiera pérdidas directas, indirectas, punitivas, fiscales u otras, del lucro cesante ni de ningún otro daño relacionado con el uso del Service por parte del User.

6.6. Las limitaciones indicadas no reducen ni excluyen la responsabilidad de EmailMassivo por negligencia grave, fraude o actos dolosos y delictivos. Las normas de algunas jurisdicciones no permiten limitar o excluir la responsabilidad por pérdidas no intencionadas o indirectas, por lo que algunas de las limitaciones de responsabilidad previstas en el Agreement pueden no ser aplicables a un User concreto. No obstante, en la máxima medida permitida por la legislación aplicable, las limitaciones y exclusiones de la presente sección serán de aplicación.

6.7. El Service está integrado con diversos servicios y aplicaciones de terceros. El Service únicamente proporciona la posibilidad de acceder a dichos servicios/aplicaciones de terceros. Todas las cuestiones relacionadas con el uso de dichos servicios/aplicaciones de terceros se regirán por las condiciones de uso de los servicios/aplicaciones de terceros correspondientes y se resolverán directamente entre los administradores de dichos servicios/aplicaciones de terceros y el User.

6.8. El User asume plena responsabilidad personal por el contenido y la conformidad con la legislación aplicable de todos los materiales incluidos en los mensajes enviados utilizando el Service, incluidos programas, textos, fotografías, archivos de audio y vídeo, etc.

6.9. En caso de incumplimiento por parte del User de cualquiera de las condiciones del Agreement, nos reservamos el derecho de revocar al User el derecho a utilizar el Service mediante el bloqueo de la cuenta del User.

6.10. El User se obliga a indemnizar a EmailMassivo por todas las pérdidas y costes incurridos como consecuencia del incumplimiento por parte del User del presente Agreement, de cualquier legislación aplicable o de los daños causados a terceros.

6.11. El User será responsable de mantener la confidencialidad de sus datos de autenticación (nombre de usuario, contraseña) necesarios para acceder a su cuenta.

6.12. El User será responsable de manera independiente de la licitud de cualquiera de sus acciones relacionadas con la publicación, almacenamiento y distribución de información mediante el uso del Service. El User debe asumir plena responsabilidad en caso de violaciones de las disposiciones de la legislación publicitaria de conformidad con la legislación aplicable al User.

## **7. Vigencia del Agreement**

7.1. El Agreement entra en vigor desde el momento de la aceptación (acepte) por parte del User de las condiciones del Agreement en la forma determinada por el Agreement y permanece en vigor por tiempo indefinido.

7.2. EmailMassivo se reserva el derecho en cualquier momento y a su exclusiva discreción, de forma unilateral y extrajudicial, con o sin notificación, temporal o permanentemente, de revocar el derecho concedido al User de utilizar el Service (mediante el bloqueo de la cuenta del User), restringir el acceso a la cuenta del User, cuando EmailMassivo de buena fe considere que el User ha violado las condiciones del Agreement o cuando sea necesario de conformidad con la legislación aplicable/cambios en la legislación aplicable, así como en otros casos previstos en el Agreement.

7.3. La decisión de revocar al User el derecho a utilizar el Service (mediante el bloqueo de la cuenta del User) y de restringir el acceso al sitio web personal del User es definitiva y no está sujeta a revisión.

7.4. El User puede en cualquier momento renunciar al derecho concedido de utilizar el Service. EmailMassivo reconoce dicha renuncia y elimina la cuenta del User cuando ocurra uno de los siguientes eventos:

7.4.1. Recepción de una declaración del User sobre la renuncia al derecho concedido de utilizar el Service;

7.4.2. Recepción de la revocación del consentimiento del User para el tratamiento de sus datos personales. EmailMassivo se obliga a proceder a la eliminación de la cuenta del User en un plazo razonablemente necesario para ello, pero no más tarde del plazo establecido por la legislación aplicable.

7.5. Desde el momento de la eliminación de la cuenta del User, el derecho a utilizar el Service se considera extinguido. La eliminación de la cuenta del User puede llevar a la destrucción de toda la información relacionada con dicha cuenta. EmailMassivo puede continuar almacenando datos sobre el User cuando la legislación aplicable imponga tal obligación.

7.6. EmailMassivo se reserva el derecho de realizar modificaciones en el Agreement mediante su actualización en la página de publicación. EmailMassivo no asume la obligación de proporcionar notificaciones sobre dichas modificaciones, por lo que el User se obliga a seguir de forma independiente las modificaciones del Agreement, visitando periódicamente la página de publicación del Agreement. Cualquier modificación en el Agreement entra en vigor desde el momento de su publicación en la página de publicación correspondiente. El User acepta las condiciones del Agreement con las modificaciones introducidas cada vez que utilice el Service. Si el User no está de acuerdo con las modificaciones introducidas en el Agreement, debe cesar inmediatamente el uso del Service.

## **8. Confidencialidad**

8.1. El tratamiento de los datos personales del User se lleva a cabo de conformidad con la legislación vigente en materia de datos personales que sea aplicable, así como de conformidad con la Privacy Policy aceptada por el User.

8.2. El User confirma a EmailMassivo su consentimiento para el tratamiento de datos personales de conformidad con las disposiciones del GDPR.

## **9. Resolución de disputas**

9.1. Cualquier reclamación, solicitud y otra correspondencia debe ser enviada por el User a la dirección de correo electrónico support@emailmassivo.com o a la dirección postal 9 Vasili Michailidi, 3026, Limassol, Cyprus.

9.2. El soporte técnico se presta en inglés de 10:00 a 18:00 (GMT+2) en días laborables.

9.3. EmailMassivo se reserva el derecho de no responder a reclamaciones, solicitudes y otra correspondencia enviada por personas cuya identidad no pueda ser identificada (de forma anónima) o por cualquier medio distinto de los indicados anteriormente.

9.4. Las reclamaciones y solicitudes son consideradas por EmailMassivo dentro del plazo razonablemente necesario para su consideración, teniendo en cuenta la complejidad de la solicitud.

9.5. El User acepta que todas las disputas que surjan del Agreement se sometan a la jurisdicción exclusiva de los tribunales en el lugar de ubicación de EmailMassivo y se resuelvan en la forma prevista por la legislación vigente del país de incorporación de EmailMassivo.

9.6. El User acepta que la presentación de demandas y/o reclamaciones conjuntas y/o colectivas contra EmailMassivo no es un medio adecuado y admisible de protección de sus derechos por parte de los Users, si esto es admisible según la legislación aplicable. En consecuencia, el User se obliga a no participar en demandas y/o reclamaciones conjuntas y/o colectivas contra nosotros.

## **10. Disposiciones finales**

10.1. Las relaciones jurídicas de las partes en relación con el cumplimiento del Agreement se rigen de conformidad con la legislación vigente del país de incorporación de EmailMassivo sin tener en cuenta las normas sobre conflicto de leyes.

10.2. Si el User tiene alguna pregunta sobre los derechos y obligaciones legales, tiene falta de comprensión de las condiciones del Agreement o de la legislación aplicable, antes de aceptar (aceptar) las condiciones del Agreement, el User debe consultar con un especialista cualificado. EmailMassivo no proporciona asesoramiento jurídico ni recomendaciones sobre la legislación aplicable o los requisitos cuya acción se extiende al User o a terceros, ni sobre el cumplimiento por parte del User de los requisitos de la legislación aplicable.

10.3. El User no puede transferir sus derechos y obligaciones en virtud del Agreement sin el consentimiento previo de EmailMassivo.

10.4. EmailMassivo puede transferir sus derechos y obligaciones en virtud del Agreement a un tercero sin cambios en los derechos u obligaciones del User en virtud del Agreement.

10.5. Cada una de las condiciones del Agreement actúa por separado. Si una o varias condiciones del Agreement se vuelven inválidas, las demás condiciones continúan en vigor.

10.6. El Agreement está redactado en inglés y puede ser traducido a otros idiomas para la conveniencia del User. El User puede familiarizarse con otras versiones del Agreement cambiando la configuración de idioma del Service. En caso de que la traducción del Agreement del inglés en una u otra parte contradiga otra versión, prevalecerá la versión en inglés.`
    }
  },
  pt: {
    nav: {
      knowledgeBase: 'Base de conhecimento',
      support: 'Suporte',
      pricing: 'Preços',
      logIn: 'Entrar',
      signUp: 'Criar conta'
    },
    theme: {
      light: 'Claro',
      dark: 'Escuro',
      system: 'Sistema'
    },
    hero: {
      headline: 'Plataforma inteligente para campanhas de e-mail',
      subheadline: 'Criar uma campanha é fácil!',
      cta: 'Experimentar grátis'
    },
    stepper: {
      step1: 'Passo 1 | Importe sua lista',
      step2: 'Passo 2 | Crie sua campanha',
      step3: 'Passo 3 | Analise os resultados'
    },
    benefits: {
      simplicity: {
        title: 'Plataforma feita para a simplicidade',
        description: 'Criamos ferramentas que permitem lançar campanhas de e-mail sem complicações. Mínimos passos, resultados rápidos.',
        cta: 'Experimentar grátis'
      },
      free500: {
        title: '500 contatos grátis',
        description: 'Apoiamos os pequenos negócios. Por isso, se sua base tiver menos de 500 contatos, você pode usar todos os recursos do serviço totalmente grátis.',
        cta: 'Criar conta'
      }
    },
    features: {
      templates: {
        title: 'Modelos responsivos',
        description: 'Crie campanhas de todos os tipos em minutos.'
      },
      forms: {
        title: 'Formulários de inscrição',
        description: 'Escolha entre formulários prontos ou crie os seus com um construtor simples e potente.'
      },
      editor: {
        title: 'Editor de e-mail',
        items: [
          'Modelos prontos',
          'Personalização',
          'Importar HTML próprio',
          'Ferramentas de IA integradas'
        ]
      }
    },
    analytics: {
      title: 'A análise de e-mail nunca foi tão prática',
      description: 'Acompanhe aberturas, cliques e descadastros em um painel simples para melhorar cada nova campanha.'
    },
    pricing: {
      pageTitle: 'Preços',
      free: {
        title: 'Free',
        subtitle: 'Uma ótima opção para conhecer o EmailMassivo',
        price: '0 $/mês',
        contactsLabel: 'Contatos',
        contactsDefault: '500',
        benefitsTitle: 'Principais benefícios',
        benefits: [
          '2 000 e-mails por mês',
          'Editor de e-mails fácil de usar',
          'Envios agendados',
          'Campanhas por segmentos'
        ],
        cta: 'Gratuito'
      },
      premium: {
        title: 'Premium',
        subtitle: 'Uma excelente solução para profissionais de marketing',
        contactsLabel: 'Contatos',
        contactsDefault: '1 000',
        benefitsTitle: 'Tudo o que está no "Free", mais:',
        benefits: [
          'Quantidade ilimitada de e-mails',
          'Suporte prioritário',
          'Ajuda com a importação da base',
          'Moderação prioritária'
        ],
        cta: 'Escolher'
      },
      freeApi: {
        title: 'Free API+SMTP',
        subtitle: 'Uma ótima opção para conhecer o EmailMassivo',
        price: '0 $/mês',
        sendsLabel: 'Email por mês',
        sendsDefault: '100',
        benefitsTitle: 'Principais benefícios',
        benefits: [
          'Estatísticas e histórico de envios',
          'Envio a partir do seu próprio domínio',
          'Registro de descadastros e reclamações',
          'Suporte a cabeçalhos de sistema'
        ],
        cta: 'Gratuito'
      },
      premiumApi: {
        title: 'Premium API+SMTP',
        subtitle: 'Uma excelente solução para profissionais de marketing',
        sendsLabel: 'Email por mês',
        sendsDefault: '6 000',
        benefitsTitle: 'Tudo o que está no "Free", mais:',
        benefits: [
          'Quantidade ilimitada de chaves de API',
          'Quantidade ilimitada de conexões SMTP',
          'Suporte prioritário'
        ],
        cta: 'Escolher'
      },
      apiTitle: 'Planos API+SMTP',
      periodMonth: 'Mês',
      periodYear: 'Ano −20 %',
      month: 'mês',
      year: 'ano'
    },
    hosting: {
      freeHosting: {
        title: 'Hospedagem gratuita',
        description: 'Envie suas imagens de campanha para os servidores da EmailMassivo sem custo.'
      },
      stableAccess: {
        text: 'Acesso estável aos seus arquivos'
      },
      freePlan: {
        text: 'Mesmo no plano gratuito'
      }
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          question: 'Para quais bases de contatos posso enviar campanhas de e-mail?',
          answer: 'Você só pode enviar campanhas para bases de contatos que coletou por conta própria e nas quais os contatos deram consentimento explícito para receber seus e-mails. É proibido enviar campanhas para bases coletadas em fontes públicas.'
        },
        {
          question: 'Por onde começar se vou enviar campanhas de e-mail pela primeira vez?',
          answer: 'Para enviar sua primeira campanha de e-mail, você precisa adicionar e verificar seu domínio, carregar a base de e-mails e criar a campanha.'
        },
        {
          question: 'Como importar uma base de contatos de outro serviço?',
          answer: 'Se você já usou outros serviços, pode transferir suas bases em um clique usando o recurso de importação.'
        },
        {
          question: 'Como conseguir uma base de contatos para minhas campanhas de e-mail?',
          answer: 'Você só pode enviar e-mails para quem confirmou a própria inscrição. Para obter bons resultados, construa sua própria base de assinantes. Há várias maneiras de fazer isso: coloque um formulário de inscrição no site ou nas redes sociais, ofereça a assinatura aos seus clientes e ofereça em troca conteúdo relevante ou descontos nos seus produtos.'
        },
        {
          question: 'O que fazer se eu não tiver um e-mail no meu domínio?',
          answer: 'Se você é dono de um domínio, pode configurar o seu e-mail usando serviços populares, como o Google Workspace.'
        },
        {
          question: 'Como posso verificar meu domínio?',
          answer: 'Para verificar seu domínio, primeiro adicione-o na seção Remetentes. Em seguida, no registrador onde você comprou o domínio, é necessário configurar todos os registros indicados. Se esta for a primeira vez que você passa pelo processo de verificação de domínio e/ou precisar de mais informações ou ajuda para concluir essa etapa, consulte o guia passo a passo em nossa base de conhecimento ou entre em contato com o suporte do EmailMassivo.'
        },
        {
          question: 'Para que serve a verificação de domínio?',
          answer: 'A verificação de domínio é um requisito técnico obrigatório para realizar campanhas de e-mail com qualidade. Os servidores de e-mail que recebem suas mensagens são mais favoráveis a envios feitos a partir de um domínio verificado, o que reduz a chance de seus e-mails irem para a pasta de spam. Ao verificar seu domínio, você também passa a ter estatísticas mais detalhadas sobre como sua campanha foi entregue e em quais pastas os provedores de e-mail colocaram suas mensagens.'
        },
        {
          question: 'Como enviar campanhas de e-mail a partir de um domínio novo?',
          answer: 'Se você acabou de criar um e-mail em um domínio novo, é preciso construir uma boa reputação junto aos provedores de e-mail antes de enviar campanhas em massa. Você encontra informações detalhadas sobre como aquecer e fortalecer a reputação do seu domínio em nossa base de conhecimento.'
        },
        {
          question: 'Como adicionar um remetente para minhas campanhas?',
          answer: 'Por padrão, após o cadastro você já tem um remetente configurado — o e-mail usado no registro (desde que não seja bloqueado por uma política de DMARC). Você pode encontrar informações detalhadas sobre como adicionar um novo remetente aqui.'
        },
        {
          question: 'Quais são os planos disponíveis?',
          answer: 'No EmailMassivo existem dois planos principais: "Free" e "Premium", além de dois planos API+SMTP: "Free API+SMTP" e "Premium API+SMTP". Você pode ver os detalhes e contratar um plano na página "Planos" da sua conta. Se você envia campanhas para bases com até 500 contatos e no máximo 2.000 e-mails por mês, pode usar o nosso serviço gratuitamente.'
        },
        {
          question: 'Vocês oferecem uma API?',
          answer: 'No EmailMassivo, você pode criar uma chave de API neste link: https://app.emailmassivo.com/api. No plano gratuito estão disponíveis 100 emails. Você pode ler mais sobre como criar e usar a API aqui.'
        },
        {
          question: 'Vocês possuem serviço SMTP?',
          answer: 'Sim, oferecemos um serviço de SMTP para o envio de e-mails. No plano gratuito estão disponíveis 100 emails. Você encontra mais detalhes sobre como configurar e usar o SMTP em nossa base de conhecimento.'
        }
      ]
    },
    finalCta: {
      headline: 'Criar uma campanha é fácil!',
      subheadline: 'Crie campanhas de todos os tipos em minutos.',
      ctaPrimary: 'Experimentar grátis',
      ctaSecondary: 'Criar conta'
    },
    footer: {
      product: {
        about: 'Sobre nós',
        blog: 'Blog',
        knowledgeBase: 'Base de conhecimento',
        glossary: 'Glossário',
        apiDocs: 'Documentação da API de E-mail'
      },
      legal: {
        license: 'Contrato de licença',
        antiSpam: 'Política anti-spam',
        privacy: 'Política de privacidade'
      },
      support: 'Suporte',
      copyright: '© 2026 EmailMassivo — plataforma inteligente para campanhas de e-mail. Todos os direitos reservados.'
    },
    support: {
      hero: {
        title: 'Suporte 24/7',
        subtitle: 'Obtenha ajuda e informações sobre o EmailMassivo em nossa Base de Conhecimento.'
      },
      knowledgeBase: {
        title: 'Base de Conhecimento',
        description: 'Saiba em detalhes como usar o serviço do EmailMassivo.'
      },
      needHelp: {
        title: 'Precisa de ajuda?',
        description: 'Preencha o formulário "Fazer uma pergunta" ou envie um e-mail para support@emailmassivo.com — teremos prazer em ajudar.'
      },
      quickStart: {
        title: 'Comece rápido no EmailMassivo',
        description: 'Guia passo a passo para aprender a usar a plataforma e enviar sua primeira campanha.',
        button: 'Base de Conhecimento'
      },
      form: {
        title: 'Fazer uma pergunta',
        fields: {
          name: 'Seu nome',
          website: 'Site da empresa',
          email: 'E-mail',
          message: 'Mensagem'
        },
        checkbox: 'Dou meu consentimento para o tratamento dos meus dados pessoais.',
        submit: 'Enviar'
      }
    },
    privacyPolicy: {
      content: `A presente Política de Privacidade ("Política", "Política de Privacidade") constitui parte integrante do Contrato de Licença com o Usuário e define as regras de tratamento das informações pessoais que a Compubyte Limited (doravante, "EmailMassivo", "nós") pode coletar sobre os Usuários ("Usuário" ou "você") em conexão com o uso, pelo Usuário, do serviço "EmailMassivo" ("Serviço"), incluindo os tipos de informações coletadas, as formas e métodos de coleta de informações, as finalidades, as medidas de proteção das informações, bem como os direitos do Usuário em relação às suas Informações Pessoais.

Por meio deste, o Usuário nos concede o seu consentimento para o tratamento de suas Informações Pessoais nos termos da presente Política de Privacidade. As ações do Usuário direcionadas ao uso do Serviço constituem aceitação incondicional das disposições desta Política e das condições nela indicadas para o tratamento de suas Informações Pessoais. Recomendamos fortemente que você leia esta Política e se certifique de que a compreende integralmente e concorda com ela antes de começar a utilizar o nosso Serviço. Caso você não a tenha lido por completo, não tenha compreendido algo ou não aceite os termos desta Política de Privacidade, deverá interromper imediatamente o uso do Serviço.

O Usuário garante que, de acordo com a legislação de sua jurisdição, ele atingiu a idade que lhe permite fornecer, de forma autônoma, o consentimento para o tratamento de suas Informações Pessoais (não inferior a 16 anos) ou que o Usuário pode comprovar, na forma e modo exigidos, a autorização correspondente do titular da responsabilidade parental sobre ele.

Chamamos a sua atenção para o fato de que, nos termos da lei, você não é obrigado a nos fornecer qualquer informação; entretanto, o fornecimento de tais informações é condição indispensável para o uso do nosso Serviço. Por meio deste, você declara, garante e concorda que qualquer informação que nos forneça é prestada por sua livre e espontânea vontade, de forma específica e inequívoca, e corresponde ao seu desejo de que seus dados sejam utilizados para as finalidades descritas abaixo.

Você pode revogar o seu consentimento para o tratamento de suas Informações Pessoais a qualquer momento, e nós buscamos garantir que o procedimento de revogação do consentimento seja, no mínimo, tão simples quanto o de sua concessão. A revogação do consentimento não afetará a licitude do tratamento realizado com base no consentimento antes de sua revogação.

## **Termos e definições**

Informações Pessoais — qualquer informação relativa a uma pessoa física identificada ou identificável que, nos termos do Contrato, seja Usuário do Serviço.

Contrato — o contrato de licença entre o Usuário e o EmailMassivo relativo ao uso do Serviço, devidamente aceito pelo Usuário na forma prevista e juridicamente vinculante para o Usuário e para o EmailMassivo.

Serviço — o software EmailMassivo, destinado à realização de envios de mensagens (mailings), incluindo, entre outros, o conjunto de informações, textos, elementos gráficos, design, imagens, materiais fotográficos e audiovisuais e outros resultados de atividade intelectual, bem como programas de computador contidos no sistema de informação que assegura a disponibilidade de tais informações na Internet.

Usuário — pessoa física ou jurídica que tenha aceito o Contrato e utilize o Serviço.

Todos os demais termos e definições utilizados no texto desta Política devem ser interpretados em conformidade com as demais regras que regulam o uso do Serviço, com os costumes estabelecidos na Internet e com a legislação aplicável que rege o tratamento de dados pessoais.

## **1. Informações pessoais coletadas**

1.1. Em nossas atividades, observamos a legislação da República de Chipre no campo do tratamento de dados pessoais e o GDPR.

1.2. Em conformidade com o princípio da "minimização de dados", coletamos Informações Pessoais apenas na medida necessária para o uso adequado do Serviço e para atingir as finalidades para as quais são coletadas.

1.3. No decorrer do uso do Serviço pelo Usuário, coletamos dois tipos de Informações Pessoais: Informações Pessoais e Informações Despersonalizadas.

1.3.1. Informações Pessoais. Tais informações incluem dados individuais que identificam um Usuário específico e que o Usuário nos fornece durante o processo de Registro.

Os tipos obrigatórios de Informações Pessoais necessários para o uso do Serviço incluem:

* endereço de e-mail.

1.3.2. Informações Despersonalizadas. As Informações Despersonalizadas são informações que não identificam um Usuário específico e são coletadas automaticamente durante o Registro e o uso do Serviço.

As Informações Despersonalizadas podem incluir:

* informações obtidas por meio de cookies, tags de pixel, web beacons, ferramentas de análise de navegador e logs de servidor web, bem como outras tecnologias e ferramentas semelhantes;  
* informações sobre os dispositivos que o Usuário utiliza para acessar o Serviço, incluindo o tipo de sistema operacional, modelo do dispositivo, tipo de navegador, configurações do sistema, incluindo informações sobre o idioma utilizado pelo sistema do Usuário, dados de geolocalização (identificação do país/região), fuso horário do dispositivo do Usuário, operadora de telefonia;  
* logs de atividades armazenados no servidor, registrando os endereços IP dos dispositivos que o Usuário utiliza para interagir com o Serviço, o horário de acesso, a sequência de ações do Usuário no Serviço, informações de sessão, incluindo tempo de resposta e erros de carregamento;  
* informações da conta do Usuário em redes sociais (dependendo das configurações de privacidade definidas pelo Usuário na respectiva conta de rede social), por meio das quais podemos receber informações sobre seus interesses e preferências, bem como acesso à sua foto;  
* outras informações que não identificam o Usuário, dependendo das permissões por você concedidas.

1.4. O Usuário reconhece e concorda que, em determinados casos, temos o direito de solicitar informações adicionais sobre o Usuário, bem como cópias de documentos para confirmação dos dados fornecidos, e de realizar quaisquer outras solicitações quando isso for necessário com base em pressupostos razoáveis e em nossos interesses legítimos.

## **2. Formas de coleta de Informações Pessoais**

2.1. A base legal para a coleta de Informações Pessoais é o consentimento do Usuário para a coleta dessas informações.

2.2. As Informações Pessoais são coletadas por nós no momento do Registro do Usuário no Serviço.

2.3. As Informações Despersonalizadas são coletadas por nós durante o seu uso do Serviço.

## **3. Finalidades da coleta de Informações Pessoais**

3.1. Utilizamos as Informações Pessoais para as seguintes finalidades:

3.1.1. fornecer acesso ao Serviço e à sua posterior operação.

3.1.2. aperfeiçoar o Serviço, melhorar a comodidade de seu uso e configurar os parâmetros necessários com base nas preferências gerais ou individuais, na experiência de uso ou nas dificuldades encontradas pelos Usuários.

3.1.3. assegurar o suporte técnico e o contato com o Usuário, inclusive o envio de notificações, solicitações e informações relacionadas ao uso do Serviço (notificações sobre atualizações, informações relativas à segurança, alterações de nossas regras e condições de uso do Serviço).

3.1.4. elaborar informações estatísticas consolidadas, incluindo análise e monitoramento das tendências de uso do Serviço e das ações dos Usuários no Serviço.

3.1.5. enviar comunicações de marketing para o seu endereço de e-mail ou para o seu telefone celular com notificações sobre produtos, serviços, promoções, eventos e outras notícias e informações que, a nosso ver, possam ser de interesse do Usuário. Podemos enviar a você informações de natureza promocional. Você pode, com facilidade, recusar o recebimento de mensagens promocionais utilizando a opção de "cancelar inscrição" disponibilizada por nós em tais comunicações.

3.1.6. prevenir fraudes ou violações da legislação aplicável, em particular para detectar, investigar e impedir operações fraudulentas e outras atividades ilícitas, bem como proteger os direitos e a propriedade do EmailMassivo, de outros usuários e de terceiros.

3.1.7. cumprir qualquer legislação aplicável.

3.2. As Informações Pessoais do Usuário não serão utilizadas para finalidades distintas daquelas acima indicadas.

3.3. O Usuário confirma que as finalidades de uso de suas Informações Pessoais correspondem aos seus interesses e que o consentimento para o tratamento de suas Informações Pessoais por nós, manifestado pelo Usuário ao iniciar o uso do Serviço, é concedido para cada finalidade de tratamento indicada na cláusula 3.1 do Contrato.

## **4. Divulgação de Informações Pessoais**

4.1. Comprometemo-nos a não divulgar as Informações Pessoais do Usuário a terceiros, exceto nos seguintes casos:

4.1.1. o Usuário tiver manifestado consentimento expresso e específico para a divulgação de suas Informações Pessoais.

4.1.2. tal transferência de informações seja necessária para o uso do Serviço pelo Usuário ou para a execução do Contrato de Licença ou de outros documentos de cumprimento obrigatório que regem as relações entre nós e o Usuário.

4.1.3. quando tal transferência de informações for necessária para o funcionamento do Serviço e de suas funcionalidades (transferência de informações para serviços de hospedagem, comunicação e redes de entrega (distribuição) de conteúdo, serviços de proteção de dados e cibersegurança, cobrança e processamento de pagamentos, serviços de detecção e prevenção de fraudes, web analytics, distribuição de e-mails e monitoramento do estado do Serviço, incluindo medição de desempenho e otimização de dados, bem como serviços de marketing e publicidade), terceiros (destinatários das Informações Pessoais) poderão receber ou, de outra forma, ter acesso às Informações Pessoais do Usuário, total ou parcialmente, dependendo do papel e das finalidades de cada um desses terceiros na manutenção da operacionalidade ou no aprimoramento do Serviço; além disso, eles poderão utilizar as informações recebidas apenas para as finalidades indicadas na presente Política.

4.1.4. a transferência das Informações Pessoais seja realizada em conformidade com a legislação aplicável, a partir de requisições de autoridades competentes para receber tais informações (ordens judiciais e solicitações de autoridades de aplicação da lei), quando tivermos a obrigação de divulgá-las e agirmos de boa-fé no entendimento de que a lei exige que procedamos dessa forma.

4.1.5. ocorra a transferência de direitos de propriedade ou de controle sobre a totalidade ou parte do Serviço para um novo titular.

4.1.6. a transferência das Informações Pessoais seja realizada com a finalidade de possibilitar a proteção de nossos direitos e interesses legítimos ou dos direitos e interesses de terceiros, nos casos em que o Usuário infrinja esta Política de Privacidade ou outros documentos de cumprimento obrigatório que regem as relações entre nós e o Usuário, bem como a legislação aplicável. Os casos acima não devem ser considerados como divulgação não autorizada de Informações Pessoais, uma vez que tais ações visam à implementação das finalidades do tratamento das Informações Pessoais.

4.2. Jamais venderemos as Informações Pessoais dos Usuários a terceiros.

4.3. As informações somente poderão ser transferidas em estrita conformidade com a presente Política de Privacidade e nos limites da legislação aplicável.

## **5. Local de armazenamento e transferência internacional de Informações Pessoais**

5.1. Armazenamos e tratamos as Informações Pessoais dos Usuários do EmailMassivo e dos destinatários de suas mensagens no território da União Europeia.

5.2. Buscamos proteger e preservar as Informações Pessoais dos Usuários em conformidade com padrões internacionais do setor e não adotamos requisitos legais menos rigorosos do que aqueles vigentes na jurisdição do Usuário.

5.3. Caso nós e o Usuário estejamos localizados em diferentes jurisdições, ao acessar ou utilizar os Serviços ou, de qualquer outra forma, nos fornecer suas Informações Pessoais, o Usuário concorda com o tratamento e a transferência das informações para o país de nossa incorporação, garantindo nós que adotaremos as medidas apropriadas para proteger as Informações Pessoais do Usuário em conformidade com a presente Política de Privacidade e com a legislação aplicável.

## **6. Utilização de tecnologias de rastreamento**

6.1. Utilizamos determinadas tecnologias de controle e rastreamento para manter, assegurar e melhorar continuamente o funcionamento do nosso Serviço e para proporcionar ao Usuário uma utilização confortável do Serviço. Por padrão, utilizamos diversas dessas tecnologias para fins de autenticação de sessão e do Usuário, segurança, preservação das preferências do Usuário (por exemplo, quanto ao idioma padrão e às configurações), estabilidade da conexão, monitoramento do desempenho do nosso Serviço e de campanhas de marketing, bem como para a oferta e o aprimoramento de nossos Serviços.

## **7. Direitos do Usuário**

7.1. No âmbito desta Política de Privacidade, cada Usuário possui os seguintes direitos em relação às suas Informações Pessoais:

7.1.1. Direito de acesso às suas Informações Pessoais. Para assegurar esse direito, o Serviço prevê uma seção específica na Conta, onde constam todas as Informações Pessoais do Usuário que tenhamos recebido. O Usuário pode acessar a seção de Informações Pessoais e consultar as Informações Pessoais de que dispomos em determinado momento. Mediante solicitação do Usuário, forneceremos a lista completa das Informações Pessoais que coletamos sobre o Usuário, a base legal e as finalidades do tratamento, as categorias de Informações Pessoais, a lista de terceiros aos quais as Informações Pessoais foram ou serão divulgadas, o período durante o qual as Informações Pessoais serão armazenadas, bem como as medidas de proteção das Informações Pessoais. A resposta será fornecida dentro de um prazo razoável, em conformidade com a legislação aplicável.

7.1.2. Direito de retificação. O Usuário tem o direito, a qualquer momento, de corrigir por conta própria suas Informações Pessoais por meio da Conta; caso, por qualquer motivo, o Usuário tenha dificuldades em corrigir suas Informações Pessoais, poderá nos enviar a respectiva solicitação, e efetuaremos as correções dentro de um período de tempo razoável. Tendo em vista as finalidades do tratamento, o titular dos dados tem o direito de manter as suas Informações Pessoais incompletas, indicando apenas os tipos obrigatórios de Informações Pessoais necessários para viabilizar o acesso ao Serviço.

7.1.3. Direito de revogar o consentimento para o tratamento de Informações Pessoais. O Usuário tem o direito de revogar o seu consentimento a qualquer momento. A revogação do consentimento não afeta a licitude do tratamento realizado com base no consentimento antes de sua revogação. O Serviço prevê a possibilidade de revogar o consentimento com a mesma facilidade com que ele é concedido. Assim, o Usuário pode, a qualquer momento, enviar-nos um pedido de exclusão da Conta, e nós excluiremos a Conta dentro de um prazo razoável após o recebimento da respectiva solicitação.

Observe que você pode corrigir, atualizar ou excluir determinadas partes das Informações Pessoais por conta própria.

Quando o Usuário efetuar correções nas Informações Pessoais ou revogar o consentimento, notificaremos todos os terceiros que tenham acesso às Informações Pessoais do Usuário.

7.1.4. Direito ao apagamento ("direito ao esquecimento"). O Usuário tem o direito de exigir, e nós temos a obrigação de efetuar, a exclusão de suas Informações Pessoais sem demora injustificada, se:

* as Informações Pessoais não forem mais necessárias para as finalidades para as quais foram coletadas;  
* o titular dos dados revogar o consentimento para o tratamento de suas Informações Pessoais, que constituía a base para sua coleta;  
* as Informações Pessoais tiverem sido tratadas de forma ilícita;  
* as Informações Pessoais tiverem de ser apagadas em conformidade com a lei.

7.1.5. Direito à portabilidade dos dados. O Usuário tem o direito de receber suas Informações Pessoais em formato estruturado, de uso corrente e de leitura automática. Para obter, em formato estruturado, todas as suas Informações Pessoais coletadas por nós, o Usuário pode enviar a respectiva solicitação ao serviço de suporte técnico. O Usuário tem o direito de transmitir suas Informações Pessoais diretamente de um controlador para outro, sempre que isso for tecnicamente possível.

## **8. Período de armazenamento de Informações Pessoais**

8.1. Armazenamos suas Informações Pessoais durante todo o período de uso do Serviço (vigência da sua Conta) ou até o momento em que não mais necessitarmos desses dados para a prestação do Serviço, ou ainda enquanto vigorar prazo mais longo (caso sejamos obrigados a mantê-las por mais tempo em virtude da legislação aplicável ou para solução de disputas envolvendo nossos Usuários, prevenção de fraudes e abusos e/ou proteção de nossos interesses legítimos).

## **9. Segurança das informações**

9.1. Garantimos que adotamos todas as medidas organizacionais e técnicas necessárias e suficientes, em conformidade com a legislação aplicável, para proteger as Informações Pessoais do Usuário contra acesso não autorizado ou acidental, destruição, alteração, bloqueio, cópia, divulgação, bem como contra quaisquer outras ações ilícitas de terceiros em relação a tais informações. Em nossas atividades, utilizamos padrões reconhecidos pelo setor para proteção das Informações Pessoais do Usuário e buscamos, na maior medida possível, proteger e assegurar a confidencialidade das Informações Pessoais. A proteção das Informações Pessoais é implementada por padrão, no próprio desenho do Serviço, durante o seu desenvolvimento. As medidas de segurança incluem proteção de rede, pseudonimização, criptografia de dados, minimização de dados, resiliência dos sistemas de tratamento a falhas, capacidade de restaurar tempestivamente a disponibilidade e o acesso às Informações Pessoais em caso de incidente físico ou técnico, controle de acesso físico a centros de processamento de dados, bem como controle das autorizações de acesso aos dados. Monitoramos regularmente nossos sistemas quanto a possíveis vulnerabilidades e ataques, avaliando a eficácia das medidas técnicas e organizacionais de segurança das Informações Pessoais e buscamos constantemente novas soluções e prestadores de serviços para aprimorar ainda mais a segurança do nosso Serviço e a proteção da confidencialidade de nossos Usuários. Todos os terceiros que tenham acesso às Informações Pessoais e participem do processo de disponibilização do Serviço ao Usuário observam medidas de segurança das Informações Pessoais não menos rigorosas.

9.2. No entanto, não podemos garantir proteção absoluta e, por isso, recomendamos que você aja com cautela, estabeleça uma senha forte para a sua Conta e evite fornecer quaisquer informações sensíveis cujo vazamento possa causar dano significativo a você.

9.3. Em caso de qualquer violação da confidencialidade das Informações Pessoais, adotaremos todas as medidas ao nosso alcance para eliminar ou minimizar possíveis consequências negativas, bem como garantiremos a notificação imediata do incidente às autoridades de supervisão competentes e ao Usuário, com indicação de todas as informações disponíveis sobre a violação de confidencialidade. Os fatos de tais incidentes são registrados em um registro especial de incidentes, que somos obrigados a manter em conformidade com a legislação aplicável.

9.4. Para fins desta Política, entende-se por violação de confidencialidade das Informações Pessoais qualquer violação de segurança que resulte em destruição acidental ou ilícita, perda, alteração, divulgação não autorizada ou acesso não autorizado às Informações Pessoais transmitidas ou tratadas.

## **10. Alterações e interpretação da Política de Privacidade**

10.1. A presente Política de Privacidade, sua interpretação e quaisquer reivindicações e controvérsias a ela relacionadas são regidas, interpretadas e executadas exclusivamente de acordo com as leis do país de nossa incorporação, sem consideração aos princípios vigentes de conflito de leis.

10.2. Por meio deste, você concorda que quaisquer disputas que venham a surgir serão dirimidas exclusivamente pelos tribunais sediados no local de nossa incorporação.

10.3. Podemos alterar esta Política de Privacidade a qualquer momento. Caso entendamos que as alterações propostas sejam significativas (segundo nosso próprio e leal critério), informaremos você antes da entrada em vigor de tais alterações.

10.4. Recomendamos que você consulte periodicamente esta página para obter informações atualizadas sobre nossa Política de Privacidade. Salvo disposição expressa em contrário, a versão mais recente de nossa Política de Privacidade se aplica a todas as informações que mantemos sobre você.

## **11. Contato conosco e respostas às suas dúvidas**

11.1. Se você tiver quaisquer dúvidas em relação a esta Política de Privacidade, entre em contato conosco pelo e-mail support@emailmassivo.com.

11.2. Você também pode enviar correspondência para o endereço 9 Vasili Michailidi, 3026, Limassol, Cyprus.

11.3. Responderemos à sua solicitação dentro de um período de tempo razoável ou dentro do prazo estabelecido pela legislação aplicável.

11.4. Nos casos em que esta Política ou a legislação aplicável estabeleça nossa obrigação de fornecer a você cópias de informações ou de quaisquer documentos, forneceremos um exemplar gratuitamente; para quaisquer cópias adicionais solicitadas, teremos o direito de cobrar uma taxa razoável, considerando os custos administrativos. Se você fizer a solicitação por meios eletrônicos e, salvo solicitação em contrário, forneceremos a resposta em formato eletrônico amplamente utilizado.

11.5. Se as solicitações do Usuário forem manifestamente infundadas ou excessivas, em especial devido ao seu caráter repetitivo, teremos o direito de cobrar uma taxa razoável, levando em conta os custos administrativos de fornecimento das informações, ou de nos recusar a atender à solicitação.

11.6. Caso tenhamos dúvidas razoáveis quanto à identidade da pessoa que apresenta a solicitação, poderemos requerer o fornecimento de informações adicionais necessárias para confirmar a identidade do Usuário.`
    },
    antiSpamPolicy: {
      content: `Anexo nº 1 ao Contrato de Licença de Uso do Serviço EmailMassivo

Ao se registrar no Serviço, o Usuário aceita os termos da presente Política Anti-SPAM.

## **1. Termos principais**

1.1. Serviço – o serviço EmailMassivo, destinado à criação, ao envio e ao monitoramento dos resultados do envio de mensagens de correio eletrônico aos Assinantes, desde que haja o consentimento prévio obrigatório destes. É terminantemente proibido o envio de mensagens não solicitadas por meio do Serviço.

1.2. Spam – mensagens transmitidas por canais de telecomunicações, cujos requisitos não estão em conformidade com a legislação aplicável.

1.3. Assinante – pessoas físicas ou jurídicas que manifestaram consentimento expresso para receber envios informativos do Usuário e que constam na base de clientes do Usuário para fins de recebimento de mensagens.

1.4. Formulário de assinatura - bloco funcional, disponibilizado em um site, que contém campos para inserção de informações (nome, endereço de e-mail, telefone de contato etc.). A principal finalidade do formulário de assinatura é a coleta de informações pessoais de contato de usuários que manifestaram o desejo de receber o envio.

1.5. Reclamação de spam – um dos seguintes eventos:  
a) notificação de um Assinante ou de uma organização anti-spam sobre o recebimento de correspondência não solicitada por seus usuários;  
b) bloqueio dos servidores de correio eletrônico e dos endereços de URL do Usuário em grandes recursos da Internet;  
c) recebimento de reclamação de spam de um servidor de correio eletrônico.

## **2. Disposições gerais**

2.1. É proibido ao Usuário realizar envios de mensagens que não estejam em conformidade com a legislação aplicável ou com a legislação do país do Assinante, incluindo, mas não se limitando a, envios que contenham:

* spam em qualquer forma e manifestação;  
* informações inverídicas;  
* linguagem obscena;  
* software malicioso e não licenciado;  
* apelos à discriminação racial, religiosa ou de gênero;  
* material protegido por direitos autorais e marcas de terceiros, utilizados sem a autorização do titular dos direitos;  
* material de caráter pornográfico;  
* envio de mensagens de e-mail que contenham, no cabeçalho e/ou no corpo da própria mensagem, ofertas de ganhos rápidos e fáceis na Internet, dinheiro rápido e fácil ou esquemas de pirâmide financeira.

A conta pessoal dos Usuários flagrados na prática de envio de spam é bloqueada.

2.2. Cada mensagem enviada por meio do Serviço deve obrigatoriamente incluir um link pelo qual o Assinante possa recusar o recebimento de envios do Usuário. O Usuário não tem o direito de ocultar ou mascarar esse link.

2.3. É proibido ao Usuário realizar envios para sua base de Assinantes encomendados por terceiros com a finalidade de divulgar o produto destes.

2.4. O Usuário concorda que determinados envios, em especial, mas não se limitando a, casos em que o conteúdo do envio não atenda aos requisitos estabelecidos na presente Política Anti-SPAM ou na legislação aplicável, ou contenha indícios de que os Assinantes não concordaram em receber tal envio, poderão ser bloqueados pelo Software ou pelos colaboradores do Serviço.

## **3. Casos em que as mensagens são interpretadas como SPAM**

3.1. É realizado envio de informação direcionada para listas de e-mail compradas ou públicas sem o envio prévio de uma mensagem para obtenção de consentimento para o envio.

3.2. Na grande maioria dos casos, as mensagens são enviadas para caixas do tipo info@, sales@ e outras caixas de e-mail genéricas.

3.3. São indicados dados de contato incorretos ou distorcidos.

3.4. O assunto e o texto da mensagem contêm informações falsas, incorretas ou enganosas.

3.5. É utilizado um endereço de e-mail que não pertence ao domínio associado à empresa.

3.6. No corpo do e-mail não há link para "cancelar a assinatura da lista de envios".

3.7. Durante um longo período após o recebimento de um pedido de cancelamento de assinatura do envio, o cancelamento não é efetivado.

3.8. Nos relatórios de envio, os índices de cliques no botão "spam" ou de bloqueio de mensagens pelos filtros de spam dos provedores de e-mail ou o número de devoluções excedem significativamente os valores médios do Serviço **(devoluções definitivas não mais que 5%, cliques em "isto é spam" - 0.5%)**.

3.9. As ações do Usuário e/ou o conteúdo do envio contrariam a legislação aplicável.

## **4. Motivo para contato com o destinatário.**

O destinatário da mensagem realizou uma compra, solicitou informações, respondeu a perguntas/pesquisas, é cliente do Usuário, entrou em contato com ele offline, preencheu um formulário de assinatura ou respondeu positivamente a uma mensagem prévia para obtenção de consentimento para o envio. Ao mesmo tempo, o destinatário da mensagem obteve compreensão clara da finalidade para a qual o endereço de e-mail solicitado seria utilizado.

## **5. Medidas preventivas de combate ao SPAM**

5.1. Pré-moderação obrigatória de todos os envios.

5.2. Sistemas analíticos automatizados de reconhecimento de SPAM.

5.3. Verificação dos dados dos Usuários com o objetivo de impedir a obtenção de acesso ao sistema para fins de uso indevido.

5.4. Treinamento contínuo e consultoria aos Usuários com o objetivo de elaboração de campanhas corretas de e-mail marketing.

5.5. Trabalho contínuo com provedores de Internet e de hospedagem para assegurar que a atuação do Serviço seja interpretada como método legítimo de realização de atividades de marketing e vendas.

5.6. Bloqueio de Usuários que utilizarem o Serviço para envio de SPAM. Na ausência de argumentos relevantes por parte do Usuário no prazo de 24 horas a contar do bloqueio, a conta será excluída, sem possibilidade de restituição de valores não utilizados.

## **6. Listas de envio permitidas e proibidas para uso no Serviço**

6.1 É permitido o uso de listas de envio se os endereços de e-mail nelas contidos tiverem sido obtidos por um dos seguintes meios:

6.1.1. No site do Usuário, por meio de formulário de assinatura.

6.1.2. No site do Usuário, por meio de qualquer outro formulário (por exemplo, no momento do cadastro do usuário), sob a condição obrigatória de que o formulário contivesse campo separado para o consentimento em receber envios no endereço informado.

6.1.3. Por meio de questionários, formulários, pesquisas em papel, que o destinatário tenha preenchido manualmente e nos quais indicou seu endereço de e-mail, sob a condição obrigatória de que o formulário contivesse campo separado para o consentimento em receber envios no endereço informado.

6.1.4. A partir da base de clientes atuais do Usuário, após o Usuário ter enviado a estes um pedido de consentimento para receber envios e ter recebido resposta positiva.

6.2 Não é permitido o uso de listas de envio se:

6.2.1. O Usuário não puder comprovar o consentimento dos destinatários para receber o envio do Usuário.

6.2.2. O Usuário tiver obtido os endereços por meio de consentimento verbal, por exemplo, por ligação telefônica.

6.2.3. O Usuário tiver adquirido, alugado ou recebido endereços de e-mail de terceiros.

6.2.4. As bases de endereços tiverem sido coletadas de "fontes abertas".`
    },
    licenseAgreement: {
      content: `Termos de Uso do Serviço "EmailMassivo"  

O presente Acordo de Licença de Uso do Serviço (doravante, "Acordo") é um acordo vinculante entre a Compubyte Limited (doravante, "EmailMassivo") e o Usuário, por meio do qual é concedido ao Usuário o direito de utilizar o serviço web EmailMassivo (doravante, "Serviço") para fins de realização de envios de mensagens, nos termos e condições deste Acordo.

O presente Acordo constitui uma oferta pública dirigida a um número ilimitado de pessoas e contém todas as condições essenciais. A aceitação (aceite) destes termos pelo Usuário confere força jurídica obrigatória ao Acordo. Ao clicar no botão "Criar conta", o Usuário realiza a aceitação (aceite) das condições do Acordo. Não é permitido o aceite parcial das condições. O fato de obter acesso, bem como qualquer utilização do Serviço, sem quaisquer exceções ou reservas, é considerado confirmação incondicional de que o Usuário leu, entendeu e concordou em cumprir as condições do Acordo.

O Usuário garante à EmailMassivo que, de acordo com a legislação da jurisdição do Usuário, atingiu a idade que lhe permite celebrar autonomamente relações contratuais, adquirir direitos e obrigações decorrentes dessas relações e assumir a responsabilidade prevista em lei e, em caso de quaisquer limitações à sua capacidade civil, se exigido pela legislação aplicável, o Usuário obteve previamente a devida autorização de seus representantes legais (ou tutores) para aceitar o Acordo. A aceitação poderá ser realizada em nome do Usuário por um terceiro, desde que haja o consentimento do Usuário ou que tal terceiro seja representante legal do Usuário.

Constitui condição obrigatória para o uso do Serviço a concordância do Usuário com a Política de Privacidade do Serviço.

Antes de utilizar o Serviço, a EmailMassivo recomenda que o Usuário leia integralmente o Acordo. Se o Usuário não atender aos requisitos do Acordo, não tiver lido, não tiver entendido ou não concordar com as condições do Acordo, o direito de utilizar o Serviço não poderá ser concedido ao Usuário, que deverá abster-se de aceitar o Acordo e de qualquer utilização do Serviço.

Os termos e definições utilizados no Acordo são interpretados de acordo com a legislação do país de incorporação da EmailMassivo, os usos e costumes comerciais e as regras consagradas de interpretação dos respectivos termos na rede "Internet".

## **1. Objeto do Acordo**

1.1. Por meio deste, a EmailMassivo concede ao Usuário uma licença simples (não exclusiva), pessoal (não sublicenciável), limitada e revogável para utilizar o Serviço de acordo com sua finalidade funcional direta, nos termos e condições deste Acordo.

1.2. A extensão dos direitos (funcionalidades do Serviço) concedidos ao Usuário é determinada pelo plano tarifário escolhido pelo Usuário.

1.3. Prazo de concessão da licença ao Usuário:

1.3.1. Dentro dos planos tarifários que não preveem pagamento – a partir do momento da aceitação (aceite) das condições do Acordo e por prazo indeterminado, desde que o uso do Serviço seja contínuo.

1.3.2. Dentro dos planos tarifários que preveem pagamento – a partir do momento em que os valores sejam recebidos em favor da EmailMassivo até o término do período de vigência do plano tarifário pago.

1.4. O território de utilização do Serviço pelo Usuário não é limitado (mundo inteiro).

## **2. Direitos e obrigações das partes**

2.1. O Usuário se obriga a:

2.1.1. Utilizar o Serviço por meio não proibido pela legislação aplicável e por este Acordo.

2.1.2. Fornecer informações completas e verídicas sobre si ao realizar o procedimento de registro. Em caso de alteração dos dados do Usuário após a conclusão do registro, o Usuário se obriga a corrigir de forma imediata e independente os respectivos dados. A EmailMassivo não assume a obrigação de verificar a veracidade e integridade dos dados fornecidos pelo Usuário e não se responsabiliza por quaisquer prejuízos do Usuário ou de terceiros decorrentes da divergência entre as informações fornecidas pelo Usuário e os dados reais.

2.1.3. Assegurar a confidencialidade dos dados de acesso à conta do Usuário (login e senha) em relação a terceiros e realizar a sua alteração em tempo hábil em caso de perda ou comprometimento. A EmailMassivo considera as ações realizadas com uso da conta do Usuário, cujo acesso tenha sido efetuado mediante dados de login corretos, como ações realizadas diretamente pelo próprio Usuário.

2.1.4. Verificar regularmente as informações atualizadas sobre alterações do Acordo, preços dos planos tarifários e lista de funcionalidades do Serviço disponíveis mediante pagamento dos respectivos planos.

2.1.5. Assegurar o cumprimento da legislação vigente em matéria de tratamento de dados pessoais ao efetuar o tratamento de dados pessoais dos destinatários das mensagens cujo envio tenha sido organizado pelo Usuário, bem como assegurar o cumprimento da legislação vigente em matéria de publicidade quanto ao conteúdo das mensagens enviadas.

2.1.6. Responder, dentro dos prazos indicados em tais solicitações, às requisições encaminhadas pela EmailMassivo. A ausência de resposta dentro dos prazos estabelecidos na solicitação é considerada pela EmailMassivo como fornecimento de dados de contato incorretos pelo Usuário no procedimento de registro, o que constitui violação das condições do presente Acordo.

2.1.7. Ao enviar uma mensagem a um destinatário, obter obrigatoriamente o consentimento do destinatário para o envio dessas mensagens. Em caso de recebimento pelo Usuário de solicitação correspondente da EmailMassivo, o Usuário se obriga a fornecer à EmailMassivo o consentimento dos destinatários das mensagens enviadas pelo Usuário.

2.1.8. Enviar mensagens aos destinatários apenas em seu próprio nome.

2.1.9. Incluir obrigatoriamente em cada mensagem enviada um link por meio do qual o destinatário possa recusar o recebimento de mensagens. O Usuário não tem o direito de mascarar ou ocultar esse link.

2.1.10. Não incluir na base de endereços destinatários que não tenham dado consentimento para o recebimento de comunicações do Usuário, bem como excluir da base de endereços os destinatários que tenham se recusado a receber mensagens.

2.2. O Usuário tem o direito de:

2.2.1. Entrar em contato com o suporte técnico em caso de dúvidas sobre registro, funcionamento do Serviço e restauração de acesso ao Serviço pelo e-mail support@emailmassivo.com, bem como por meio da conta. A EmailMassivo reserva para si o direito de recusar a prestação de suporte técnico em caso de conduta inadequada do Usuário no contato com os especialistas de suporte técnico.

2.3. A EmailMassivo se obriga a:

2.3.1. Assegurar ao Usuário o direito de utilizar o Serviço nos termos do Acordo, 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana, incluindo fins de semana e feriados, dentro dos limites do plano tarifário escolhido pelo Usuário.

2.3.2. Empregar esforços razoáveis para garantir o funcionamento estável do Serviço, seu aprimoramento e a correção de erros no funcionamento do Serviço.

2.3.3. Prestar suporte técnico ao Usuário em questões de registro, funcionamento do Serviço e restauração de acesso ao Serviço. A EmailMassivo não presta consultorias sobre questões jurídicas, de configuração de hardware, software ou acesso à Internet, bem como sobre quaisquer outras questões não diretamente relacionadas ao funcionamento do Serviço.

2.3.4. Assegurar nível adequado de segurança dos dados de registro do Usuário de acordo com a Política de Privacidade aceita pelo Usuário e a legislação aplicável.

2.3.5. Encaminhar ao Usuário as comunicações de terceiros relativas às informações contidas nas mensagens enviadas pelo Usuário. Por meio deste, o Usuário encarrega a EmailMassivo de realizar o tratamento de dados pessoais desses terceiros em seu nome e interesse.

2.4. A EmailMassivo tem o direito de:

2.4.1. Encerrar o acesso do Usuário ao Serviço em caso de violação das condições do Acordo ou de inadimplemento das obrigações de pagamento.

2.4.2. Encerrar o acesso do Usuário ao Serviço em caso de criação, pelo Usuário, de carga crítica sobre os servidores e/ou de obstáculo ao funcionamento estável do Serviço e/ou de outras ameaças ao Serviço que acarretem ou criem risco de ocorrência de consequências negativas, sob qualquer forma, para os servidores, o Serviço e os usuários do Serviço.

2.4.3. Suspender o funcionamento do Serviço pelo tempo necessário à realização de trabalhos de manutenção e recuperação nos equipamentos. A EmailMassivo não assume a obrigação de notificar previamente o Usuário sobre a futura suspensão do funcionamento do Serviço, mas envidará esforços para fazê-lo de forma conveniente à própria EmailMassivo.

2.4.4. Enviar ao Usuário mensagens publicitárias e informativas para o endereço de e-mail ou telefone celular indicados no registro, contendo ofertas, promoções, eventos relacionados ao Serviço e novos produtos, entrar em contato com o Usuário para fins de verificação da qualidade do Serviço, enviar mensagens com informações importantes relativas ao uso do Serviço, bem como outras informações que, a critério da EmailMassivo, possam ser de interesse do Usuário.

2.4.5. Solicitar ao Usuário informações e cópias de documentos que comprovem a identidade do Usuário, em caso de recebimento de solicitações do Usuário relacionadas ao tratamento de seus dados pessoais, restauração de acesso ao Serviço, proteção dos interesses da EmailMassivo e de terceiros, bem como em caso de recebimento de solicitações de informações de autoridades e órgãos competentes, quando a EmailMassivo, de boa-fé, considerar que a legislação aplicável obriga a fornecer tais informações.

2.4.6. Fornecer periodicamente atualizações do Serviço. Essas atualizações têm como finalidade aprimorar o Serviço e podem ser disponibilizadas sob a forma de correções de erros, melhorias de funcionalidades, adição de novas funcionalidades ou novas versões do Serviço. O conteúdo das atualizações do Serviço é determinado exclusivamente pela EmailMassivo. O Usuário concorda em receber tais atualizações e autoriza a EmailMassivo a fornecê-las.

2.4.7. Realizar promoções em que sejam oferecidos planos tarifários em condições especiais, inclusive com o recebimento, pelo Usuário, de brindes, descontos ou códigos promocionais de parceiros. Os brindes, descontos ou códigos promocionais recebidos pelo Usuário no âmbito da promoção são gratuitos apenas na hipótese de utilização integral do plano tarifário ao qual a promoção se aplica. Em caso de solicitação de reembolso de valores, o montante do reembolso será calculado como o saldo restante, deduzido o valor das vantagens recebidas gratuitamente.

2.5. Garantias das partes:

2.5.1. O Usuário garante que:

* detém todos os direitos sobre os materiais incluídos nas mensagens enviadas, incluindo imagens, vídeos, arquivos de áudio, textos e outros materiais, ou que obteve as devidas autorizações para utilizar tais materiais de forma lícita;  
* as informações incluídas nas mensagens enviadas são verídicas e não violam direitos ou interesses legítimos de terceiros, tampouco a legislação aplicável;  
* obteve todos os consentimentos e/ou autorizações necessários para o exercício de suas atividades com o uso do Serviço, sempre que tais consentimentos e/ou autorizações forem exigidos pela legislação vigente.

## **3. Condições financeiras**

3.1. O valor da remuneração da EmailMassivo pela concessão ao Usuário do direito de utilizar o Serviço é determinado com base no preço do plano tarifário escolhido pelo Usuário e no período de sua vigência.

3.2. Os preços atualizados dos planos tarifários, bem como a lista de funcionalidades do Serviço cujo acesso se condiciona ao pagamento de plano tarifário, são divulgados nas seções correspondentes do Serviço destinadas à aquisição de planos tarifários.

3.3. A aquisição dos planos tarifários é efetuada pelo Usuário sob a condição de pagamento antecipado integral. O Usuário escolhe de forma independente o meio de pagamento dentre as opções disponibilizadas nas seções correspondentes do Serviço destinadas à aquisição de planos tarifários.

3.4. As obrigações da EmailMassivo de conceder ao Usuário o direito de utilizar o Serviço nas funcionalidades correspondentes ao plano tarifário pago consideram-se cumpridas no momento em que o Usuário obtém acesso a tais funcionalidades, independentemente de o Usuário efetivamente exercer ou não o direito adquirido. Assim, o plano tarifário pago somente será encerrado após o término do período contratado, não sendo possível o cancelamento de um plano já pago, e o valor pago pelo plano não é reembolsável nem trocável. O Usuário também não poderá receber qualquer compensação pelo período pago e não utilizado do plano tarifário em caso de interrupção do uso do Serviço (renúncia à licença), revogação do consentimento para o tratamento de dados pessoais ou encerramento do acesso ao Serviço em decorrência de violação, pelo Usuário, das condições do Acordo. Cada solicitação de reembolso apresentada pelo Usuário será analisada individualmente, de acordo com as circunstâncias do caso, e a EmailMassivo reserva para si o direito de alterar as condições de reembolso em situações específicas, quando assim entender necessário.

3.5. A EmailMassivo tem o direito de alterar unilateralmente, sem aviso prévio, os preços dos planos tarifários, bem como a lista de funcionalidades do Serviço que se tornam disponíveis mediante pagamento do respectivo plano. A alteração do preço e da lista de funcionalidades do Serviço disponíveis mediante pagamento do plano tarifário não se aplica aos planos já pagos pelo Usuário.

3.6. Em caso de pagamento de planos tarifários com cartão bancário pertencente a pessoa física, quando o pagador for pessoa jurídica, não será emitida documentação fiscal em nome da pessoa jurídica.

## **4. Atos proibidos**

4.1. É proibido ao Usuário:

4.1.1. Utilizar o Serviço para:

* organizar o envio de mensagens de SPAM;  
* transmitir intencionalmente mensagens que possam levar à interrupção do funcionamento do Serviço;  
* transmitir mensagens de caráter ofensivo ou difamatório;  
* transmitir mensagens de conteúdo pornográfico;  
* transmitir mensagens que induzam os destinatários em erro, por exemplo, enviadas em nome de terceiros ou contendo informações falsas;  
* transmitir mensagens que contenham software malicioso;  
* transmitir mensagens que violem direitos autorais ou direitos de propriedade intelectual de terceiros;  
* transmitir mensagens que contenham publicidade de esquemas de pirâmide financeira, medicamentos, substâncias entorpecentes, produtos de tabaco e álcool, serviços de natureza íntima;  
* transmitir mensagens incluídas em listas de materiais extremistas, que promovam ou justifiquem terrorismo, extremismo, nazismo, incitação ao ódio religioso, racial, étnico ou interétnico, ou que incitem à violação da legislação vigente e da ordem pública;  
* transmitir mensagens que contenham ameaças à vida e à saúde, bem como mensagens que incentivem dano à vida e à saúde, perseguição, assédio ou indução ao suicídio;  
* transmitir mensagens que ofendam a honra e a dignidade de pessoas, prejudiquem a reputação comercial, contenham difamação ou linguagem ofensiva;  
* transmitir mensagens que contenham informações cujo sigilo seja protegido por lei ou por obrigações contratuais (informações que constituam segredo de Estado, segredo comercial, bancário, profissional, dados pessoais).

4.1.2. Utilizar o Serviço de forma não expressamente prevista neste Acordo.

4.1.3. Utilizar o Serviço para a venda ilegal de substâncias entorpecentes e psicotrópicas, explosivos, armas e munições, ou para venda de outros bens ou serviços cuja comercialização seja proibida ou restrita por lei.

4.1.4. Induzir alguém em erro, atribuindo-se identidade alheia com o objetivo de causar deliberadamente prejuízos ou por qualquer outra finalidade ilícita.

4.1.5. Comprometer a integridade do sistema de proteção do Serviço, explorar quaisquer vulnerabilidades do Serviço, tentar contornar limitações técnicas implementadas pelo Serviço, obter acesso não autorizado a contas de outros Usuários, causar danos às partes de software e hardware do Serviço ou aos dispositivos dos Usuários.

4.1.6. Remover, ocultar ou alterar o aviso obrigatório de direitos autorais do Serviço (links para o site oficial na forma de texto ou imagem) e quaisquer avisos sobre direitos autorais e de propriedade intelectual incluídos no Serviço e em seus componentes.

4.1.7. Utilizar o Serviço para disseminação de programas maliciosos, invasões ou agregação de dados pessoais ("phishing"), páginas-porta ("doorways"), códigos que abrem novas janelas (popUp, popUnder), realização de envios automáticos em massa de qualquer conteúdo sem o consentimento dos destinatários ("spam", inclusive qualquer forma de spam em motores de busca), "correntes de cartas", esquemas de marketing multinível, inclusive por meio de métodos de ganho na Internet, informações que provoquem reação em cadeia de envio de mensagens.

4.1.8. Realizar tratamento ilícito de dados pessoais de titulares de dados pessoais.

4.1.9. Utilizar o Serviço para qualquer outra finalidade ilegal.

4.2. A prática de atos proibidos pelo Usuário pode acarretar a responsabilização do Usuário nos termos da legislação aplicável.

## **5. Legislação aplicável**

5.1. A EmailMassivo observa a legislação da República do Chipre e não oferece qualquer garantia de que o Serviço ou qualquer de seus componentes seja disponível para uso em qualquer outra jurisdição.

5.2. Ao aceitar as condições do presente Acordo, o Usuário confirma seu consentimento para que as relações jurídicas relativas ao uso do Serviço sejam regidas pela legislação do país de incorporação da EmailMassivo, sem consideração de quaisquer normas de conflito de leis. Por meio deste, o Usuário assume a responsabilidade de cumprir a legislação do país de incorporação da EmailMassivo, bem como qualquer outra legislação aplicável ao Usuário.

5.3. A EmailMassivo tem o direito de restringir total ou parcialmente o acesso ao Serviço a qualquer pessoa, território ou jurisdição, a qualquer tempo e a seu exclusivo critério. O acesso ao Serviço a partir de territórios em que o Serviço seja considerado ilegal ou em que só possa operar mediante obtenção de permissão e/ou licença específica é proibido.

5.4. Mediante solicitação oficial apresentada em conformidade com os procedimentos previstos na legislação aplicável, a EmailMassivo cooperará com as autoridades competentes em qualquer investigação de supostas atividades ilegais relacionadas ao uso do Serviço.

## **6. Responsabilidade**

6.1. A EmailMassivo envidará esforços para assegurar o funcionamento do Serviço; no entanto, o Serviço é fornecido ao Usuário "no estado em que se encontra" ("as is"), razão pela qual a EmailMassivo não garante operação ininterrupta, ausência de erros, nem invulnerabilidade a programas maliciosos, destruição, alteração, furto de informações ou acesso não autorizado de terceiros.

6.2. A EmailMassivo não se responsabiliza pelo inadimplemento ou cumprimento inadequado de suas obrigações em decorrência de falhas em redes de telecomunicações ou energia, acidentes nos locais de instalação de equipamentos, ação de programas maliciosos ou atos de terceiros de má-fé voltados a obter acesso não autorizado e/ou colocar fora de operação o complexo de software e/ou hardware do Serviço.

6.3. A EmailMassivo não se responsabiliza pela inoperância ou funcionamento incorreto do Serviço no dispositivo do Usuário, nem pela incompatibilidade do Serviço com outros aplicativos instalados no dispositivo do Usuário. Para minimizar a ocorrência de tais situações, o Usuário deve utilizar as versões mais recentes do software do dispositivo.

6.4. O Serviço destina-se a fins pessoais e é utilizado pelo Usuário por sua conta e risco. A EmailMassivo não garante que o Usuário obterá quaisquer resultados específicos, nem se responsabiliza por prejuízos sofridos em decorrência do uso do Serviço. A EmailMassivo renuncia a todas as garantias, explícitas ou implícitas, de que o Serviço atenderá às expectativas do Usuário quanto ao uso.

6.5. Em nenhuma hipótese a EmailMassivo será responsável por quaisquer danos diretos, indiretos, punitivos, tributários ou outros, lucros cessantes ou qualquer outro prejuízo relacionado ao uso do Serviço pelo Usuário.

6.6. As limitações acima não reduzem nem excluem a responsabilidade da EmailMassivo em casos de dolo, fraude ou negligência grave, ou atos criminosos intencionais. As normas de algumas jurisdições não admitem limitação ou exclusão de responsabilidade por danos não intencionais ou indiretos; dessa forma, algumas das limitações de responsabilidade previstas neste Acordo podem não ser aplicáveis a determinado Usuário. Não obstante, as limitações e exclusões deste capítulo aplicam-se na máxima medida permitida pela legislação aplicável.

6.7. O Serviço é integrado a diversos serviços e aplicativos de terceiros. O Serviço apenas proporciona a possibilidade de acesso a tais serviços/aplicativos de terceiros. Todas as questões relacionadas ao uso desses serviços/aplicativos de terceiros são reguladas pelos termos de uso desses serviços/aplicativos e devem ser resolvidas diretamente entre os administradores desses serviços/aplicativos e o Usuário.

6.8. O Usuário assume plena responsabilidade pelo conteúdo e pela conformidade com a legislação aplicável de todos os materiais inseridos nas mensagens enviadas, incluindo programas, textos, fotografias, arquivos de áudio e vídeo, etc.

6.9. Em caso de violação, pelo Usuário, de qualquer condição do Acordo, a EmailMassivo reserva para si o direito de revogar o direito de uso do Serviço, mediante bloqueio da conta do Usuário.

6.10. O Usuário se obriga a indenizar a EmailMassivo por todos os prejuízos e despesas decorrentes da violação, pelo Usuário, deste Acordo, de qualquer legislação aplicável ou de dano causado a terceiros.

6.11. O Usuário é responsável por manter em sigilo seus dados de autenticação (login e senha) necessários para acesso à sua conta.

6.12. O Usuário é integralmente responsável pela legalidade de quaisquer ações relacionadas à publicação, armazenamento e distribuição de informações com o uso do Serviço. O Usuário assume plena responsabilidade em caso de violação das disposições da legislação de publicidade, de acordo com a legislação aplicável ao próprio Usuário.

## **7. Vigência do Acordo**

7.1. O Acordo entra em vigor a partir do momento da aceitação (aceite) pelo Usuário de suas condições, nos termos aqui estabelecidos, e vigora por prazo indeterminado.

7.2. A EmailMassivo reserva para si o direito, a qualquer tempo e a seu exclusivo critério, de forma unilateral e extrajudicial, com ou sem notificação, de revogar temporária ou definitivamente o direito concedido ao Usuário de utilizar o Serviço (mediante bloqueio da conta do Usuário), bem como de restringir o acesso à conta do Usuário, sempre que, de boa-fé, considerar que o Usuário violou as condições do Acordo ou sempre que isso se fizer necessário em conformidade com a legislação aplicável/alterações na legislação aplicável, bem como nos demais casos previstos no Acordo.

7.3. A decisão sobre a revogação do direito do Usuário de utilizar o Serviço (por meio do bloqueio da conta do Usuário) e sobre a restrição de acesso ao site pessoal do Usuário é definitiva e não está sujeita a revisão.

7.4. O Usuário poderá, a qualquer tempo, renunciar ao direito de utilização do Serviço que lhe foi concedido. A EmailMassivo reconhecerá tal renúncia e procederá à exclusão da conta do Usuário quando ocorrer um dos seguintes eventos:

7.4.1. Recebimento de declaração do Usuário sobre a renúncia ao direito de utilizar o Serviço;

7.4.2. Recebimento da revogação do consentimento do Usuário para o tratamento de seus dados pessoais. A EmailMassivo se obriga a excluir a conta do Usuário dentro de prazo razoavelmente necessário para tanto, respeitado o prazo máximo previsto na legislação aplicável.

7.5. A partir da exclusão da conta do Usuário, o direito de utilização do Serviço é considerado extinto. A exclusão da conta pode acarretar a eliminação de todas as informações a ela relacionadas. A EmailMassivo poderá continuar armazenando dados sobre o Usuário quando a legislação aplicável lhe impuser tal obrigação.

7.6. A EmailMassivo reserva para si o direito de alterar o Acordo mediante atualização do texto na página em que ele se encontra publicado. A EmailMassivo não assume a obrigação de notificar o Usuário sobre tais alterações; assim, o Usuário se obriga a acompanhar, por iniciativa própria, eventuais modificações no Acordo, visitando periodicamente a página de publicação. Quaisquer alterações no Acordo entram em vigor a partir do momento de sua publicação na respectiva página. O Usuário aceita as condições do Acordo com as alterações introduzidas sempre que utilizar o Serviço. Caso o Usuário não concorde com as alterações introduzidas no Acordo, deverá interromper imediatamente o uso do Serviço.

## **8. Privacidade**

8.1. O tratamento de dados pessoais do Usuário é realizado em conformidade com a legislação vigente em matéria de dados pessoais, que seja aplicável, bem como de acordo com a Política de Privacidade aceita pelo Usuário.

8.2. O Usuário confirma à EmailMassivo seu consentimento para o tratamento de dados pessoais em conformidade com as disposições do GDPR.

## **9. Resolução de disputas**

9.1. Quaisquer reclamações, solicitações e demais correspondências devem ser encaminhadas pelo Usuário para o endereço de e-mail support@emailmassivo.com ou para o endereço 9 Vasili Michailidi, 3026, Limassol, Cyprus.

9.2. O suporte técnico é prestado em língua inglesa, das 10h00 às 18h00 (GMT+2), em dias úteis.

9.3. A EmailMassivo reserva para si o direito de não responder a reclamações, solicitações e demais correspondências encaminhadas por pessoas cuja identidade não possa ser verificada (anonimamente) ou enviadas por qualquer outro meio diverso dos indicados acima.

9.4. Reclamações e solicitações são analisadas pela EmailMassivo dentro de prazo razoavelmente necessário para sua apreciação, considerado o grau de complexidade do assunto.

9.5. O Usuário concorda que todos os litígios decorrentes do Acordo serão submetidos à jurisdição exclusiva dos tribunais do local de constituição da EmailMassivo e resolvidos na forma prevista na legislação vigente do país de incorporação da EmailMassivo.

9.6. O Usuário concorda que ações e reclamações conjuntas e/ou coletivas contra a EmailMassivo não constituem meio adequado ou permitido de proteção de direitos dos Usuários, se e na medida em que isso seja admissível pela legislação aplicável. Em consequência, o Usuário se obriga a não participar de ações e/ou reclamações conjuntas ou coletivas contra a EmailMassivo.

## **10. Disposições finais**

10.1. As relações jurídicas entre as partes no cumprimento do Acordo são reguladas pela legislação vigente do país de incorporação da EmailMassivo, sem consideração de normas de conflito de leis.

10.2. Caso o Usuário tenha quaisquer dúvidas acerca de seus direitos e obrigações legais, não compreenda as condições do Acordo ou a legislação aplicável, deverá, antes de aceitar as condições do Acordo, consultar um profissional qualificado. A EmailMassivo não presta consultoria jurídica nem recomendações sobre a legislação aplicável ou sobre exigências legais incidentes sobre o Usuário ou terceiros, tampouco sobre o cumprimento, pelo Usuário, da legislação aplicável.

10.3. O Usuário não poderá ceder seus direitos e obrigações decorrentes do Acordo sem o consentimento prévio da EmailMassivo.

10.4. A EmailMassivo poderá ceder seus direitos e obrigações decorrentes do Acordo a terceiros, sem qualquer alteração dos direitos ou obrigações do Usuário decorrentes do Acordo.

10.5. Cada disposição deste Acordo tem eficácia independente. Caso uma ou mais disposições do Acordo se tornem inválidas, as demais disposições permanecerão em vigor.

10.6. O Acordo é redigido em língua inglesa e poderá ser traduzido para outros idiomas para conveniência do Usuário. O Usuário pode consultar outras versões do Acordo alterando as configurações de idioma do Serviço. Em caso de divergência entre a versão em inglês e qualquer outra versão traduzida, a versão em inglês prevalecerá.`
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;
