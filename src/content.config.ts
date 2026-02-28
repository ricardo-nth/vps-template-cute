import { defineCollection, z } from 'astro:content';

const profileContentSchema = z.object({
  'supported-living': z.object({
    heading: z.string(),
    subheading: z.string(),
  }),
  'dom-care': z.object({
    heading: z.string(),
    subheading: z.string(),
  }),
});

const metadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  schema: z.record(z.string(), z.any()),
});

const serviceCardSchema = z.object({
  title: z.string(),
  description: z.string(),
  href: z.string(),
  ctaText: z.string().optional(),
  icon: z.enum(['seedling', 'tree', 'lotus']).optional(),
});

const featureSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

const contactOptionSchema = z.object({
  icon: z.string(),
  title: z.string(),
  value: z.string(),
  href: z.string(),
  description: z.string().optional(),
  primary: z.boolean().optional(),
});

const specialtySchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  imageKey: z.string(),
  features: z.array(z.string()),
  href: z.string().optional(),
});

const contactSectionSchema = z.object({
  heading: z.string(),
  intro: z.string(),
  phoneLabel: z.string(),
  phoneHref: z.string(),
  emailLabel: z.string(),
  emailHref: z.string(),
  address: z.string(),
});

const feedbackCardSchema = z.object({
  title: z.string(),
  description: z.string(),
  actionText: z.string(),
  actionHref: z.string(),
});

const serviceFitSchema = z.object({
  badgeLabel: z.string(),
  heading: z.string(),
  intro: z.string(),
  suitableForTitle: z.string(),
  suitableFor: z.array(z.string()),
  alternativeSupportTitle: z.string(),
  alternativeSupport: z.array(z.string()),
});

const outcomesSnapshotSchema = z.object({
  heading: z.string(),
  intro: z.string(),
  stats: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
      detail: z.string(),
    })
  ),
});

const firstThirtyDaysSchema = z.object({
  heading: z.string(),
  intro: z.string(),
  milestones: z.array(
    z.object({
      dayRange: z.string(),
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ),
});

const faqSectionSchema = z.object({
  heading: z.string(),
  intro: z.string(),
  items: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    })
  ),
});

const cuteGlobal = defineCollection({
  type: 'data',
  schema: z.object({
    profileSummary: z.object({
      'supported-living': z.string(),
      'dom-care': z.string(),
    }),
  }),
});

const cuteHome = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: metadataSchema,
    hero: z.object({
      heading: z.string().optional(),
      subheading: z.string().optional(),
      profileContent: profileContentSchema,
      description: z.string(),
      ctaText: z.string(),
      ctaHref: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
      socialProofText: z.string(),
      rating: z.string(),
    }),
    servicesOverview: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      intro: z.string(),
      services: z.array(serviceCardSchema),
    }),
    aboutUs: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      description: z.string(),
      ctaText: z.string(),
      ctaHref: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
    }),
    whyChooseUs: z.object({
      heading: z.string(),
      points: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    testimonials: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      intro: z.string(),
      items: z.array(
        z.object({
          quote: z.string(),
          role: z.string(),
          company: z.string(),
        })
      ),
    }),
    contactSection: contactSectionSchema,
  }),
});

const cuteAbout = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: metadataSchema,
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      primaryCtaText: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaText: z.string(),
      secondaryCtaHref: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
    }),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
    originStory: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      text: z.string(),
      imageKey: z.string(),
    }),
    missionStory: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      text: z.string(),
      imageKey: z.string(),
    }),
    values: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
    team: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      intro: z.string(),
    }),
    cta: z.object({
      heading: z.string(),
      description: z.string(),
    }),
  }),
});

const cuteServices = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: metadataSchema,
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      primaryCtaText: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaText: z.string(),
      secondaryCtaHref: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
    }),
    servicesOverview: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      intro: z.string(),
      services: z.array(serviceCardSchema),
    }),
    supportedLivingFeatures: z.object({
      heading: z.string(),
      subheading: z.string(),
      features: z.array(featureSchema),
    }),
    serviceSpecialties: z.object({
      heading: z.string(),
      subheading: z.string(),
      specialties: z.array(specialtySchema),
    }),
    compliancePillars: z.object({
      heading: z.string(),
      subheading: z.string(),
      pillars: z.array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
          cqcEvidence: z.string().optional(),
        })
      ),
    }),
    contactSection: contactSectionSchema,
  }),
});

const cuteLearningDisabilitySupport = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: metadataSchema,
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      profileContent: profileContentSchema,
      primaryCtaText: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaText: z.string(),
      secondaryCtaHref: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
    }),
    outcomesSnapshot: outcomesSnapshotSchema,
    serviceFit: serviceFitSchema,
    firstThirtyDays: firstThirtyDaysSchema,
    pathwaysSection: z.object({
      heading: z.string(),
      subheading: z.string(),
    }),
    pathways: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        imageKey: z.string(),
        features: z.array(z.string()),
      })
    ),
    supportedLivingFeatures: z.object({
      heading: z.string(),
      subheading: z.string(),
      features: z.array(featureSchema),
    }),
    faqSection: faqSectionSchema,
    contactSection: contactSectionSchema,
  }),
});

const cuteServiceModel = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: metadataSchema,
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      primaryCtaText: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaText: z.string(),
      secondaryCtaHref: z.string(),
      imageKey: z.string(),
      imageAlt: z.string(),
    }),
    whyChooseUs: z.object({
      heading: z.string(),
      points: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    clientJourney: z.object({
      heading: z.string(),
      subheading: z.string(),
      steps: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string().optional(),
        })
      ),
    }),
    contactSection: contactSectionSchema,
  }),
});

const cuteContact = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: metadataSchema,
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      primaryCtaText: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaText: z.string(),
      secondaryCtaHref: z.string(),
      quickContactHeading: z.string(),
    }),
    quickContactOptions: z.array(contactOptionSchema),
    contactOptionsSection: z.object({
      heading: z.string(),
      intro: z.string(),
    }),
    gridContactOptions: z.array(contactOptionSchema),
    officeLocation: z.object({
      badgeLabel: z.string(),
      heading: z.string(),
      intro: z.string(),
      officeLabel: z.string(),
      address: z.string(),
      mapUrl: z.string(),
      directionsUrl: z.string(),
      directionsText: z.string(),
    }),
    feedbackSection: z.object({
      heading: z.string(),
      intro: z.string(),
      compliment: feedbackCardSchema,
      complaint: feedbackCardSchema,
      cqcNote: z.string(),
      cqcLinkText: z.string(),
      cqcLinkHref: z.string(),
    }),
  }),
});

export const collections = {
  cuteGlobal,
  cuteHome,
  cuteAbout,
  cuteServices,
  cuteLearningDisabilitySupport,
  cuteServiceModel,
  cuteContact,
};
