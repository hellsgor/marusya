import { Section } from '../ui/Section/Section';
import { RandomMovie } from '../components/RandomMovie/RandomMovie';
import { Top10 } from '../components/Top10/Top10';

export function Home() {
  return (
    <>
      <Section indentsClasses="pt-56 pb-0 pb-lg-56 pt-md-0 pb-md-0">
        <RandomMovie />
      </Section>

      <Section indentsClasses="pt-40 pb-120 pt-md-32 pb-md-32">
        <h2 className={'heading heading_2'}>Топ 10 фильмов</h2>
        <Top10 />
      </Section>
    </>
  );
}
