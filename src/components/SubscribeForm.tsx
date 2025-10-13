import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Check, Loader2 } from 'lucide-react';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        variant: "destructive",
        title: "Email required",
        description: "Please enter your email address.",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        variant: "destructive",
        title: "Invalid email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const formId = import.meta.env.VITE_CONVERTKIT_FORM_ID as string;
      const apiKey = import.meta.env.VITE_CONVERTKIT_API_KEY as string;

      if (!formId || !apiKey) {
        toast({
          variant: "destructive",
          title: "Missing configuration",
          description: "ConvertKit form ID or API key is not set.",
        });
        return;
      }

      const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          api_key: apiKey,
          email,
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Subscription failed: ${response.status} ${text}`);
      }

      // Optionally inspect response JSON
      await response.json();

      setIsSuccess(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll be notified when the portfolio launches.",
      });

      setEmail('');

      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Subscription failed",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
      <div className="flex flex-col sm:flex-row gap-x-3 gap-y-4">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="pl-10 h-12 text-base border-2 focus:border-primary transition-colors"
            aria-label="Email address"
          />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={isLoading || isSuccess}
          className="h-12 px-8 font-semibold transition-all hover:scale-105"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : isSuccess ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Subscribed!
            </>
          ) : (
            'Notify Me'
          )}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mt-3 text-center">
        Get notified when the portfolio goes live
      </p>
    </form>
  );
};
