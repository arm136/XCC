import { React, useEffect, useState } from 'react';
import { Box, Toolbar, Typography, Input } from '@mui/material';
import Editor from "@monaco-editor/react";
import Navbar from '../component/Navbar';
import Sidenav from '../component/Sidenav';
import Divider from '@mui/material/Divider';
// import Landing from '../compiler/components/Landing';
import Axios from 'axios';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const Playground = () => {


  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081/Playground')
      .then(res => {
        if (res.data.Status === "Success") {
          if (res.data.role === "user") {
            const id = res.data.id;
            navigate('/Playground');
          }
        } else {
          navigate('/start')
          console.log('Access Denied!');
        }
      })
  }, [navigate])

  // *****************Compiler******************************

  const [userCode, setUserCode] = useState(``);
  const [userLang, setUserLang] = useState("python");
  const [userTheme, setUserTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(20);
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const options = {
    fontSize: fontSize
  }



  // function to call the compile endpoint
  function compile() {
    setLoading(true);
    if (userCode === ``) {
      return
    }
    // Post request to call compile endpoint
    Axios.post(`http://localhost:8001/compile`, {
      code: userCode,
      language: userLang,
      input: userInput
    }).then((res) => {
      setUserOutput(res.data.output);
    }).then(() => {
      setLoading(false);
    })
  }

  // Function to clear output screen
  function clearOutput() {
    setUserOutput("");
  }

  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];
  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ]
  // *******************************************************

  return (
    <Box>
      <Navbar />
      <Box height={50} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, pl: 3, pr: 3, pt: 3 }}>

          <Typography
            variant="h4"
            sx={{ p: 0.5 }}
          >
            My Playground
          </Typography>
          <Divider />
          <br />
          {/* <Landing /> */}

          {/* navbar for the compiler */}
          <Box sx={{ backgroundColor: "grey" }}>
            <Toolbar >
              <Typography color="white">XCC Compiler</Typography>

              <Select options={languages} value={userLang}
                onChange={(e) => setUserLang(e.value)}
                placeholder={userLang} />

              <Select options={themes} value={userTheme}
                onChange={(e) => setUserTheme(e.value)}
                placeholder={userTheme} />

              <Typography color="white" > Font Size</Typography>

              <Input sx={{ marginInline: 3, }} type="range" min="18" max="30"
                value={fontSize} step="2"
                onChange={(e) => { setFontSize(e.target.value) }} />
            </Toolbar>
          </Box>

          <div className="main">
            <div className="left-container">
              <Editor
                className='edit'
                options={options}
                theme={userTheme}
                language={userLang}
                defaultLanguage="python"
                defaultValue="# Enter your code here"
                onChange={(value) => { setUserCode(value) }}
              />
              <button className="run-btn" onClick={() => compile()}>
                Run
              </button>
            </div>
            <div className="right-container">
              <h3>Input:</h3>
              <div className="input-box">
                <textarea id="code-inp"
                  onChange={(e) => setUserInput(e.target.value)}>
                </textarea>
              </div>
              <h3>Output:</h3>
              {loading ? (
                <div className="spinner-box">
                  {/* <img src={spinner} alt="Loading..." /> */}
                  <Typography color={"white"}>Loading......</Typography>
                </div>
              ) : (
                <div className="output-box">
                  <pre>{userOutput}</pre>
                  <button onClick={() => { clearOutput() }}
                    className="clear-btn">
                    Clear
                  </button>
                </div>
              )}
            </div>
          </div>

        </Box>
      </Box>
    </Box>
  );
}

export default Playground;