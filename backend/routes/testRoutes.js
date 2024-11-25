const express = require('express');
const { test } = require('./testRoutes');
const router = express.Router();

// post 전달
router.post(test);

// 라우터 구분
module.exports =router;