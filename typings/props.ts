export interface Props {
  cityinput?: string;
  setCityInput?: (cityinput: string) => void;
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
  view?: boolean;
  setView?: (view: boolean) => void;
  dec?: string;
  setDec?: (dec: string) => void;
  cityName?: string;
  setCityName?: (cityName: string) => void;
  temp?: number;
  setTemp?: (temp: number) => void;
  Error?: string;
  setError?: (error: string) => void;
}
