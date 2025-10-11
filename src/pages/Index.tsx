import { FloatingBlobs } from '@/components/FloatingBlobs';
import { CountdownTimer } from '@/components/CountdownTimer';
import { SubscribeForm } from '@/components/SubscribeForm';
import { ContactLinks } from '@/components/ContactLinks';
import { SkillsBadges } from '@/components/SkillsBadges';
import profileImage from '@/assets/profile.jpg';

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      <FloatingBlobs />

      <div className="container mx-auto px-4 py-12 sm:py-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-12 sm:space-y-16">
          {/* Hero Section */}
          <header className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex justify-center mb-6">
              <img
                src={profileImage}
                alt="CH Abdul Rahman - Full Stack Web Developer"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-2xl shadow-[var(--shadow-elegant)] border-[3px] border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              CH Abdul Rahman
            </h1>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
              <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Portfolio Coming Soon
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                Full Stack Web Developer
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                <span className="text-primary font-medium">Laravel</span>
                <span className="mx-2">•</span>
                <span className="text-secondary font-medium">Vue.js</span>
                <span className="mx-2">•</span>
                <span className="text-accent font-medium">Next.js</span>
              </p>
            </div>
          </header>

          {/* Skills Section */}
          <section aria-label="Core skills">
            <SkillsBadges />
          </section>

          {/* Countdown Section */}
          <section aria-label="Launch countdown" className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Launching In
            </h2>
            <CountdownTimer />
          </section>

          {/* Subscribe Section */}
          <section aria-label="Email subscription" className="space-y-6 pt-8">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                Be the First to Know
              </h2>
              <p className="text-muted-foreground">
                Join the waitlist for exclusive updates and early access
              </p>
            </div>
            <SubscribeForm />
          </section>

          {/* Contact Section */}
          <section aria-label="Contact information" className="space-y-4 pt-8">
            <h2 className="text-lg font-semibold text-foreground">
              Connect With Me
            </h2>
            <ContactLinks />
          </section>

          {/* Footer */}
          <footer className="pt-12 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
            <p>© {new Date().getFullYear()} CH Abdul Rahman. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default Index;
