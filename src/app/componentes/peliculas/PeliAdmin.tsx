import { useState } from "react";

import { PeliculaAdmin } from "../../modelos/PeliculaAdmin";
import { ARREGLO_PELICULAS_ADMIN } from "../../mocks/Pelicula-mocks";

export const PeliAdmin = () => {
  const [arrPeliculasAdmin] = useState<PeliculaAdmin[]>(ARREGLO_PELICULAS_ADMIN);

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Nro</th>
                <th style={{ width: "30%" }}>Nombre</th>
                <th style={{ width: "25%" }}>Protagonista</th>
                <th style={{ width: "25%" }}>Imagen</th>
                <th style={{ width: "10%" }}> </th>
              </tr>
            </thead>
            <tbody>
              {arrPeliculasAdmin.map((miPeliAd: PeliculaAdmin) => (
                <tr className="align-middle" key={miPeliAd.codePelicula}>
                  <td>{miPeliAd.codePelicula}</td>
                  <td>{miPeliAd.nombrePelicula}</td>
                  <td>{miPeliAd.protagonistaPelicula}</td>
                  <td>
                    <img src={miPeliAd.imagenPeliculaBase64} alt="" width="auto" height="75px" className="imagenAdmin"/>
                    <div className="text-info">{miPeliAd.imagenPelicula}</div>
                  </td>
                  <td className="text-center">
                    <a href="/#">
                      <i className="fa-solid fa-trash-can rojito"></i>
                    </a>{" "}
                    <a href="/pactual/1">
                      <i className="fa-regular fa-pen-to-square verde"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
