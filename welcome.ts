export const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fitness Tracker API</title>
    <style>
      body,
      html {
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        background: #303030;
        color: #fff;
        font-family: Roboto, Helvetica Neue, sans-serif;
        text-align: center;
      }
      body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        width: 330px;
        height: 100vh;
      }
      h1 {
        padding: 20px;
        font-size: 24px;
      }
      a {
        color: #f48fb1;
        text-decoration: none;
      }
      a:hover,
      a:focus,
      a:visited {
        color: #f48fb1;
      }
    </style>
  </head>
  <body>
    <h1>Fitness Tracker API</h1>
    <div style="margin-bottom: 10px">
      Get all exercises - <a href="/api/exercises">/api/exercises</a>
    </div>
    <div>Finished Exercises - <a href="/api/finished">/api/finished</a></div>
  </body>
</html>

`;
