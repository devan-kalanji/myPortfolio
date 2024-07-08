export class Tag{
    static readonly Angular = new Tag('Angular', 'red');
    static readonly HTML = new Tag('HTML', 'pink');
    static readonly CSS = new Tag('CSS', 'green');

    private constructor(private readonly key:string, public readonly color: string){

    }

    toString(){
        return this.key;
    }

}