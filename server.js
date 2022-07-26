const express = require('express');
const app = express ();
const fs = require('fs');
const path = require('path');
const notes = require('./db/db.json');
const randomId = require ('helper/uuid.js')
const PORT = process.env.PORT || 3001;