import React from 'react'
import { Navbar } from '../components/Navbar'
import { Leftbar } from '../components/Leftbar'
import { Box, Stack } from '@mui/material'
import { ProjectCard } from '../components/ProjectCard'
import { newProjectsData } from '../constants'

export const Apply = () => {
  return (
    <>
    <Navbar/>
    
    <Stack sx={{width:'100vw',height:"100vw",minHeight: "calc(100vh - 6rem)",justifyContent:'center',alignItems:'center',flexDirection:"row",display:'flex',p:1}}>
        

        <Stack width={"70%"} height={"100%"}  justifyContent={'space-evenly'} alignItems={'center'} flexDirection={'row'}>
            

            {/* leftbar */}
            <Box flex={'20%'} height={"100%"}>
                <Leftbar/>
            </Box>

            
            {/* apply cards shown here */}
            <Stack flex={'80%'} justifyContent={'flex-start'} alignItems={'center'} height={'100%'}>

              <Stack width={'100%'} p={2} justifyContent={'center'} alignItems={'center'}>
                {
                  newProjectsData.map((data)=>{
                    return <ProjectCard projectTitle={data.project_name} supervisorName={data.supervisor_name} problemStatement={data.project_details} difficultyRating={data.difficulty_rating} key={data.project_name}/>
                  })
                }

              </Stack>
            </Stack>
            
          </Stack>

    </Stack>
    
    </>
  )
}
