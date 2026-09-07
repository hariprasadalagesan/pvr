import React from 'react';
import { ArrowLeft, Terminal } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Container } from '../components/common/Container';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-[75vh] flex items-center justify-center">
      <SEO title="404 - Node Not Found" />
      <Container size="md" className="text-center space-y-5">
        <div className="inline-flex p-4 rounded-2xl bg-surface border border-border text-accent mb-2">
          <Terminal className="w-8 h-8" />
        </div>
        <div>
          <span className="font-mono text-xs text-status-active uppercase tracking-widest">
            [EXCEPTION 404: ADDRESS_UNREACHABLE]
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-foreground font-bold uppercase mt-2">
            Signal Path Broken
          </h1>
        </div>
        <p className="text-sm text-foreground-muted font-sans max-w-md mx-auto leading-relaxed">
          The requested route does not correspond to an active node or document in the automation architecture.
        </p>
        <div className="pt-4">
          <Button to="/" variant="primary" size="md" iconLeft={<ArrowLeft className="w-4 h-4" />}>
            Return to Supervisory Overview
          </Button>
        </div>
      </Container>
    </div>
  );
};
