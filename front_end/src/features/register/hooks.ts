import { useAppSelector } from '../../store/hooks'

export const useRegisterData = () => {
  return useAppSelector((state) => state.register)
}
