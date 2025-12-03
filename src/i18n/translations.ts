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
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;
