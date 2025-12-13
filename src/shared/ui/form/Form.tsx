import type { ReactNode } from 'react';
import s from './Form.module.scss';

type FormProps = {
  children: ReactNode;
};

export function Form({ children }: FormProps) {
  return <form className={s.form}>{children}</form>;
}
