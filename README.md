# evaluate-news-nlp

Evaluate a News Article with Natural Language Processing Udacity

---

### What is used in this project

-   JavaScript (with new ES6 functionalities)
-   HTML
-   Sass (both scss and sass)
-   Babel
-   Webpack
    -   Dev-server
    -   dev-middleware
    -   Plugins: CleanWebpackPlugin, HtmlWebpackPlugin, GenerateSW, MiniCssExtractPlugin

---

## Focus of this Project

In this Project the focus was to create a **frontend for the use NLP on Blog and Articles**. The NLP was delivert from [MeaningCloud](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1)

---

## How to start the project

To build and start the project please use (this will start it in production mode):

```bash
    npm run build
    npm start
```

To develop futher in the project:

Directly start reloadable server and client run (will start at [http//:localhost:3000](http//:localhost:3000))\
The browser still needs to be reloaded manually.\
Please also use hard relaod ( ⌘ + ⇧ + R) because service Worker may interupt
Also clear the dist folder!

```bash
    npm run server
```

Start reloadable server and start webpack-dev-server for hot reload on broser\
(server will start at [http//:localhost:3000](http//:localhost:3000))\
(browser will start at [http//:localhost:8080](http//:localhost:8080))

```bash
    npm run server
```

in a seperate terminal

```bash
    npm run dev
```
