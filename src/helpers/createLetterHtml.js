const createExcursionLetter = (initData) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("uk-UA", options).format(initData.date);

    const body = {
        ...initData,
        letterSubject: "Vintage Wine - Excursion",
        letterHtml: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Excursion Reservation Confirmation</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    }
            
                    .container {
                        max-width: 600px;
                        margin: 10px auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
            
                    h1 {
                        text-align: center;
                        color: #333333;
                        margin-top: 0;
                    }
            
                    p {
                        color: #555555;
                    }
            
                    .confirmation-message {
                        background-color: #4caf50;
                        color: #ffffff;
                        padding: 10px;
                        text-align: center;
                        margin-top: 20px;
                        border-radius: 3px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Excursion Reservation Confirmation</h1>
                    <p>Dear ${initData.firstName} ${initData.lastName},</p>
                    <p>Thank you for reserving the excursion with us. We are excited to have you on board! Below are the details of your reservation:</p>
        
                    <ul>
                        <li><strong>Excursion:</strong> ${initData.title}</li>
                        <li><strong>Date:</strong> ${formattedDate}</li>
                    </ul>
            
                    <p>We look forward to providing you with an unforgettable experience. If you have any questions or need further assistance, feel free to contact us.</p>
            
                    <div class="confirmation-message">
                        <span>Your reservation is confirmed. See you soon!</span>
                    </div>
                </div>
            </body>
            </html>
        `,
    }

    return body;
}

const createOrderLetter = (initData, orderedProducts) => {

    const prods = orderedProducts.map(({ instance, quantity }) => {
        return (`
            <tr>
                <td>${instance.name}</td>
                <td>${quantity}</td>
                <td>${(instance.currentPrice * quantity).toFixed(2)}</td>
            </tr>
        `);
    }).join('');

    return (`
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Confirmation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
        
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    border: 1px solid #ccc;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
        
                h2 {
                    text-align: center;
                    color: #333;
                    font-size: 24px;
                }

                h3 {
                    font-size: 18px;
                    margin-bottom: 0;
                }
        
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
        
                table, th, td {
                    border: 1px solid #ddd;
                }
        
                th, td {
                    padding: 12px;
                    text-align: left;
                }
        
                th {
                    background-color: #f2f2f2;
                }
        
                .footer {
                    margin-top: 20px;
                    padding-top: 10px;
                    border-top: 1px solid #ddd;
                }

                .end {
                    text-align: center;
                    font-weight: bold;
                }
            </style>
        </head>
        
        <body>
            <div class="container">
                <h2>Order Confirmation</h2>
        
                <p>Dear ${initData.name},</p>
        
                <p>Thank you for your order. We are pleased to confirm that your order has been successfully processed and is on its way. Below are the details of your order:</p>
        
                <h3>Delivery Information</h3>
                <p><strong>Address:</strong> ${initData.address}, ${initData.city}, ${initData.country}</p>
        
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> ${initData.name} ${initData.lastName}</p>
                <p><strong>E-mail:</strong> ${initData.email}</p>
                <p><strong>Phone:</strong> ${initData.phone}</p>
        
                <h3>Ordered Products</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${prods}
                    </tbody>
                </table>
        
                <div class="footer">
                    <p>If you have any questions or concerns, please contact our customer support:</p>
                    <p>Tel: <a href="tel:380501972693">+380501972693</a></p>
                    <p>E-mail: <a href="mailto:vine.vintage.vv@gmail.com">vine.vintage.vv@gmail.com</a></p>
                    
                    <p class="end">Thank you for shopping with us!</p>
                </div>
            </div>
        </body>
        
        </html>
        `)
}


export { createExcursionLetter, createOrderLetter };