import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { CredibilitySection } from '@/components/home/CredibilitySection';
import { CaseStudiesSection } from '@/components/home/CaseStudiesSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { AIToolingSection } from '@/components/home/AIToolingSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <CredibilitySection />
      <CaseStudiesSection />
      <ProcessSection />
      <AIToolingSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
