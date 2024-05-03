
import './App.css'
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import PoolIcon from '@mui/icons-material/Pool';
import KayakingIcon from '@mui/icons-material/Kayaking';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

function valuetext(value) {
  return `${value}`;
}

const tasks = [
  {
    name: 'Play Football',
    time: 8,
    icon: <SportsSoccerIcon className="icon-play"/>
  },
  {
    name: 'Tennis',
    time: 11,
    icon: <SportsTennisIcon className="icon-play"/>

  },
  {
    name: 'Kayaking',
    time: 16,
    icon: <KayakingIcon className="icon-play"/>
  },
  {
    name: 'Swimming',
    time: 22,
    icon: <PoolIcon className="icon-play"/>

  },
];


// const tasks2 = [
//   {
//     name: 'Play Football',
//     time: 6,
//     icon: <SportsSoccerIcon className="icon-play"/>
//   },
//   {
//     name: 'Tennis',
//     time: 14,
//     icon: <SportsTennisIcon className="icon-play"/>

//   },
//   {
//     name: 'Kayaking',
//     time: 17,
//     icon: <KayakingIcon className="icon-play"/>
//   },
//   {
//     name: 'Swimming',
//     time: 20,
//     icon: <PoolIcon className="icon-play"/>

//   },
// ];


console.log(tasks[0].time)

const marks = [
  {
    value: 8,
    label: '8',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 16,
    label: '16',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 24,
    label: '24',
  },
];


const marks2 = [
  {
    value: 6,
    label: <Tooltip title='baseball at 6'>
    <IconButton>
      <SportsBaseballIcon className="icon-play2 pump" />
    </IconButton>
  </Tooltip>,
  },
  {
    value: 17,
    label: <Tooltip title='Football at 17'>
    <IconButton>
      <SportsSoccerIcon className="icon-play2 pump" />
    </IconButton>
  </Tooltip>,
  },
  {
    value: 18,
    label: <Tooltip title='Kayaking at 18'>
    <IconButton>
      <KayakingIcon className="icon-play2 pump" />
    </IconButton>
  </Tooltip>,
  }
];

const marks4 = [
  {
    value: 7,
    label: <Tooltip title='Swimming at 7'>
    <IconButton>
      <PoolIcon className="icon-play2 pump" />
    </IconButton>
  </Tooltip>,
  },
  {
    value: 18,
    label: <Tooltip title='Football at 18'>
    <IconButton>
      <SportsSoccerIcon className="icon-play2 pump" />
    </IconButton>
  </Tooltip>,
  },
  {
    value: 23,
    label: <Tooltip title='Kayaking at 23'>
    <IconButton>
      <KayakingIcon className="icon-play2 pump" />
    </IconButton>
  </Tooltip>,
  }
];

const marks3 = [
  {
    value: 10,
    label: <Tooltip title='baseball at 10'>
    <IconButton>
      <SportsBaseballIcon className="icon-play2 pump" />
    </IconButton>
  </Tooltip>,

  },
  {
    value: 22,
    label: <Tooltip title='Tennis at 22'>
    <IconButton>
      <SportsTennisIcon className="icon-play2 pump" />
    </IconButton>
  </Tooltip>,
  },
  {
    value: 6,
    label: <Tooltip title='Kayaking at 6'>
    <IconButton>
      <KayakingIcon className="icon-play2 pump" />
    </IconButton>
  </Tooltip>,
  }
];


function App() {
const [checked, setChecked] = useState(false); 
const [disable, setDisabled] = useState(false);
const [value, setValue] = useState(6)

const [events, setEvents] = useState(null)
const [time, setTime] = useState('')
const [icon, setIcon] = useState('')



const value2 = [7, 13]
const value3 = [13, 20]
const value4 = [9, 16]



  const sliderChangeHandler = (e) => {
    setValue(e.target.value)
    for (let i = 0; i < tasks.length; i++) {
      // if (value[0] === tasks[i].time || value[1] === tasks[i].time) {
        if (value === tasks[i].time - 1) {
          console.log(value, tasks[i].time)
          setEvents(tasks[i].name)
          setTime(tasks[i].time)
          setIcon(tasks[i].icon)
        } 
    }
  }

  const [days, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const labelChangeHandler = () => {
    return (
      <div style={{ textAlign: "center" }}>
        {value}
        <br />
        {value === time && <p className="label"><br></br>{events} {icon}</p> }
        <br />
      </div>
    );
  }

  const checkboxChangeHandler = () => {
    setChecked(!checked); 
    setDisabled(!checked);
  }
  const color = checked === false ? 'rgb(119, 119, 119) !important' : 'rgb(89, 158, 170) !important';

  return (
    <div className="app-container">
    <Box sx={{ width: 300 }} className="container">
      <h3 >My calendar (changeable)</h3>
      <form className="checkbox" >
       <label style={{fontWeight: 'bold'}}>Monday</label> 
       <Checkbox defaultChecked color="success"  onChange={checkboxChangeHandler}/>
      </form>
      <Slider
        style={{color : {color}}}
        className='slider'
        aria-label="Hour"
        defaultValue={6}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={1}
        marks={marks}
        min={6}
        max={24}
        disabled={disable}
        onChange={sliderChangeHandler}
        value={value}
        valueLabelFormat={labelChangeHandler}
      />
      {/* {events ? <p className='text'>{events} at {time}</p> : <p></p>} */}
      {/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}

    </Box>
    <Box sx={{ width: 300 }} className="container">
      <h3 >Other people 's calendar (view only)</h3>
      <div>
        <p className="text-label" style={{fontWeight: 'bold', fontSize: '18px'}}>Monday</p> 
      
      <Slider
        className='slider2'
        defaultValue={6}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={1}
        marks={marks2}
        min={6}
        max={24}
        value={value2}
      />
      </div>
      <div>
        <p className="text-label" style={{fontWeight: 'bold', fontSize: '18px'}}>Tuesday</p> 
      
      <Slider
        className='slider2'
        defaultValue={6}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={1}
        marks={marks3}
        min={6}
        max={24}
        value={value3}
      />
      </div>
      <div>
        <p className="text-label" style={{fontWeight: 'bold', fontSize: '18px'}}>Wednesday</p> 
      
      <Slider
        className='slider2'
        defaultValue={6}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={1}
        marks={marks4}
        min={6}
        max={24}
        value={value4}
      />
      </div>
      </Box>

      <Box sx={{ width: 300 }} className="container">
        <h3>Quan's Best Friend</h3>
        <ButtonGroup sx={{ m: 1, minWidth: 120, position:'absolute', left:'10%' }} 
          disableElevation
          variant="contained"
          aria-label="Disabled button group"
        >
          <Button>Just For Fun</Button>
          <Button>More Serious</Button>
        </ButtonGroup>
        <div>
  <FormControl sx={{ m: 1, minWidth: 120, position: 'absolute', left: '25%' }}>
    <InputLabel id="demo-simple-select-label">Days</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={days}
      label="Days"
      onChange={handleChange}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Days</MenuItem>
      <MenuItem value={20}>Weeks</MenuItem>
      <MenuItem value={30}>Months</MenuItem>
    </Select>
    <FormHelperText>Selectable</FormHelperText>
  </FormControl>
  <FormControl sx={{ m: 1, minWidth: 120, position: 'absolute', left: '32%' }}>
    <InputLabel id="demo-simple-select-label">Person</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={days}
      label="Days"
      onChange={handleChange}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>John</MenuItem>
      <MenuItem value={20}>Ivana</MenuItem>
      <MenuItem value={30}>Micheal</MenuItem>
    </Select>
    <FormHelperText>Selectable</FormHelperText>
  </FormControl>
  <FormControl required sx={{ m: 1, minWidth: 120, left: '88%' }}>
    <InputLabel id="demo-simple-select-required-label">Select Day</InputLabel>
    <Select
      labelId="demo-simple-select-required-label"
      id="demo-simple-select-required"
      value={days}
      label="Day"
      onChange={handleChange}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Monday</MenuItem>
      <MenuItem value={20}>Tuesday</MenuItem>
      <MenuItem value={30}>Wednesday</MenuItem>
      <MenuItem value={40}>Thursday</MenuItem>
      <MenuItem value={50}>Friday</MenuItem>
      <MenuItem value={60}>Saturday</MenuItem>
      <MenuItem value={70}>Sunday</MenuItem>
    </Select>
    <FormHelperText>Required</FormHelperText>
  </FormControl>
  <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',position: 'absolute', left: '25%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Tools
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
</div>

    </Box>
    </div>
  );
}

export default App;