import { useQuery } from '@tanstack/react-query';
import { getMainImages } from '../../api/firebase';

type TmainImages = {
  name: string;
  url: string;
};

type TMainImageQuery = {
  mainImages: TmainImages[];
  isLoading: boolean;
  isError: boolean;
};

export default function useMainImages(): TMainImageQuery {
  const {
    data: mainImages,
    isLoading,
    isError,
  } = useQuery(['main'], getMainImages);

  return { mainImages, isLoading, isError };
}
