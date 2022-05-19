const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    
price:{type:Number,required:true},

colors: {type:Array,required:true},
tags: {type:Array,required:true},

discount:{type:Number},

oldprice:{type:Number},

category:{ type: mongoose.Schema.ObjectId, ref: "Category" },

desc:{type:String,default:'Posuere in netus a eu varius adipiscing suspendisse elementum vitae tempor suspendisse ullamcorper aenean taciti morbi potenti cursus id tortor. Cursus nulla consectetur a eros adipiscing himenaeos nam taciti id turpis a scelerisque vel habitasse.'},





// cloudinary

    images: [{

       

        secure_url: String,

        public_id: String,

    }],




    colorimages: [{

       

      secure_url: String,

      public_id: String,

  }],



  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);