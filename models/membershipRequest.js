// Import Sequelize and the connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

class MembershipRequest extends Model {}

MembershipRequest.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  clubId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected'),
    defaultValue: 'pending'
  }
}, {
  sequelize,
  modelName: 'MembershipRequest',
  tableName: 'membership_requests'
});

module.exports = MembershipRequest;






// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../database/connection');
//
// class MembershipRequest extends Model {}
//
// MembershipRequest.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   clubId: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   status: {
//     type: DataTypes.ENUM('pending', 'approved', 'rejected'),
//     defaultValue: 'pending'
//   }
// }, {
//   sequelize,
//   modelName: 'MembershipRequest',
//   tableName: 'membership_requests'
// });
//
// module.exports = MembershipRequest;





// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../database/connection');
//
// class Membership extends Model {}
//
// Membership.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   clubId: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   status: {
//     type: DataTypes.ENUM('active', 'inactive'),
//     defaultValue: 'active'
//   }
// }, {
//   sequelize,
//   modelName: 'Membership',
//   tableName: 'memberships'
// });
//
// module.exports = Membership;
