const router = require('express').Router();
let Car = require('../models/car.model');

// Route for the home page, find the cars and render the json file
router.route('/').get((req, res) => {
  Car.find()
    .then(cars => res.json(cars))
    .catch(err => res.status(400).json('Error: ' + err));
});
// Method to add a new car item to the list, declared all the fields
router.route('/add').post((req, res) => {
  const model = Number(req.body.model);
    const make = req.body.make;
    const color = req.body.color;
    const reg_num = req.body.reg_num;
    const owner = req.body.owner;
    const address = req.body.address;
    console.log(req.body)

    const newCar = new Car({
        model,
        make,
        color,
        reg_num,
        owner,
        address,
    });
    // Once a new item is added, save it
  newCar.save()
    .then(() => res.json('Car added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Find a car by the ID generated by mongoDB
router.route('/:id').get((req, res) => {
    Car.findById(req.params.id)
      .then(car => res.json(car))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  // Delete a car by ID from the database
  router.route('/:id').delete((req, res) => {
    Car.findByIdAndDelete(req.params.id)
      .then(() => res.json('Car deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  // Update an item with the specific ID
  router.route('/update/:id').post((req, res) => {
    Car.findById(req.params.id)
      .then(car => {
        car.model = Number(req.body.model);
        car.make = req.body.make;
        car.color = req.body.color;
        car.reg_num = req.body.reg_num;
        car.owner = req.body.owner;
        car.address = req.body.address;
  
        car.save()
          .then(() => res.json('Car updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;