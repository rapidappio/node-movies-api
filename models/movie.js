module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        releaseDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        rating: {
            type: DataTypes.FLOAT,
        },
    });
    return Movie;
};
