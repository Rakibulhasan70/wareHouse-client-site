import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='container mt-4'>
            <div className="row">
                <div className='col col-lg-12 col-12 qusPart'>
                    <h5>Qus:1
                        <p>what is the different of JS and NodeJs?</p>
                    </h5>
                    <p>Ans:
                        <br />
                        1.
                        Javascript is a programming language and NodeJs is a js runtime environment.
                        <br />
                        2.
                        Javascript only run in the browser and NodeJs heps run Javascript code outsite the browser.
                        <br />
                        3.
                        Javascript use for fornend web development and NodeJs use server or backend development.
                        <br />
                        4.
                        Javascript running any engine like firefox,safari,chrome
                        and NodeJs run in  v8 engine which mainly use google chrome.
                    </p>
                </div>
                <div className='col col-lg-12 col-12 qusPart mt-3'>
                    <h5>Qus:2
                        <p>what is the different of sql  and non-sql?</p>
                    </h5>
                    <p>Ans.
                        <br />
                        1.
                        SQL is relational Database management system and Non-SQL is non-relational Database management system
                        <br />
                        2.
                        SQL have static schema and Non-SQL  have dynamic schema.
                        <br />
                        3.
                        SQL databases are not suited for hierarchical data storage and Non-SQL databases are not suited for hierarchical data storage.
                    </p>
                </div>
                <div className='col col-lg-12 col-12 qusPart mt-3 mb-4'>
                    <h5>Qus:2
                        <p>When should you use nodejs and when should you use mongodb</p>
                    </h5>
                    <p>Ans.
                        <br />
                        Nodejs is used for backend or server development site.Mongdodb also use with nodejs.Becasue of mongodb is more suitable the others database.Its a Non-SQL database.Non-SQL database is more felxible than sql database.MongoDB is an open source database management system (DBMS) that uses a document-oriented database model which supports various forms of data.When you need to flexibale and nor structered database you must be using nodejs and mongodb.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;