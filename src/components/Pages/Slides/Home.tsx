import { Grid } from "@mantine/core"

const Home = () => {
  return (
    <div className={"w-screen h-screen flex items-center justify-around"}>
      <Grid className="w-full h-full">
        <Grid.Col sm={3} className="flex items-center justify-center">
          <div className="intro">Intro</div>
        </Grid.Col>
        <Grid.Col sm={6} className="flex items-center justify-center" >
          <div className="avatar  ">Avatar</div>
        </Grid.Col>
        <Grid.Col sm={3} className="flex items-center justify-center">
          <div className="skills">Skills</div>
        </Grid.Col>
        
        
        
      </Grid>
      
    </div>
  )
}

export default Home