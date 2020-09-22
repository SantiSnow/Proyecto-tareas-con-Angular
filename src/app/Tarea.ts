export interface Tarea{
    "Nombre": string;
    "Descripcion": string;
    "FechaLimite": string;
    "Importancia": string;
    "Solicitante": {
        "NombreSolicitante": string;
        "Contacto": string;
    }
    "Entregada": boolean;
}