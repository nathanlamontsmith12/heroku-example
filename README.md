# Deploying to Heroku Workshop

Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud

We will be using [Heroku](www.heroku.com) as a way to deploy our front-end and back-end applications for the Apprentice Project.

Heroku will do the work of building and hosting your Create React App project for you after March 11th, 2019. It will host your app using Cowboy and ExpressJS.
-- On March 11th, 2019 the default for node apps will be for heroku to run `npm build` by default if it exists in the `package.json` script. Othername it will default to `npm start`

1. Create a Heroku account using your Accenture email address, the password should be unique and separate from your EID account.

2. Install `create-react-app` if you don't have it already. If your project is already created using this, use that project instead.
   `npm install -g create-react-app`

3. Run `create-react-app new-project-name` using whatever name you please. If your project is already created using this, use that project instead.

4. Run `npm install` or `yarn install`, whichever you have decided to use for your project. For today, let's say we're using `npm`

5. Initialize a git repo if you haven't already `git init` while inside the react project folder.

6. On [heroku](https://dashboard.heroku.com/apps), create a new app.
   New -> Create new app
   Name the app a unique name and click on `Create App`

7. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line) if you haven't already, then make sure you're logged in using your new Heroku account from Step 1.
   `heroku login`

8. Make sure your git status is all clean, if not, commit up everything.
   `git add .`
   `git commit -m "Stuff changed"`

9. Add heroku as a git remote.
   `heroku git:remote -a heroku-project-name` with `heroku-project-name` being the exact name of the app you created in Step 6.

10. Push your `master` branch up to heroku!
    `git push heroku master`

- Note: You can only have one of either of these: `package-lock.json` or `yarn.lock` and if you have both, Heroku won't know whether to start your app with `npm` or `yarn`.

Your react-app should now be deployed to Heroku! Visit it by typing in `heroku open` in your react app folder or by visiting the website that's logged out by a successful deployment. Example below for an app named `apprentice-starter-kit`:

```
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 69.9M
remote: -----> Launching...
remote:        Released v3
remote:        https://apprentice-starter-kit.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/apprentice-starter-kit.git
```

## Some notes for deploying a node back-end for Heroku:

1.  When using express `app.listen` you need to set the port to default to the environment variable: PORT.

```
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
```

2. You can change environmental variables for Heroku in the `Settings -> Config Vars` section by entering a KEY & VALUE, such as:
   KEY `DATABASE_URL` | VALUE `https://MY_DATABASE_CONNECTION_STRING`

3. You can add a free Database add-on such as PostgreSQL by going to `Settings -> Add-ons` and searching for `'Heroku Postgres'` and chosing the `'Hobby Dev -- Free'` plan. This will add a new environmental variable in your Heroku app that includes the database connection string.

- You should configure your app with a `.env` file to load in this `DATABASE_URL` to connect to your PostgreSQL database from your local node app. Alternatively you could setup your local PostgreSQL DB's connection as `DATABASE_URL` so that you can work off the local DB locally, and use the Heroku DB when deployed.
