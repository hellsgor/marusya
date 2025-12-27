import { openModal } from '@/features/modal';
import { useAppDispatch, useMediaQuery } from '@/shared/lib';
import { Icon, Loader, MenuItem } from '@/shared/ui';
import { useGetUserQuery } from '../../api/userApi';

export function UserControl() {
  const dispatch = useAppDispatch();
  const isIconViewed = useMediaQuery('lg');

  const {
    data: user,
    isFetching,
    isError,
  } = useGetUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const isAuthorized = !isError && !!user;

  const children = isFetching ? (
    <Loader size="small" />
  ) : isIconViewed ? (
    <Icon.User />
  ) : isAuthorized ? (
    user.name
  ) : (
    'Войти'
  );

  if (isAuthorized) {
    return (
      <MenuItem href="/profile" disabled={isFetching}>
        {children}
      </MenuItem>
    );
  }

  return (
    <MenuItem
      disabled={isFetching}
      children={children}
      onClick={() => {
        dispatch(openModal('signIn'));
      }}
    />
  );
}
