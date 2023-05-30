const { leerJSON, escribirJSON } = require("../data");
const Tarea = require("./Tarea");

module.exports = {
  editar: function (clase, estado) {
    const tareas = this.tareas;
    const tarea = tareas.find((tarea) => tarea.clase === clase);
    if (!tarea) {
      return console.log(`ERROR: La clase ${clase} no se encuentra`);
    }
    const tareasActualizadad = tareas.map((tarea) => {
      if (tarea.clase === clase) {
        tarea.estado = estado.toLowerCase() ;
      }
      return tarea;
    });
    escribirJSON(tareasActualizadad);

    return `El estado de la clase ${tarea.titulo} ahora es ${estado}.`;
  }
}