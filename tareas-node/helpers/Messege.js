import colores from 'colors';
import * as readline from 'node:readline';
import {stdin as input, stdout as output} from 'process'


const {green, red, blue, clack} = colores



const showMenu = () => {

    return new Promise(res => {

        console.clear()

        console.log('============================='.green);
        console.log('   Seleccione una opción'.green);
        console.log('=============================\n'.green);
    
        console.log(`${ '1'.green }- Crear tarea`);
        console.log(`${ '2'.green }- Listar tareas`);
        console.log(`${ '3'.green }- Listar tareas completadas`);
        console.log(`${ '4'.green }- Listar tareas pendientes`);
        console.log(`${ '5'.green }- Completar tarea(s)`);
        console.log(`${ '6'.green }- Borrar tareas`);
        console.log(`${ '0'.green }- Salir \n`);
    
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question('Seleccione una opcion: ', (opt) => {
            rl.close()
            res(opt);
        })
    })
    
}

const puase = () => {

    return new Promise(res => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question(`\nPresione ${'ENTER'.blue} para continuar\n`, (opt) => {
            rl.close();
            res();
        })
    })
    
}

export {
    showMenu,
    puase
}