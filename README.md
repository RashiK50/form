<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My form</title>
    <link rel="stylesheet" href="improve.css">
</head>
<body>
    <h1 >Secret Santa Survey Form</h1>
    <hr>
    <h2>Your information</h2>
    <p>Sections marked * are bound to be filled</p>
    <hr>
    <p>Name *: <input type="text" required name="name" placeholder="Saurabh Salunke"></p>
    <p>Age: <input type="number" placeholder="30"></p>
    <p>Favorite Color: <input type="color"></p>
    <p>
        <fieldset>
            <legend>Gender*</legend>
            Male:<input type="radio" name="aaloo" id="gender">
            Female:<input type="radio" name="aaloo" id="gender" >
        </fieldset>
    </p>
    <p>Your Hobbies: <textarea name="#" placeholder="Painting"></textarea></p>
    <p>Secret Wish: <textarea name="#""></textarea></p>
    <p>Adress*: <textarea name="#"></textarea></p>
    <p>Ready to have a blast?<input type="checkbox"></p>
    
    <hr>
   <p> 
    Date of form filling   <input type="date"></p>
    <input type="reset">

   <input type="submit">
</body>
</html>
