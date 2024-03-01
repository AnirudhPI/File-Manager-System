import React, {useState} from 'react';
import DiskSpaceIndicator from './DiskSpaceIndicator';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import SwitchVideoIcon from '@mui/icons-material/SwitchVideo';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import TerminalIcon from '@mui/icons-material/Terminal';
import DescriptionIcon from '@mui/icons-material/Description';
import AdbIcon from '@mui/icons-material/Adb';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import Description from '@mui/icons-material/Description';

const Sidebar = () => {

  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  const downloadData = ['Musics','Compressed','Videos','Programs','Documents','APKs','Images']


  const renderComponent = (title) =>{
    switch(title){
      case 'Musics':
        return <MusicNoteIcon sx={{color:'white'}}/>
      case 'Compressed':
        return <FolderZipIcon sx={{color:'white'}}/>
      case 'Videos':
        return <SwitchVideoIcon sx={{color:'white'}}/>
      case 'Programs':
        return <TerminalIcon sx={{color:'white'}}/>
      case 'Documents':
        return <DescriptionIcon sx={{color:'white'}}/>
      case 'APKs':
        return <AdbIcon sx={{color:'white'}}/>;
      case 'Images':
        return  <ImageSearchIcon sx={{color:'white'}}/>
    }
  }


  return (
    <>
      <div style={{
          // marginBlock: 'white',
          padding: 20,
          backgroundColor: 'black'
          // borderRadius: 10
          // backgroundColor: 'lightgray'
        }}>
      {/* <div style={{backgroundColor: 'red'}}> */}
        <Accordion disableGutters expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{borderTopRightRadius: 10,borderTopLeftRadius: 10}} sx={{ 
          backgroundColor: 'rgb(22, 13, 75)', 
          color: 'white',
        }}>
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon sx={{color:'white'}}/>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography style={{display:'flex',flexDirection:'row'}}> 
              <FolderCopyOutlinedIcon style={{paddingRight:'5px'}}/> 
              All Downloads
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {
              downloadData.map((title) => (
                <div key={title}>
                  <div style={{display: 'flex', alignItems: 'center', color: 'white', paddingLeft: '40px'}}>
                    <div>{renderComponent(title)}</div>
                    <div style={{ color: 'white', margin: 0, paddingLeft: '10px' }}>
                      <p style={{margin: 8}}>{title}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ 
            backgroundColor: 'rgb(22, 13, 75)', 
            color: 'white'
          }}>
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon sx={{
              color:'white'
            }}/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Finished</Typography>
          </AccordionSummary>
          <AccordionDetails>
                <Link href="/Something"> Something</Link>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{borderBottomRightRadius: 10,borderBottomLeftRadius: 10}} sx={{ 
            backgroundColor: 'rgb(22, 13, 75)', 
            color: 'white'
          }}>
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon sx={{
              color:'white'
            }} />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography>Unfinished</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                <Link href="/Something"> Something </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    {/* </div> */}
    <DiskSpaceIndicator />
  </>
  );
};

export default Sidebar;
