import { getMonogram } from '../../helpers';
import { useAppSelector } from '../../store/hooks';
import { EmailIcon } from '../../ui/icons';
import { Loader } from '../../ui/Loader/Loader';
import { ProfileInfo } from '../../ui/ProfileInfo/ProfileInfo';
import st from './Settings.module.scss';

export function Settings() {
  const { user, status } = useAppSelector((state) => state.auth);

  if (status !== 'authenticated') {
    return <Loader size="big" />;
  }

  const info = [
    {
      label: 'Имя Фамилия',
      content: `${user?.name} ${user?.surname}`,
      markerContent: (
        <span>{getMonogram([user?.name ?? '', user?.surname ?? ''])}</span>
      ),
    },

    {
      label: 'Электронная почта',
      content: `${user?.email}`,
      markerContent: <EmailIcon />,
    },
  ];

  return (
    <div className={st.settings}>
      <ul className={st.settings__info}>
        {info.map((item) => (
          <li key={item.label}>
            <ProfileInfo {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
