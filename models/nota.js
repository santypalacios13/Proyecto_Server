import  mongoose  from "mongoose";
const Schema=mongoose.Schema;


const notaShema=new Schema({

    usuario:{type:String, required:[true,'Usuario obligatorio']},
    contraseña:{type:String, required:[true,'Contraseña obligatorio']},
    usuarioId: {type:String},
    date:{type:Date, default: Date.now},
    activo:{type:Boolean, default:true}

});

//convertir a modelo
const Nota=mongoose.model('Nota',notaShema);
export default Nota;