//layouts.ejs

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Authentication</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
  <link rel="stylesheet" href="/css/style.css">

</head>

<body>

  <% if (!currentUser) {%>
    <li><a href="/auth/signup">Signup</a></li>
    <li><a href="/auth/login">Login</a></li>
    <li><a href="/flights/new">Flight Search</a></li>
    <% } else { %>
      <li><a href="/auth/logout">Logout</a></li>
      <li><a href="/profile">Profile</a></li>
      <% } %>
        <%- include('partials/alerts') %>
          <%- body %>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
              crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
              integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
              crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
              integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
              crossorigin="anonymous"></script>

</body>

</html>

//auth/login.ejs

<form action="/auth/login" method="POST">
    <label for="auth-email">Email</label>
    <input id="auth-email" type="email" name="email" required>

    <label for="auth-password">Password</label>
    <input id="auth-password" type="password" name="password" required>

    <input type="submit" value="Log In">
</form>
  
//auth/signup.ejs

<form action="/auth/signup" method="POST">
    <label for="new-email">Email</label>
    <input id="new-email" type="email" name="email" required>
  
    <label for="new-name">Name</label>
    <input id="new-name" type="text" name="name" required>
  
    <label for="new-password">Password</label>
    <input id="new-password" type="password" name="password" required>
  
    <input type="submit" value="Sign up">
</form>
  

//Controller/Flight
// locationToIATA('Mahshahr Airport').then((IATA) => console.log(IATA));

// const IATA = await locationToIATA('Mahshahr Airport');
// console.log(IATA);
// console.log(locationToIATA('Mahshahr Airport'));

// locationToIATA('Mahshahr Airport').then((IATA) => console.log(IATA));

// async function savedFlights(IATA, location, date) {
//     const flightDATA = await db.Flight.findAll({
//         where: {
//             origin: IATA,
//             destination: IATA,
//             departureAt: date,
//             returnAt: date
//         }
//     })
//     return savedFlights.IATACode;
// }
// savedFlights('Mahshahr Airport').then((Flights) => console.log(Flights));


// async function someFunction() {
//     const IATACode = await locationToIATA('Mashahr Airport');
//     console.log(IATACode)
// }

// fetch database information - IATA


<p>Origin: <%= flight.origin %>
</p>
<p>Destination: <%= flight.destination%>
</p>
<p>Departure At: <%= flight.departure_at %>
</p>
<p>Cost: $<%= flight.price %>
</p>
<p>Duration: <%= flight.duration %> minutes
</p>
