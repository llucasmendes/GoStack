module.exports = {
  dialect: 'postgres',
  host: '192.168.0.110',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
