import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./stylesForm";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(null);
        setPostData({ 
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(currentId === null) {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
        } else {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        }

        clear();
    }

    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography className={classes.formTextInput} variant="h6" align="center">
                    Please Sign In to create your own memories and like other's memories.
                </Typography>
            </Paper>
        );
    }

    return (
        // div with white bg
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} autoComplete="off" noValidate>

                <Typography className={classes.heading} variant="h6">{currentId ? "Editing" : "Creating"} a Memory</Typography>

                <TextField 
                    name="title" 
                    InputProps={{classes: {input: classes.formTextInput}}} 
                    InputLabelProps={{style: {fontFamily: "'Montserrat', sans-serif", fontWeight: 400}}} 
                    variant="outlined" 
                    label="Title" 
                    fullWidth 
                    value={postData.title} 
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
                />
                <TextField 
                    name="message" 
                    InputProps={{classes: {input: classes.formTextInput}}} 
                    InputLabelProps={{style: {fontFamily: "'Montserrat', sans-serif", fontWeight: 400}}} 
                    variant="outlined" 
                    label="Message" 
                    fullWidth 
                    value={postData.message} 
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
                />
                <TextField 
                    name="tags" 
                    InputProps={{classes: {input: classes.formTextInput}}} 
                    InputLabelProps={{style: {fontFamily: "'Montserrat', sans-serif", fontWeight: 400}}} 
                    variant="outlined" 
                    label="Tags (comma separated)" 
                    fullWidth 
                    value={postData.tags} 
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} 
                />

                <div className={classes.formFieldInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}

export default Form;
