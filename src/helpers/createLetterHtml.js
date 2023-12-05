const createLetterHtml = (initData) => {
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
                        border: 1px solid black;
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

export default createLetterHtml;