import { Command } from 'commander';

const program = new Command();

//primero va la variable, luego la descripcion y al final puede ir un valor por defecto.
program
    .option('--test', 'Variable para correr los test', false)
    .option('-d', 'Varaible para debug', false) 
    .option('-p <port>', 'Puerto del servidor', 5500)
    .option('--persist <persist>', 'Modo de persistencia', "mongodb")
    .option('--mode <mode>', 'Modo de trabajo', 'dev')
    .option('-1, --letters [letters...', 'specify letters')
    .requiredOption('-u <user>', 'Usuario que va a utilizar el aplicativo.', 'No se ha declarado un usuario.');//RequireOption usa un mensaje por defecto si no está presente la opción.
program.parse(); //Parsea los comandos y valida si son correctos.

console.log("Mode Option: ", program.opts().mode);
// console.log("Persistence Mode Option: ", program.opts().persist);
// console.log("Options: ", program.opts());
// console.log("Test Mode on?: ", program.opts().test);
// console.log("Remaining arguments: ", program.args);

export default program;