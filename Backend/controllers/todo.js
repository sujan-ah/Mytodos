const Todo = require("../models/todo");

exports.createTodo = (req, res, next) => {
  const todo = new Todo({
    newProject: req.body.newProject,
    oldProject: req.body.oldProject,
    javaVedio: req.body.javaVedio,
    engSpoken: req.body.engSpoken,
    date: req.body.date,
  });
  todo
    .save()
    .then(() => {
      res.status(201).json({
        message: "Todo added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Fail to create todo",
      });
    });
};

exports.getTodos = (req, res, next) => {
  const todoQuery = Todo.find();
  todoQuery
    .then((doc) => {
      fetchedTodo = doc;
      return Todo.countDocuments();
    })
    .then((count) => {
      res.status(200).json({
        message: "All Todos Fetched 200!",
        posts: fetchedTodo,
        maxPosts: count,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Fetching todos failed",
      });
    });
};

// exports.getTodoById = (req, res, next) => {
//   Todo.findById(req.params.id)
//     .then((post) => {
//       if (post) {
//         res.status(200).json(post);
//       } else {
//         res.status(404).json({ message: "Todo not found!" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: "Fetching todo failed",
//       });
//     });
// };

// exports.updateTodo = (req, res, next) => {
//   const todo = new Todo({
//     _id: req.body.id,
//     title: req.body.title,
//     content: req.body.content,
//     date: req.body.date,
//   });
//   Todo.updateOne({ _id: req.params.id }, todo)
//     .then((result) => {
//       res.status(200).json({ message: "Update is Successful!" });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: "Couldn't update todo!",
//       });
//     });
// };

// exports.deleteTodo = (req, res, next) => {
//   Todo.deleteOne({ _id: req.params.id })
//     .then((resp) => {
//       res.status(200).json({ message: "Delete is successful!" });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: "Couldn't delete todo!",
//       });
//     });
// };
