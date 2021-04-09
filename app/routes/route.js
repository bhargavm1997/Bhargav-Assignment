const express = require('express');
const appConfig=require("../../config/appConfig")
const cont=require("../controllers/controller")

module.exports.setRouter = (app) => {

    app.get(`${appConfig.apiVersion}/users/sort`,cont.sortData)
    app.get(`${appConfig.apiVersion}/users/sum`,cont.sumMarks)
    app.get(`${appConfig.apiVersion}/users`,cont.userData)

}