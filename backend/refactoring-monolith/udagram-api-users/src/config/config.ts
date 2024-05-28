export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'url': process.env.URL,
  'urlProxy': process.env.PROXY,
  'port_api_user': process.env.PORT_API_USER,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
