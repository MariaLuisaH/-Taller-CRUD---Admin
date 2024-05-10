export class PeliculaAdmin {
  public codePelicula: number;
  public nombrePelicula: string;
  public protagonistaPelicula: string;
  public imagenPelicula: string;
  public imagenPeliculaBase64: string;

  constructor(codep: number, nomp: string, protp: string, image: string, basep: string) {
    this.codePelicula = codep;
    this.nombrePelicula = nomp;
    this.protagonistaPelicula = protp;
    this.imagenPelicula = image;
    this.imagenPeliculaBase64 = basep;
  }
}
