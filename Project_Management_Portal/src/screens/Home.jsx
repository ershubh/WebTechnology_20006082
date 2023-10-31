import {Box,Stack,Typography } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar'
import { Leftbar } from '../components/Leftbar'
import { assignedProjectsData } from '../constants'
import { AssignedProjectCard } from '../components/AssignedProjectCard'

export const Home = () => {
  return (
    <>
    <Navbar/>

    <Stack sx={{width:'100vw',height:"100vh",justifyContent:'center',alignItems:'center',flexDirection:"row",display:'flex',p:1}}>
        

        <Stack width={"70%"} height={"100%"}  justifyContent={'space-evenly'} alignItems={'center'} flexDirection={'row'}>

            <Box flex={"20%"}  bgcolor={'red'} height={"100%"}>
                <Leftbar/>
            </Box>

            {/* rightbar */}
            <Stack flex={"80%"} height={'100%'}>
                <Stack width={'100%'} p={2} justifyContent={'center'} alignItems={'center'}>
                  {
                    assignedProjectsData.map((data)=>{
                      return <AssignedProjectCard problemStatement={data.project_desc} projectName={data.project_name} dateJoined={data.date_joined} completedPercentage={data.completed_percentage} status={data.status} supservisorName={data.supervisor_name} key={data.id}/>
                    })
                  }
                </Stack>
            </Stack>


        </Stack>

    </Stack>
    </>
  )
}
