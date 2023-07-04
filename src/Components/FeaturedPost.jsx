import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const FeaturedPost = () => {
  return (
    <Card
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1687599556215-536da19dc9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODQ4NjY2NA&ixlib=rb-4.0.3&q=80&w=1080)",
        backgroundPosition: "center",
        padding: "35px 25px",
      }}
    >
      <CardContent style={{ color: "white" }}>
        <Typography gutterBottom style={{ fontSize: "40px" }}>
          Title of a longer featured blog post.
        </Typography>
        <Typography variant="h5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quaerat
          provident dolores delectus maxime dolorum?
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="outlined">Read More...</Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
