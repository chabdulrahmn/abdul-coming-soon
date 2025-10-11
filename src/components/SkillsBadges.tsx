export const SkillsBadges = () => {
  const skills = ['Laravel', 'Vue.js', 'React', 'Next.js', 'MySQL', 'Docker'];

  return (
    <div className="flex flex-wrap gap-3 justify-center animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium text-foreground hover:scale-105 transition-transform duration-200"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};
