const path = require("path");
const expense = require("../models/expense");

exports.home = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "/views", "/index.html"));
};
exports.add = async (req, res, next) => {
  console.log(req.body);
  if (req.body.id === "") {
    await expense.create({
      price: req.body.price,
      quantity: req.body.quantity,
      product: req.body.product,
    });
  } else {
    await expense.update(
      {
        price: req.body.price,
        quantity: req.body.quantity,
        product: req.body.product,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
  }
  res.redirect("/");
};
exports.get = async (req, res, next) => {
  const product = await expense.findAll();
  res.json(product);
};

exports.post1 = async(req, res,next) => {
  let param = req.params.id;
 await (quantity -= 1)
  res.redirect('/');
};

exports.post2 = async(req, res, next) => {
  let param = req.params.id;
 await (quantity -= 2)
  res.redirect('/');
}
