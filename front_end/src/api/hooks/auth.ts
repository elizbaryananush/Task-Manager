import { useMutation } from '@tanstack/react-query';
import { FirstStepState } from '../../types/state/register/registerFirstStep.type';
import { api } from '../api';

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: async (data: FirstStepState) => {
      const res = await api.post('/auth/register', data);
      return res.data;
    },
    onSuccess: (data) => {
      console.log('Mutation success:', data);
    },
    onError: (error: unknown) => {
      console.error('Mutation failed:', error);
    },
  });
};