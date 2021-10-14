import { Model ,DataTypes} from 'sequelize';
import {sequelize} from './sequelize'

class Cloth extends Model {
  public readonly id!: string;
  public top_buttom!: string;    // 상의 하의 
  public short_long!: string;  // 긴팔/ 반팔 
  public color!: string;  // 색상
  

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Cloth.init({
  top_buttom : {
    type: DataTypes.STRING(20),
    allowNull : true
  },
  short_long : {
    type : DataTypes.STRING(20),
    allowNull : true
  },
  color : {
    type :  DataTypes.STRING(20),
    allowNull : true
  },
  
},{
  sequelize,
  timestamps : true,
  modelName : 'Cloth',
  tableName : 'clothes',
  charset : 'utf8',
  collate : 'utf8_general_ci',
  underscored : true
})

export default Cloth;