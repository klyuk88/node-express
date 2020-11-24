const { log } = require('debug');
var express = require('express');
const {
  v4: uuidv4
} = require('uuid');
var router = express.Router();


let users = [{
    id: 1,
    name: 'Ilya'
  },
  {
    id: 2,
    name: 'Nastya'
  },
  {
    id: 3,
    name: 'Olga'
  },
]


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(users);
});


router.post('/', (req, res, next) => {
  const user = {
    id: uuidv4(),
    name: req.body.name
  }
  if (user.name) {
    users.push(user)
    res.json(users)
  } else {
    res.json({
      mess: 'Invalid name'
    })
  }


})

router.get('/:id', (req, res, next) => {
  const userId = +req.params.id
  const user = users.find(item => item.id === userId)
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({
      mess: 'User not found'
    })
  }

})

router.put('/:id', (req, res, next) => {
  const userId = +req.params.id
  if (!req.body.name) {
    res.json({
      mess: 'Invalid name'
    })
  } else {
    users.forEach(item => {
      if (item.id === userId) {
        item.name = req.body.name
      }
    })
    res.json(users)
  }
})

router.delete('/:id', (req, res, next) => {
  const userId = +req.params.id
  const user = users.find(item => item.id === userId)
  if(user) {
    const newUsers = users.filter(item => item.id !== userId)
    users = newUsers
    res.json(users)
  } else {
    res.status(400).json({
      mess: `Not found user with id: ${userId}`
    })
  }
  
})


module.exports = router;