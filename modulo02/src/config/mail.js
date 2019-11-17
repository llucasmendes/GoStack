export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_POR,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <norepply@gobarber.com>',
  },
};
