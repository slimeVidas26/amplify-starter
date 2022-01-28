

exports.handler = async (event) => {
    await console.log(event)
    const customerId = event.pathParameters.customerId
    const customer = {'customerId': customerId , 'customerName' : 'customer'+customerId}

    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify(customer),
    };
    return response;
};
