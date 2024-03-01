import React from 'react';
import styles from './DiskSpaceIndicator.module.css';
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import ViewDayIcon from '@mui/icons-material/ViewDay';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";

const DiskSpaceIndicator = () => {
  const diskUsagePercentage = 90;
  const diskUsageLabel = `C:\\Downloads`;

  return (
    <div style={{paddingBottom: 20, paddingLeft: 20, paddingRight: 20, backgroundColor: 'black'}}>
    <div className={styles.diskSpaceIndicator}>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start" style={{display: 'flex',alignItems: 'center',paddingTop: '10px',paddingBottom: '0',paddingLeft: '5px'}}>
          <ViewDayIcon sx={{color: 'white'}} />
          <span className={styles.label}>Disk Space</span>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <MoreHorizIcon sx={{ color: 'white' ,marginLeft:7}} />
           </div>
        </CardHeader>
        
        <CardBody className="overflow-visible py-2">
        </CardBody>
      </Card>
    
      <div className={styles.usageGauge}>
          <div style={{ width: '200px', height: '200px' }}>
            {/* Define the gradient */}
            
            <svg style={{ height: 0 }}>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2E9BAE" />
                  <stop offset="25%" stopColor="#2231D3" />
                  <stop offset="50%" stopColor="##750DCF" />
                  <stop offset="75%" stopColor="#2231D3" />
                  <stop offset="100%" stopColor="#C83EEB" />
                </linearGradient>
              </defs>
            </svg>

            <CircularProgressbarWithChildren
              value={diskUsagePercentage}
              circleRatio={0.5}
              styles={buildStyles({
                rotation: 0.75,
                strokeLinecap: 'butt',
                trailColor: '#eee',
                pathColor: 'url(#gradient)',
              })}
            >
              <div className={styles.emojiContainer}>
                😖
              </div>
            </CircularProgressbarWithChildren>
          </div>
      </div>

      <div className={styles.usageInfo}>
        <h1 className={styles.percentage}>{diskUsagePercentage}%</h1>
        <span className={styles.label}>{diskUsageLabel}</span>
      </div>
      
      <button className={styles.diskCleanerButton}>Disk Cleaner</button>
    </div>
    </div>
  );
};

export default DiskSpaceIndicator;
