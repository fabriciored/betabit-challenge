const Contact = (sequelize, DataTypes) => {
    return sequelize.define('Contact', {
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        image: DataTypes.STRING
    })
}

module.exports = Contact;