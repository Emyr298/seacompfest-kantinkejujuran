const userHandler = require('../handlers/user');

/* Session */
// Middleware to check if session is logged in
function checkLoggedIn(req, res, next) {
  if (req.session.userId != null) {
    next();
  } else {
    res.status(401).json({
      status: 'fail',
      message: 'please login first before fetching notes',
    });
  }
}

function getLoginInfo(req, res, next) {
  let userId;
  if (!req.session.userId != null) {
    userId = req.session.userId;
  } else {
    userId = null;
  }
  
  res.status(200).json({
    status: 'success',
    message: 'fetched login information',
    userId: userId,
  });
}

async function checkLoginValidity(req, res, next) {
  const isValid = await userHandler.validateInput(req.body);
  if (!isValid) {
    res.status(400).json({
      status: 'fail',
      message: 'username or password is invalid',
    });
  } else {
    next();
  }
}

function login(req, res, next) {
  const user = await userHandler.findUser(req.body.id, req.body.password);
  
  if (user) {
    req.session.userId = req.body.id;
  
    res.status(200).json({
      status: 'success',
      message: `logged in as ${req.body.id}`,
    });
  } else {
    res.status(404).json({
      status: 'fail',
      message: 'username or password is invalid',
    });
  }
}

function logout(req, res, next) {
  req.session.destroy();
  res.status(200).json({
    status: 'success',
    message: 'logged out',
  });
}

/* Registration */
async function checkRegisterValidity(req, res, next) {
  const isValid = await userHandler.validateInput(req.body);
  if (!isValid) {
    res.status(400).json({
      status: 'fail',
      message: 'username or password is invalid',
    });
  } else {
    next();
  }
}

async function registerUser(req, res, next) {
  await userHandler.addUser(req.body.id, req.body.password);
  req.session.userId = req.body.id;
  
  res.status(200).json({
    status: 'success',
    message: `user account with student id ${req.body.id} is created`,
  });
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