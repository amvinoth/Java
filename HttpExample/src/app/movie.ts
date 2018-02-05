export class Movie {
    public id: number;
    public name: string;
    public image_url: string;
    public language: string;
    public director: string;
    public location: string;
    constructor(
        id: number,
        name: string,
        image_url: string,
        language: string,
        director: string,
        location: string
    ) {
        this.id = id;
        this.name = name;
        this.image_url = image_url;
        this.language = language;
        this.director = director;
        this.location = location;
    }
}