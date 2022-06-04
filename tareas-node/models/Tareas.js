import Tarea from './Tarea.js';
import colores from 'colors';

const {red, green} = colores;

class Tareas {

    _listed = {
        abc: '123'
    } 

    get listedArr() {

        const listed = [];
        Object.keys(this._listed).forEach( key => {
            const tarea = this._listed[key];
            listed.push( tarea );
        });

        return listed;
    }


    constructor() {
        this._listed = {};
    }

    borrarTarea( id ) {
        if (this._listed[id]){
            delete this._listed[id];
        }
    }

    loadTaskArray(tareas = []) {

        tareas.forEach(tarea =>{
            this._listed[tarea.id] = tarea;
        })
        
    }

    crearTarea( desc = '') {
        const tarea = new Tarea(desc)
        this._listed[tarea.id] = tarea;
    }

    completeList(){
        console.log()
        this.listedArr.forEach( (tarea, i) => {
            const index = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${index} ${desc} :: ${estado}`)
        })
        
    }
    listarCompletasPendientes( completadas = true) {
        console.log()
        let index = 0;
        this.listedArr.forEach( tarea => {

            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            if(completadas ){
                if (completadoEn) {
                    index += 1;
                    console.log(`${index.toString().green} ${desc} :: ${completadoEn.green}`)                
                }
            }else {
                if (!completadoEn) {
                    index += 1;
                    console.log(`${index.toString().green} ${desc} :: ${estado}`)                
                }
            }

        })
        
    }

    toggleCompleted(ids = []){
        ids.forEach(id => {
            const tarea = this._listed[id];
            if(!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString() 
            } 
        });

        this.listedArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listed[tarea.id];   //this._listed[id] = tarea.completadoEn = null;
                tarea.completadoEn = null;
            }
        })
    }
};

export default Tareas;