/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    pgUrl: 'postgres://aqglddrd:J2Z9xdGeKopP1pRqrHrgq8NTKAI4OhOb@silly.db.elephantsql.com/aqglddrd',
    MONGODB_URI: 'mongodb+srv://mandarim:IybSuQmXxmpPjZGo@teste.knxnpxi.mongodb.net',
    JWT_SECRET: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NDY1NjQ1MiwiaWF0IjoxNjk0NjU2NDUyfQ.Y0x_BPx1i-AwQ_FxsGFVODVBm4JPJ4nNCiuMukcZN9U',
  },
}

module.exports = nextConfig
