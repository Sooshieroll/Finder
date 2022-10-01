INSTALLATION INSTRUCTIONS

`1.` Pull the file off of github

`git clone` https://github.com/Sooshieroll/Finder.git

`2.` Install NPM

```text
npm install
```

`3.` Create dotenv file

```text
touch .env
```

`4.` Add your SECRET_SESSION & API Key inside your .env file

```text
SECRET_SESSION=
API_KEY=
```
`4.a` Request for API key at `https://www.travelpayouts.com/en/`

You will need to Sign up and join a program to get a key. Once you get the key, make sure you put it into your .env file.

`5.` Create your database

```text
npm install sequelize-cli
```
```text
npx sequelize-cli db:create flight-deal-finder
```
`6.` Migrate your database

```text
npx sequelize-cli db:migrate
```

`6.` Seed your data

```text
npx sequelize-cli db:seed:all
```

`7.` Start your server
```text
npm start
```
