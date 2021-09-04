export const html = `<style>
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
<h1>Fitness Tracker API</h1>
<div style="margin-bottom:10px;">Get all exercises - <a href="/api/exercises">/api/exercises</a></div>
<div>Finished Exercises - <a href="/api/finished">/api/finished</a></div>
`;
