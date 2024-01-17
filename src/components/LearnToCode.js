import React from 'react'
import './LearnToCodeStyles.css'
    const LearnToCode = () => {
         return (
    <div>
      <section class="section_Heading">
            <div class="section_container">
            <h1>Learn to code</h1>
            <p>With the world's largest web developer site.</p>
           
            </div>
        </section>

        <div class="svgBug"></div>
        <section class="section_html">
            <div class="section_left">
                <h1>HTML</h1>
                <p>The language for building web pages</p>
                <a href="/htmlHome" class="editor_btn">Learn HTML</a>
                {/* <a href="https://www.youtube.com/watch?v=BsDoLVMnmZs" class="bg-yellow" target="_blank">Video Tutorial</a> */}
                <a href="/htmlHome" class="bg-black">HTML Reference</a>
                {/* <a href="" class="bg-pink">Get Certified</a> */}
            </div>
            <div class="section_right">
                <div class="editor_container">
                    <h1>HTML Example</h1>
                    <div class="editor" id="htmlCode">
                    <div class="notranslate htmlHigh">
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>!DOCTYPE <span style={{color:"red"}}>html</span></span><span style={{color:"blue"}}>&gt;</span><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>html</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>head</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>title</span><span style={{color:"blue"}}>&gt;</span>Page Title<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/title</span><span style={{color:"blue"}}>&gt;</span><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/head</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>body</span><span style={{color:"blue"}}>&gt;</span><br/><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>h1</span><span style={{color:"blue"}}>&gt;</span>This is a Heading<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/h1</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>p</span><span style={{color:"blue"}}>&gt;</span>This is a paragraph.<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/p</span><span style={{color:"blue"}}>&gt;</span><br/><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/body</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/html</span><span style={{color:"blue"}}>&gt;</span>
</div>
                    </div>
                    <a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"class="editor_btn" target='_blank'>Try it Yourself</a>
                </div>

            </div>
        </section>

        <section class="section_css">
            <div class="section_left">
                <h1>CSS</h1>
                <p>The language for styling web pagess</p>
                <a href="/cssHome" class="editor_btn">Learn CSS</a>
                <a href="/cssHome" class="bg-black">CSS Reference</a>
                {/* <a href="" class="bg-pink">Get Certified</a> */}
            </div>
            <div class="section_right">
                <div class="editor_container">
                    <h1>CSS Example</h1>
                    <div class="editor" id="cssCode">
                    <div class="notranslate htmlHigh">
                        <span style={{color:"brown"}}>body &#123; <br /><span style={{color:"red"}}>background-color :</span></span><span style={{color:"blue"}}> lightblue;</span><br/>
                        <span style={{color:"brown"}}> &#x7D;</span><br/>
                        <span style={{color:"brown"}}>h1 &#123; <br /><span style={{color:"red"}}>color :</span></span><span style={{color:"blue"}}> white;</span><br/><span style={{color:"red"}}>text-align: </span><span style={{color:"blue"}}> center;</span><br />
                        <span style={{color:"brown"}}> &#x7D;</span><br/>
                        <span style={{color:"brown"}}>p &#123; <br /><span style={{color:"red"}}>font-family</span></span><span style={{color:"blue"}}> verdana;</span><br/><span style={{color:"brown"}}> &#x7D;</span><br/>
                    </div>
                    </div>
                    <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_default"class="editor_btn" target='_blank'>Try it Yourself</a>
                </div>

            </div>
        </section>

        <section class="section_javascript">
            <div class="section_left">
                <h1>JavaScript</h1>
                <p>The language for programming web pages</p>
                <a href="/jsHome" class="editor_btn">Learn JavaScript</a>
                <a href="/jsHome" class="bg-blue">JavaScript Reference</a>
                {/* <a href="" class="bg-pink">Get Certified</a> */}
            </div>
            <div class="section_right">
                <div class="editor_container">
                    <h1 class="text-white">JavaScript Example</h1>
                    <div class="editor" id="javascriptCode">
                    <div class="notranslate htmlHigh">
              <span style={{ color: "blue" }}>
                &lt; <span style={{ color: "brown" }}>button </span><span style={{ color: "red" }}>onclick</span ><span style={{ color: "blue" }}>="myFunction&#40;&#41;&gt;"</span><span style={{color:"black"}}>Click Me!</span> <br />
              </span>
              <span style={{ color: "blue" }}>&lt; </span><span style={{ color: "brown" }}>/button</span><span style={{ color: "blue" }}>&gt; </span>
              <br />
              <span style={{ color: "blue" }}>&lt; </span><span style={{ color: "brown" }}>script</span><span style={{ color: "blue" }}>&gt; </span>
              <br />
              <span style={{ color: "blue" }}>function</span ><span style={{ color: "black" }}> myFunction&#40;&#41; &#123;</span><br />
              <span style={{ color: "blue" }}>let</span><span style={{ color: "black" }}> x = document.getElementById&#40; <span style={{ color: "red" }}>"demo"</span >
              &#41;;</span><br />
              <span style={{ color: "black" }}>x.style.fontsize = </span><span style={{color:"red"}}>"25px"</span><br />
              <span style={{ color: "black" }}>x.style.color = </span><span style={{color:"red"}}>"red"</span><br />
               <span>&#125;</span><br />
               <span style={{ color: "blue" }}>&lt; </span><span style={{ color: "brown" }}>/script</span><span style={{ color: "blue" }}>&gt; </span>
              <br />
            </div>
                    </div>
                    <a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_whereto"class="editor_btn" target='_blank'>Try it Yourself</a>
                </div>

            </div>
        </section>

        <section class="section_python">
            <div class="section_left">
                <h1>Python</h1>
                <p>A popular programming language</p>
                <a href="/reactHome" class="editor_btn">Learn Python</a>
                <a href="/reactHome" class="bg-black">Python Reference</a>
                {/* <a href="" class="bg-pink">Get Certified</a> */}
            </div>
            <div class="section_right">
                <div class="editor_container">
                    <h1>Python Example</h1>
                    <div class="editor" id="pythonCode">
                    <div class="notranslate htmlHigh">
                        <span style={{ color: "blue" }}>
                            if <span style={{ color: "red" }}>5</span>
                            <span style={{ color: "black" }}>&gt;</span>
                            <span style={{ color: "red" }}>2</span>:
                        </span>
                        <br />
                        print&#40;
                        <span style={{ color: "red" }}>
                            "Five is greater than two!"
                        </span>{" "}
                        &#41;
                        <br />
                    </div>
                    </div>
                    <a href="https://www.w3schools.com/python/trypython.asp?filename=demo_indentation"class="editor_btn" target='_blank'>Try it Yourself</a>
                </div>

            </div>
        </section>

        <section class="section_sql">
            <div class="section_left">
                <h1>SQL</h1>
                <p>A language for accessing databases</p>
                <a href="/gitHome" class="editor_btn">Learn SQL</a>
                <a href="/gitHome" class="bg-black">SQL Reference</a>
                {/* <a href="" class="bg-pink">Get Certified</a> */}
            </div>
            <div class="section_right">
                <div class="editor_container">
                    <h1>SQL Example</h1>
                    <div class="editor" id="sqlCode">
                        <div class="notranslate htmlHigh">
                            <span style={{ color: "blue" }}>
                                Select <span style={{ color: "black" }}>*</span> FROM{" "}
                            </span>
                            Customers
                            <br />
                            <span style={{ color: "blue" }}>
                                WHERE <span style={{ color: "black" }}>Country =</span>{" "}
                            </span>
                            <span style={{ color: "red" }}>'Mexico'</span>
                            <br />
                        </div>
                    </div>
                    <a href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_distinct3"class="editor_btn" target='_blank'>Try it Yourself</a>
                </div>

            </div>
        </section>
    </div>
  )
}

export default LearnToCode;
