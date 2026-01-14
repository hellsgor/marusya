import { useDocumentTitle } from '@/shared/lib';
import { PageError } from '@/shared/ui';

export function NoMatchPage() {
  useDocumentTitle('Oooops!');
  return <PageError errorCode="e001" backdropText="404" />;
}
