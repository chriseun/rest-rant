const React = require('react')
const Def = require('./default')


function error404 () {
  return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <div>
               <img src="./images/404.jpg" alt="error 404 image" />
            </div>
            <div>
              Photo by <a href="https://unsplash.com/@niuhang?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">hang niu</a> on <a href="https://unsplash.com/images/animals/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </main>
    </Def>
  )
}


module.exports = error404
