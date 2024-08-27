"use strict";

module.exports.hello = async (event) => {
  const message = "Go Serverless v2.0! Your function executed successfully!";
  console.log('Event', JSON.stringify(event));
  return {
    statusCode: 200,
    body: JSON.stringify(message),
  };
};
