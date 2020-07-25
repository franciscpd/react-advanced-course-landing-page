type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

type Concept = {
  title: string
}

type Module = {
  title: string
  subtitle: string
  description: string
}

export type SociaLink = {
  title: string
  url: string
}

export type ReviewProps = {
  id: number
  name: string
  photo: FileProps
  text: string
}

export type QuestionProps = {
  question: string
  answer: string
}

export type FileProps = {
  alternativeText: string
  url: string
  ext: string
}

export type AuthorsProps = {
  photo: FileProps
  name: string
  role: string
  socialLinks: SociaLink[]
  description: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: FileProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: FileProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorsProps[]
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewProps[]
}

export type SectionFaqProps = {
  title: string
  questions: QuestionProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
