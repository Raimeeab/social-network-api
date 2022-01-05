<img alt="GitHub Followers" src="https://img.shields.io/github/followers/Raimeeab"> <img alt="GitHub License" src="https://img.shields.io/apm/l/vim-mode">  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/Raimeeab/social-network-api">  <img alt="GitHub Commit Activity" src="https://img.shields.io/github/commit-activity/w/Raimeeab/social-network-api">

# Social Network API
---

## Table of Content 

* [Description](#description)
* [Technlogies](#technologies)
* [Usage](#usage)
* [Installation](#installation)
* [Contributors](#contributors)
* [License](#license)
* [Contribution](#contribution)
* [Questions](#questions)

<a name="description"></a>
## 📝 Description
<!-- This is a back end application for an e-commerce site, created using a configured working Express API & sequelize to interact with a MySQL database. Internet retail, also known as e-commerce, is the largest sector of the electronics industry, geenrating an estimate of $29 trillion in 2019. Due to their prevalence, the aim of this application is to demonstrate my understanding of the fundamental architecture of these platforms.  -->

![app-demo]()

<a name="technologies"></a>
## 🕹 Technologies used 
- 

<a name="installation"></a>
## ⚙️ Installation 
*You can download a step-by-step tutorial [here]() by clicking on the `view raw` link*

1. Git clone this repository onto your local machine and navigate to the file on your terminal. *This can also be done by opening the file on Visual Studios and running it through the intergated terminal.*

![git-clone]()

2. In order for the app to function correctly, ensure you have the latest or most stable version of Node.js and that you've entered your MySQL details into the `.env.EXAMPLE` and rename the file to `.env`.

![env-example]()

3. Run `npm install` to download all the required dependencies

![install]()

4. Create the schema from the MySQL shell by running: 
    - `mysql -u root -p` (enter password if/when prompted)
    - `source db/schema.sql`
 
![sql-example]()

5. To start the application, run:

    - `npm run start`

![sql-example]()


<a name="usage"></a>
## 🖥 Usage 
This application allows you to navigate different link routes that display data from the database. 

- GET/ POST routes: <br>
    `http://localhost:3001/api/products`<br>
    `http://localhost:3001/api/categories` <br>
    `http://localhost:3001/api/tags` <br>

     - If you wish to GET a certain id you can do so by adding an `/id` at the end of the link. 

- PUT/DELETE routes: <br>
    `http://localhost:3001/api/products/:id`<br>
    `http://localhost:3001/api/categories/:id` <br>
    `http://localhost:3001/api/tags/:id` <br>

You can set these routes up and run tests using [insomnia](https://docs.insomnia.rest/).

<a name="contributors"></a>
## 👥 Contributors

*[Raimee Abbassi](https://github.com/Raimeeab)* <br>
*The Univserity of Sydney | Trilogy Education Services* <br>

<a name="license"></a>
## 🔖 License

MIT License
Copyright (c) [2021] [E-Commerce Back End]
Permission is herby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limiation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject following coditions: 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MECHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OF OTHER DEALINGS IN THE SOFTWARE.  

---
<a name="contribution"></a>
## 🤝 How to Contribute

For information on how to contribute, please follow the guidlelines listed in [Contributor Covenant](https://www.contributor-covenant.org/).

<a name="questions"></a>
## ❓ Questions
If you have any questions, contact me via [email](raimee.abbassi@gmail.com). You can also find more of my work [here](https://github.com/Raimeeab).

