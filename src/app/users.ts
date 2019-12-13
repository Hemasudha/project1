export class User {
  constructor(
    public firstName: string = "",
    public lastName: string = "",
    public email: string = "",
    public password: string = "",
    public courses: any = ["Angular", "React", "Vue"] // public durations: string[] = ["1month", "3months", "6months"], // public costs: string[] = ["free", "$10", "$25"]
  ) {}
}
