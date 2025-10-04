import { useAppSelector, useAppDispatch} from '../../hooks'
import { updateFirstStepField } from './register.slice'

export const useRegisterData = () => {
  return useAppSelector((state) => state.register)
}

export const useFirstStepData = () => {
  const dispatch = useAppDispatch();
  const firstStep = useAppSelector(
    (state) => state.register.userData.firstStepData.state
  );

  // wrapped setter function
  const setField = (field: keyof typeof firstStep, value: string) => {
    dispatch(updateFirstStepField({ field, value }));
  };

  return {
    ...firstStep, // gives { name, username, password }
    setField,     // function to update any field
  };
};

export { useAppDispatch }
