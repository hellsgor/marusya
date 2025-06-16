import { useParams } from 'react-router';
import { Section } from '../ui/Section/Section';

export function Movie() {
  const { movieId } = useParams();

  return (
    <>
      <Section indentsClasses="pt-32 pt-md-0">{movieId}</Section>
    </>
  );
}
