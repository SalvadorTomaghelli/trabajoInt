const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { validationResult } = require("express-validator");