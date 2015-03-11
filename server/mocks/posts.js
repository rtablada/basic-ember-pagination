module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    if (req.query.page == 2) {
      return res.send({
        "posts": [
          {
            id: 3,
            title: '3'
          },
          {
            id: 4,
            title: '4'
          }
        ]
      });
    }

    res.send({
      "posts": [
        {
          id: 1,
          title: '1'
        },
        {
          id: 2,
          title: '2'
        }
      ]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
