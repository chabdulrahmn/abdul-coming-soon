export const FloatingBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute top-4 right-1/4 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-secondary/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: '5s' }}
      />
      <div
        className="absolute top-8 left-1/4 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-accent/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: '10s' }}
      />
    </div>
  );
};
