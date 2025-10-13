export const FloatingBlobs = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-start overflow-hidden pointer-events-none">
            <div
                className="absolute top-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow"
                style={{ animationDelay: '0s', transform: 'translateX(-50%)' }}
            />
            <div
                className="absolute top-0 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-secondary/10 rounded-full blur-3xl animate-float-slow"
                style={{ animationDelay: '5s', transform: 'translateX(-20%)' }}
            />
            <div
                className="absolute top-0 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-accent/10 rounded-full blur-3xl animate-float-slow"
                style={{ animationDelay: '10s', transform: 'translateX(30%)' }}
            />
        </div>
    );
};
