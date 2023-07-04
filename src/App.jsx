import { Container, Grid } from "@mui/material";
import Header from "./Components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FeaturedPost from "./Components/FeaturedPost";
import { featuredPosts, sidebar } from "./data/Data";
import PostCard from "./Components/PostCard";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.date} />
          ))}
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
          <Main title="Latest Articles" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer description="© 2023. All Rights Reserved. " />
    </ThemeProvider>
  );
}

export default App;
