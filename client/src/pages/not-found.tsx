import { Link } from 'wouter';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-8xl font-bold text-muted-foreground/20">404</h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
            Page not found
          </h2>
          <p className="mt-4 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button data-testid="button-404-home">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()} data-testid="button-404-back">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
