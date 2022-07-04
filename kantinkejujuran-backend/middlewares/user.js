const userHandler = require('../handlers/user');

/* Session */
// Middleware to check if session is logged in
function checkLoggedIn(req, res, next) {
  if (req.session.userId != null) {
    next();
  } else {
    res.status(401).json({
      message: 'please login first before fetching notes',
    });
  }
}

function getLoginInfo(req, res, next) {
  let id;
  if (req.session.userId != null) {
    id = req.session.userId;
  } else {
    id = null;
  }
  
  res.status(200).json({
    id: id,
    message: 'test',
  });
}

async function checkLoginValidity(req, res, next) {
  const isValid = await userHandler.validateInput(false, req.body);
  if (!isValid) {
    res.status(400).json({
      message: 'username or password is invalid',
    });
  } else {
    next();
  }
}

async function login(req, res, next) {
  const user = await userHandler.findUser(req.body.id, req.body.password);
  
  if (user) {
    req.session.userId = req.body.id;
    
    res.status(200).json({});
  } else {
    res.status(404).json({
      message: 'username or password is invalid (not found)',
    });
  }
}

function logout(req, res, next) {
  req.session.destroy();
  res.status(200).json({});
}

/* Registration */
async function checkRegisterValidity(req, res, next) {
  const isValid = await userHandler.validateInput(true, req.body);
  if (!isValid) {
    res.status(400).json({
      message: 'username or password is invalid',
    });
  } else {
    next();
  }
}

async function registerUser(req, res, next) {
  await userHandler.addUser(req.body.id, req.body.password);
  req.session.userId = req.body.id;
  
  res.status(200).json({});
}

module.exports = {
  checkRegisterValidity,
  registerUser,
  checkLoggedIn,
  getLoginInfo,
  checkLoginValidity,
  login,
  logout,
};
