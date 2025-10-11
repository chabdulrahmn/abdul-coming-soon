import { Github, Linkedin, Mail } from 'lucide-react';

export const ContactLinks = () => {
  const linkedinUsername = (import.meta.env.VITE_LINKEDIN_USERNAME as string) || 'chabdulrahman';
  const githubUsername = (import.meta.env.VITE_GITHUB_USERNAME as string) || 'chabdulrahmn';
  const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL as string) || 'chabdulrahmaan@gmail.com';

  const links = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/in/${linkedinUsername}`,
      ariaLabel: 'Visit LinkedIn profile',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: `https://github.com/${githubUsername}`,
      ariaLabel: 'Visit GitHub profile',
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${contactEmail}`,
      ariaLabel: 'Send an email',
    },
  ];

  return (
    <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.name !== 'Email' ? '_blank' : undefined}
          rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
          aria-label={link.ariaLabel}
          className="group flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 shadow-[var(--shadow-soft)]"
        >
          <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
};
