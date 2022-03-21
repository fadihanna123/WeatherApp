export class Props {
  constructor(
    public cityinput?: string,
    public setCityInput?: (cityinput: string) => void,
    public loading?: boolean,
    public setLoading?: (loading: boolean) => void,
    public view?: boolean,
    public setView?: (view: boolean) => void,
    public dec?: string,
    public setDec?: (dec: string) => void,
    public cityName?: string,
    public setCityName?: (cityName: string) => void,
    public temp?: number,
    public setTemp?: (temp: number) => void,
    public Error?: string,
    public setError?: (error: string) => void
  ) {}
}
