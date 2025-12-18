import { ProfileHero } from "@/components/about/ProfileHero";
import { BentoGrid } from "@/components/about/BentoGrid";
import { Philosophy } from "@/components/about/Philosophy";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow">
        <ProfileHero />
        <BentoGrid />
        <Philosophy />
      </main>
    </div>
  );
}
