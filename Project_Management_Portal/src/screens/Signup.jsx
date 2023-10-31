import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {prism, projectScreening} from '../assets';
import {Stack} from '@mui/material'
import { Link as linkRoute } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Lottie from 'lottie-react';
import {Select,MenuItem,InputLabel} from '@mui/material'
import { useState } from 'react';
import {MuiCheckbox} from '../components/MuiCheckbox'
import { DEGREES_COURSES, SUB_COURSES } from '../constants';
import theme from '../theme';
import {FormControl,Radio,FormLabel,RadioGroup,FormControlLabel} from '@mui/material'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        Project Mangament Portal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export const Signup=()=> {

  const [isModuleLeader,setIsModuleLeader]=useState(false)

  const [selectedOption,setSelectedOption]=useState("Staff")

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  const [selectedDegree,setSelectedDegree]=useState()
  const [selectedSubCourse,setSelectedSubCourse]=useState()
  const [selectedType,setSelectedType]=useState()

  return (

    <Stack flexDirection={'row'} height={'100vh'}>
      
      {/* left container */}
      <Lottie animationData={projectScreening}/>

      {/* rigght container */}
      <Stack flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

            {/* Image container */}
            {/* <Stack width={'500px'}>
              <img src={logo} style={{width:"100%",height:"100%",objectFit:"contain"}} alt="logo-university" />
            </Stack> */}

            {/* feild and details container */}
            <Stack justifyContent={'center'} alignItems={'center'}>

            <Stack width={"30rem"} spacing={2}>

                <Stack flexDirection={'column'} justifyContent={"space-around"}>

                      <Typography justifySelf={'center'} alignSelf={'center'} variant='h4' fontWeight={600} color={'primary'}>Project Management</Typography>

                      <Stack mt={2} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                      <InputLabel sx={{mr:1}}>Select Role</InputLabel>
                      <Select
                        label="Select Role"
                        value={selectedOption}
                        onChange={()=>setSelectedOption(selectedOption==='Staff'?"Student":"Staff")}
                      >
                        <MenuItem value="Staff">Staff</MenuItem>
                        <MenuItem value="Student">Student</MenuItem>
                      </Select>
                      </Stack>


                </Stack>
                {
                  selectedOption==='Student'?(
                    <>
                    <Stack flexDirection={'row'} width={'100%'}>
                      <TextField placeholder='First Name' fullWidth/>
                      <TextField placeholder='Last Name' fullWidth/>
                    </Stack>
                    <TextField placeholder='Matriculation ID' type='number'/>
                    <TextField placeholder='Entry Year' type='number'/>

                    <Stack flexDirection={'row'}>

                      {/* select degree */}
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Select Degree</InputLabel>
                          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={selectedDegree}
                            onChange={(e)=>setSelectedDegree(e.target.value)}
                          >
                            {
                              DEGREES_COURSES.map((item,index)=><MenuItem value={item} key={index}>{item}</MenuItem>)
                            }
                          </Select>
                        </FormControl>

                      {/* sub courses */}
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Sub Courses</InputLabel>
                          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={selectedSubCourse}
                            onChange={(e)=>setSelectedSubCourse(e.target.value)}
                          >
                            {
                              SUB_COURSES[selectedDegree]?.map((item,index)=><MenuItem value={item} key={index}>{item}</MenuItem>)
                            }
                          </Select>
                        </FormControl>



                    </Stack>

                    <Stack>
                    

                    <FormControl sx={{mt:1}}>
                          <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                          <RadioGroup value={selectedType} onChange={(e)=>setSelectedType(e.target.value)}
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel value="full-time" control={<Radio />} label="Full Time" />
                            <FormControlLabel value="part-time" control={<Radio />} label="Part Time" />
                          </RadioGroup>
                    </FormControl>

                    </Stack>

                    <Stack>

                    </Stack>
                    <TextField placeholder='Password' type='password'/>
                    <TextField placeholder='Confirm Password' type='password'/>
                    </>
                  ):(
                    // if staff
                    <>
                    <TextField placeholder='Name'/>
                    <TextField placeholder='Staff ID'/>
                    <MuiCheckbox  label={'Check this, If you are a Module Leader'} checked={isModuleLeader?true:false} handleOnChange={()=>setIsModuleLeader(!isModuleLeader)}/>
                    {
                      isModuleLeader?(
                        <TextField placeholder='Module Title'/>
                      ):("")
                    }
                    <TextField placeholder='Password' type='password'/>
                    <TextField placeholder='Confirm Password' type='password'/>
                    
                    
                    </>
                  )
                }
                <Button variant='contained' sx={{height:'3rem'}}>Signup</Button>
            </Stack>
            
            <Link component={linkRoute} mt={2} to={'/login'} variant="body2">
                    {"Already a member? Log in"}
            </Link>
            <Copyright sx={{ mt: 5 }} />

            </Stack>


        </Stack>
        
      </Stack>
  );
}