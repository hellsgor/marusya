import s from './UserSettings.module.scss';

import { Button, ErrorText, Icon, Loader } from '@/shared/ui';
import {
  useGetUserQuery,
  useLogoutMutation,
  UserDataItem,
} from '@/entities/user';
import { useDocumentTitle } from '@/shared/lib';

export function UserSettings() {
  useDocumentTitle('Настройки');

  const { data: user, isFetching, isError } = useGetUserQuery();
  const [logout] = useLogoutMutation();

  if (isFetching) return <Loader size="big" fixed />;

  if (isError || !user) return <ErrorText errorCode="e001" />;

  const settingsData = [
    {
      markerContent: `${user.name[0]}${user.surname[0]}`.toUpperCase(),
      label: 'Имя Фамилия',
      value: `${user.name} ${user.surname}`,
    },
    {
      markerContent: <Icon.Email />,
      label: 'Электронная почта',
      value: user.email,
    },
  ];

  return (
    <div className={s.userSettings}>
      <ul role="list" className={s.userSettings__data}>
        {settingsData.map((item, idx) => (
          <li className={s.userSettings__dataItem} key={idx}>
            <UserDataItem {...item} />
          </li>
        ))}
      </ul>

      <Button
        className={s.userSettings__logout}
        variant="primary"
        onClick={() => logout()}
      >
        Выйти из аккаунта
      </Button>
    </div>
  );
}
