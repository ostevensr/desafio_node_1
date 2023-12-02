
export const registrar = (nombre, edad, animal, color, enfermedad) => {

    const registro = {
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad: enfermedad
    }

    return registro
  
}

export const leer = (registros) => {

    console.log("| Nombre | Edad | Animal | Color | Enfermedad |");

        for (const paciente of registros) {
            console.log(`| ${paciente.nombre} | ${paciente.edad} | ${paciente.animal} | ${paciente.color} | ${paciente.enfermedad} |`);
        }

}