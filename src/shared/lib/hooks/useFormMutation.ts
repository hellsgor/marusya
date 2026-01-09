import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

import { useEffect } from 'react';

import { getApiErrorText } from '@/shared/lib/helpers/getApiErrorText';

type ApiErrorOptions = {
  on400?: string;
  on409?: string;
};

type UseFormMutationOptions<TData> = {
  onSuccess?: () => void;
  errorOptions?: ApiErrorOptions;
  data?: TData;
};

type MutationResult<TData> = {
  isLoading: boolean;
  isSuccess: boolean;
  error?: FetchBaseQueryError | SerializedError;
  data?: TData;
};

type MutationTrigger<TArg> = (arg: TArg) => unknown;

/**
 * Универсальный хук для работы с RTK Query мутациями в формах
 * @param mutationTuple - кортеж [mutate, result] из useMutation хука RTK Query
 * @param options - опции для обработки успеха и ошибок
 * @returns объект с isLoading, errorText и функцией mutate для onSubmit
 */
export function useFormMutation<TArg, TData>(
  mutationTuple: readonly [MutationTrigger<TArg>, MutationResult<TData>],
  options?: UseFormMutationOptions<TData>,
) {
  const [mutate, result] = mutationTuple;
  const { isLoading, isSuccess, error, data } = result;
  const { onSuccess, errorOptions } = options || {};

  const errorText = getApiErrorText(error, options?.data ?? data, errorOptions);

  useEffect(() => {
    if (isSuccess && onSuccess) {
      onSuccess();
    }
  }, [isSuccess, onSuccess]);

  return {
    isLoading,
    errorText: !isLoading && error ? errorText : undefined,
    mutate,
  };
}
