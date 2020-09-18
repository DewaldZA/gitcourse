export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    //checking if the token expiration does not exist or if the current date is greater than the tokenexpirationdate
    if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
      return null;
    }

    return this._token
  }
}
