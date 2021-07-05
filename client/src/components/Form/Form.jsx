import React, { useState } from "react";
import FileBase from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./stylesForm";
import { createPost } from "../../actions/posts";

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        // dispatch an action
        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
        // div with white bg
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} autoComplete="off" noValidate>

                <Typography className={classes.heading} variant="h6">Creating a Memory</Typography>

                <TextField 
                    name="creator" 
                    InputProps={{classes: {input: classes.formTextInput}}} 
                    InputLabelProps={{style: {fontFamily: "'Montserrat', sans-serif", fontWeight: 400}}} 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth 
                    value={postData.creator} 
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })} 
                />
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
                    label="Tags" 
                    fullWidth 
                    value={postData.tags} 
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })} 
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
