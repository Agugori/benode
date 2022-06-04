import('colors')
import {inquirerMenu, pause, readInput, listadoBorrarTarea, confirmDel, showListChecked } from './helpers/Inquirer.js';
import Tareas from './models/Tareas.js';
import {saveDB, readDB} from './helpers/saveFiles.js'

const main = async () => {

    const tareas = new Tareas();
    let opt = '';

    const taskDB = readDB();

    if( taskDB ) {

        tareas.loadTaskArray(taskDB)
    }

    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const option = await readInput('Descripción: ');
                tareas.crearTarea( option )
                break;
            case '2':
                tareas.completeList();
                break;
            case '3':
                tareas.listarCompletasPendientes(true);
                break;
            case '4':
                tareas.listarCompletasPendientes(false);
                break;
            case '5':
                const ids = await showListChecked(tareas.listedArr);
                tareas.toggleCompleted( ids )
                break;
            case '6':
                const id = await listadoBorrarTarea(tareas.listedArr);                
                if (id !== '0' ) {
                    const confirm = await confirmDel('¿Estas seguro de que deseas borrarlo?')
                    if ( confirm ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada');
                }
                    
                }
                
                    
            
        }

        saveDB(tareas.listedArr)

        await pause();
    } while (opt !== '0');
    

    // puase();
};

main();