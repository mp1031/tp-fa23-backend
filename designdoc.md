1. Why did you choose to organize your data schemas/models in a particular way?

    I chose to organize my data schemas/models in a way that lined up with the expected request body and example response.I used many resources that I will link below, but I made the contestant model that was made up of the contestant's name, husband's name, vocal range, and husband's location. 
    
2. Feel free to talk a bit about the "harder" routes that you worked on and how you approached them — harder is completely subjective, so feel free to get creative here!

    Throughout the three routes, I struggled most to access the values for each parameter in the Schema. I was trying to test out my code with Postman, but I couldn't figure out why I kept getting an empty array for the GET all contestants or an empty object for the GET husband call. At the end, I realized that I was supposed to send the data in as a JSON file, which took me a while to figure out. I explored Youtube tutorials and searched up specific syntax in order to come across my solution.

3. How did you decide on certain response codes or errors?

    My errors were sent when (1) not all the data needed for the Contestant model was sent, (2) the contestant's name was not a possible option for the GET husband call route, and (3) when the contestant's vocal range was not sufficient to reach the husband. I was not sure how to add the response codes or specific errors, so I made new errors with messages (ex. throw new Error("The vocal range is less than the husband's location!"))

References:
https://mongoosejs.com/docs/api/mongoose.html
https://www.udemy.com/course/the-complete-web-development-bootcamp/
https://www.youtube.com/watch?v=fgTGADljAeg&t=1411s&ab_channel=WebDevSimplified
https://www.youtube.com/watch?v=9OfL9H6AmhQ&t=2370s&ab_channel=Devtamin
https://stackoverflow.com/questions/35149638/how-do-i-access-methods-attached-to-a-schema-in-mongoose
https://apidog.com/articles/how-to-send-json-post-reques-with-postman/
https://stackoverflow.com/questions/9952649/convert-mongoose-docs-to-json
https://www.w3schools.com/js/js_object_definition.asp
https://stackoverflow.com/questions/9157210/how-do-i-raise-the-same-exception-with-a-custom-message-in-python
https://www.dctacademy.com/blog/storing-an-array-of-objects-in-a-mongoose-field-a-guide#:~:text=Schema
https://www.dctacademy.com/blog/storing-an-array-of-objects-in-a-mongoose-field-a-guide#:~:text=Schema(%7B%20myArray%3A%20%5BsubSchema%5D,age%22%20field%20of%20type%20Number.

