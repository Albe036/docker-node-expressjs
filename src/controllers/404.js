const error404 = (req, res, next) => {
  res.status(404).json({ "status": "notFound" });
}

export default error404;