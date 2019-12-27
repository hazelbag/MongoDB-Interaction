# Cars Database interaction with MongoDB

### Download the app to your local drive and run the following command to install the needed dependancies:

### First open the cars-app folder in your terminal and run

    npm install

### Then navigate to the backend folder in your terminal and run

    npm install

## Once You have installed the node modules, return to the root cars-app folder and run the following command to start the APP

    npm run dev

### The above command will start both backend and frontend

<br>

# Using the APP

    Once loaded on the home screen you will see all the items from the database being populated into a table

<br>

    You will note that each item has an edit and delete option, deleting an item will remove it from the database and editing will open a page where you can edit the item selected.

<br>

    To add a new item, head to the link at the top of the page 'Create Car Entry', here enter all the required info and submit, this will take you to the home page where you new item will be listed.

## mongoDB URI

    The uri is required to run the application, thus sign up on mongoDB.Atlas for a free account and add the uri to an .env file in the root of the backend folder as per below:

<br>

    ATLAS_URI=mongodb+srv://<username>:<password>@<uri info provided by mongoDB>t/test?retryWrites=true&w=majority
