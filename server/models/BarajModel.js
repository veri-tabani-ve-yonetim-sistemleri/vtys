const express = require('express');
const mongoose = require('mongoose');
const app = express();

// JSON verilerini işlemek için middleware'leri eklendi
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB şeması oluştur
const BarajSchema = new mongoose.Schema({
  il:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Il',
    require:true,
  },
  plaka:{
    type:Number,
    require:true,
    max:81,
  },
  baraj_adi:{
    type:String,
    require:true,
  },
  oran:{
    type:Number,
    require:true,
  },
  yil:{
    type:Date,
    require:true,
  }
},{timestamps:true})

// Model oluştur
const BarajModel  = mongoose.model('Baraj', BarajSchema);
 
module.exports = BarajModel;