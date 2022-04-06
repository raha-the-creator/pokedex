import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StatValue from './statValue';

const InfoTab = () => (
  <Tabs>
    <TabList>
      <Tab>About</Tab>
      <Tab>Base Stats</Tab>
      <Tab>Evolution</Tab>
    </TabList>

    <TabPanel>
      <div className='container'>
        <div className='left'>
          <h2>About</h2>
            <StatValue category={"Generation"} value={"Seed"}/>
            <StatValue category={"Status"} value={"Seed"}/>
            <StatValue category={"Species"} value={"Seed"}/>
            <StatValue category={"Height"} value={"Seed"}/>
            <StatValue category={"Weight"} value={"Seed"}/>
            <StatValue category={"Abilities"} value={"Seed"}/>
        </div>
        <div className='right'>
          <h2>Training</h2>
            <StatValue category={"Catch Rate"} value={"Seed"}/>
            <StatValue category={"Base Friendship"} value={"Seed"}/>
            <StatValue category={"Base Experience"} value={"Seed"}/>
            <StatValue category={"Growth Rate"} value={"Seed"}/>
            <StatValue category={"Egg Type"} value={"Seed"}/>
            <StatValue category={"Egg Cycle"} value={"Seed"}/>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <p>Fettucini</p>
    </TabPanel>
    <TabPanel>
      <p>Ravioli</p>
    </TabPanel>
  </Tabs>
);