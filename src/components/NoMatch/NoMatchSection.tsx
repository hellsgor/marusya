import { Button } from '../../ui/Button/Button';
import { Container } from '../../ui/Container/Container';
import st from './NoMatchSection.module.scss';

export function NoMatchSection() {
  return (
    <section className={st.noMatchSection}>
      <Container>
        <div className={st.noMatchSection__wrapper}>
          <span className={st.noMatchSection__backdrop}>404</span>
          <p className={`heading heading_2 ${st.noMatchSection__title}`}>
            Ooops!
          </p>
          <p>Такой страницы не&nbsp;существует или что-то пошло не&nbsp;так</p>
          <Button>На главную страницу</Button>
        </div>
      </Container>
    </section>
  );
}
