import "./css/main.css";
import "./css/rain.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <meta charSet="UTF-8" />
      <link rel="stylesheet" href="css/rain.css" />
      <link rel="stylesheet" href="css/main.css" />
      <div className="content-main">
        <h1>devan</h1>
        <br />
        <p>
          {" "}
          hi, im devan.
          im a rec room youtuber, developer and anime enjoyer
        </p>
        <br />
        <div className={classes.root}>
          <Button
            variant="contained"
            color="secondary"
            href="https://discord.com/users/544912517877727242"
          >
            Discord
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="https://devan.cool"
          >
            Site
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href="https://rec.net/user/devanwiththetshirt"
          >
            rec.net
          </Button>
        </div>
      </div>
      <p/>
    </div>
  );
}

export default App;
