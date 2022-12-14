import { Table,Model, Column, DataType} from "sequelize-typescript";


@Table
export class Produto extends Model <Produto>{
    
    @Column({
        primaryKey:true,
        type:DataType.STRING(10),
        allowNull:false,
       
    })
    CODIGO_DO_PRODUTO:string;
    
  
    @Column({
        type:DataType.STRING(150),
        allowNull:false,
    })
    NOME_DO_PRODUTO:string;

    @Column({
        type:DataType.STRING(50),
        allowNull:false,
    })
    EMBALAGEM:string;

    @Column({
        type:DataType.STRING(50),
        allowNull:false,
    })
    TAMANHO:string;

    @Column({
        type:DataType.STRING(50),
        allowNull:false,
    })
    SABOR:string;


    @Column({
        type:DataType.FLOAT,
        allowNull:false,
    })
    PRECO_DE_LISTA:number;
  
   
}