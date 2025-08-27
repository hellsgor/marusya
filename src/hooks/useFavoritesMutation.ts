import { useMutation, useQueryClient } from '@tanstack/react-query';
import { favoriteService } from '../api/favoritesService';
import type { AxiosError } from 'axios';

type Action = 'add' | 'delete';
type Vars = { id: number; action: Action };

export function useFavoritesMutation() {
  const qc = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['favorites:mutate'],
    mutationFn: ({ id, action }: Vars) =>
      action === 'add' ? favoriteService.add(id) : favoriteService.delete(id),
    onSuccess: (response) => {
      if (response.result) {
        qc.invalidateQueries({ queryKey: ['profile'] });
        qc.invalidateQueries({ queryKey: ['favorites'] });
      }
    },
    onError: (error: AxiosError) => {
      if (error.status === 401) {
        window.location.href = '/';
      }

      throw error;
    },
  });

  return mutation;
}
