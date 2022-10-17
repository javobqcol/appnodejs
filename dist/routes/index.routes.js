"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _task = require("../Controllers/task.controllers");
var router = (0, _express.Router)();
router.get("/", _task.renderTask);
router.post("/task/add", _task.createTask);
router.get("/edit/:id", _task.renderTaskEdit);
router.post("/edit/:id", _task.editTask);
router.get("/delete/:id", _task.deleteTask);
router.get("/toogleDone/:id", _task.toogleTaskDone);
var _default = router;
exports["default"] = _default;