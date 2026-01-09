import { PageError } from '@/shared/ui';

export function NoMatchPage() {
  return <PageError errorCode="e001" backdropText="404" />;
}
