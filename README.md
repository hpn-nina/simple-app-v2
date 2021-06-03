**Contributors:**\
1. *Huỳnh Phương Như* - FE and BE data model\
2. *Lâm Thành Tín* - Design and FE\
3. *Nguyễn Văn Dũng* - Content Writer and FE\
4. *Lê Đoàn Thiện Nhân* - BE\

For running, using `npm i` to install.
Then, `lerna bootstrap`

- Our back-end is located at: [./packages/strapi-atlas/api](./packages/strapi-atlas/api)
- Our front-end code is located at: [./packages/ec-web/pages](./packages/ec-web/pages)

Initialized from the begining:\

1. For the whole projects:\
npm i -g lerna
lerna init

2. For front-end we are using NextJS:
cd packages

npx create-next-app ec-web --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"

3. For BE we are using strapi to connect with MongoDB Atlas (Cloud):

npx create-strapi-app strapi-atlas

Then choose Custom and pick MongoDB
Extracting information from your uri and paste it in.


