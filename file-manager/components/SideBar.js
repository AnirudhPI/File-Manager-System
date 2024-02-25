import React, { useState } from 'react';
import DiskSpaceIndicator from './DiskSpaceIndicator';
import styles from './Sidebar.module.css'; 
import {Accordion, AccordionItem, dropdown} from "@nextui-org/react";

const Sidebar = () => {

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
        <div className={styles.dropdown}>
        <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="All Downloads">
                hi
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Unfinished">
                hello
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Finished">
                done
            </AccordionItem>
        </Accordion>
        </div>
        <div>
            <DiskSpaceIndicator />
        </div>
    </div>
    
   
  );
};

export default Sidebar;
