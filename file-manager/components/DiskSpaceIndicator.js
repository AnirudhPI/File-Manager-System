import React from 'react';
import styles from './DiskSpaceIndicator.module.css';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";


const DiskSpaceIndicator = () => {
  const diskUsagePercentage = 90;
  const diskUsageLabel = `C:\\Downloads`;

  return (
    <div className={styles.diskSpaceIndicator}>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    
      <div className={styles.usageGauge}>
        <div className={styles.usageGaugeFill} style={{ width: `${diskUsagePercentage}%` }} />
      </div>
      <div className={styles.usageInfo}>
        <span className={styles.percentage}>{diskUsagePercentage}%</span>
        <span className={styles.label}>{diskUsageLabel}</span>
      </div>
      <button className={styles.diskCleanerButton}>Disk Cleaner</button>
    </div>
  );
};

export default DiskSpaceIndicator;
