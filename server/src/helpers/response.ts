export function handlerResponse(res) {
  return data => {
    const result = data || {
      success: true
    };

    res.send(result);
  };
}

export function handlerError(res) {
  return error =>
    res.status(400).send({
      error
    });
}
