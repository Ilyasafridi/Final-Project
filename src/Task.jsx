

import { TextField, Button, Grid, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

let Task = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        // Add the new task with initial status "To Do"
        setTasks([...tasks, { title, description, status: 'To Do' }]);
        // Clear the input fields
        setTitle('');
        setDescription('');
    }

    const moveTask = (index, newStatus) => {
        // Update the status of the task at the given index
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, status: newStatus } : task
        );
        setTasks(updatedTasks);
    }

    const renderTasks = (status) => (
        <Box sx={{ backgroundColor: 'white', width: '100%', padding: 2, borderRadius: 1, boxShadow: 3, maxWidth: '300px' }}>
            <h3 style={{ backgroundColor: 'whitesmoke', padding: '0.5rem', borderRadius: '8px' }}>{status}</h3>
            {tasks.filter(task => task.status === status).map((task, index) => (
                <li key={index} style={{ listStyle: 'none', margin: '1rem 0', padding: '0.5rem', backgroundColor: 'blue', borderRadius: '8px' }}>
                    <h4 style={{color : 'white'}}>Title: {task.title}</h4>
                    <h4 style={{color : 'white'}}>Description: {task.description}</h4>

                    {status === 'To Do' && (
                        <>
                            <Button variant="contained" onClick={() => moveTask(index, 'In Progress')} style={{ marginRight: '0.5rem' }}>
                                Move To Progress
                            </Button>
                            <br /><br />
                            <Button variant="contained" onClick={() => moveTask(index, 'Completed')}>
                                Move To Complete
                            </Button>
                        </>
                    )}
                    {status === 'In Progress' && (
                        <>
                            <Button variant="contained" onClick={() => moveTask(index, 'To Do')} style={{ marginRight: '0.5rem' }}>
                                Move To To Do
                            </Button>
                            <br /><br />
                            <Button variant="contained" onClick={() => moveTask(index, 'Completed')}>
                                Move To Complete
                            </Button>
                        </>
                    )}
                    {status === 'Completed' && (
                        <>
                            <Button variant="contained" onClick={() => moveTask(index, 'To Do')} style={{ marginRight: '0.5rem' }}>
                                Move To To Do
                            </Button>
                            <br /><br />
                            <Button variant="contained" onClick={() => moveTask(index, 'In Progress')}>
                                Move To Progress
                            </Button>
                        </>
                    )}
                </li>
            ))}
        </Box>
    );

    return (
        <Box sx={{ padding: 2 }}>
            <form onSubmit={addTask}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                            fullWidth
                            id="outlined-title"
                            label="Your Title"
                            variant="outlined"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                            fullWidth
                            id="outlined-description"
                            label="Your Description"
                            variant="outlined"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Button fullWidth type="submit" variant="contained" endIcon={<SendIcon />}>
                            Add Task
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <Grid container spacing={2} justifyContent="center" marginTop={2}>
                <Grid item xs={12} sm={6} md={4}>
                    {renderTasks('To Do')}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {renderTasks('In Progress')}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {renderTasks('Completed')}
                </Grid>
            </Grid>
        </Box>
    );
}

export default Task;
