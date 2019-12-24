### TO START OFF WITH
### https://eugenekoen.github.io/ejsapp
### On the Client Side:

-> Open Node.js
-> Type in:
	- npx create-react-app ejsapp
	- (after app has been created): cd appname
	- git init
	- git add .
	- git commit -m "initial commit"

### Then jump to server side (in this tutorial it will be Github)

-> Log into Github
-> Create new Repository called <ejsapp>
-> Leave everything else blank (dont create README.md) and click on create
-> Then under code, Github will display code like git remote.... and git push....

### Then back to client side but taking server side information

-> In node.js (hopefully you havent closed it yet)
-> Type in:
    - git remote add origin https://github.com/eugenekoen/ejsapp.git
    - git push origin master
(Dont close the Node.js)
-> Next we need to install GH Pages:
   Type in:
     - npm install --save gh-pages

-> Next, we need to edit our package.json file and add a homepage and a script called redeploy and deploy:

   Go to the package.json file of the app that was created:
    - in the first brackets type in: "homepage" :"https://githubusername.github.io/appname",
    - in the scripts brackets type in:     
    	"predeploy":"npm run build",
    	"deploy": "gh-pages -b master -d build",

-> Next, go to Node.js:
	Type in:
	  - git init
	  - git add .
	  - git commit - m "second commit"
	  - npm run build
	  - npm run deploy
