import { motion } from 'framer-motion';
import { whyChooseUs } from '../../data/siteContent';
import { staggerContainer, viewport } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import WhyChooseCard from '../ui/WhyChooseCard';

export default function WhyChooseUs() {
  return (
    <section id="why" className="section relative overflow-hidden">
      <span className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <span className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />
      <div className="container-x relative">
        <SectionTitle
          eyebrow="Why Maa Shardha"
          title="The Maa Shardha"
          highlight="Promise"
          subtitle="A trusted tour and taxi partner in Indore & Madhya Pradesh — dependable for every journey, every time."
        />
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((feature) => (
            <WhyChooseCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
