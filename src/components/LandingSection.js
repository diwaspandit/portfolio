import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, I am Diwas!"; 
const bio1 = "IT Support Specialist | Frontend Developer"; 
const bio2 = ""; 
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365" 
 > 
   <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src="https://media.licdn.com/dms/image/D5635AQEExUnIfIdr-A/profile-framedphoto-shrink_400_400/0/1713361609403?e=1714125600&v=beta&t=cT3OB8_gAazlpvVm09sn2RgOehJ4G-6m5zox8EXfOKs" 
         size="3xl" 
         name="Diwas Pandit" 
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;